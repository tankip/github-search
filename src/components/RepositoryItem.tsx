import React from "react";
import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import { Repository } from "../types";
import moment from "moment";

type RepositoryProp = {
	repository: Repository;
};
const RepositoryItem: React.FC<RepositoryProp> = ({ repository }) => {
	return (
		<Box w='100%' bg='white' p='20px' borderRadius='3px' data-testid="repository">
			<Text fontSize='16px' fontWeight='bold' data-testid="ownerName">
				{repository.nameWithOwner}
			</Text>
			<Text mt='5px' mb='15px' fontSize='14px' fontWeight='normal' color='#91929E'>
				{repository.description}
			</Text>
			<Flex color='#91929E' h='16px' fontSize='14px' fontWeight='normal'>
				<Center>
					<Text>{repository.stargazerCount} stars</Text>
				</Center>
				<Divider orientation='vertical' color='#91929E' mx='4px' />
				<Center>
					<Text>{repository.primaryLanguage?.name}</Text>
				</Center>
				<Divider orientation='vertical' color='#91929E' mx='4px' />
				<Center>
					<Text>{repository.licenseInfo?.name}</Text>
				</Center>
				<Divider orientation='vertical' color='#91929E' mx='4px' />
				<Center>
					<Text>Updated {moment(repository.updatedAt).fromNow()}</Text>
				</Center>
			</Flex>
		</Box>
	);
};

export default RepositoryItem;
