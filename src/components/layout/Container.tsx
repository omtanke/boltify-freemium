import { forwardRef, ReactNode } from 'react';
import classNames from 'classnames';

// @start-snippet:: interface
type TContainerBreakpoint =
	| 'container'
	| 'sm:container'
	| 'md:container'
	| 'lg:container'
	| 'xl:container'
	| '2xl:container'
	| null;

interface IContainerProps {
	children: ReactNode;
	className?: string;
	breakpoint?: TContainerBreakpoint;
}
// @end-snippet:: interface

const Container = forwardRef<HTMLDivElement, IContainerProps>((props, ref) => {
	const { children, className, breakpoint = 'container', ...rest } = props;

	return (
		<div
			ref={ref}
			data-component-name='Container'
			className={classNames(
				'mx-auto h-full w-full bg-white px-2 pt-4 pb-2 dark:bg-zinc-950',
				breakpoint,
				className,
			)}
			{...rest}>
			{children}
		</div>
	);
});
Container.displayName = 'Container';

export default Container;
