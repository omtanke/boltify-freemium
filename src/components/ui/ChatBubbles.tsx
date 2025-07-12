import { FC, ReactNode } from 'react';

// @start-snippet:: interface
type TMyContentPosition = 'start' | 'end';
// @end-snippet:: interface

// @start-snippet:: interface
interface IChatBubblesSeparateProps {
	children?: ReactNode;
	className?: string;
}
// @end-snippet:: interface
export const ChatBubblesSeparate: FC<IChatBubblesSeparateProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, className, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */
	return <code>Only Pro</code>;
};
ChatBubblesSeparate.displayName = 'ChatBubblesSeparate';

// @start-snippet:: interface
interface IChatBubblesItemProps {
	children: ReactNode;
	className?: string;
	isMyContent?: boolean;
	myContentPosition?: TMyContentPosition;
	image?: string;
	username: string;
	isAvatar?: boolean;
	footer?: ReactNode;
}
// @end-snippet:: interface
export const ChatBubblesItem: FC<IChatBubblesItemProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		children,
		className,
		isMyContent,
		myContentPosition,
		isAvatar,
		image,
		username,
		footer,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
ChatBubblesItem.displayName = 'ChatBubblesItem';

// @start-snippet:: interface
interface IChatBubblesProps {
	children: ReactNode;
	className?: string;
	myContentPosition?: TMyContentPosition;
	isAvatar?: boolean;
}
// @end-snippet:: interface
const ChatBubbles: FC<IChatBubblesProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, className, myContentPosition = 'end', isAvatar, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */
	return <code>Only Pro</code>;
};

export default ChatBubbles;
