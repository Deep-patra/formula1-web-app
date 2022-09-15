/* eslint-disable @typescript-eslint/no-unused-vars */
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onoutClick?: () => void;
	}
}

type Round = {
	season: string;
	round: string;
	url: string;
	raceName: string;
	Circuit: {
		circuitId: string;
		url: string;
		circuitName: string;
		Location: {
			lat: string;
			lon: string;
			locality: string;
			country: string;
		};
	};
	date: string;
	time: string;
	FirstPractice: {
		date: string;
		time: string;
	};
	SecondPractice: {
		date: string;
		time: string;
	};
	ThirdPractice: {
		date: string;
		time: string;
	}?;
	Qualifying: {
		date: string;
		time: string;
	};
	Sprint: {
		date: string;
		time: string;
	};
};

type Drivers = {
	position: string;
	positionText: string;
	points: string;
	wins: string;
	Driver: {
		driverId: string;
		permanentNumber: string;
		code: string;
		url: string;
		givenName: string;
		familyName: string;
		dateOfBirth: string;
		nationality: string;
	};
	Constructors: {
		constuctorId: string;
		url: string;
		name: string;
		nationality: string;
	}[];
};

type Team = {
	position: string;
	positionText: string;
	points: string;
	wins: string;
	Constructor: {
		constructorId: string;
		url: string;
		name: string;
		nationality: string;
	};
};

type Result = {
	number: string;
	position: string;
	positionText: string;
	points: string;
	Driver: {
		driverId: string;
		permanentNumber: string;
		code: string;
		url: string;
		givenName: string;
		familyName: string;
		dateOfBirth: string;
		nationality: string;
	};
	Constructor: {
		constructorId: string;
		url: string;
		name: string;
		nationality: string;
	};
	grid: string;
	laps: string;
	status: string;
	Time: {
		millis: string;
		time: string;
	};
	FastestLap: {
		rank: string;
		lap: string;
		Time: {
			time: string;
		};
		AverageSpeed: {
			units: string;
			speed: string;
		};
	};
};

type Race = {
	season: string;
	round: string;
	url: string;
	raceName: string;
	Circuit: {
		circuitId: string;
		url: string;
		circuitName: string;
		Location: {
			lat: string;
			lon: string;
			locality: string;
			country: string;
		};
	};
	date: string;
	time: string;
	Results: Result[];
};

type Qualifying = {
	season: string;
	round: string;
	url: string;
	raceName: string;
	Circuit: {
		circuitId: string;
		url: string;
		circuitName: string;
		Location: {
			lat: string;
			lon: string;
			locality: string;
			country: string;
		};
	};
	date: string;
	time: string;
	QualifyingResults: {
		number: string;
		position: string;
		Driver: {
			driverId: string;
			permanentNumber: string;
			code: string;
			url: string;
			givenName: string;
			familyName: string;
			dateOfBirth: string;
			nationality: string;
		};
		Constructor: {
			constructorId: string;
			url: string;
			name: string;
			nationality: string;
		};
		Q1: string;
		Q2: string;
		Q3: string;
	}[];
};

type RaceLaps = {
	season: string;
	round: string;
	url: string;
	raceName: string;
	Circuit: {
		circuitId: string;
		url: string;
		circuitName: string;
		Location: {
			lat: string;
			lon: string;
			locality: string;
			country: string;
		};
	};
	date: string;
	time: string;
	Laps: {
		number: string;
		Timings: {
			driverId: string;
			position: string;
			time: string;
		}[];
	}[];
};
