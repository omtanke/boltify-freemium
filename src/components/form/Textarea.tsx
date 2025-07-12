import { FC, TextareaHTMLAttributes, useId } from 'react';
import classNames from 'classnames';
import { IValidationBaseProps } from './Validation';
import { TRounded } from '@/types/rounded.type';
import themeConfig from '@/config/theme.config';
import { TInputDimension, TInputVariants } from './Input';
import Label from './Label';

// @start-snippet:: interface
export type TTextareaVariants = 'solid' | 'default' | 'gray' | 'underline';
export type TTextareaDimension = 'sm' | 'default' | 'lg';

interface ITextareaBaseProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement>,
		Partial<IValidationBaseProps> {
	id?: string;
	className?: string;
	rounded?: TRounded;
	dimension?: TTextareaDimension;
	value?: string | number | readonly string[] | undefined;
	variant?: TTextareaVariants;
	label?: string;
	isFloatingLabel?: boolean;
}

interface UnderlineTextareaVariantProps extends Omit<ITextareaBaseProps, 'variant' | 'rounded'> {
	variant: 'underline';
	rounded?: undefined;
}

interface OtherTextareaVariantProps extends ITextareaBaseProps {
	variant?: Exclude<TTextareaVariants, 'underline'>;
}

interface FloatingLabelTextareaProps extends ITextareaBaseProps {
	isFloatingLabel: true;
	label: string;
	dimension?: undefined;
}

interface NonFloatingLabelTextareaProps extends ITextareaBaseProps {
	isFloatingLabel?: false;
	label?: string;
	dimension?: TTextareaDimension;
}

type TTextareaProps = (FloatingLabelTextareaProps | NonFloatingLabelTextareaProps) &
	(UnderlineTextareaVariantProps | OtherTextareaVariantProps);
// @end-snippet:: interface
const Textarea: FC<TTextareaProps> = (props) => {
	const {
		id,
		className,
		rounded = themeConfig.rounded,
		dimension = 'default',
		isValid,
		isTouched,
		invalidFeedback,
		variant = 'default',
		label,
		isFloatingLabel,
		...rest
	} = props;

	const defaultId = useId();

	const inputVariants: { [key in TInputVariants]: { general: string; validation: string } } = {
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
	const inputVariantClasses = inputVariants[variant as TInputVariants].general;
	const inputValidationsClasses = inputVariants[variant as TInputVariants].validation;

	/**
	 * Padding & Font Size & Icon Margin
	 */
	const inputDimension: { [key in TInputDimension]: { general: string } } = {
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
	const inputDimensionClasses = inputDimension[dimension].general;

	const classes = classNames(
		'w-full peer block appearance-none outline-0',
		'text-black dark:text-white',
		'disabled:pointer-events-none disabled:opacity-50',
		// themeConfig.transition,
		{
			'peer placeholder:text-transparent!': isFloatingLabel,
			'autofill:pb-2 autofill:pt-6 not-placeholder-shown:pb-2 not-placeholder-shown:pt-6':
				isFloatingLabel,
			'focus:border-blue-500 focus:pb-2 focus:pt-6 focus:ring-blue-500 dark:focus:ring-zinc-600':
				isFloatingLabel,
		},
		inputVariantClasses,
		{ [`${inputDimensionClasses}`]: !isFloatingLabel, 'p-4': isFloatingLabel },
		{ [`${rounded}`]: variant !== 'underline' },
		inputValidationsClasses,
		className,
	);

	const _TEXTAREA = (
		<textarea
			id={id || defaultId}
			data-component-name='Textarea'
			className={classes}
			{...rest}
		/>
	);

	if (isFloatingLabel) {
		return (
			<div className='relative'>
				{_TEXTAREA}
				<Label
					htmlFor={id || defaultId}
					className='pointer-events-none absolute start-0 top-0 h-full origin-[0_0] truncate border border-transparent p-4 text-sm transition duration-100 ease-in-out peer-not-placeholder-shown:translate-x-0.5 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:text-zinc-500 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:scale-90 peer-focus:text-zinc-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 dark:text-white dark:peer-not-placeholder-shown:text-zinc-500 dark:peer-focus:text-zinc-500'>
					{label}
				</Label>
			</div>
		);
	}
	return (
		<>
			{label && !isFloatingLabel && <Label htmlFor={id || defaultId}>{label}</Label>}
			{_TEXTAREA}
		</>
	);
};
Textarea.displayName = 'Textarea';

export default Textarea;
