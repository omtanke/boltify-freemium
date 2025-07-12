import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { TRounded } from '@/types/rounded.type';
import themeConfig from '@/config/theme.config';

// @start-snippet:: interface
interface ISkeletonProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	rounded?: TRounded;
}
// @end-snippet:: interface
const Skeleton: FC<ISkeletonProps> = (props) => {
	const { className, rounded = themeConfig.rounded, ...rest } = props;

	const classes = classNames(className, rounded, 'size-6 bg-zinc-500/10 animate-pulse');

	return <div className={classes} {...rest}></div>;
};
Skeleton.displayName = 'Skeleton';

export default Skeleton;
