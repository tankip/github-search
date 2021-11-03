export type Person = {
	name: string;
	height: string;
	mass: string;
	gender: string;
	homeworld: string;
};

export type SearchResult = {
	count: number;
	results: [Person];
};

export type PeopleResult = {
	count: number;
	next: string;
	previous: string;
	results: [Person];
};

export type PeopleQuery = {
	people: PeopleResult;
};

export type SearchQuery = {
	search: SearchResult;
};

export type LocationState = {
	person: Person;
};

export type CurrentUser = {
	name: string;
	avatarUrl: string;
};

export type CurrentUserQuery = {
	viewer: CurrentUser;
};

export type LicenseInfo = {
	name: string;
};

export type PrimaryLanguage = {
	name: string;
};

export type PageInfo = {
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	endCursor: string;
	startCursor: string;
};

export type Repository = {
	nameWithOwner: string;
	description: string;
	updatedAt: string;
	stargazerCount: number;
	licenseInfo: LicenseInfo;
	primaryLanguage: PrimaryLanguage;
};

export type RepositorySearch = {
	repositoryCount: number;
	nodes: Repository[];
	pageInfo: PageInfo;
};

export type RepositoriesQuery = {
	search: RepositorySearch;
};

export type User = {
	name: string;
	login: string;
	bio: string;
};

export type UserSearch = {
	userCount: number;
	nodes: User[];
	pageInfo: PageInfo;
};

export type UsersQuery = {
	search: UserSearch;
};

export type SearchResults = {
	searchText: string;
};
