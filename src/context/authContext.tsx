import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import useFakeUserAPI from '@/api/useFakeUserAPI';
import { TUser } from '@/mocks/users.mock';

export interface IAuthContextProps {
	isLoading: boolean;
	onLogin: (
		username: TUser['username'],
		password: TUser['password'],
		rememberMe: boolean,
	) => Promise<void>;
	userData: TUser | null;
	usernameStorage: string | null;
	tokenStorage: string | null;
	onLogout: (isRedirect: boolean) => Promise<void>;
}
const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

export const AuthProvider = () => {
	const getStorageItem = (key: string) =>
		localStorage.getItem(key) ?? sessionStorage.getItem(key);
	const tokenStorage = getStorageItem('token');
	const usernameStorage = getStorageItem('username');

	const { response, isLoading, getCheckUser } = useFakeUserAPI(usernameStorage as string);
	const [userData, setUserData] = useState<TUser | null>(null);

	const navigate = useNavigate();

	// On mount, restore userData from localStorage if available
	useEffect(() => {
		const stored = localStorage.getItem('userData') ?? sessionStorage.getItem('userData');
		if (stored) {
			try {
				const parsed = JSON.parse(stored);
				setUserData(parsed);
			} catch {
				/* empty */
			}
		}
	}, []);

	// Optionally, update userData state when response changes and usernameStorage exists (for hydration)
	useEffect(() => {
		if (response && usernameStorage) {
			setUserData(response as TUser);
		}
	}, [response, usernameStorage]);

	// call this function when you want to authenticate the user
	const onLogin = async (
		username: TUser['username'],
		password: TUser['password'],
		rememberMe: boolean,
	) => {
		await getCheckUser(username, password).then(async (user) => {
			const storage = rememberMe ? localStorage : sessionStorage;
			storage.setItem('username', username);
			storage.setItem('token', 'XXXXX');
			setUserData(user as TUser);
			storage.setItem('userData', JSON.stringify(user));
			navigate('/sales');
		});
	};

	// call this function to sign out logged-in user
	const onLogout = async (isNavigate = true) => {
		localStorage.removeItem('username');
		localStorage.removeItem('token');
		localStorage.removeItem('userData');
		sessionStorage.removeItem('username');
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('userData');
		setUserData(null);
		if (isNavigate) navigate(`../login`, { replace: true });
	};

	const value: IAuthContextProps = useMemo(
		() => ({
			usernameStorage,
			tokenStorage,
			onLogin,
			onLogout,
			userData,
			isLoading,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[usernameStorage, userData, tokenStorage, isLoading],
	);
	return (
		<AuthContext.Provider value={value}>
			<Outlet />
		</AuthContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
	return useContext(AuthContext);
};
