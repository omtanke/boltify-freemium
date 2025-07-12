import { useNavigate } from 'react-router';
import Icon from '@/components/icon/Icon';

const SectionIconLanding = () => {
	const navigate = useNavigate();
	return (
		<div className='container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14 xl:py-36'>
			<div className='grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				<button
					className='group flex size-full gap-y-6 rounded-lg p-5 hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-hidden dark:hover:bg-neutral-800 dark:focus:bg-neutral-800'
					onClick={() => navigate('/sales')}>
					<Icon icon='AiBeautify' className='me-6 mt-0.5 shrink-0' size='text-4xl' />
					<div>
						<div>
							<h3 className='block font-bold text-zinc-800 dark:text-white'>
								Prepared with Tailwind 4
							</h3>
							<p className='text-zinc-600 dark:text-neutral-400'>
								All components were carefully crafted using Tailwind CSS v4,
								ensuring modern design and easy customization for Boltify.
							</p>
						</div>

						<p className='mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-zinc-800 dark:text-neutral-200'>
							Learn more
							<svg
								className='size-4 shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path d='m9 18 6-6-6-6' />
							</svg>
						</p>
					</div>
				</button>

				<button
					className='group flex size-full gap-y-6 rounded-lg p-5 hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-hidden dark:hover:bg-neutral-800 dark:focus:bg-neutral-800'
					onClick={() => navigate('/sales')}>
					<Icon icon='AiUser' className='me-6 mt-0.5 shrink-0' size='text-4xl' />
					<div>
						<div>
							<h3 className='block font-bold text-zinc-800 dark:text-white'>
								More Than Dashboards
							</h3>
							<p className='text-zinc-600 dark:text-neutral-400'>
								Landing page components are also built in, giving you maximum
								flexibility for both dashboards and modern landing pages.
							</p>
						</div>

						<p className='mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-zinc-800 dark:text-neutral-200'>
							Learn more
							<svg
								className='size-4 shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path d='m9 18 6-6-6-6' />
							</svg>
						</p>
					</div>
				</button>

				<button
					className='group flex size-full gap-y-6 rounded-lg p-5 hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-hidden dark:hover:bg-neutral-800 dark:focus:bg-neutral-800'
					onClick={() => navigate('/sales')}>
					<Icon icon='Customize' className='me-6 mt-0.5 shrink-0' size='text-4xl' />

					<div>
						<div>
							<h3 className='block font-bold text-zinc-800 dark:text-white'>
								Light & Dark and RTL Support
							</h3>
							<p className='text-zinc-600 dark:text-neutral-400'>
								Enjoy seamless light and dark themes, along with built-in support
								for right-to-left (RTL) languages.
							</p>
						</div>

						<p className='mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-zinc-800 dark:text-neutral-200'>
							Learn more
							<svg
								className='size-4 shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path d='m9 18 6-6-6-6' />
							</svg>
						</p>
					</div>
				</button>
			</div>
		</div>
	);
};

export default SectionIconLanding;
