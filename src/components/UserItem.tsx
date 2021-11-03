import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { User } from "../types";

type UserProp = {
	user: User;
};
const UserItem: React.FC<UserProp> = ({ user }) => {
	return (
		<Box w='100%' bg='white' p='20px' borderRadius='3px' data-testid="user">
			<Flex h='16px' mb='5px'>
				<Text fontSize='16px' fontWeight='bold' mr='10px' data-testid="name">
					{user.name}
				</Text>
				<Text color='#91929E' fontSize='14px' fontWeight='normal'>
					{user.login}
				</Text>
			</Flex>
			<Text mt='5px' fontSize='12px' fontWeight='normal' color='#91929E'>
				{user.bio}
			</Text>
		</Box>
	);
};

export default UserItem;
