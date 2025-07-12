```tsx
interface ITimelineHeaderProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}
interface ITimelineItemProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	title: ReactNode;
	leftContent?: ReactNode;
	footer?: ReactNode;
}
interface ITimelineProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode; // TimelineHeader, TimelineItem
	className?: string;
}
```
