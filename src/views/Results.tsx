import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { SearchResults, RepositoriesQuery, UsersQuery } from "../types";
import { REPOSITORIES_QUERY, USERS_QUERY } from "../schemas";
import { Flex, Box, Tag, Text, Spacer, Alert, AlertIcon } from "@chakra-ui/react";
import Repositories from "../components/Repositories";
import Users from "../components/Users";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const Results = () => {
	const history = useHistory();
	const { location: { state } } = history;
	const { searchText } = state as SearchResults;
	const [usersPage, setUsersPage] = React.useState<number>(1);
	const [resposPage, setReposPage] = React.useState<number>(1);
	const [searchRepositories, { loading, error, data }] = useLazyQuery<RepositoriesQuery>(REPOSITORIES_QUERY);

	const [searchUsers, { loading: loadingUsers, error: errorUsers, data: dataUsers }] = useLazyQuery<UsersQuery>(USERS_QUERY);

	const handleSearch = async () => {
		searchRepositories({
			variables: {
				first: 10,
				query: searchText,
			},
		});
		searchUsers({
			variables: {
				first: 10,
				query: searchText,
			},
		});
	};

	useEffect(() => {
		if (searchText) {
			handleSearch();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchText]);

	const [selected, setSelected] = React.useState<string>("repos");

	return (
		<Box data-testid="results">
			<Text data-testid="searchText">{searchText}</Text>
			<Header search={true} logo={true}/>
			<Box my='30px'>
				{loading && loadingUsers && <Loading/>}
				{error && (
					<Alert status='error' data-testid='error'>
						<AlertIcon />
						{error.message}
					</Alert>
				)}
				{errorUsers && (
					<Alert status='error' data-testid='error'>
						<AlertIcon />
						{errorUsers.message}
					</Alert>
				)}
			</Box>
			<Flex mx='230px' mt='30px'>
				<Box w='280px' h='140px' mr='30px' bg='white'>
					<Flex direction='column' p='30px'>
						<Flex
							cursor='pointer'
							w='220px'
							h='40px'
							justify='space-between'
							align='center'
							bg={selected === "repos" ? "#F7F7F8" : "white"}
							onClick={() => setSelected("repos")}>
							<Text size='14px' py='11px' px='10px'>
								Repositories
							</Text>
							<Spacer />
							<Tag borderRadius='full' px='10px' py='10px' h='20px' bg='#DCDCDF' mr='10px'>
								{data ? data.search.repositoryCount : 0}
							</Tag>
						</Flex>
						<Flex
							cursor='pointer'
							w='220px'
							h='40px'
							justify='space-between'
							align='center'
							bg={selected === "users" ? "#F7F7F8" : "white"}
							onClick={() => setSelected("users")}>
							<Text size='14px' py='11px' px='10px'>
								Users
							</Text>
							<Spacer />
							<Tag borderRadius='full' px='10px' py='10px' h='20px' bg='#DCDCDF' mr='10px'>
								{dataUsers ? dataUsers?.search.userCount : 0}
							</Tag>
						</Flex>
					</Flex>
				</Box>
				<Box w='100%' h='100%'>
					{selected === "repos" && data && (
						<>
							<Repositories repositories={data?.search}/>
							<Pagination
								page={resposPage}
								setPage={setReposPage}
								getData={searchRepositories}
								startCursor={data?.search.pageInfo.startCursor}
								endCursor={data?.search.pageInfo.endCursor}
								searchText={searchText}
								hasNextPage={data?.search.pageInfo.hasNextPage}
								hasPreviousPage={data?.search.pageInfo.hasPreviousPage}
							/>
						</>
					)}
					{selected === "users" && dataUsers && (
						<>
							<Users users={dataUsers?.search} />
							<Pagination
								page={usersPage}
								setPage={setUsersPage}
								getData={searchUsers}
								startCursor={dataUsers?.search.pageInfo.startCursor}
								endCursor={dataUsers?.search.pageInfo.endCursor}
								searchText={searchText}
								hasNextPage={dataUsers?.search.pageInfo.hasNextPage}
								hasPreviousPage={dataUsers?.search.pageInfo.hasPreviousPage}
							/>
						</>
					)}
				</Box>
			</Flex>
		</Box>
	);
};

export default Results;
