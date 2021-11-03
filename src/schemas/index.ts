import { gql } from "@apollo/client";

export const CURRENT_USER_QUERY = gql`
	query GetCurrentUser {
		viewer {
			name
			avatarUrl
		}
	}
`;

export const PEOPLE_QUERY = gql`
	query GetPeople($page: String!) {
		people(page: $page) {
			count
			next
			previous
			results {
				name
				height
				mass
				gender
				homeworld
			}
		}
	}
`;

export const SEARCH_QUERY = gql`
	query Search($name: String!) {
		search(name: $name) {
			count
			results {
				name
				height
				mass
				gender
				homeworld
			}
		}
	}
`;
export const REPOSITORIES_QUERY = gql`
	query GetRepositories($query: String!, $first: Int!, $after: String) {
		search(query: $query, type: REPOSITORY, first: $first, after: $after) {
			repositoryCount
			nodes {
				...repositories
			}
			pageInfo {
                hasPreviousPage
				hasNextPage
                startCursor
				endCursor
			}
		}
	}
	fragment repositories on Repository {
		nameWithOwner
		description
		licenseInfo {
			name
		}
		primaryLanguage {
			name
		}
		stargazerCount
		updatedAt
	}
`;

export const USERS_QUERY = gql`
	query GetUsers($query: String!, $first: Int!, $after: String) {
		search(query: $query, type: USER, first: $first, after: $after) {
			userCount
			nodes {
				...users
			}
			pageInfo {
                hasPreviousPage
				hasNextPage
                startCursor
				endCursor
			}
		}
	}
	fragment users on User {
		name
		login
		bio
	}
`;
