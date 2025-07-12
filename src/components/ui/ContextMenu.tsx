import { forwardRef, HTMLAttributes, ReactNode } from 'react';

// @start-snippet:: interface
interface IContextMenuProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}
// @end-snippet:: interface
const ContextMenu = forwardRef<HTMLDivElement, IContextMenuProps>((props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		children,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
});

ContextMenu.displayName = 'ContextMenu';

export default ContextMenu;
