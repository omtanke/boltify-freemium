import useDarkMode from '@/hooks/useDarkMode';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/authContext';
import classNames from 'classnames';
import { LogoDark, LogoLight } from '@/assets/images';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import Button from '@/components/ui/Button';
import Offcanvas, { OffcanvasBody, OffcanvasHeader } from '@/components/ui/Offcanvas';

const SectionHeaderLanding = () => {
	const { isDarkTheme } = useDarkMode();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const sections = [
		{ id: 'main', label: 'Home' },
		{ id: 'components', label: 'Components' },
		{ id: 'examples', label: 'Examples' },
		{ id: 'templates', label: 'Templates' },
	];

	const [active, setActive] = useState(sections[0].id);

	useEffect(() => {
		const handleScroll = () => {
			const offset = 80;
			let current = sections[0].id;

			for (const section of sections) {
				const el = document.getElementById(section.id);
				if (el) {
					const top = el.getBoundingClientRect().top - offset;
					if (top <= 0) current = section.id;
				}
			}
			setActive(current);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { userData } = useAuth();

	const _MENU = (
		<div className='mt-5 flex flex-col gap-x-0 gap-y-4 lg:mt-0 lg:flex-row lg:items-center lg:justify-center lg:gap-x-7 lg:gap-y-0'>
			{sections.map((section) => (
				<div key={section.id}>
					<a
						href={`#${section.id}`}
						className={classNames(
							'inline-block text-black transition focus:outline-hidden dark:text-white',
							{
								'before:bg-primary-400 relative before:absolute before:start-0 before:bottom-0.5 before:-z-1 before:h-1 before:w-full':
									active === section.id,
								'hover:text-zinc-600 focus:text-zinc-600 dark:hover:text-neutral-300 dark:focus:text-neutral-300':
									active !== section.id,
							},
						)}>
						{section.label}
					</a>
				</div>
			))}
			<div>
				<a
					className='bg-primary-500 inline-flex rounded-full px-3 py-1 font-bold text-black'
					href='https://1.envato.market/boltify-react'>
					BUY NOW
				</a>
			</div>
		</div>
	);
	return (
		<header className='sticky top-4 z-50 flex w-full flex-wrap py-7 backdrop-blur-sm lg:flex-nowrap lg:justify-start dark:bg-zinc-950/25'>
			<nav className='relative container mx-auto flex w-full basis-full flex-wrap items-center px-4 lg:grid lg:grid-cols-12 lg:px-6'>
				<div className='lg:col-span-3'>
					<button
						className='inline-block flex-none cursor-pointer rounded-xl text-xl font-semibold focus:opacity-80 focus:outline-hidden'
						aria-label='Boltify'
						onClick={() => navigate('/sales')}>
						<img
							src={isDarkTheme ? LogoDark : LogoLight}
							className='h-12'
							alt='Boltify'
						/>
					</button>
				</div>

				<div className='ms-auto flex items-center gap-x-2 py-1 lg:order-3 lg:col-span-3 lg:gap-x-2 lg:ps-6'>
					<ChangeDarkModeTemplate />
					{!userData && (
						<Button
							aria-label='Login'
							variant='outline'
							color='zinc'
							rounded='rounded-xl'
							onClick={() => navigate('/login')}>
							Sign in
						</Button>
					)}
					{userData && (
						<Button
							aria-label='Profile'
							variant='outline'
							color='zinc'
							rounded='rounded-xl'
							onClick={() => navigate(`/sales`)}>
							Hi {userData?.firstName},
						</Button>
					)}
					<a
						href='https://themeforest.net/user/omtankestudio'
						className='bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 inline-flex cursor-pointer items-center gap-x-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-black transition focus:outline-hidden disabled:pointer-events-none disabled:opacity-50'>
						Hire us
					</a>

					<div className='lg:hidden'>
						<Button
							aria-label='Open'
							variant='outline'
							color='zinc'
							rounded='rounded-xl'
							icon='Menu11'
							onClick={() => setIsOpen(true)}
						/>
						<Offcanvas isOpen={isOpen} setIsOpen={setIsOpen}>
							<OffcanvasHeader>Menu</OffcanvasHeader>
							<OffcanvasBody>{_MENU}</OffcanvasBody>
						</Offcanvas>
					</div>
				</div>

				<div className='hidden grow basis-full overflow-hidden transition-all duration-300 lg:order-2 lg:col-span-6 lg:block lg:w-auto lg:basis-auto'>
					{_MENU}
				</div>
			</nav>
		</header>
	);
};

export default SectionHeaderLanding;
