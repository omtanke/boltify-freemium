import { forwardRef, InputHTMLAttributes } from 'react';
import { IValidationBaseProps } from './Validation';
import { TRounded } from '@/types/rounded.type';
import { TInputDimension, TInputVariants } from './Input';
import themeConfig from '@/config/theme.config';

// @start-snippet:: interface
interface IFileInputBaseProps
	extends InputHTMLAttributes<HTMLInputElement>,
		Partial<IValidationBaseProps> {
	id?: string;
	className?: string;
	name: string;
	rounded?: TRounded;
	dimension?: TInputDimension;
	type?: 'file';
	value?: string | number | readonly string[] | undefined;
	variant?: TInputVariants;
	label?: string;
}

interface UnderlineFileVariantProps extends Omit<IFileInputBaseProps, 'variant' | 'rounded'> {
	variant: 'underline';
	rounded?: undefined;
}

interface OtherFileVariantProps extends IFileInputBaseProps {
	variant?: Exclude<TInputVariants, 'underline'>;
}

type TFileInputProps = UnderlineFileVariantProps | OtherFileVariantProps;
// @end-snippet:: interface

const FileInput = forwardRef<HTMLInputElement, TFileInputProps>((props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		id,
		className,
		name,
		rounded = themeConfig.rounded,
		dimension = 'default',
		variant = 'default',
		isValid,
		isTouched,
		invalidFeedback,
		label,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
});
FileInput.displayName = 'FileInput';

export default FileInput;
