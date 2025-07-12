import { ThemeContextProvider } from '@/context/themeContext';
import { AuthProvider } from '@/context/authContext';

const Providers = () => {
	return (
		<ThemeContextProvider>
			{/* <Outlet /> must be used in the innermost provider. */}
			<AuthProvider />
		</ThemeContextProvider>
	);
};

export default Providers;
