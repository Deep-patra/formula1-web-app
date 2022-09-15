import type { PageLoad } from './$types';
import { API } from '../../../utils/API';

export const load: PageLoad = async ({ url, fetch }) => {
	const { searchParams } = url;
	const round = parseInt(searchParams.get('round') || '1');
	const season = parseInt(searchParams.get('season') || '2022');

	const qualifying = await API.getRoundQualyResults(season, round, fetch);

	return qualifying;
};
