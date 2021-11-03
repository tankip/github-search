import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
	Flex,
	Spacer,
	Box,
	Center,
	Image,
	Button,
	Avatar,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { CurrentUser } from "../types";
import Search from "./Search";

type HeaderProps = {
	search: boolean;
	logo: boolean;
};
const Header: React.FC<HeaderProps> = ({ search, logo }) => {
	const history = useHistory();

	const [isOpen, setIsOpen] = React.useState(false);
	const open = () => setIsOpen(!isOpen);
	const close = () => setIsOpen(false);

	const [user, setUser] = React.useState<CurrentUser | null>(null);
	useEffect(() => {
		const getUser = localStorage.getItem("user");
		if (getUser) {
			setUser(JSON.parse(getUser));
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("user");
		setUser(null);
		history.push("/login");
	};

	return (
		<Flex mt={2} data-testid='header' justify='space-between' w='100%' px='130px' shadow='md' h='80px'>
			<Box>
				{logo && (
					<Center>
						<Box data-testid='logo' cursor='pointer' w='173px' h='70px' onClick={() => history.push("/")}>
							<Image src='logo.png' alt='Github Search Logo' />
						</Box>
					</Center>
				)}
			</Box>
			{search && <Search />}
			<Flex>
				<Popover returnFocusOnClose={false} onOpen={open} isOpen={isOpen} onClose={close} placement='bottom-end'>
					<PopoverTrigger>
						<Center>
							<Button as={Box} variant='ghost' _hover={{ bg: "#F7F7F8" }} onClick={open} cursor='pointer'>
								<Avatar w='50px' h='50px' name={user?.name} src={user?.avatarUrl} />
								<Spacer ml='10px' />
								<Text fontSize='16px' fontWeight='normal' color='#1C1C1C'>
									{user?.name}
								</Text>
								<Spacer ml='10px' />
								<ChevronDownIcon />
							</Button>
						</Center>
					</PopoverTrigger>
					<PopoverContent w='200px' h='63px'>
						<PopoverArrow />
						<PopoverBody>
							<Center>
								<Text as='button' mt='10px' fontSize='16px' color='#FF1733' onClick={handleLogout}>
									Logout
								</Text>
							</Center>
						</PopoverBody>
					</PopoverContent>
				</Popover>
			</Flex>
		</Flex>
	);
};

export default Header;
