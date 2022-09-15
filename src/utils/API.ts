type Fetch = (info: RequestInfo, init?: RequestInit | undefined) => Promise<Response>;

class API {
	static API_URL = 'https://ergast.com/api/f1';

	static async getRounds(season: number, fetch: Fetch): Promise<Round[]> {
		let year = new Date().getFullYear();

		if (season > 1950 && season <= new Date().getFullYear()) year = season;

		const response = await fetch(`${this.API_URL}/${year}.json`);

		// throw error if response status is not ok
		if (response.status !== 200) throw new Error('Response is not ok');

		const data = await response.json();

		const { MRData } = data;
		const { RaceTable } = MRData;
		const { Races } = RaceTable;

		const races: Round[] = Races;

		return races;
	}

	static async getDriverStandings(season: number, fetch: Fetch): Promise<Drivers[]> {
		let year = new Date().getFullYear();

		if (season > 1950 && season <= new Date().getFullYear()) year = season;

		const response = await fetch(`${this.API_URL}/${year}/driverStandings.json`);

		if (response.status !== 200) throw new Error('Response is not ok');

		const data = await response.json();

		const { MRData } = data;
		const { StandingsTable } = MRData;
		const { StandingsLists } = StandingsTable;
		const { DriverStandings } = StandingsLists[0];

		const drivers: Drivers[] = DriverStandings;

		return drivers;
	}

	static async getConstructorStandings(season: number, fetch: Fetch): Promise<Team[]> {
		let year = new Date().getFullYear();

		if (season > 1950 && season <= new Date().getFullYear()) year = season;

		const response = await fetch(`${this.API_URL}/${year}/constructorStandings.json`);

		if (response.status !== 200) throw new Error('response is not ok');

		const data = await response.json();

		const { MRData } = data;
		const { StandingsTable } = MRData;
		const { StandingsLists } = StandingsTable;
		const { ConstructorStandings } = StandingsLists[0];

		const constructor: Team[] = ConstructorStandings;

		return constructor;
	}

	static async getRoundResults(season: number, round: number, fetch: Fetch): Promise<Race> {
		let year = new Date().getFullYear();

		if (season > 1950 && season <= new Date().getFullYear()) year = season;

		const response = await fetch(`${this.API_URL}/${year}/${round}/results.json`);

		if (response.status !== 200) throw new Error('response status is not ok');

		const data = await response.json();

		const { MRData } = data;
		const { RaceTable } = MRData;
		const { Races } = RaceTable;

		const results: Race = Races[0];

		return results;
	}

	static async getRoundQualyResults(
		season: number,
		round: number,
		fetch: Fetch
	): Promise<Qualifying> {
		let year = new Date().getFullYear();

		if (season > 1950 && season <= new Date().getFullYear()) year = season;

		const response = await fetch(`${this.API_URL}/${year}/${round}/qualifying.json`);

		if (response.status !== 200) throw new Error('Response is not ok');

		const data = await response.json();

		const { MRData } = data;
		const { RaceTable } = MRData;
		const { Races } = RaceTable;

		const results: Qualifying = Races[0];

		return results;
	}

	static async getDriverLaps(
		season: number,
		round: number,
		driver: string,
		fetch: Fetch = window.fetch
	) {
		let year = new Date().getFullYear();

		if (season > 1950 && season <= new Date().getFullYear()) year = season;

		const response = await fetch(
			`${this.API_URL}/${year}/${round}/drivers/${driver}/laps.json?limit=100`
		);

		if (response.status !== 200) throw new Error('response status is not ok');

		const data = await response.json();
		const { MRData } = data;
		const { RaceTable } = MRData;
		const { Races } = RaceTable;

		const race: RaceLaps = Races[0];
		const { Laps } = race;

		return Laps;
	}
}

export { API };
