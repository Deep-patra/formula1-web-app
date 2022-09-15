import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { API } from '../../utils/API';

export const load: LayoutLoad = async ({ url, fetch }) => {
	const round = url.searchParams.get('round') || '';
	const season = url.searchParams.get('season') || '';

	const _season: number = isNaN(parseInt(season)) ? new Date().getFullYear() : parseInt(season);
	const _round: number = isNaN(parseInt(round)) ? 1 : parseInt(round);

	const results: Race = await API.getRoundResults(_season, _round, fetch).catch(() => {
		throw error(400, 'Something happened 😫');
	});

	return results;
};
