import { ReactNode, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { useAuth } from './context/authContext';
import useFontSize from './hooks/useFontSize';
import { Logo, LogoDark, LogoLight } from './assets/images';
import { toast, ToastContainer, ToastContentProps } from 'react-toastify';
import useDarkMode from './hooks/useDarkMode';
import colors from './tailwindcss/colors.tailwind';

const RootWrapper = ({ children }: { children: ReactNode }) => {
	const { fontSize } = useFontSize();
	const { isDarkTheme } = useDarkMode();
	return (
		<>
			<style>{`:root {font-size: ${fontSize}px;
			--toastify-toast-bd-radius: 0.75rem;
			--toastify-color-dark: ${colors.zinc['950']};
			--toastify-color-info: ${colors.blue['500']};
			--toastify-color-success: ${colors.emerald['500']};
			--toastify-color-warning: ${colors.amber['500']};
			--toastify-color-error: ${colors.red['500']};
			--toastify-color-progress-light: linear-gradient(to right, ${colors.blue['500']}, ${colors.emerald['500']}, ${colors.amber['500']}, ${colors.red['500']});
				}`}</style>
			{children}
			<ToastContainer
				theme={isDarkTheme ? 'dark' : 'light'}
				hideProgressBar
				// rtl={isRTL}
			/>
		</>
	);
};

const Root = () => {
	const { isLoading } = useAuth();
	const location = useLocation();

	const { isDarkTheme } = useDarkMode();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname, location.search]);

	useEffect(() => {
		try {
			const isInIframe = window.self !== window.top;
			if (isInIframe) {
				toast(
					({ closeToast }: ToastContentProps) => (
						<div className='grid grid-cols-12 overflow-hidden rounded-xl border-zinc-500/25'>
							<div className='col-span-9'>
								<div className='flex items-center justify-center gap-4 p-4'>
									<div className='shrink-0'>
										<img src={Logo} alt='' className='h-9 w-9' />
									</div>
									<div className='grow'>
										<div className='line-clamp-1 font-bold'>Recommendation</div>
										<div className='line-clamp-1'>
											Open full demo in a new tab for full experience.
										</div>
									</div>
								</div>
							</div>
							<div className='col-span-3 border-s border-inherit'>
								<div className='flex h-full w-full flex-col items-center justify-center divide-y divide-zinc-500/25'>
									<div className='flex h-full w-full items-center justify-center'>
										<button
											className='h-full w-full hover:bg-zinc-500/25'
											onClick={() => {
												window.open(
													'https://boltify.omtanke.studio',
													'_blank',
												);
												closeToast();
											}}>
											Open
										</button>
									</div>
									<div className='flex h-full w-full items-center justify-center'>
										<button
											className='h-full w-full hover:bg-zinc-500/25'
											onClick={() => closeToast()}>
											Close
										</button>
									</div>
								</div>
							</div>
						</div>
					),
					{
						closeButton: false,
						autoClose: false,
						className: 'p-0! bg-zinc-500/10! backdrop-blur-md',
					},
				);
			}
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (_) {
			toast(
				({ closeToast }: ToastContentProps) => (
					<div className='grid grid-cols-12 overflow-hidden rounded-xl border-zinc-500/25 text-zinc-950 dark:text-zinc-50'>
						<div className='col-span-9'>
							<div className='flex items-center justify-center gap-4 p-4'>
								<div className='shrink-0'>
									<img src={Logo} alt='' className='h-9 w-9' />
								</div>
								<div className='grow'>
									<div className='line-clamp-1 font-bold'>Recommendation</div>
									<div className='line-clamp-1'>
										Open full demo in a new tab for full experience.
									</div>
								</div>
							</div>
						</div>
						<div className='col-span-3 border-s border-inherit'>
							<div className='flex h-full w-full flex-col items-center justify-center divide-y divide-zinc-500/25'>
								<div className='flex h-full w-full items-center justify-center'>
									<button
										className='h-full w-full hover:bg-zinc-500/25'
										onClick={() => {
											window.open('https://boltify.omtanke.studio', '_blank');
											closeToast();
										}}>
										Open
									</button>
								</div>
								<div className='flex h-full w-full items-center justify-center'>
									<button
										className='h-full w-full hover:bg-zinc-500/25'
										onClick={() => closeToast()}>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
				),
				{
					closeButton: false,
					autoClose: false,
					className: 'p-0! bg-zinc-500/10! backdrop-blur-md',
				},
			);
		}
	}, []);

	return (
		<RootWrapper>
			{isLoading && (
				<div className='flex h-full items-center justify-center'>
					<img src={isDarkTheme ? LogoDark : LogoLight} alt='' className='h-24' />
				</div>
			)}
			{!isLoading && (
				<div className='flex grow flex-col'>
					<Outlet />
				</div>
			)}
		</RootWrapper>
	);
};

export default Root;
