import { FC } from 'react';
import classNames from 'classnames';
import { TRounded } from '@/types/rounded.type';
import themeConfig from '@/config/theme.config';
import getFirstLetterUtil from '@/utils/getFirstLetter.util';
import { TColors } from '@/types/colors.type';
import { TBorderWidth } from '@/types/borderWidth.type';

// @start-snippet:: interface
export type TAvatarSize =
	| 'w-2'
	| 'w-2.5'
	| 'w-3'
	| 'w-3.5'
	| 'w-4'
	| 'w-5'
	| 'w-6'
	| 'w-7'
	| 'w-8'
	| 'w-9'
	| 'w-10'
	| 'w-11'
	| 'w-12'
	| 'w-14'
	| 'w-16'
	| 'w-20'
	| 'w-24'
	| 'w-28'
	| 'w-32'
	| 'w-36'
	| 'w-40'
	| 'w-44'
	| 'w-48'
	| 'w-52'
	| 'w-56'
	| 'w-60'
	| 'w-64'
	| 'w-72'
	| 'w-80'
	| 'w-96';
export type TAvatarVariants = 'solid' | 'outline' | 'default' | 'soft';
// @end-snippet:: interface

// @start-snippet:: interface
export interface IAvatarProps {
	src?: string;
	name?: string;
	className?: string;
	size?: TAvatarSize;
	borderWidth?: TBorderWidth;
	color?: TColors;
	rounded?: TRounded;
	variant?: TAvatarVariants;
}
// @end-snippet:: interface
const Avatar: FC<IAvatarProps> = (props) => {
	const {
		src,
		name = 'Anonymous',
		className,
		borderWidth = themeConfig.borderWidth,
		color = themeConfig.themeColor,
		size = 'w-12',
		rounded = 'rounded-full',
		variant = 'soft',
		...rest
	} = props;

	const avatarVariants: Record<TAvatarVariants, Record<TColors, string>> = {
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
			primary: 'border-primary-500 bg-primary-500/25 text-primary-500',
			secondary: 'border-secondary-500 bg-secondary-500/25 text-secondary-500',
			zinc: 'border-zinc-500 bg-zinc-500/25 text-zinc-500',
			red: 'border-red-500 bg-red-500/25 text-red-500',
			amber: 'border-amber-500 bg-amber-500/25 text-amber-500',
			lime: 'border-lime-500 bg-lime-500/25 text-lime-500',
			emerald: 'border-emerald-500 bg-emerald-500/25 text-emerald-500',
			sky: 'border-sky-500 bg-sky-500/25 text-sky-500',
			blue: 'border-blue-500 bg-blue-500/25 text-blue-500',
			violet: 'border-violet-500 bg-violet-500/25 text-violet-500',
		},
		default: {
			primary: 'border-transparent text-primary-500',
			secondary: 'border-transparent text-secondary-500',
			zinc: 'border-transparent text-zinc-500',
			red: 'border-transparent text-red-500',
			amber: 'border-transparent text-amber-500',
			lime: 'border-transparent text-lime-500',
			emerald: 'border-transparent text-emerald-500',
			sky: 'border-transparent text-sky-500',
			blue: 'border-transparent text-blue-500',
			violet: 'border-transparent text-violet-500',
		},
		soft: {
			primary: 'border-transparent bg-primary-500/25 text-primary-500',
			secondary: 'border-transparent bg-secondary-500/25 text-secondary-500',
			zinc: 'border-transparent bg-zinc-500/25 text-zinc-500',
			red: 'border-transparent bg-red-500/25 text-red-500',
			amber: 'border-transparent bg-amber-500/25 text-amber-500',
			lime: 'border-transparent bg-lime-500/25 text-lime-500',
			emerald: 'border-transparent bg-emerald-500/25 text-emerald-500',
			sky: 'border-transparent bg-sky-500/25 text-sky-500',
			blue: 'border-transparent bg-blue-500/25 text-blue-500',
			violet: 'border-transparent bg-violet-500/25 text-violet-500',
		},
	};
	const avatarVariantClasses = avatarVariants[variant][color];

	const sharedClass = classNames(
		'aspect-square',
		size,
		[`${borderWidth}`],
		[`${rounded}`],
		avatarVariantClasses,
		className,
	);

	if (src) {
		return (
			<img
				data-component-name='Avatar'
				className={classNames('object-cover', sharedClass)}
				src={src}
				alt={name}
				{...rest}
			/>
		);
	}
	return (
		<div
			data-component-name='Avatar'
			className={classNames('flex items-center justify-center font-bold', sharedClass)}>
			{getFirstLetterUtil(name)}
		</div>
	);
};
Avatar.displayName = 'Avatar';

export default Avatar;
