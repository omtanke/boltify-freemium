import {
	createContext,
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	useEffect,
	useLayoutEffect,
	useMemo,
	useState,
} from 'react';
import theme from 'tailwindcss/defaultTheme';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import { TDarkMode } from '@/types/darkMode.type';
import DARK_MODE from '@/constants/darkMode.constant';
import useDeviceScreen from '@/hooks/useDeviceScreen';
import { TLang } from '@/types/lang.type';
// import themeConfig from '@/config/theme.config';
// import useDeviceScreen from '@/hooks/useDeviceScreen';

export interface IThemeContextProps {
	isDarkTheme: boolean;
	darkModeStatus: TDarkMode | null;
	setDarkModeStatus: Dispatch<SetStateAction<TDarkMode | null>>;
	asideStatus: boolean;
	setAsideStatus: Dispatch<SetStateAction<boolean>>;
	fontSize: number;
	setFontSize: Dispatch<SetStateAction<number>>;
	language: TLang;
	setLanguage: Dispatch<SetStateAction<TLang>>;
}
const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps);

interface IThemeContextProviderProps {
	children: ReactNode;
}
export const ThemeContextProvider: FC<IThemeContextProviderProps> = ({ children }) => {
	/**
	 * Language
	 */
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState<TLang>(
		(localStorage.getItem('bolt_language') as TLang) || 'en',
	);
	useLayoutEffect(() => {
		localStorage.setItem('bolt_language', language);

		i18n.changeLanguage(language)
			.then(() => {
				document.documentElement.setAttribute('dir', i18n.dir());
				document.documentElement.setAttribute('lang', i18n.language);
			})
			.catch(() => {});

		// Changing the global locale doesn't affect existing instances.
		// more information: https://day.js.org/docs/en/i18n/changing-locale
		// If you want the current instances to change instantly: dayjs().locale(i18n.language)
		dayjs.locale(language);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [language]);

	/**
	 * Dark Mode
	 */
	const [darkModeStatus, setDarkModeStatus] = useState<TDarkMode | null>(
		(localStorage.getItem('theme') || DARK_MODE.SYSTEM) as TDarkMode,
	);
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(darkModeStatus === DARK_MODE.DARK);
	useLayoutEffect(() => {
		localStorage.setItem('theme', darkModeStatus as string);

		if (
			localStorage.getItem('theme') === DARK_MODE.DARK ||
			(localStorage.getItem('theme') === DARK_MODE.SYSTEM &&
				window.matchMedia(`(prefers-color-scheme: ${DARK_MODE.DARK})`).matches)
		) {
			document.documentElement.classList.add(DARK_MODE.DARK);
			setIsDarkTheme(true);
		} else {
			document.documentElement.classList.remove(DARK_MODE.DARK);
			setIsDarkTheme(false);
		}
	}, [darkModeStatus]);
	useEffect(() => {
		const metaTag = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

		const newMetaTag = metaTag || (document.createElement('meta') as HTMLMetaElement);

		newMetaTag.name = 'theme-color';
		newMetaTag.content = isDarkTheme ? '#18181b' : '#f4f4f5';

		document.head.appendChild(newMetaTag);

		return () => {
			if (!metaTag) newMetaTag.remove();
		};
	}, [isDarkTheme]);

	/**
	 * Aside Status
	 */
	const { width } = useDeviceScreen();
	const [asideStatus, setAsideStatus] = useState(
		localStorage.getItem('bolt_asideStatus')
			? localStorage.getItem('bolt_asideStatus') === 'true'
			: true,
	);
	useLayoutEffect(() => {
		if (Number(theme.screens.md.replace('rem', '')) * 16 <= Number(width))
			localStorage.setItem('bolt_asideStatus', asideStatus?.toString());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [asideStatus]);
	useEffect(() => {
		if (Number(theme.screens.md.replace('rem', '')) * 16 > Number(width)) setAsideStatus(false);
		return () => {
			setAsideStatus(
				localStorage.getItem('bolt_asideStatus')
					? localStorage.getItem('bolt_asideStatus') === 'true'
					: true,
			);
		};
	}, [width]);

	/**
	 * Font Size
	 */
	const [fontSize, setFontSize] = useState<number>(
		Number(localStorage.getItem('bolt_fontSize'))
			? Number(localStorage.getItem('bolt_fontSize'))
			: 13,
	);
	useLayoutEffect(() => {
		localStorage.setItem('bolt_fontSize', fontSize?.toString());
	}, [fontSize]);

	const values: IThemeContextProps = useMemo(
		() => ({
			isDarkTheme,
			darkModeStatus,
			setDarkModeStatus,
			asideStatus,
			setAsideStatus,
			fontSize,
			setFontSize,
			language,
			setLanguage,
		}),
		[isDarkTheme, darkModeStatus, asideStatus, fontSize, language],
	);

	return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
