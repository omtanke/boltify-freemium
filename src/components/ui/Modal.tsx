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
import { TRounded } from '@/types/rounded.type';
import { TScreens } from '@/types/screens.type';
import Portal from '@/components/layout/Portal/Portal';

// @start-snippet:: interface
type TModalCustomSize = string | number;
type TModalStableSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type TModalSize = TModalStableSize | TModalCustomSize;
// @end-snippet:: interface

const defaultProps = {
	isCentered: false,
	rounded: 'rounded-2xl',
	fullScreen: false,
	isScrollable: false,
};

// @start-snippet:: interface
interface IModalHeaderClonedProps {
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
	titleId?: string;
}
interface IModalHeaderProps extends HTMLAttributes<HTMLDivElement>, IModalHeaderClonedProps {
	children: ReactNode;
	className?: string;
	hasCloseButton?: boolean;
}
// @end-snippet:: interface
export const ModalHeader: FC<IModalHeaderProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, className, titleId, setIsOpen, hasCloseButton = true, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
ModalHeader.displayName = 'ModalHeader';

// @start-snippet:: interface
interface IModalBodyClonedProps {
	isScrollable?: boolean;
}
interface IModalBodyProps extends HTMLAttributes<HTMLDivElement>, IModalBodyClonedProps {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const ModalBody: FC<IModalBodyProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, className, isScrollable = defaultProps.isScrollable, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
ModalBody.displayName = 'ModalBody';

// @start-snippet:: interface
interface IModalFooterChildProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const ModalFooterChild: FC<IModalFooterChildProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, className, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
ModalFooterChild.displayName = 'ModalFooterChild';

// @start-snippet:: interface
interface IModalFooterProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const ModalFooter: FC<IModalFooterProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, className, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
ModalFooter.displayName = 'ModalFooter';

/**
 * Content
 * @constructor
 */
// @start-snippet:: interface
interface IContentProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	fullScreen?: TScreens | boolean;
	isScrollable?: boolean;
	rounded?: TRounded;
}
// @end-snippet:: interface
export const Content: FC<IContentProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		children,
		className,
		fullScreen = defaultProps.fullScreen,
		isScrollable = defaultProps.isScrollable,
		rounded = defaultProps.rounded,
		// @ts-ignore
		...rest
	} = props;
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
	fullScreen?: TScreens | boolean;
	isCentered?: boolean;
	isScrollable?: boolean;
}
// @end-snippet:: interface
const Dialog = forwardRef<HTMLDivElement, IDialogProps>((props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		children,
		fullScreen = defaultProps.fullScreen,
		isCentered = defaultProps.isCentered,
		isScrollable = defaultProps.isScrollable,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
});
Dialog.displayName = 'Dialog';

// @start-snippet:: interface
export interface IModalProps extends MotionProps {
	children:
		| ReactElement<IModalHeaderProps>[]
		| ReactElement<IModalBodyProps>[]
		| ReactElement<IModalFooterProps>[];
	fullScreen?: TScreens | boolean;
	isAnimation?: boolean;
	isCentered?: boolean;
	isOpen: boolean;
	isScrollable?: boolean;
	isStaticBackdrop?: boolean;
	isBackdrop?: boolean;
	rounded?: TRounded;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	size?: TModalSize;
	contentClassName?: string;
}
// @end-snippet:: interface
const Modal: FC<IModalProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */

	const {
		children,
		isOpen,
		setIsOpen,
		isStaticBackdrop = false,
		isScrollable = defaultProps.isScrollable,
		isCentered = defaultProps.isCentered,
		size = 'md',
		fullScreen = defaultProps.fullScreen,
		isAnimation = true,
		rounded = defaultProps.rounded,
		isBackdrop = true,
		contentClassName,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return (
		<Portal>
			<code>Only Pro</code>
		</Portal>
	);
};

export default Modal;
