import { FC, HTMLProps, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { flexRender, Table as TTableProps } from '@tanstack/react-table';
import Table, { ITableProps, TBody, Td, TFoot, Th, THead, Tr } from '@/components/ui/Table';
import Icon from '@/components/icon/Icon';
import { CardFooter, CardFooterChild } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/form/Input';
import Select from '@/components/form/Select';
import Checkbox from '@/components/form/Checkbox';

export const TableIndeterminateCheckbox = ({
	indeterminate,
	...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
	const ref = useRef<HTMLInputElement>(null!);

	useEffect(() => {
		if (typeof indeterminate === 'boolean') {
			ref.current.indeterminate = !rest.checked && indeterminate;
		}
	}, [ref, indeterminate, rest.checked]);

	return <Checkbox ref={ref} dimension='default' {...rest} />;
};

interface ITableHeaderTemplateProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	table: TTableProps<any>;
	isSortable?: boolean;
}
export const TableHeaderTemplate: FC<ITableHeaderTemplateProps> = ({
	table,
	isSortable = true,
}) => {
	return (
		<THead>
			{table.getHeaderGroups().map((headerGroup) => (
				<Tr key={headerGroup.id}>
					{headerGroup.headers.map((header) => {
						const meta = header.column.columnDef.meta as { className?: string };
						return (
							<Th
								key={header.id}
								isColumnBorder={false}
								className={classNames(meta?.className, {
									'text-left': header.id !== 'Actions',
									'text-right': header.id === 'Actions',
								})}>
								{header.isPlaceholder ? null : (
									<div
										key={header.id}
										aria-hidden='true'
										{...{
											className: classNames('flex gap-2 items-center', {
												'cursor-pointer select-none':
													header.column.getCanSort() && isSortable,
											}),

											onClick: isSortable
												? header.column.getToggleSortingHandler()
												: () => {},
										}}>
										{flexRender(
											header.column.columnDef.header,
											header.getContext(),
										)}
										{{
											asc: (
												<Icon
													icon='Sorting02'
													color='blue'
													className='ltr:ml-1.5 rtl:mr-1.5'
												/>
											),
											desc: (
												<Icon
													icon='Sorting01'
													color='blue'
													className='ltr:ml-1.5 rtl:mr-1.5'
												/>
											),
										}[header.column.getIsSorted() as string] ?? null}
										{header.column.getCanSort() &&
											isSortable &&
											!(header.column.getIsSorted() as string) && (
												<Icon
													icon='Sorting05'
													className='ltr:ml-1.5 rtl:mr-1.5'
												/>
											)}
									</div>
								)}
							</Th>
						);
					})}
				</Tr>
			))}
		</THead>
	);
};

interface ITableBodyTemplateProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	table: TTableProps<any>;
}
export const TableBodyTemplate: FC<ITableBodyTemplateProps> = ({ table }) => {
	return (
		<TBody>
			{table.getRowModel().rows.map((row) => (
				<Tr key={row.id}>
					{row.getVisibleCells().map((cell) => {
						const meta = cell.column.columnDef.meta as { className?: string };
						return (
							<Td
								key={cell.id}
								className={classNames(meta?.className, {
									'text-left': cell.column.id !== 'Actions',
									'text-right': cell.column.id === 'Actions',
								})}>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</Td>
						);
					})}
				</Tr>
			))}
		</TBody>
	);
};

