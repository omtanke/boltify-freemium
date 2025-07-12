import {
	Dispatch,
	FC,
	forwardRef,
	HTMLAttributes,
	ReactElement,
	ReactNode,
	SetStateAction,
} from 'react';
import { MotionProps } from 'framer-motion';

// @start-snippet:: interface
type TOffcanvasPositionVertical = 'top' | 'bottom';
type TOffcanvasPositionHorizontal = 'left' | 'right';
export type TOffcanvasPosition = TOffcanvasPositionVertical | TOffcanvasPositionHorizontal;
// @end-snippet:: interface

const defaultProps: { position: TOffcanvasPosition } = {
	position: 'right',
};

// @start-snippet:: interface
interface IOffcanvasHeaderClonedProps {
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
	titleId?: string;
}
interface IOffcanvasHeaderProps
	extends HTMLAttributes<HTMLDivElement>,
		IOffcanvasHeaderClonedProps {
	children: ReactNode;
	className?: string;
	hasCloseButton?: boolean;
	rightContent?: ReactNode;
}
// @end-snippet:: interface
export const OffcanvasHeader: FC<IOffcanvasHeaderProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		children,
		className,
		titleId,
		setIsOpen,
		hasCloseButton = true,
		rightContent,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
OffcanvasHeader.displayName = 'OffcanvasHeader';

// @start-snippet:: interface
interface IOffcanvasBodyProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const OffcanvasBody: FC<IOffcanvasBodyProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, className, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
OffcanvasBody.displayName = 'OffcanvasBody';

// @start-snippet:: interface
interface IOffcanvasFooterChildProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const OffcanvasFooterChild: FC<IOffcanvasFooterChildProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, className, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
OffcanvasFooterChild.displayName = 'OffcanvasFooterChild';

// @start-snippet:: interface
interface IOffcanvasFooterProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const OffcanvasFooter: FC<IOffcanvasFooterProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, className, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
OffcanvasFooter.displayName = 'OffcanvasFooter';

/**
 * Content
 * @constructor
 */
// @start-snippet:: interface
interface IContentProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const Content: FC<IContentProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, className, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};

/**
 * Dialog
 * @constructor
 */
// @start-snippet:: interface
interface IDialogProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	position?: TOffcanvasPosition;
	className?: string;
}
// @end-snippet:: interface
const Dialog = forwardRef<HTMLDivElement, IDialogProps>((props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, position = defaultProps.position, className, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
});
Dialog.displayName = 'Dialog';

// @start-snippet:: interface
export interface IOffcanvasProps extends MotionProps {
	children:
		| ReactElement<IOffcanvasHeaderProps>[]
		| ReactElement<IOffcanvasBodyProps>[]
		| ReactElement<IOffcanvasFooterProps>[];
	isAnimation?: boolean;
	isOpen: boolean;
	isStaticBackdrop?: boolean;
	position?: TOffcanvasPosition;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	dialogClassName?: string;
	contentClassName?: string;
}
// @end-snippet:: interface
const Offcanvas: FC<IOffcanvasProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		children,
		isOpen,
		setIsOpen,
		isStaticBackdrop = false,
		isAnimation = true,
		position = defaultProps.position,
		dialogClassName,
		contentClassName,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};

export default Offcanvas;
