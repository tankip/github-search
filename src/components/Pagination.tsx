import React from "react";
import { Flex, Spacer, Circle } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

type PaginationProps = {
	hasPreviousPage: boolean;
	hasNextPage: boolean;
	page: number;
	setPage: (page: number) => void;
	getData: (variables: QueryVariables) => void;
	searchText: string;
	startCursor: string;
	endCursor: string;
};

type QueryVariables = {
	variables: {
		first: number;
		after?: string;
		query: string;
	};
};
const Pagination: React.FC<PaginationProps> = ({ hasPreviousPage, hasNextPage, page, setPage, getData, searchText, startCursor, endCursor }) => {
	return (
		<Flex my='50px'>
			{hasPreviousPage && (
				<Button
					variant='outline'
					onClick={() => {
						setPage(page - 1);
						getData({
							variables: {
								first: 10,
								query: searchText,
								after: startCursor,
							},
						});
					}}>
					Previous
				</Button>
			)}
			<Spacer />

			<Circle size='40px' bg='gray.100'>
				{page}
			</Circle>

			<Spacer />
			{hasNextPage && (
				<Button
					variant='outline'
					onClick={() => {
						setPage(page + 1);
						getData({
							variables: {
								first: 10,
								query: searchText,
								after: endCursor,
							},
						});
					}}>
					Next
				</Button>
			)}
		</Flex>
	);
};

export default Pagination;
