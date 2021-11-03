import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";

import Home from "./views/Home";
import Login from "./views/Login";
import Results from "./views/Results";

const App = () => {
	return (
		<ChakraProvider>
			<Router>
				<Box bg='#F7F7F8' h='900px'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/login'>
							<Login />
						</Route>
						<Route exact path='/results'>
							<Results />
						</Route>
					</Switch>
				</Box>
			</Router>
		</ChakraProvider>
	);
};

export default App;
