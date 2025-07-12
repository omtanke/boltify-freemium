import { FC, HTMLAttributes, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { TColors } from '@/types/colors.type';
import themeConfig from '@/config/theme.config';
import { TIcons } from '@/types/icons.type';
import Icon from '@/components/icon/Icon';
import { TFontSizes } from '@/types/fontSizes.type';
import { TRounded } from '@/types/rounded.type';
import { TBorderWidth } from '@/types/borderWidth.type';
import CloseButton from './CloseButton';

// @start-snippet:: interface
export type TAlertVariants = 'solid' | 'outline' | 'default' | 'soft';
// @end-snippet:: interface

// @start-snippet:: interface
interface IAlertProps extends HTMLAttributes<HTMLDivElement> {
	borderWidth?: TBorderWidth;
	children: ReactNode;
	className?: string;
	color?: TColors;
	icon?: TIcons;
	iconSize?: TFontSizes;
	isClosable?: boolean;
	rounded?: TRounded;
	title?: string;
	variant?: TAlertVariants;
}
// @end-snippet:: interface
const Alert: FC<IAlertProps> = (props) => {
	const {
		borderWidth = themeConfig.borderWidth,
		children,
		className,
		color = themeConfig.themeColor,
		icon,
		iconSize = 'text-3xl',
		isClosable,
		rounded = themeConfig.rounded,
		title,
		variant = 'default',
		...rest
	} = props;
	const [status, setStatus] = useState<boolean>(true);

	const alertVariants: Record<TAlertVariants, Record<TColors, string>> = {
		solid: {
			primary: 'bg-primary-500 border-transparent text-zinc-800',
			secondary: 'bg-secondary-500 border-transparent text-zinc-800 dark:text-zinc-200',
			zinc: 'bg-zinc-500 border-transparent text-zinc-800 dark:text-zinc-200',
			red: 'bg-red-500 border-transparent text-zinc-800 dark:text-zinc-200',
			amber: 'bg-amber-500 border-transparent text-zinc-800 dark:text-zinc-200',
			lime: 'bg-lime-500 border-transparent text-zinc-800 dark:text-zinc-200',
			emerald: 'bg-emerald-500 border-transparent text-zinc-800 dark:text-zinc-200',
			sky: 'bg-sky-500 border-transparent text-zinc-800 dark:text-zinc-200',
			blue: 'bg-blue-500 border-transparent text-zinc-800 dark:text-zinc-200',
			violet: 'bg-violet-500 border-transparent text-zinc-800 dark:text-zinc-200',
		},
		outline: {
			primary: 'border-primary-500 bg-primary-500/10 text-primary-500',
			secondary: 'border-secondary-500 bg-secondary-500/10 text-secondary-500',
			zinc: 'border-zinc-500 bg-zinc-500/10 text-zinc-500',
			red: 'border-red-500 bg-red-500/10 text-red-500',
			amber: 'border-amber-500 bg-amber-500/10 text-amber-500',
			lime: 'border-lime-500 bg-lime-500/10 text-lime-500',
			emerald: 'border-emerald-500 bg-emerald-500/10 text-emerald-500',
			sky: 'border-sky-500 bg-sky-500/10 text-sky-500',
			blue: 'border-blue-500 bg-blue-500/10 text-blue-500',
			violet: 'border-violet-500 bg-violet-500/10 text-violet-500',
		},
		default: {
			primary: 'text-primary-500 border-transparent',
			secondary: 'text-secondary-500 border-transparent',
			zinc: 'text-zinc-500 border-transparent',
			red: 'text-red-500 border-transparent',
			amber: 'text-amber-500 border-transparent',
			lime: 'text-lime-500 border-transparent',
			emerald: 'text-emerald-500 border-transparent',
			sky: 'text-sky-500 border-transparent',
			blue: 'text-blue-500 border-transparent',
			violet: 'text-violet-500 border-transparent',
		},
		soft: {
			primary: 'bg-primary-500/10 text-primary-500 border-transparent',
			secondary: 'bg-secondary-500/10 text-secondary-500 border-transparent',
			zinc: 'bg-zinc-500/10 text-zinc-500 border-transparent',
			red: 'bg-red-500/10 text-red-500 border-transparent',
			amber: 'bg-amber-500/10 text-amber-500 border-transparent',
			lime: 'bg-lime-500/10 text-lime-500 border-transparent',
			emerald: 'bg-emerald-500/10 text-emerald-500 border-transparent',
			sky: 'bg-sky-500/10 text-sky-500 border-transparent',
			blue: 'bg-blue-500/10 text-blue-500 border-transparent',
			violet: 'bg-violet-500/10 text-violet-500 border-transparent',
		},
	};
	const alertVariantClasses = alertVariants[variant][color];

	const classes = classNames(
		'relative',
		'flex h-fit items-stretch',
		'p-4',
		[`${borderWidth}`],
		[`${rounded}`],
		alertVariantClasses,
		className,
	);

	if (status)
		return (
			<div data-component-name='Alert' className={classes} {...rest}>
				{icon && (
					<Icon
						icon={icon}
						className='shrink-0 self-center ltr:mr-4 rtl:ml-4'
						size={iconSize}
					/>
				)}
				<div className='w-full grow self-center'>
					{title && <div className='text-lg font-semibold'>{title}</div>}
					<div>{children}</div>
				</div>
				{isClosable && (
					<div className='flex h-full grow items-start'>
						<CloseButton color={color} setIsOpen={setStatus} aria-label='Close' />
					</div>
				)}
			</div>
		);
	return null;
};
Alert.displayName = 'Alert';

export default Alert;
