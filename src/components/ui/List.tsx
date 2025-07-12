import { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import Icon, { IIconProps } from '@/components/icon/Icon';

// @start-snippet:: interface, group
interface ILiProps extends HTMLAttributes<HTMLLIElement> {
	children: ReactNode;
	iconProps?: IIconProps;
	className?: string;
}
// @end-snippet:: interface, group
export const Li: FC<ILiProps> = (props) => {
	const { children, className, iconProps, ...rest } = props;

	return (
		<li className={classNames('', className)} {...rest}>
			<span className='inline-flex items-start'>
				{iconProps?.icon && <Icon className='me-2 mt-1 shrink-0' {...iconProps} />}
				{children}
			</span>
		</li>
	);
};

// @start-snippet:: interface
type TListTypes = 'list-disc' | 'list-decimal' | 'list-none';
interface IListProps extends HTMLAttributes<HTMLUListElement> {
	children: ReactNode;
	className?: string;
	type?: TListTypes;
}
// @end-snippet:: interface
const List: FC<IListProps> = (props) => {
	const { children, className, type = 'list-disc', ...rest } = props;

	return (
		<ul className={classNames('list-inside', type, className)} {...rest}>
			{children}
		</ul>
	);
};

// @start-snippet:: group
interface IListGroupProps extends IListProps {
	isGroup?: boolean;
	isFlush?: boolean;
	isGutters?: boolean;
	isHorizontal?: boolean;
	isStriped?: boolean;
	type?: TListTypes;
}
// @end-snippet:: group
export const ListGroup: FC<IListGroupProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		isGroup = true,
		isFlush,
		isGutters = true,
		isHorizontal,
		isStriped,
		children,
		type = 'list-none',
		className,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};

export default List;
