import { UserSearch } from "./../../types/index";
import { GraphQLError } from "graphql";
import { PEOPLE_QUERY, SEARCH_QUERY, USERS_QUERY, REPOSITORIES_QUERY } from "../../schemas";
import { Person, RepositorySearch } from "../../types";

export const peopleSuccessMock = () => {
	return {
		request: {
			query: PEOPLE_QUERY,
			variables: {
				page: "1",
			},
		},
		result: {
			data: {
				people: {
					count: 20,
					next: "http://swapi.dev/api/people/?page=2",
					previous: null,
					results: [
						{
							name: "Luke Skywalker",
							height: "172",
							mass: "77",
							gender: "male",
							homeworld: "http://swapi.dev/api/planets/1/",
						},
						{
							name: "C-3PO",
							height: "167",
							mass: "75",
							gender: "n/a",
							homeworld: "http://swapi.dev/api/planets/1/",
						},
					],
				},
			},
		},
	};
};

export const usersSuccessMock = () => {
	return {
		request: {
			query: USERS_QUERY,
			variables: {
				first: 10,
				query: "tankip",
			},
		},
		result: {
			data: {
				search: {
					userCount: 10,
					nodes: [
						{
							name: "Rodgers Tanui",
							login: "tankip",
							bio: "Software Engineer skilled in HTML, CSS, JavaScript, TypeScript, Angular, Vue Js, React Js, Node Js, GraphQL, MongoDB and MySQL. \r\n",
							__typename: "User",
						},
						{
							name: null,
							login: "Tankipo",
							bio: null,
							__typename: "User",
						},
						{
							name: null,
							login: "tankipper",
							bio: null,
							__typename: "User",
						},
						{
							name: null,
							login: "Tankipo15",
							bio: null,
							__typename: "User",
						},
						{
							name: null,
							login: "tankipark01",
							bio: null,
							__typename: "User",
						},
						{
							name: null,
							login: "tankiprofile",
							bio: null,
							__typename: "User",
						},
						{
							__typename: "Organization",
						},
						{
							name: null,
							login: "TankiPankiSanki",
							bio: null,
							__typename: "User",
						},
						{
							name: null,
							login: "Tankipro500",
							bio: null,
							__typename: "User",
						},
						{
							name: null,
							login: "tankipeti",
							bio: null,
							__typename: "User",
						},
					],
					pageInfo: {
						hasPreviousPage: false,
						hasNextPage: false,
						startCursor: "Y3Vyc29yOjE=",
						endCursor: "Y3Vyc29yOjEw",
						__typename: "PageInfo",
					},
					__typename: "SearchResultItemConnection",
				},
			},
		},
	};
};

export const reposSuccessMock = () => {
	return {
		request: {
			query: REPOSITORIES_QUERY,
			variables: {
				first: 10,
				query: "tankip",
			},
		},
		result: {
			data: {
				search: {
					repositoryCount: 6,
					nodes: [
						{
							nameWithOwner: "leny/tankipas",
							description: "Compute approximate development time spent on a project, using logs from version control system.",
							licenseInfo: {
								name: "MIT License",
								__typename: "License",
							},
							primaryLanguage: {
								name: "CoffeeScript",
								__typename: "Language",
							},
							stargazerCount: 13,
							updatedAt: "2019-10-22T18:51:06Z",
							__typename: "Repository",
						},
						{
							nameWithOwner: "sanekb/tankiproxy",
							description: "Proxy-сервер для устранения утечки памяти Танках Онлайн",
							licenseInfo: {
								name: "MIT License",
								__typename: "License",
							},
							primaryLanguage: {
								name: "CoffeeScript",
							},
							stargazerCount: 3,
							updatedAt: "2020-09-15T20:09:22Z",
							__typename: "Repository",
						},
						{
							nameWithOwner: "tankip/tankip",
							description: null,
							licenseInfo: {
								name: "MIT License",
							},
							primaryLanguage: {
								name: "CoffeeScript",
							},
							stargazerCount: 0,
							updatedAt: "2020-10-04T10:23:07Z",
							__typename: "Repository",
						},
						{
							nameWithOwner: "Dentank123/Tankipoop",
							description: null,
							licenseInfo: {
								name: "MIT License",
							},
							primaryLanguage: {
								name: "CoffeeScript",
							},
							stargazerCount: 0,
							updatedAt: "2017-08-30T09:42:33Z",
							__typename: "Repository",
						},
						{
							nameWithOwner: "tankip/tankip-app",
							description: null,
							licenseInfo: {
								name: "MIT License",
							},
							primaryLanguage: {
								name: "TypeScript",
								__typename: "Language",
							},
							stargazerCount: 0,
							updatedAt: "2020-10-04T10:22:30Z",
							__typename: "Repository",
						},
						{
							nameWithOwner: "leny/grunt-tankipas",
							description: "Compute approximate development time spent on a project, using logs from version control system.",
							licenseInfo: {
								name: "MIT License",
								__typename: "License",
							},
							primaryLanguage: {
								name: "CoffeeScript",
								__typename: "Language",
							},
							stargazerCount: 0,
							updatedAt: "2019-10-22T18:50:56Z",
							__typename: "Repository",
						},
					],
					pageInfo: {
						hasPreviousPage: false,
						hasNextPage: false,
						startCursor: "Y3Vyc29yOjE=",
						endCursor: "Y3Vyc29yOjY=",
						__typename: "PageInfo",
					},
					__typename: "SearchResultItemConnection",
				},
			},
		},
	};
};

