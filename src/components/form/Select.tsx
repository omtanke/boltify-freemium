import { FC, ReactNode, SelectHTMLAttributes, useId } from 'react';
import classNames from 'classnames';
import themeConfig from '@/config/theme.config';
import { TRounded } from '@/types/rounded.type';
import { IValidationBaseProps } from './Validation';
import Label from './Label';

// @start-snippet:: interface
export type TSelectVariants = 'solid' | 'default' | 'gray' | 'underline';
export type TSelectDimension = 'sm' | 'default' | 'lg';

export interface ISelectBaseProps
	extends SelectHTMLAttributes<HTMLSelectElement>,
		Partial<IValidationBaseProps> {
	id?: string;
	className?: string;
	children: ReactNode;
	name: string;
	rounded?: TRounded;
	value?: string | number | readonly string[] | undefined;
	variant?: TSelectVariants;
	placeholder?: string;
	label?: string;
	isFloatingLabel?: boolean;
}

interface UnderlineVariantProps extends Omit<ISelectBaseProps, 'variant' | 'rounded'> {
	variant: 'underline';
	rounded?: undefined;
}
interface OtherVariantProps extends ISelectBaseProps {
	variant?: Exclude<TSelectVariants, 'underline'>;
}

interface FloatingLabelProps extends ISelectBaseProps {
	isFloatingLabel: true;
	label: string;
	dimension?: undefined;
}
interface NonFloatingLabelProps extends ISelectBaseProps {
	isFloatingLabel?: false;
	label?: string;
	dimension?: TSelectDimension;
}
type TSelectProps = (FloatingLabelProps | NonFloatingLabelProps) &
	(UnderlineVariantProps | OtherVariantProps);
// @end-snippet:: interface
const Select: FC<TSelectProps> = (props) => {
	const {
		id,
		className,
		children,
		name,
		rounded = themeConfig.rounded,
		dimension = 'default',
		variant = 'default',
		placeholder,
		label,
		isFloatingLabel,
		isValid,
		isTouched,
		invalidFeedback,
		...rest
	} = props;

	const defaultId = useId();

	const selectVariants: {
		[key in TSelectVariants]: { general: string; validation: string };
	} = {
		default: {
			general: classNames(
				// Default
				'dark:bg-zinc-900 dark:text-zinc-400',
				'border-zinc-200 dark:border-zinc-700',
				'placeholder-zinc-500',
				// Focus
				'focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-zinc-600',
			),
			validation: classNames({
				'border-red-500! ring-4 ring-red-500/30': !isValid && isTouched && invalidFeedback,
				'border-emerald-500! focus:ring-4 focus:ring-emerald-500/30':
					!isValid && isTouched && !invalidFeedback,
			}),
		},
		solid: {
			general: classNames(
				// Default
				[`border-zinc-100 dark:border-zinc-800`],
				'bg-zinc-100 dark:bg-zinc-800',
				// Hover
				'hover:border-blue-500',
				'dark:hover:border-blue-500',
				// Focus
				'focus:border-zinc-300 dark:focus:border-zinc-800',
				'focus:bg-transparent dark:focus:bg-transparent',
				// Disabled
				'disabled:border-zinc-500!',
			),
			validation: classNames({
				'border-red-500! ring-4 ring-red-500/30': !isValid && isTouched && invalidFeedback,
				'border-emerald-500! focus:ring-4 focus:ring-emerald-500/30':
					!isValid && isTouched && !invalidFeedback,
			}),
		},
		gray: {
			general: classNames(
				// Default
				'bg-zinc-100 dark:bg-zinc-700',
				'dark:text-zinc-400',
				'border-transparent dark:border-transparent',
				'dark:placeholder-zinc-500',
				// Focus
				'focus:ring-blue-500 dark:focus:ring-zinc-600',
				'focus:border-blue-500',
			),

			validation: classNames({
				'border-red-500! ring-4 ring-red-500/30': !isValid && isTouched && invalidFeedback,
				'border-emerald-500! focus:ring-4 focus:ring-emerald-500/30':
					!isValid && isTouched && !invalidFeedback,
			}),
		},
		underline: {
			general: classNames(
				// Default
				'border-b-2 border-x-transparent! border-b-zinc-200 border-t-transparent!',
				'bg-transparent pe-0 dark:border-b-zinc-700 dark:text-zinc-400 dark:placeholder-zinc-500 ',
				// Focus
				'focus:border-x-transparent focus:border-b-blue-500 focus:border-t-transparent focus:ring-0 dark:focus:border-b-zinc-600 dark:focus:ring-zinc-600',
			),
			validation: classNames({
				'border-red-500! ring-4 ring-red-500/30': !isValid && isTouched && invalidFeedback,
				'border-emerald-500! focus:ring-4 focus:ring-emerald-500/30':
					!isValid && isTouched && !invalidFeedback,
			}),
		},
	};
	const selectVariantClasses = selectVariants[variant as TSelectVariants].general;
	const selectValidationsClasses = selectVariants[variant as TSelectVariants].validation;

	/**
	 * Padding & Font Size & Icon Margin
	 */
	const selectDimension: { [key in TSelectDimension]: { general: string } } = {
		sm: {
			general: classNames('px-4', 'py-2', 'text-sm'),
		},
		default: {
			general: classNames('px-4', 'py-3', 'text-base'),
		},
		lg: {
			general: classNames('px-4', 'py-4', 'text-lg'),
		},
	};
	const selectDimensionClasses = selectDimension[dimension].general;

	const classes = classNames(
		'w-full appearance-none outline-0',
		'text-black dark:text-white',
		'disabled:pointer-events-none disabled:opacity-50',
		// themeConfig.transition,
		{
			'peer pe-9 text-sm block': isFloatingLabel,
			'autofill:pb-2 autofill:pt-6 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6':
				isFloatingLabel,
			'focus:border-blue-500 focus:pb-2 focus:pt-6 focus:ring-blue-500 dark:focus:ring-zinc-600':
				isFloatingLabel,
		},
		themeConfig.transition,
		selectVariantClasses,
		selectDimensionClasses,
		{ [`${selectDimensionClasses}`]: !isFloatingLabel, 'p-4': isFloatingLabel },
		{ [`${rounded}`]: variant !== 'underline' },
		selectValidationsClasses,
		className,
	);

	const _SELECT = (
		<select data-component-name='select' className={classes} name={name} {...rest}>
			{placeholder && !rest?.value && (
				<option value={undefined} hidden>
					{placeholder}
				</option>
			)}
			{children}
		</select>
	);

	if (isFloatingLabel) {
		return (
			<div className='relative'>
				{_SELECT}
				<Label
					htmlFor={id || defaultId}
					className='pointer-events-none absolute start-0 top-0 h-full truncate border border-transparent p-4 transition duration-100 ease-in-out peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-zinc-500 peer-focus:-translate-y-1.5 peer-focus:text-xs peer-focus:text-zinc-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 dark:text-white dark:peer-not-placeholder-shown:text-zinc-500 dark:peer-focus:text-zinc-500'>
					{label}
				</Label>
			</div>
		);
	}
	return (
		<>
			{label && !isFloatingLabel && <Label htmlFor={id || defaultId}>{label}</Label>}
			{_SELECT}
		</>
	);
};
Select.displayName = 'Select';

export default Select;
