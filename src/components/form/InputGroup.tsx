import { FC, ReactNode } from 'react';
import { TInputDimension } from './Input';

// @start-snippet:: interface
interface IInputGroupProps {
	children: ReactNode;
	className?: string;
	dimension?: TInputDimension;
}
// @end-snippet:: interface
const InputGroup: FC<IInputGroupProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, className, dimension, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
InputGroup.displayName = 'InputGroup';

export default InputGroup;
