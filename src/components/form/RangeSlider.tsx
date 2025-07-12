import { FC, InputHTMLAttributes } from 'react';
import { IValidationBaseProps } from './Validation';

// @start-snippet:: interface
interface IRangeSliderProps
	extends InputHTMLAttributes<HTMLInputElement>,
		Partial<IValidationBaseProps> {
	className?: string;
	id?: string;
	name: string;
	type?: 'range';
}
// @end-snippet:: interface
const RangeSlider: FC<IRangeSliderProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { className, id, type = 'range', ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
RangeSlider.displayName = 'RangeSlider';

export default RangeSlider;
