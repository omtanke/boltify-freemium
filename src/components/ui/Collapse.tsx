import { FC, ReactNode } from 'react';
import { MotionProps } from 'framer-motion';

// @start-snippet:: interface
interface ICollapseProps extends MotionProps {
	children: ReactNode;
	className?: string;
	isOpen?: boolean;
}
// @end-snippet:: interface
const Collapse: FC<ICollapseProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, isOpen = false, className, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};

export default Collapse;
