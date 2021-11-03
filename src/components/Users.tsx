import React from "react";
import { Wrap, Box, Text } from "@chakra-ui/react";
import { UserSearch, User } from "../types";
import UserItem from "./UserItem";

type UsersProps = {
	users: UserSearch;
};
const Users: React.FC<UsersProps> = ({ users }) => {
	return (
		<Box data-testid='users'>
			<Text fontSize='20px' fontWeight='bold' fontStyle='normal' lineHeight='30px' mb='25px' data-testid='usersCount'>
				{users.userCount} users
			</Text>
			<Wrap spacing='20px'>
				{users.userCount > 0 ? (
					<>
						{users.nodes.map((user: User, index) => (
							<UserItem key={index} user={user} />
						))}
					</>
				) : (
					<Text>No user found</Text>
				)}
			</Wrap>
		</Box>
	);
};

export default Users;
