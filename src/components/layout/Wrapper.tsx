import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import useAsideStatus from '@/hooks/useAsideStatus';

// @start-snippet:: interface
interface IWrapperProps {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
const Wrapper: FC<IWrapperProps> = (props) => {
	const { children, className, ...rest } = props;

	const { asideStatus } = useAsideStatus();

	return (
		<section
			data-component-name='Wrapper'
			className={classNames(
				'flex flex-auto flex-col',
				'bg-white dark:bg-zinc-950',
				'border-s-[1rem] border-e-[1rem] border-zinc-100 md:border-s-0 dark:border-zinc-900',
				'transition-all duration-300 ease-in-out',
				className,
				{
					'md:peer-[&]:ltr:pl-[20rem] md:peer-[&]:rtl:pr-[20rem]': asideStatus,
					// Mobile Design
					'md:peer-[&]:ltr:pl-[5.25em] md:peer-[&]:rtl:pr-[5.25em]': !asideStatus,
				},
			)}
			{...rest}>
			<div className='sticky top-0 z-99 h-full max-h-4 min-h-4 bg-zinc-100 before:absolute before:start-0 before:top-[calc(1rem+1px)] before:h-4 before:w-4 before:rotate-180 before:content-[url("/src/assets/required/corner.svg")] after:absolute after:end-px after:top-4 after:h-4 after:w-4 after:-rotate-90 after:content-[url("/src/assets/required/corner.svg")] rtl:before:top-4 rtl:before:-rotate-90 rtl:after:-left-px rtl:after:rotate-180 dark:bg-zinc-900 dark:before:content-[url("/src/assets/required/dark:corner.svg")] dark:after:content-[url("/src/assets/required/dark:corner.svg")]'></div>
			{children}
			<div className='sticky bottom-0 z-99 h-full max-h-4 min-h-4 bg-zinc-100 before:absolute before:start-px before:-top-4 before:h-4 before:w-4 before:rotate-90 before:content-[url("/src/assets/required/corner.svg")] after:absolute after:end-0 after:-top-[calc(1rem+1px)] after:h-4 after:w-4 after:content-[url("/src/assets/required/corner.svg")] rtl:before:start-0 rtl:before:rotate-0 rtl:after:-top-4 rtl:after:rotate-90 dark:bg-zinc-900 dark:before:content-[url("/src/assets/required/dark:corner.svg")] dark:after:content-[url("/src/assets/required/dark:corner.svg")]'></div>
		</section>
	);
};

export default Wrapper;
