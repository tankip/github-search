import React from "react";
import { Wrap, Box, Text } from "@chakra-ui/react";
import { RepositorySearch, Repository } from "../types";
import RepositoryItem from "./RepositoryItem";

type RepositoriesProps = {
	repositories: RepositorySearch;
};
const Repositories: React.FC<RepositoriesProps> = ({ repositories }) => {
	return (
		<Box data-testid='repositories'>
			<Text fontSize='20px' fontWeight='bold' fontStyle='normal' lineHeight='30px' mb='25px' data-testid='repoCount'>
				{repositories.repositoryCount} repository results
			</Text>
			<Wrap spacing='20px'>
				{repositories.repositoryCount > 0 ? (
					repositories.nodes.map((repository: Repository, index) => <RepositoryItem key={index} repository={repository} />)
				) : (
					<Text>No repository found</Text>
				)}
			</Wrap>
		</Box>
	);
};

export default Repositories;
