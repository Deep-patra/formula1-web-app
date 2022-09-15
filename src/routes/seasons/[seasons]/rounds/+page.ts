import { API } from '../../../../utils/API';
import type { PageLoad } from './$types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const load: PageLoad = async ({ params, fetch }): Promise<Round[]> => {
	const { seasons } = params;

	const year = isNaN(parseInt(seasons)) ? new Date().getFullYear() : parseInt(seasons);

	const races: Round[] = await API.getRounds(year, fetch);

	return races;
};
