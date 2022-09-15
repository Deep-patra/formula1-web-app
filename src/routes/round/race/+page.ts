import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const data: Race = await parent();

	return data;
};
