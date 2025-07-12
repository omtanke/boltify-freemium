import { FC, ReactNode } from 'react';
import { IAvatarProps } from './Avatar';

// @start-snippet:: interface
export interface IAvatarGroupProps extends IAvatarProps {
	children: ReactNode;
	className?: string;
}
// @end-snippet:: interface
const AvatarGroup: FC<IAvatarGroupProps> = (props) => {
	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { children, className, color, size, rounded, variant = 'solid', ...rest } = props;
	return <code>Only Pro</code>;
};
AvatarGroup.displayName = 'AvatarGroup';

export default AvatarGroup;