interface ITableFooterTemplateProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	table: TTableProps<any>;
	isSortable?: boolean;
}
export const TableFooterTemplate: FC<ITableFooterTemplateProps> = ({
	table,
	isSortable = true,
}) => {
	return (
		<TFoot>
			{table.getFooterGroups().map((footerGroup) => (
				<Tr key={footerGroup.id}>
					{footerGroup.headers.map((header) => {
						const meta = header.column.columnDef.meta as { className?: string };
						return (
							<Th
								key={header.id}
								isColumnBorder={false}
								className={classNames(meta?.className, {
									'text-left': header.id !== 'Actions',
									'text-right': header.id === 'Actions',
								})}>
								{header.isPlaceholder ? null : (
									<div
										key={header.id}
										aria-hidden='true'
										{...{
											className: classNames('flex gap-2 items-center', {
												'cursor-pointer select-none':
													header.column.getCanSort() && isSortable,
											}),

											onClick: isSortable
												? header.column.getToggleSortingHandler()
												: () => {},
										}}>
										{flexRender(
											header.column.columnDef.header,
											header.getContext(),
										)}
										{{
											asc: (
												<Icon
													icon='Sorting02'
													color='blue'
													className='ltr:ml-1.5 rtl:mr-1.5'
												/>
											),
											desc: (
												<Icon
													icon='Sorting01'
													color='blue'
													className='ltr:ml-1.5 rtl:mr-1.5'
												/>
											),
										}[header.column.getIsSorted() as string] ?? null}
										{header.column.getCanSort() &&
											isSortable &&
											!(header.column.getIsSorted() as string) && (
												<Icon
													icon='Sorting05'
													className='ltr:ml-1.5 rtl:mr-1.5'
												/>
											)}
									</div>
								)}
							</Th>
						);
					})}
				</Tr>
			))}
		</TFoot>
	);
};

interface ITableTemplateProps extends Partial<ITableProps> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	table: TTableProps<any>;
	hasHeader?: boolean;
	hasFooter?: boolean;
	isSortable?: boolean;
}
const TableTemplate: FC<ITableTemplateProps> = (props) => {
	const { children, hasHeader = true, hasFooter = true, table, isSortable, ...rest } = props;

	return (
		<Table {...rest}>
			{children || (
				<>
					{hasHeader && <TableHeaderTemplate table={table} isSortable={isSortable} />}
					<TableBodyTemplate table={table} />
					{hasFooter && <TableFooterTemplate table={table} />}
				</>
			)}
		</Table>
	);
};

interface ITableCardFooterTemplateProps extends Partial<ITableProps> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	table: TTableProps<any>;
}
export const TableCardFooterTemplate: FC<ITableCardFooterTemplateProps> = ({ table }) => {
	return (
		<CardFooter>
			<CardFooterChild>
				<Select
					value={table.getState().pagination.pageSize}
					onChange={(e) => {
						table.setPageSize(Number(e.target.value));
					}}
					className='!w-28'
					name='pageSize'>
					{[5, 10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</Select>
			</CardFooterChild>
			<CardFooterChild>
				<Button
					aria-label='First'
					variant='link'
					onClick={() => table.setPageIndex(0)}
					isDisable={!table.getCanPreviousPage()}
					icon='ArrowLeftDouble'
					className='!px-0'
				/>
				<Button
					aria-label='Prev'
					variant='link'
					onClick={() => table.previousPage()}
					isDisable={!table.getCanPreviousPage()}
					icon='ArrowLeft01'
					className='!px-0'
				/>
				<span className='flex items-center gap-1'>
					<div>Page</div>
					<strong>
						<Input
							value={table.getState().pagination.pageIndex + 1}
							onChange={(e) => {
								const page = e.target.value ? Number(e.target.value) - 1 : 0;
								table.setPageIndex(page);
							}}
							className='inline-flex !w-12 text-center'
							name='page'
						/>{' '}
						of {table.getPageCount()}
					</strong>
				</span>
				<Button
					aria-label='Next'
					variant='link'
					onClick={() => table.nextPage()}
					isDisable={!table.getCanNextPage()}
					icon='ArrowRight01'
					className='!px-0'
				/>
				<Button
					aria-label='Last'
					variant='link'
					onClick={() => table.setPageIndex(table.getPageCount() - 1)}
					isDisable={!table.getCanNextPage()}
					icon='ArrowRightDouble'
					className='!px-0'
				/>
			</CardFooterChild>
		</CardFooter>
	);
};

export default TableTemplate;
