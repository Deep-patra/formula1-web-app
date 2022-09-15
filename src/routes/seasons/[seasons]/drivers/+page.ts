import { error } from '@sveltejs/kit';
import { API } from '../../../../utils/API';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	try {
		const { seasons } = params;

		const year: number = isNaN(parseInt(seasons)) ? new Date().getFullYear() : parseInt(seasons);

		const drivers: Drivers[] = await API.getDriverStandings(year, fetch);

		return drivers;
	} catch (e) {
		console.log(e);
		throw error(400, 'Cannot fetch the drivers');
	}
};
