import { FC, ReactNode } from 'react';
import { Placement } from '@floating-ui/react';

// @start-snippet:: interface
interface IPopoverProps {
	children: ReactNode;
	content: ReactNode;
	className?: string;
	placement?: Placement;
}
// @end-snippet:: interface

const Popover: FC<IPopoverProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, className, content, placement = 'top', ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
Popover.displayName = 'Popover';

export default Popover;
