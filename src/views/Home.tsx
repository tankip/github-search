import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, Input, InputGroup, InputRightElement, VStack, Image } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Header from "../components/Header";

const Home = () => {
	const history = useHistory();

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (!user) {
			history.push('/login')
		}
		// eslint-disable-next-line
	}, [])

	const [searchText, setSearchText] = React.useState<string>("");

	const handleSearch = () => {
		if (searchText) {
			history.push({
				pathname: "/results",
				state: {
					searchText: searchText,
				},
			});
		}
	};

	return (
		<Box>
			<Header search={false} logo={false}/>
			<Box my={8}>
				<VStack spacing={4} w='100%' mb='30px'>
					<Box w='205px' h='70px' mt='190px'>
						<Image src='logo.png' alt='Keep' />
					</Box>
					<Box w='60%'>
						<InputGroup border='1px #C4C4C4' h='50px'>
							<Input
								h='50px'
								vw='580px'
								type='text'
								borderRadius='full'
								value={searchText}
								onChange={(e) => setSearchText(e.target.value)}
								isRequired
								data-testid='searchInput'
							/>
							<InputRightElement pointerEvents='none' my='16px' h='18px' mr='20px' children={<SearchIcon color='#5C5C5C' />} />
						</InputGroup>
					</Box>
					<Button mt='30px' variant='solid' w='179px' h='40px' background='#5C5C5C' color='#FFFFFF' data-testid="button" onClick={handleSearch}>
						Search Github
					</Button>
				</VStack>
			</Box>
		</Box>
	);
};

export default Home;