export const searchErrorMock = () => {
	return {
		request: {
			query: REPOSITORIES_QUERY,
			variables: {
				first: 10,
				query: null,
			},
		},
		result: {
			errors: [new GraphQLError("Variable $query of type String! was provided invalid value")],
		},
	};
};

export const peopleErrorMock = () => {
	return {
		request: {
			query: PEOPLE_QUERY,
			variables: {
				page: 1,
			},
		},
		result: {
			errors: [new GraphQLError("String cannot represent a non string value: 1")],
		},
	};
};

export const searchSuccessMock = () => {
	return {
		request: {
			query: SEARCH_QUERY,
			variables: {
				name: "Beru Whitesun lars",
			},
		},
		result: {
			data: {
				search: {
					count: 1,
					results: [
						{
							name: "Beru Whitesun lars",
							height: "165",
							mass: "75",
							gender: "male",
							homeworld: "http://swapi.dev/api/planets/1/",
							__typename: "Person",
						},
					],
					__typename: "SearchResult",
				},
				__typename: "SearchQuery",
			},
		},
	};
};

export const people: Person[] = [
	{
		name: "Luke Skywalker",
		height: "172",
		mass: "77",
		gender: "male",
		homeworld: "http://swapi.dev/api/planets/1/",
	},
	{
		name: "C-3PO",
		height: "167",
		mass: "75",
		gender: "n/a",
		homeworld: "http://swapi.dev/api/planets/1/",
	},
	{
		name: "R2-D2",
		height: "96",
		mass: "32",
		gender: "n/a",
		homeworld: "http://swapi.dev/api/planets/8/",
	},
];

export const repositories: RepositorySearch = {
	repositoryCount: 6,
	nodes: [
		{
			nameWithOwner: "leny/tankipas",
			description: "Compute approximate development time spent on a project, using logs from version control system.",
			licenseInfo: {
				name: "MIT License",
			},
			primaryLanguage: {
				name: "CoffeeScript",
			},
			stargazerCount: 13,
			updatedAt: "2019-10-22T18:51:06Z",
		},
		{
			nameWithOwner: "sanekb/tankiproxy",
			description: "Proxy-сервер для устранения утечки памяти Танках Онлайн",
			licenseInfo: {
				name: "MIT License",
			},
			primaryLanguage: {
				name: "CoffeeScript",
			},
			stargazerCount: 3,
			updatedAt: "2020-09-15T20:09:22Z",
		},
		{
			nameWithOwner: "tankip/tankip",
			description: "Compute",
			licenseInfo: {
				name: "MIT License",
			},
			primaryLanguage: {
				name: "CoffeeScript",
			},
			stargazerCount: 0,
			updatedAt: "2020-10-04T10:23:07Z",
		},
		{
			nameWithOwner: "Dentank123/Tankipoop",
			description: "Compute",
			licenseInfo: {
				name: "MIT License",
			},
			primaryLanguage: {
				name: "CoffeeScript",
			},
			stargazerCount: 0,
			updatedAt: "2017-08-30T09:42:33Z",
		},
		{
			nameWithOwner: "tankip/tankip-app",
			description: "TypeScript",
			licenseInfo: {
				name: "MIT License",
			},
			primaryLanguage: {
				name: "TypeScript",
			},
			stargazerCount: 0,
			updatedAt: "2020-10-04T10:22:30Z",
		},
		{
			nameWithOwner: "leny/grunt-tankipas",
			description: "Compute approximate development time spent on a project, using logs from version control system.",
			licenseInfo: {
				name: "MIT License",
			},
			primaryLanguage: {
				name: "CoffeeScript",
			},
			stargazerCount: 0,
			updatedAt: "2019-10-22T18:50:56Z",
		},
	],
	pageInfo: {
		hasPreviousPage: false,
		hasNextPage: false,
		startCursor: "Y3Vyc29yOjE=",
		endCursor: "Y3Vyc29yOjY=",
	},
};

export const users: UserSearch = {
	userCount: 10,
	nodes: [
		{
			name: "Rodgers Tanui",
			login: "tankip",
			bio: "Software Engineer skilled in HTML, CSS, JavaScript, TypeScript, Angular, Vue Js, React Js, Node Js, GraphQL, MongoDB and MySQL. \r\n",
		},
		{
			name: "null",
			login: "TankiPankiSanki",
			bio: "null",
		},
		{
			name: "null",
			login: "TankiPankiSanki",
			bio: "null",
		},
		{
			name: "null",
			login: "TankiPankiSanki",
			bio: "null",
		},
		{
			name: "null",
			login: "TankiPankiSanki",
			bio: "null",
		},
		{
			name: "null",
			login: "TankiPankiSanki",
			bio: "null",
		},
		{
			name: "null",
			login: "TankiPankiSanki",
			bio: "null",
		},
		{
			name: "null",
			login: "TankiPankiSanki",
			bio: "null",
		},
		{
			name: "null",
			login: "Tankipro500",
			bio: "null",
		},
		{
			name: "null",
			login: "tankipeti",
			bio: "null",
		},
	],
	pageInfo: {
		hasPreviousPage: false,
		hasNextPage: false,
		startCursor: "Y3Vyc29yOjE=",
		endCursor: "Y3Vyc29yOjEw",
	},
};
