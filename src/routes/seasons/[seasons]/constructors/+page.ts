import { API } from '../../../../utils/API';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const { seasons } = params;

	const year = isNaN(parseInt(seasons)) ? new Date().getFullYear() : parseInt(seasons);

	const constructors: Team[] = await API.getConstructorStandings(year, fetch);

	return constructors;
};
