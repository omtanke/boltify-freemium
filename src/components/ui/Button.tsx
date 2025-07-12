import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import classNames from 'classnames';
import { TColors } from '@/types/colors.type';
import { TRounded } from '@/types/rounded.type';
import { TIcons } from '@/types/icons.type';
import { TBorderWidth } from '@/types/borderWidth.type';
import themeConfig from '@/config/theme.config';
import Icon from '@/components/icon/Icon';

// @start-snippet:: interface
export type TButtonVariants = 'solid' | 'outline' | 'default' | 'soft' | 'link';
export type TButtonDimensions = 'xs' | 'sm' | 'default' | 'lg' | 'xl';
// @end-snippet:: interface

// @start-snippet:: interface
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	borderWidth?: TBorderWidth;
	children?: ReactNode;
	className?: string;
	color?: TColors;
	icon?: TIcons;
	isActive?: boolean;
	isDisable?: boolean;
	isLoading?: boolean;
	rightIcon?: TIcons;
	rounded?: TRounded;
	dimension?: TButtonDimensions;
	variant?: TButtonVariants;
}
// @end-snippet:: interface
const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
	const {
		borderWidth = 'border',
		children,
		className,
		color = themeConfig.themeColor,
		icon,
		isActive = false,
		isDisable = false,
		isLoading = false,
		rightIcon,
		rounded = themeConfig.rounded,
		dimension = 'default',
		variant = 'default',
		type = 'button',
		...rest
	} = props;
	const HAS_CHILDREN = typeof children !== 'undefined';

	/**
	 * Variant & Color & Status
	 */
	const btnVariants: Record<TButtonVariants, Record<TColors, string>> = {
		solid: {
			primary:
				'text-zinc-800 border-primary-500 bg-primary-500 hover:border-primary-600 hover:bg-primary-600 active:border-primary-600 active:bg-primary-600 data-active:border-primary-600 data-active:bg-primary-600',
			secondary:
				'border-secondary-500 bg-secondary-500 hover:border-secondary-600 hover:bg-secondary-600 active:border-secondary-600 active:bg-secondary-600 data-active:border-secondary-600 data-active:bg-secondary-600 text-zinc-200',
			blue: 'border-blue-500 bg-blue-500 hover:border-blue-600 hover:bg-blue-600 active:border-blue-600 active:bg-blue-600 data-active:border-blue-600 data-active:bg-blue-600 text-zinc-200',
			amber: 'border-amber-500 bg-amber-500 hover:border-amber-600 hover:bg-amber-600 active:border-amber-600 active:bg-amber-600 data-active:border-amber-600 data-active:bg-amber-600 dark:text-zinc-800',
			zinc: 'border-zinc-500 bg-zinc-500 hover:border-zinc-600 hover:bg-zinc-600 active:border-zinc-600 active:bg-zinc-600 data-active:border-zinc-600 data-active:bg-zinc-600 text-zinc-200',
			red: 'border-red-500 bg-red-500 hover:border-red-600 hover:bg-red-600 active:border-red-600 active:bg-red-600 data-active:border-red-600 data-active:bg-red-600 text-zinc-200',
			lime: 'border-lime-500 bg-lime-500 hover:border-lime-600 hover:bg-lime-600 active:border-lime-600 active:bg-lime-600 data-active:border-lime-600 data-active:bg-lime-600 dark:text-zinc-800',
			emerald:
				'border-emerald-500 bg-emerald-500 hover:border-emerald-600 hover:bg-emerald-600 active:border-emerald-600 active:bg-emerald-600 data-active:border-emerald-600 data-active:bg-emerald-600 dark:text-zinc-800',
			sky: 'border-sky-500 bg-sky-500 hover:border-sky-600 hover:bg-sky-600 active:border-sky-600 active:bg-sky-600 data-active:border-sky-600 data-active:bg-sky-600 text-zinc-200',
			violet: 'border-violet-500 bg-violet-500 hover:border-violet-600 hover:bg-violet-600 active:border-violet-600 active:bg-violet-600 data-active:border-violet-600 data-active:bg-violet-600 text-zinc-200',
		},
		outline: {
			primary:
				'border-primary-500/50 bg-transparent text-black hover:border-primary-500 active:border-primary-500 data-active:border-primary-500 dark:text-white',
			secondary:
				'border-secondary-500/50 bg-transparent text-black hover:border-secondary-500 active:border-secondary-500 data-active:border-secondary-500 dark:text-white',
			zinc: 'border-zinc-500/50 bg-transparent text-black hover:border-zinc-500 active:border-zinc-500 data-active:border-zinc-500 dark:text-white',
			red: 'border-red-500/50 bg-transparent text-black hover:border-red-500 active:border-red-500 data-active:border-red-500 dark:text-white',
			amber: 'border-amber-500/50 bg-transparent text-black hover:border-amber-500 active:border-amber-500 data-active:border-amber-500 dark:text-white',
			lime: 'border-lime-500/50 bg-transparent text-black hover:border-lime-500 active:border-lime-500 data-active:border-lime-500 dark:text-white',
			emerald:
				'border-emerald-500/50 bg-transparent text-black hover:border-emerald-500 active:border-emerald-500 data-active:border-emerald-500 dark:text-white',
			sky: 'border-sky-500/50 bg-transparent text-black hover:border-sky-500 active:border-sky-500 data-active:border-sky-500 dark:text-white',
			blue: 'border-blue-500/50 bg-transparent text-black hover:border-blue-500 active:border-blue-500 data-active:border-blue-500 dark:text-white',
			violet: 'border-violet-500/50 bg-transparent text-black hover:border-violet-500 active:border-violet-500 data-active:border-violet-500 dark:text-white',
		},
		default: {
			primary:
				'border-transparent bg-transparent text-primary-500 hover:text-primary-400 active:text-primary-400 data-active:text-primary-400 dark:hover:text-primary-400',
			secondary:
				'border-transparent bg-transparent text-secondary-500 hover:text-secondary-400 active:text-secondary-400 data-active:text-secondary-400 dark:hover:text-secondary-400',
			zinc: 'border-transparent bg-transparent text-zinc-500 hover:text-zinc-400 active:text-zinc-400 data-active:text-zinc-400 dark:hover:text-zinc-400',
			red: 'border-transparent bg-transparent text-red-500 hover:text-red-400 active:text-red-400 data-active:text-red-400 dark:hover:text-red-400',
			amber: 'border-transparent bg-transparent text-amber-500 hover:text-amber-400 active:text-amber-400 data-active:text-amber-400 dark:hover:text-amber-400',
			lime: 'border-transparent bg-transparent text-lime-500 hover:text-lime-400 active:text-lime-400 data-active:text-lime-400 dark:hover:text-lime-400',
			emerald:
				'border-transparent bg-transparent text-emerald-500 hover:text-emerald-400 active:text-emerald-400 data-active:text-emerald-400 dark:hover:text-emerald-400',
			sky: 'border-transparent bg-transparent text-sky-500 hover:text-sky-400 active:text-sky-400 data-active:text-sky-400 dark:hover:text-sky-400',
			blue: 'border-transparent bg-transparent text-blue-500 hover:text-blue-400 active:text-blue-400 data-active:text-blue-400 dark:hover:text-blue-400',
			violet: 'border-transparent bg-transparent text-violet-500 hover:text-violet-400 active:text-violet-400 data-active:text-violet-400 dark:hover:text-violet-400',
		},
		soft: {
			primary:
				'border-transparent bg-primary-500/25 text-primary-500 hover:border-primary-600/50 hover:bg-primary-600/50 active:border-primary-600/50 active:bg-primary-600/50 data-active:border-primary-600/50 data-active:bg-primary-600/50',
			secondary:
				'border-transparent bg-secondary-500/25 text-secondary-500 hover:border-secondary-600/50 hover:bg-secondary-600/50 active:border-secondary-600/50 active:bg-secondary-600/50 data-active:border-secondary-600/50 data-active:bg-secondary-600/50',
			zinc: 'border-transparent bg-zinc-500/25 text-zinc-500 hover:border-zinc-600/50 hover:bg-zinc-600/50 active:border-zinc-600/50 active:bg-zinc-600/50 data-active:border-zinc-600/50 data-active:bg-zinc-600/50',
			red: 'border-transparent bg-red-500/25 text-red-500 hover:border-red-600/50 hover:bg-red-600/50 active:border-red-600/50 active:bg-red-600/50 data-active:border-red-600/50 data-active:bg-red-600/50',
			amber: 'border-transparent bg-amber-500/25 text-amber-500 hover:border-amber-600/50 hover:bg-amber-600/50 active:border-amber-600/50 active:bg-amber-600/50 data-active:border-amber-600/50 data-active:bg-amber-600/50',
			lime: 'border-transparent bg-lime-500/25 text-lime-500 hover:border-lime-600/50 hover:bg-lime-600/50 active:border-lime-600/50 active:bg-lime-600/50 data-active:border-lime-600/50 data-active:bg-lime-600/50',
			emerald:
				'border-transparent bg-emerald-500/25 text-emerald-500 hover:border-emerald-600/50 hover:bg-emerald-600/50 active:border-emerald-600/50 active:bg-emerald-600/50 data-active:border-emerald-600/50 data-active:bg-emerald-600/50',
			sky: 'border-transparent bg-sky-500/25 text-sky-500 hover:border-sky-600/50 hover:bg-sky-600/50 active:border-sky-600/50 active:bg-sky-600/50 data-active:border-sky-600/50 data-active:bg-sky-600/50',
			blue: 'border-transparent bg-blue-500/25 text-blue-500 hover:border-blue-600/50 hover:bg-blue-600/50 active:border-blue-600/50 active:bg-blue-600/50 data-active:border-blue-600/50 data-active:bg-blue-600/50',
			violet: 'border-transparent bg-violet-500/25 text-violet-500 hover:border-violet-600/50 hover:bg-violet-600/50 active:border-violet-600/50 active:bg-violet-600/50 data-active:border-violet-600/50 data-active:bg-violet-600/50',
		},
		link: {
			primary:
				'border-transparent bg-transparent text-zinc-800 hover:text-primary-400 active:text-primary-500 data-active:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-400 dark:active:text-primary-500 dark:data-active:text-primary-500',
			secondary:
				'border-transparent bg-transparent text-zinc-800 hover:text-secondary-400 active:text-secondary-500 data-active:text-secondary-500 dark:text-zinc-200 dark:hover:text-secondary-400 dark:active:text-secondary-500 dark:data-active:text-secondary-500',
			zinc: 'border-transparent bg-transparent text-zinc-800 hover:text-zinc-400 active:text-zinc-500 data-active:text-zinc-500 dark:text-zinc-200 dark:hover:text-zinc-400 dark:active:text-zinc-500 dark:data-active:text-zinc-500',
			red: 'border-transparent bg-transparent text-zinc-800 hover:text-red-400 active:text-red-500 data-active:text-red-500 dark:text-zinc-200 dark:hover:text-red-400 dark:active:text-red-500 dark:data-active:text-red-500',
			amber: 'border-transparent bg-transparent text-zinc-800 hover:text-amber-400 active:text-amber-500 data-active:text-amber-500 dark:text-zinc-200 dark:hover:text-amber-400 dark:active:text-amber-500 dark:data-active:text-amber-500',
			lime: 'border-transparent bg-transparent text-zinc-800 hover:text-lime-400 active:text-lime-500 data-active:text-lime-500 dark:text-zinc-200 dark:hover:text-lime-400 dark:active:text-lime-500 dark:data-active:text-lime-500',
			emerald:
				'border-transparent bg-transparent text-zinc-800 hover:text-emerald-400 active:text-emerald-500 data-active:text-emerald-500 dark:text-zinc-200 dark:hover:text-emerald-400 dark:active:text-emerald-500 dark:data-active:text-emerald-500',
			sky: 'border-transparent bg-transparent text-zinc-800 hover:text-sky-400 active:text-sky-500 data-active:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-400 dark:active:text-sky-500 dark:data-active:text-sky-500',
			blue: 'border-transparent bg-transparent text-zinc-800 hover:text-blue-400 active:text-blue-500 data-active:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-400  dark:active:text-blue-500 dark:data-active:text-blue-500',
			violet: 'border-transparent bg-transparent text-zinc-800 hover:text-violet-400 active:text-violet-500 data-active:text-violet-500 dark:text-zinc-200 dark:hover:text-violet-400 dark:active:text-violet-500 dark:data-active:text-violet-500',
		},
	};
	const btnVariantClasses = btnVariants[variant][color];

	/**
	 * Padding & Font Size & Icon Margin
	 */
	const btnDimensions: {
		[key in TButtonDimensions]: { general: string; icon: string; rightIcon: string };
	} = {
		xs: {
			general: classNames(
				{
					'px-3': HAS_CHILDREN,
					'px-0.5': !HAS_CHILDREN,
				},
				'py-0.5',
				'text-xs',
			),
			icon: classNames({ 'ltr:mr-1 rtl:ml-1': HAS_CHILDREN }, 'text-[1.125rem]'),
			rightIcon: classNames('ltr:ml-1', 'rtl:mr-1', 'text-[1.125rem]'),
		},
		sm: {
			general: classNames(
				{
					'px-4': HAS_CHILDREN,
					'px-1': !HAS_CHILDREN,
				},
				'py-1',
				'text-sm',
			),
			icon: classNames({ 'ltr:mr-1 rtl:ml-1': HAS_CHILDREN }, 'text-[1.25rem]'),
			rightIcon: classNames('ltr:ml-1', 'rtl:mr-1', 'text-[1.25rem]'),
		},
		default: {
			general: classNames(
				{
					'px-5': HAS_CHILDREN,
					'px-1.5': !HAS_CHILDREN,
				},
				'py-1.5',
				'text-base',
			),
			icon: classNames({ 'ltr:mr-1.5 rtl:ml-1.5': HAS_CHILDREN }, 'text-[1.5rem]'),
			rightIcon: classNames('ltr:ml-1.5', 'rtl:mr-1.5', 'text-[1.5rem]'),
		},
		lg: {
			general: classNames(
				{
					'px-6': HAS_CHILDREN,
					'px-2': !HAS_CHILDREN,
				},
				'py-2',
				'text-lg',
			),
			icon: classNames({ 'ltr:mr-2 rtl:ml-2': HAS_CHILDREN }, 'text-[1.75rem]'),
			rightIcon: classNames('ltr:ml-2', 'rtl:mr-2', 'text-[1.75rem]'),
		},
		xl: {
			general: classNames(
				{
					'px-7': HAS_CHILDREN,
					'px-2.5': !HAS_CHILDREN,
				},
				'py-2.5',
				'text-xl',
			),
			icon: classNames({ 'ltr:mr-2.5 rtl:ml-2.5': HAS_CHILDREN }, 'text-[1.75rem]'),
			rightIcon: classNames('ltr:ml-2.5', 'rtl:mr-2.5'),
		},
	};
	const btnDimensionClasses = btnDimensions[dimension].general;
	const btnIconClasses = btnDimensions[dimension].icon;
	const btnRightIconClasses = HAS_CHILDREN ? btnDimensions[dimension].rightIcon : undefined;

	/**
	 * Disable
	 */
	const btnDisabledClasses = 'opacity-50 pointer-events-none';

	const classes = classNames(
		'inline-flex items-center justify-center cursor-pointer',
		btnVariantClasses,
		btnDimensionClasses,
		[`${borderWidth}`],
		rounded,
		themeConfig.transition,
		{ [`${btnDisabledClasses}`]: isDisable || isLoading },
		className,
	);

	return (
		<button
			{...(isActive && { 'data-active': '' })}
			ref={ref}
			data-component-name='Button'
			type={type}
			className={classes}
			{...rest}>
			{(!!icon || isLoading) && (
				<Icon
					icon={isLoading ? 'Loading03' : (icon as TIcons)}
					className={classNames(
						{ 'origin-center animate-spin duration-300': isLoading },
						btnIconClasses,
					)}
				/>
			)}
			{children}
			{!!rightIcon && <Icon icon={rightIcon} className={classNames(btnRightIconClasses)} />}
		</button>
	);
});
Button.displayName = 'Button';

export default Button;
