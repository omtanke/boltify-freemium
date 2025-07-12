import { Dispatch, FC, HTMLAttributes, SetStateAction } from 'react';
import { Descendant } from 'slate';
import { TBorderWidth } from '@/types/borderWidth.type';
import { TColors } from '@/types/colors.type';
import { TRounded } from '@/types/rounded.type';
import themeConfig from '@/config/theme.config';

export type TRichTextVariants = 'solid';

interface IRichTextProps extends HTMLAttributes<HTMLDivElement> {
	borderWidth?: TBorderWidth;
	className?: string;
	color?: TColors;
	invalidFeedback?: string;
	isTouched?: boolean;
	isValid?: boolean;
	isValidMessage?: boolean;
	validFeedback?: string;
	rounded?: TRounded;
	variant?: TRichTextVariants;
	value: Descendant[] | [];
	handleChange: Dispatch<SetStateAction<Descendant[] | []>>;
	placeholder?: string;
}
const RichText: FC<IRichTextProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */

	const {
		borderWidth = themeConfig.borderWidth,
		className,
		color = themeConfig.themeColor,
		invalidFeedback,
		isTouched = false,
		isValid = false,
		isValidMessage = true,
		rounded = themeConfig.rounded,
		validFeedback,
		variant = 'solid',
		value,
		handleChange,
		placeholder = 'Enter some rich text…',
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};

export default RichText;
