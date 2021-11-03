import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { CURRENT_USER_QUERY } from "../schemas";
import axios from "axios";
import { CurrentUserQuery } from "../types";
import { Button, Alert, AlertIcon, Center } from "@chakra-ui/react";
// @ts-ignore
import LoginGithub from "react-login-github";

const Login = () => {
	const history = useHistory();

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			history.push('/')
		}
		// eslint-disable-next-line
	}, [])

	const [viewer, { loading, error, data }] = useLazyQuery<CurrentUserQuery>(CURRENT_USER_QUERY);

	if (data?.viewer) {
		localStorage.setItem("user", JSON.stringify(data.viewer));
		history.push("/");
	}

	const getAccessToken = async (code: string) => {
		try {
			const response = axios.post(`${process.env.REACT_APP_AUTH_BACKEND}`, { code });
			const { data } = await response;
			localStorage.setItem("token", data.data.access_token);
			viewer();
		} catch (error) {
			console.log(error);
		}
	};

	// @ts-ignore
	const onSuccess = (response: { code: string }) => response && response.code && getAccessToken(response.code);
	// @ts-ignore
	const onFailure = (response) => console.error(response);

	return (
		<>
			<Center h={600}>
				<LoginGithub
					clientId={process.env.REACT_APP_GITHUB_APP_CLIENT_ID}
					redirectUri={process.env.REACT_APP_REDIRECT_URI}
					onSuccess={onSuccess}
					onFailure={onFailure}
					buttonText={
						<Button data-testid='button' variant='solid' color='#FFFFFF' bg='#5C5C5C' isLoading={loading}>
							Login to Github
						</Button>
					}
				/>
			</Center>

			{error && (
				<Alert status='error' data-testid='error'>
					<AlertIcon />
					{error.message}
				</Alert>
			)}
		</>
	);
};

export default Login;
