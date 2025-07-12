import {
	Children,
	cloneElement,
	FC,
	forwardRef,
	HTMLAttributes,
	InputHTMLAttributes,
	ReactElement,
	ReactNode,
	useId,
} from 'react';
import classNames from 'classnames';
import themeConfig from '@/config/theme.config';
import { TRounded } from '@/types/rounded.type';
import { IValidationBaseProps } from './Validation';

// @start-snippet:: interface
export type TCheckboxVariants = 'default' | 'switch';
export type TCheckboxDimension = 'sm' | 'default' | 'lg' | 'xl';

interface ICheckboxProps
	extends InputHTMLAttributes<HTMLInputElement>,
		Partial<IValidationBaseProps> {
	checked?: boolean;
	className?: string;
	id?: string;
	inputClassName?: string;
	isInline?: boolean;
	label?: ReactNode;
	description?: ReactNode;
	name?: string;
	rounded?: TRounded;
	dimension?: TCheckboxDimension;
	variant?: TCheckboxVariants;
}
// @end-snippet:: interface
const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>((props, ref) => {
	const {
		checked = false,
		className,
		id,
		inputClassName,
		isInline = false,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		isValidMessage,
		label,
		description,
		rounded = themeConfig.rounded,
		dimension = 'default',
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		validFeedback,
		variant = 'default',
		isValid,
		isTouched,
		invalidFeedback,
		...rest
	} = props;

	const defaultId = useId();
	const isSwitch = variant === 'switch';

	const checkboxVariants: {
		[key in TCheckboxVariants]: { general: string; validation: string };
	} = {
		default: {
			general: classNames(
				// border
				'border-zinc-200 dark:border-zinc-700',
				// hover:border
				[`hover:border-blue-500`],
				[`dark:hover:border-blue-500`],
				'disabled:!border-zinc-500',
				// bg
				'bg-center bg-no-repeat bg-transparent',
				// checked:bg
				"checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE3LjczOCA2LjM1MmExIDEgMCAxIDEgMS41MjQgMS4yOTZsLTguNSAxMGExIDEgMCAwIDEtMS40MjYuMWwtNC41LTRhMSAxIDAgMSAxIDEuMzI4LTEuNDk1bDMuNzM2IDMuMzIgNy44MzgtOS4yMnoiLz48L2c+PC9zdmc+')]",
				"indeterminate:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iI2ZmZmZmZiIgY2xhc3M9InctNiBoLTYiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE5LjUgMTJoLTE1IiAvPgo8L3N2Zz4K')]",
				[`checked:bg-blue-500`],
				[`indeterminate:bg-blue-500`],
				rounded,
			),
			validation: classNames({
				'!border-red-500 ring-4 ring-red-500/30': !isValid && isTouched && invalidFeedback,
				'!border-emerald-500 focus:ring-4 focus:ring-emerald-500/30':
					isValid && isTouched && !invalidFeedback,
			}),
		},
		switch: {
			general: classNames(
				'rounded-full',
				// border
				'border-zinc-100 dark:border-zinc-800',
				// hover:border
				[`hover:border-blue-500`],
				[`dark:hover:border-blue-500`],
				'disabled:!border-zinc-500',
				// bg
				'bg-left bg-no-repeat bg-transparent bg-auto bg-origin-content',
				'bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA4IDgiPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIzIiBvcGFjaXR5PSIuMjUiLz48L3N2Zz4=")]',
				'dark:bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA4IDgiPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIzIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuMjUiLz48L3N2Zz4=")]',
				// checked:bg
				[`checked:bg-blue-500`],
				'checked:!bg-right',
				'checked:!bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA4IDgiPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIzIiBmaWxsPSIjZmZmIi8+PC9zdmc+")]',
			),
			validation: classNames(),
		},
	};
	const checkboxVariantClasses = checkboxVariants[variant].general;
	const checkboxValidationsClasses = checkboxVariants[variant].validation;

	/**
	 * Width&Height & Margin & Font Size
	 */
	const checkboxDimensions: {
		[key in TCheckboxDimension]: { general: string; label: string };
	} = {
		sm: {
			general: classNames({ 'w-5': !isSwitch, 'w-8': isSwitch }, 'h-5', {
				'me-1': label || description,
			}),
			label: classNames('text-sm'),
		},
		default: {
			general: classNames({ 'w-7': !isSwitch, 'w-12': isSwitch }, 'h-7', {
				'me-1.5': label || description,
			}),
			label: classNames('text-base'),
		},
		lg: {
			general: classNames({ 'w-9': !isSwitch, 'w-16': isSwitch }, 'h-9', {
				'me-2': label || description,
			}),
			label: classNames('text-lg'),
		},
		xl: {
			general: classNames({ 'w-10': !isSwitch, 'w-[4.5rem]': isSwitch }, 'h-10', {
				'me-2.5': label || description,
			}),
			label: classNames('text-xl'),
		},
	};
	const checkboxDimensionClasses = checkboxDimensions[dimension].general;
	const labelDimensionClasses = checkboxDimensions[dimension].label;

	const checkboxClasses = classNames(
		'cursor-pointer appearance-none',
		'disabled:!opacity-25',
		themeConfig.borderWidth,
		themeConfig.transition,
		'!transition-[background-position,border-color,background-color]',
		checkboxVariantClasses,
		checkboxDimensionClasses,
		checkboxValidationsClasses,
		inputClassName,
	);

	return (
		<div
			data-component-name='Checkbox'
			className={classNames(
				'items-center py-1.5',
				{ flex: !isInline, 'inline-flex': isInline, 'me-4': isInline },
				className,
			)}>
			<input
				ref={ref}
				checked={checked}
				id={id || defaultId}
				value={id || defaultId}
				type='checkbox'
				className={checkboxClasses}
				{...rest}
			/>
			{(label || description) && (
				<div className='flex flex-col'>
					{!!label && (
						<label
							htmlFor={id || defaultId}
							className={classNames(
								'cursor-pointer text-base',
								{ '!pointer-events-none opacity-50': rest?.disabled },
								labelDimensionClasses,
							)}>
							{label}
						</label>
					)}
					{!!description && (
						<label
							htmlFor={id || defaultId}
							className={classNames(
								'cursor-pointer text-sm text-zinc-500',
								{ '!pointer-events-none opacity-50': rest?.disabled },
								labelDimensionClasses,
							)}>
							{description}
						</label>
					)}
				</div>
			)}
		</div>
	);
});
Checkbox.displayName = 'Checkbox';

// @start-snippet:: interface
interface ICheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactElement<ICheckboxProps> | ReactElement<ICheckboxProps>[];
	invalidFeedback?: string;
	isInline?: boolean;
	isTouched?: boolean;
	isValid?: boolean;
	isValidMessage?: boolean;
	validFeedback?: string;
}
// @end-snippet:: interface
export const CheckboxGroup: FC<ICheckboxGroupProps> = (props) => {
	const {
		children,
		invalidFeedback,
		isInline = true,
		isTouched = false,
		isValid = false,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		isValidMessage = true,
		validFeedback,
		...rest
	} = props;
	return (
		<div data-component-name='Checkbox/CheckboxGroup' {...rest}>
			{Children.map(children, (child) =>
				cloneElement(child, {
					isInline: child.props.isInline || isInline,
					isValid,
					isTouched,
					invalidFeedback,
					validFeedback,
					isValidMessage: false,
				}),
			)}
		</div>
	);
};

export default Checkbox;
