import { useEffect, useState } from 'react';
import USERS, { TUser } from '@/mocks/users.mock';

const useFakeUserAPI = (username: string) => {
	const getCheckUser = (
		userNameOrMail: TUser['username'] | TUser['email'],
		password: TUser['password'],
	) => {
		const matchedUser = Object.values(USERS).find(
			(user) =>
				(user.username === userNameOrMail || user.email === userNameOrMail) &&
				user.password === password,
		);

		return new Promise((resolve, reject) => {
			if (!matchedUser) {
				// @ts-ignore
				reject(new Error('The username is invalid!', { cause: 'username' }));
			}
			if (matchedUser && matchedUser.password === password) resolve(matchedUser);
			// @ts-ignore
			else reject(new Error('The password is invalid!', { cause: 'password' }));
		});
	};

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [response, setResponse] = useState<TUser | undefined>();
	useEffect(() => {
		setTimeout(() => {
			const matchedUser = Object.values(USERS).find(
				(user) => user.username === username || user.email === username,
			);
			setResponse(matchedUser);
			setIsLoading(false);
		}, 100);
	}, [username]);

	return { response, isLoading, getCheckUser };
};

export default useFakeUserAPI;
