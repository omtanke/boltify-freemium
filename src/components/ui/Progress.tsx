import { FC, HTMLAttributes, ReactNode } from 'react';
import { TRounded } from '@/types/rounded.type';
import { TColors } from '@/types/colors.type';
import themeConfig from '@/config/theme.config';

// @start-snippet:: interface
interface IProgressBarProps extends HTMLAttributes<HTMLDivElement> {
	value?: number;
	min?: number;
	max?: number;
	color?: TColors;
	label?: ReactNode;
	isStraight?: boolean;
	isVertical?: boolean;
}
// @end-snippet:: interface
/**
 * Only used as a child of the Progress component
 * @param props
 * @constructor
 */
export const ProgressBar: FC<IProgressBarProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		value,
		min = 0,
		max = 100,
		color = themeConfig.themeColor,
		label,
		isStraight,
		isVertical,
		className,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};

// @start-snippet:: interface
interface IProgressProps extends IProgressBarProps {
	className?: string;
	rounded?: TRounded;
	labelEnd?: ReactNode;
	children?: ReactNode;
}
// @end-snippet:: interface
const Progress: FC<IProgressProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		value,
		className,
		min = 0,
		max = 100,
		rounded = 'rounded-full',
		label,
		labelEnd,
		color = themeConfig.themeColor,
		children,
		isVertical,
		isStraight,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};

export default Progress;
