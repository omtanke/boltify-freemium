import {
	FC,
	HTMLAttributes,
	ReactNode,
	TableHTMLAttributes,
	TdHTMLAttributes,
	ThHTMLAttributes,
} from 'react';
import classNames from 'classnames';
import themeConfig from '@/config/theme.config';
import { TColors } from '@/types/colors.type';

interface ITHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
	children: ReactNode;
	className?: string;
}
export const THead: FC<ITHeadProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames(className);

	return (
		<thead data-component-name='Table/THead' className={classes} {...rest}>
			{children}
		</thead>
	);
};
THead.displayName = 'THead';

interface ITBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
	children: ReactNode;
	className?: string;
}
export const TBody: FC<ITBodyProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames(className);

	return (
		<tbody data-component-name='Table/TBody' className={classes} {...rest}>
			{children}
		</tbody>
	);
};
TBody.displayName = 'TBody';

interface ITFootProps extends HTMLAttributes<HTMLTableSectionElement> {
	children: ReactNode;
	className?: string;
}
export const TFoot: FC<ITFootProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames(className);

	return (
		<thead data-component-name='Table/TFoot' className={classes} {...rest}>
			{children}
		</thead>
	);
};
TFoot.displayName = 'TFoot';

interface ITrProps extends HTMLAttributes<HTMLTableRowElement> {
	children: ReactNode;
	className?: string;
}
export const Tr: FC<ITrProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('group/Tr', className);

	return (
		<tr data-component-name='Table/Tr' className={classes} {...rest}>
			{children}
		</tr>
	);
};
Tr.displayName = 'Tr';

interface IThProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
	children: ReactNode;
	className?: string;
	isResizable?: boolean;
	isColumnBorder?: boolean;
}
export const Th: FC<IThProps> = (props) => {
	const { children, className, isResizable = false, isColumnBorder = true, ...rest } = props;

	const classes = classNames(
		'bg-zinc-900/10',
		'dark:bg-zinc-900/90',
		'p-4',
		'first:group-first/Tr:ltr:rounded-tl-lg last:group-first/Tr:ltr:rounded-tr-lg',
		'first:group-last/Tr:ltr:rounded-bl-lg last:group-last/Tr:ltr:rounded-br-lg',
		'first:group-first/Tr:rtl:rounded-tr-lg last:group-first/Tr:rtl:rounded-tl-lg',
		'first:group-last/Tr:rtl:rounded-br-lg last:group-last/Tr:rtl:rounded-bl-lg',
		{ 'shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.1)]': isColumnBorder },
		{ 'dark:shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.05)]': isColumnBorder },
		{ relative: isResizable },
		className,
	);

	return (
		<th data-component-name='Table/Th' className={classes} {...rest}>
			{children}
		</th>
	);
};
Th.displayName = 'Th';

interface IThResizerProps extends HTMLAttributes<HTMLDivElement> {
	isResizing: boolean;
	className?: string;
	color?: TColors;
}
export const ThResizer: FC<IThResizerProps> = (props) => {
	const { isResizing, className, color = themeConfig.themeColor, ...rest } = props;

	const colorClass: Record<TColors, string> = {
		primary: 'bg-primary-500',
		secondary: 'bg-secondary-500',
		zinc: 'bg-zinc-500',
		red: 'bg-red-500',
		amber: 'bg-amber-500',
		lime: 'bg-lime-500',
		emerald: 'bg-emerald-500',
		sky: 'bg-sky-500',
		blue: 'bg-blue-500',
		violet: 'bg-violet-500',
	};

	return (
		<div
			data-component-name='Table/ThResizer'
			className={classNames(
				'absolute top-0 -right-0.5 z-10',
				'h-full w-1',
				'cursor-col-resize touch-none select-none',
				[`${color && colorClass[color]}`],
				'rounded-full',
				'[@media(hover:hover)]:opacity-0',
				'[@media(hover:hover){&:hover}]:opacity-100',
				{ 'bg-blue-500': isResizing, 'opacity-100': isResizing },
				className,
			)}
			{...rest}
		/>
	);
};
ThResizer.displayName = 'ThResizer';

interface ITdProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
	children: ReactNode;
	className?: string;
}
export const Td: FC<ITdProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames(
		'first:ltr:rounded-l-lg last:ltr:rounded-r-lg',
		'first:rtl:rounded-r-lg last:rtl:rounded-l-lg',
		'group-even/Tr:bg-zinc-500/5',
		'group-hover/Tr:bg-zinc-500/10',
		'dark:group-even/Tr:bg-zinc-900/50',
		'dark:group-hover/Tr:bg-zinc-900/90',
		'p-4',
		themeConfig.transition,
		className,
	);

	return (
		<td data-component-name='Table/Td' className={classes} {...rest}>
			{children}
		</td>
	);
};
Td.displayName = 'Td';

export interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
	children: ReactNode;
	className?: string;
}
const Table: FC<ITableProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames('w-full', className);

	return (
		<table data-component-name='Table' className={classes} {...rest}>
			{children}
		</table>
	);
};
Table.displayName = 'Table';

export default Table;
