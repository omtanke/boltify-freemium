import { FC, HTMLAttributes, ReactNode } from 'react';

// @start-snippet:: interface
interface ITimelineHeaderProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}
// @end-snippet:: interface
export const TimelineHeader: FC<ITimelineHeaderProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, className, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
TimelineHeader.displayName = 'TimelineHeader';

// @start-snippet:: interface
interface ITimelineItemProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	header: ReactNode;
	leftContent?: ReactNode;
	footer?: ReactNode;
	lineClassName?: string;
	dotClassName?: string;
}
// @end-snippet:: interface
export const TimelineItem: FC<ITimelineItemProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		children,
		className,
		leftContent,
		header,
		footer,
		lineClassName,
		dotClassName,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
TimelineItem.displayName = 'TimelineItem';

// @start-snippet:: interface
interface ITimelineProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
const Timeline: FC<ITimelineProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { children, className, ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
Timeline.displayName = 'Timeline';

export default Timeline;
