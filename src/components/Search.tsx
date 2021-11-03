import React from "react";
import { useHistory } from "react-router-dom";
import { Input, Box, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
	const history = useHistory();
	return (
		<Box data-testid="search" as='button' onClick={() => history.push("/")}>
			<InputGroup border='1px #C4C4C4'>
				<Input color="#91929E" disabled placeholder="Search" h='40px' w='380px' type='text' borderRadius='full' />
				<InputRightElement pointerEvents='none' my='11px' h='18px' mr='10px' children={<SearchIcon color='#5C5C5C' />} />
			</InputGroup>
		</Box>
	);
};

export default Search;
