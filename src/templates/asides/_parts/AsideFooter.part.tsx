import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '@/components/ui/Dropdown';
import Button from '@/components/ui/Button';
import Icon from '@/components/icon/Icon';
import DARK_MODE from '@/constants/darkMode.constant';
import pages from '@/Routes/pages';
import User from '@/components/layout/User/User';
import { NavItem, NavSeparator } from '@/components/layout/Navigation/Nav';
import DarkModeSwitcherPart from '@/parts/DarkModeSwitcher.part';
import { AsideFooter } from '@/components/layout/Aside';
import useAsideStatus from '@/hooks/useAsideStatus';
import { useAuth } from '@/context/authContext';
import useDarkMode from '@/hooks/useDarkMode';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import ThemeContext from '@/context/themeContext';
import LANG from '@/constants/lang.constant';
import useFontSize from '@/hooks/useFontSize';
import { useNavigate } from 'react-router';

const AsideFooterPart = () => {
	const { asideStatus } = useAsideStatus();
	const { setDarkModeStatus, darkModeStatus } = useDarkMode();

	const navigate = useNavigate();

	const { onLogout } = useAuth();

	const { i18n } = useTranslation();
	const { setLanguage } = useContext(ThemeContext);

	const { userData, tokenStorage } = useAuth();

	const langArray = Object.values(LANG);
	const activeLang = langArray.filter((key) => key.lng === i18n.language)[0];

	const { fontSize, setFontSize } = useFontSize();

	return (
		<AsideFooter>
			{asideStatus && (
				<div className='flex justify-between gap-3 p-3'>
					<Dropdown>
						<DropdownToggle hasIcon={false}>
							<Button
								icon='LanguageSquare'
								variant='link'
								aria-label='Select Language'
								className='!p-0'
							/>
						</DropdownToggle>
						<DropdownMenu>
							{langArray.map((item) => (
								<DropdownItem
									isActive={activeLang.lng === item.lng}
									key={item.lng}
									onClick={() => setLanguage(item.lng)}>
									<Icon
										icon={item.icon}
										size='text-2xl'
										className='ltr:mr-2 rtl:ml-2'
									/>
									{item.text}
								</DropdownItem>
							))}
						</DropdownMenu>
					</Dropdown>
					<Button
						icon={
							(darkModeStatus === DARK_MODE.LIGHT && 'Sun03') ||
							(darkModeStatus === DARK_MODE.DARK && 'Moon02') ||
							'Computer'
						}
						variant='link'
						aria-label='Change theme'
						className='!p-0'
						onClick={() => {
							if (darkModeStatus === DARK_MODE.LIGHT)
								setDarkModeStatus(DARK_MODE.DARK);
							if (darkModeStatus === DARK_MODE.DARK)
								setDarkModeStatus(DARK_MODE.SYSTEM);
							if (darkModeStatus === DARK_MODE.SYSTEM)
								setDarkModeStatus(DARK_MODE.LIGHT);
						}}
					/>
					<Dropdown>
						<DropdownToggle hasIcon={false}>
							<Button
								icon='Settings02'
								variant='link'
								aria-label='Select Language'
								className='!p-0'
							/>
						</DropdownToggle>
						<DropdownMenu>
							<div className='inline-block rounded-lg border border-zinc-200 bg-white px-3 py-2 dark:border-neutral-700 dark:bg-neutral-900'>
								<div className='flex items-center gap-x-1.5'>
									<button
										type='button'
										onClick={() => setFontSize(fontSize - 1)}
										disabled={fontSize <= 12}
										className='inline-flex size-6 items-center justify-center gap-x-2 rounded-md border border-zinc-200 bg-white text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 focus:bg-zinc-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800'
										tabIndex={-1}
										aria-label='Decrease'>
										<svg
											className='size-3.5 shrink-0'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='M5 12h14'></path>
										</svg>
									</button>
									<input
										aria-label='Font size'
										className='w-6 border-0 bg-transparent p-0 text-center text-zinc-800 focus:ring-0 dark:text-white [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
										// style={{ ['-moz-appearance']: 'textfield' }}
										type='number'
										aria-roledescription='Number field'
										value={fontSize}
									/>
									<button
										type='button'
										onClick={() => setFontSize(fontSize + 1)}
										disabled={fontSize >= 18}
										className='inline-flex size-6 items-center justify-center gap-x-2 rounded-md border border-zinc-200 bg-white text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 focus:bg-zinc-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800'
										tabIndex={-1}
										aria-label='Increase'>
										<svg
											className='size-3.5 shrink-0'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'>
											<path d='M5 12h14'></path>
											<path d='M12 5v14'></path>
										</svg>
									</button>
								</div>
							</div>
						</DropdownMenu>
					</Dropdown>
					<Button
						icon='Book02'
						variant='link'
						aria-label='ınstallation'
						onClick={() =>
							navigate(pages.documentation.gettingStarted.subPages.installation.to)
						}
						className='!p-0'
					/>
					<Button
						icon='ArtificialIntelligence08'
						variant='link'
						aria-label='View examples'
						onClick={() => navigate(pages.examples.exampleMain.to)}
						className='!p-0'
					/>
					<Button
						icon='AiChat02'
						variant='link'
						aria-label='Quick view'
						onClick={() => {}}
						className='!p-0'
					/>
				</div>
			)}
			<User
				name={userData ? `${userData?.firstName} ${userData?.lastName}` : undefined}
				position={userData?.role}
				nameSuffix={userData?.isVerified && <Icon icon='CheckmarkBadge02' color='blue' />}
				src={userData?.image.org}>
				<NavSeparator />

				{tokenStorage && (
					<NavItem text='Logout' icon='Logout03' onClick={() => onLogout(true)} />
				)}
				{!tokenStorage && (
					<NavItem
						text='Log in'
						icon='Login03'
						onClick={() => navigate(pages.pagesExamples.login.to)}
					/>
				)}
				<DarkModeSwitcherPart />
			</User>
		</AsideFooter>
	);
};

export default AsideFooterPart;
