import { FC, HTMLAttributes, ReactNode, RefObject, useRef } from 'react';
import classNames from 'classnames';
import useAsideStatus from '@/hooks/useAsideStatus';
import Icon from '@/components/icon/Icon';
import useDomRect from '@/hooks/useDomRect';

// @start-snippet:: interface
interface IHeaderLeftProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const HeaderLeft: FC<IHeaderLeftProps> = (props) => {
	const { children, className, ...rest } = props;

	const { asideStatus, setAsideStatus } = useAsideStatus();

	return (
		<div
			data-component-name='Header/HeaderLeft'
			className={classNames('flex items-center gap-4', 'ltr:mr-auto rtl:ml-auto', className)}
			{...rest}>
			<button
				type='button'
				aria-label='Toggle Aside Menu'
				onClick={() => setAsideStatus(!asideStatus)}
				className='flex h-12 w-12 items-center justify-center md:hidden'>
				<Icon icon={asideStatus ? 'SidebarLeft01' : 'SidebarLeft'} className='text-2xl' />
			</button>
			{children}
		</div>
	);
};
HeaderLeft.displayName = 'HeaderLeft';

// @start-snippet:: interface
interface IHeaderRightProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const HeaderRight: FC<IHeaderRightProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Header/HeaderRight'
			className={classNames('flex items-center gap-4', 'ltr:ml-auto rtl:mr-auto', className)}
			{...rest}>
			{children}
		</div>
	);
};
HeaderRight.displayName = 'HeaderRight';

// @start-snippet:: interface
interface IHeaderProps {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
const Header: FC<IHeaderProps> = (props) => {
	const { children, className, ...rest } = props;

	const divRef = useRef<HTMLDivElement>(null);
	const [domRect] = useDomRect(divRef as RefObject<HTMLElement>);

	return (
		<>
			<style>{`:root {--header-height: ${domRect?.height || 0}px}`}</style>
			<header
				ref={divRef}
				data-component-name='Header'
				className={classNames(
					'sticky top-6 z-30 mx-2 mt-2 px-5 py-4',
					'flex items-center justify-center rounded-xl shadow-md/5',
					'bg-zinc-100/50 backdrop-blur-md dark:bg-zinc-900/75',
					className,
				)}
				{...rest}>
				{children}
			</header>
		</>
	);
};
Header.displayName = 'Header';

export default Header;
