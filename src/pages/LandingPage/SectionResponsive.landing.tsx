import Icon from '@/components/icon/Icon';
import {
	Ex1,
	Ex10,
	Ex11,
	Ex12,
	Ex13,
	Ex14,
	Ex15,
	Ex16,
	Ex2,
	Ex3,
	Ex4,
	Ex5,
	Ex6,
	Ex7,
	Ex8,
	Ex9,
	Frame2PNG,
	FramePNG,
	Ss1,
	Ssm1,
	Sst1,
	Sst2,
} from '@/assets/images';

const SectionResponsiveLanding = () => {
	return (
		<div className='container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
			<div className='mx-auto mb-8 max-w-2xl text-center lg:mb-14'>
				<h2 className='text-3xl font-bold text-zinc-800 lg:text-4xl dark:text-neutral-200'>
					Explore tools
				</h2>
				<p className='mt-3 text-zinc-800 dark:text-neutral-200'>
					The powerful and flexible theme for all kinds of businesses.
				</p>
			</div>

			<div className='mx-auto grid max-w-3xl grid-cols-12 gap-6 lg:gap-8'>
				<div className='col-span-6 text-center sm:col-span-4'>
					<Icon icon='ComputerPhoneSync' size='text-4xl' className='mx-auto' />
					<div className='mt-2 sm:mt-6'>
						<h3 className='text-lg font-semibold text-zinc-800 dark:text-neutral-200'>
							Responsive
						</h3>
					</div>
				</div>

				<div className='col-span-6 text-center sm:col-span-4'>
					<Icon icon='AiEditing' size='text-4xl' className='mx-auto' />
					<div className='mt-2 sm:mt-6'>
						<h3 className='text-lg font-semibold text-zinc-800 dark:text-neutral-200'>
							Customizable
						</h3>
					</div>
				</div>

				<div className='col-span-6 col-start-4 text-center sm:col-span-4'>
					<Icon icon='CustomerSupport' size='text-4xl' className='mx-auto' />
					<div className='mt-2 sm:mt-6'>
						<h3 className='text-lg font-semibold text-zinc-800 dark:text-neutral-200'>
							Fast Support
						</h3>
					</div>
				</div>
			</div>
			<div className='mt-20 grid grid-cols-12 items-center gap-x-2 py-20 sm:gap-x-6 lg:gap-x-8'>
				<div className='col-span-4 hidden md:col-span-3 md:block'>
					<img className='rounded-xl' src={Ss1} alt='Dashboard overview with charts' />
				</div>

				<div className='col-span-4 md:col-span-3'>
					<img
						className='rounded-xl'
						src={Sst1}
						alt='Project settings panel with configuration options'
					/>
				</div>

				<div className='col-span-4 md:col-span-3'>
					<img
						className='rounded-xl'
						src={Ssm1}
						alt='Mobile-friendly interface example'
					/>
				</div>

				<div className='col-span-4 md:col-span-3'>
					<img
						className='rounded-xl'
						src={Sst2}
						alt='Collaboration tools with messaging features'
					/>
				</div>
			</div>
			<div className='sr-only'>
				<img src={FramePNG} alt='Frame' />
				<img src={Frame2PNG} alt='Frame' />
				<img src={Ex1} alt='Frame' />
				<img src={Ex2} alt='Frame' />
				<img src={Ex3} alt='Frame' />
				<img src={Ex4} alt='Frame' />
				<img src={Ex5} alt='Frame' />
				<img src={Ex6} alt='Frame' />
				<img src={Ex7} alt='Frame' />
				<img src={Ex8} alt='Frame' />
				<img src={Ex9} alt='Frame' />
				<img src={Ex10} alt='Frame' />
				<img src={Ex11} alt='Frame' />
				<img src={Ex12} alt='Frame' />
				<img src={Ex13} alt='Frame' />
				<img src={Ex14} alt='Frame' />
				<img src={Ex15} alt='Frame' />
				<img src={Ex16} alt='Frame' />
			</div>
		</div>
	);
};

export default SectionResponsiveLanding;
