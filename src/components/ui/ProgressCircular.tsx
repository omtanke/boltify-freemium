import { FC, HTMLAttributes, ReactNode } from 'react';
import { TColors } from '@/types/colors.type';
import themeConfig from '@/config/theme.config';

// @start-snippet:: interface
interface IProgressCircularProps extends HTMLAttributes<HTMLDivElement> {
	value?: number;
	min?: number;
	max?: number;
	color?: TColors;
	type?: 'full' | 'quarter' | 'half';
	bgStrokeWidth?: 0 | 1 | 2 | 3 | 4;
	circleStrokeWidth?: 0 | 1 | 2 | 3 | 4;
	strokeLinecap?: 'round' | 'butt' | 'square' | 'inherit';
	children?: ReactNode;
}
// @end-snippet:: interface
const ProgressCircular: FC<IProgressCircularProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		value,
		className,
		min = 0,
		max = 100,
		type = 'full',
		bgStrokeWidth = 2,
		circleStrokeWidth = 2,
		strokeLinecap = 'round',
		color = themeConfig.themeColor,
		children,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
ProgressCircular.displayName = 'ProgressCircular';

export default ProgressCircular;
