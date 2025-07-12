import { FC, forwardRef, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { TRounded } from '@/types/rounded.type';
import useRoundedSize from '@/hooks/useRoundedSize';
import themeConfig from '@/config/theme.config';
import Icon, { IIconProps } from '@/components/icon/Icon';

// @start-snippet:: interface
interface ICardTitleProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	iconProps?: IIconProps;
}
// @end-snippet:: interface
export const CardTitle: FC<ICardTitleProps> = (props) => {
	const { children, className, iconProps, ...rest } = props;

	const classes = classNames('flex gap-4 items-center text-2xl font-semibold', className);

	return (
		<div data-component-name='Card/CardTitle' className={classes} {...rest}>
			{iconProps?.icon && <Icon className='shrink-0' {...iconProps} />}
			{children}
		</div>
	);
};

// @start-snippet:: interface
interface ICardSubTitleProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const CardSubTitle: FC<ICardSubTitleProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('flex items-center text-lg font-semibold text-zinc-500', className);

	return (
		<div data-component-name='Card/CardSubTitle' className={classes} {...rest}>
			{children}
		</div>
	);
};

// @start-snippet:: interface
interface ICardHeaderSeparatorProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}
// @end-snippet:: interface
export const CardHeaderSeparator: FC<ICardHeaderSeparatorProps> = (props) => {
	const { className, ...rest } = props;

	const classes = classNames('h-8 rounded-full border-s border-zinc-500/25', className);

	return <div className={classes} {...rest}></div>;
};

// @start-snippet:: interface
interface ICardHeaderChildProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const CardHeaderChild: FC<ICardHeaderChildProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('flex flex-wrap items-center gap-4', className);

	return (
		<div data-component-name='Card/CardHeaderChild' className={classes} {...rest}>
			{children}
		</div>
	);
};

// @start-snippet:: interface
interface ICardHeaderProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const CardHeader: FC<ICardHeaderProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames(
		'flex flex-wrap items-center justify-between gap-4 px-4 pb-4 first:pt-4',
		className,
	);

	return (
		<div data-component-name='Card/CardHeader' className={classes} {...rest}>
			{children}
		</div>
	);
};

// @start-snippet:: interface
interface ICardBodyProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const CardBody: FC<ICardBodyProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('grow px-4 pb-4 first:pt-4', className);

	return (
		<div data-component-name='Card/CardBody' className={classes} {...rest}>
			{children}
		</div>
	);
};

// @start-snippet:: interface
interface ICardBodyCollapseProps {
	children: ReactNode;
	className?: string;
	isOpen: boolean;
}
// @end-snippet:: interface
export const CardBodyCollapse: FC<ICardBodyCollapseProps> = (props) => {
	const { children, className, isOpen, ...rest } = props;

	const classes = classNames('px-4 grow overflow-hidden first:pt-4 pb-4', className);

	return (
		<AnimatePresence initial={false}>
			{isOpen && (
				<motion.div
					data-component-name='Card/CardBodyCollapse'
					key='content'
					initial='collapsed'
					animate='open'
					exit='collapsed'
					variants={{
						open: { opacity: 1, height: 'auto' },
						collapsed: { opacity: 0, height: 0 },
					}}
					transition={{
						duration: 0.8,
						ease: [0.04, 0.62, 0.23, 0.98],
					}}
					// @ts-ignore
					className={classes}
					{...rest}>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

// @start-snippet:: interface
interface ICardFooterChildProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const CardFooterChild: FC<ICardFooterChildProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('flex flex-wrap items-center gap-4', className);

	return (
		<div data-component-name='Card/CardFooterChild' className={classes} {...rest}>
			{children}
		</div>
	);
};

// @start-snippet:: interface
interface ICardFooterProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const CardFooter: FC<ICardFooterProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames(
		'flex flex-wrap items-center justify-between gap-4 px-4 pb-4 first:pt-4',
		className,
	);

	return (
		<div data-component-name='Card/CardFooter' className={classes} {...rest}>
			{children}
		</div>
	);
};

// @start-snippet:: interface
interface ICardProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	rounded?: TRounded | 'auto';
}
// @end-snippet:: interface
const Card = forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
	const { children, className, rounded = 'auto', ...rest } = props;

	const { roundedCustom } = useRoundedSize(themeConfig.rounded);

	const cardClasses = classNames(
		'flex flex-col bg-white dark:bg-zinc-950 border dark:border-zinc-500/25 border-zinc-500/10',
		'overflow-hidden',
		{ [`${rounded as TRounded}`]: rounded !== 'auto' },
		{ [`${roundedCustom(1)}`]: rounded === 'auto' },
		className,
	);

	return (
		<div ref={ref} data-component-name='Card' className={cardClasses} {...rest}>
			{children}
		</div>
	);
});
Card.displayName = 'Card';

export default Card;
