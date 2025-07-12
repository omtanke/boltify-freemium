import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '@/components/ui/Card';
import TableTemplate, { TableIndeterminateCheckbox } from '@/templates/common/TableParts.template';
import {
	createColumnHelper,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { Product2, Product3, Product4 } from '@/assets/images';
import priceFormat from '@/utils/priceFormat.util';

type IOrderProducts = {
	id: string;
	name: string;
	options?: string[];
	price: number;
	quantity: number;
	imageUrl?: string;
};

const columnHelper = createColumnHelper<IOrderProducts>();

const TableOrderProductExample = () => {
	const [data] = useState<IOrderProducts[]>([
		{
			id: 'prod-001',
			name: 'Classic Black T-Shirt',
			options: ['Size: M', 'Color: Black'],
			price: 19.99,
			quantity: 2,
			imageUrl: Product3,
		},
		{
			id: 'prod-002',
			name: 'Wireless Bluetooth Headphones',
			options: ['Color: Black'],
			price: 59.99,
			quantity: 1,
			imageUrl: Product2,
		},
		{
			id: 'prod-003',
			name: 'Stainless Steel Water Bottle',
			// options is optional, so it's omitted here
			price: 14.5,
			quantity: 3,
			imageUrl: Product4,
		},
	]);

	const [sorting, setSorting] = useState<SortingState>([{ id: 'id', desc: true }]);
	const [globalFilter, setGlobalFilter] = useState<string>('');
	const [rowSelection, setRowSelection] = useState({});

	const columns = [
		columnHelper.display({
			cell: ({ row }) => (
				<TableIndeterminateCheckbox
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...{
						checked: row.getIsSelected(),
						disabled: !row.getCanSelect(),
						indeterminate: row.getIsSomeSelected(),
						onChange: row.getToggleSelectedHandler(),
					}}
				/>
			),
			header: ({ table }) => (
				<TableIndeterminateCheckbox
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...{
						checked: table.getIsAllRowsSelected(),
						indeterminate: table.getIsSomeRowsSelected(),
						onChange: table.getToggleAllRowsSelectedHandler(),
					}}
				/>
			),
			footer: ({ table }) => (
				<TableIndeterminateCheckbox
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...{
						checked: table.getIsAllRowsSelected(),
						indeterminate: table.getIsSomeRowsSelected(),
						onChange: table.getToggleAllRowsSelectedHandler(),
					}}
				/>
			),
			id: 'select',
			meta: {
				className: '!py-0 w-10',
			},
		}),
		columnHelper.accessor('imageUrl', {
			cell: (info) => (
				<img
					src={info.getValue()}
					alt={info.row.original.name}
					className='aspect-[3/4] w-24 object-cover'
				/>
			),
			header: () => 'Products',
			footer: () => 'Products',
			meta: {
				className: 'w-24',
			},
		}),
		columnHelper.accessor('name', {
			cell: (info) => (
				<div>
					<div>{info.getValue()}</div>
					<div className='text-sm text-zinc-500'>
						{info.row.original.options?.join(', ') ?? ''}
					</div>
				</div>
			),
			header: () => 'Products',
			footer: () => 'Products',
		}),
		columnHelper.accessor('price', {
			cell: (info) => <div>{priceFormat(info.getValue())}</div>,
			header: () => 'Price',
			footer: () => 'Price',
		}),
		columnHelper.accessor('quantity', {
			cell: (info) => <div>{info.getValue()}</div>,
			header: () => 'Quantity',
			footer: () => 'Quantity',
		}),
		columnHelper.accessor('price', {
			cell: (info) => (
				<div className='text-xl font-bold'>
					{priceFormat(info.row.original.quantity * info.getValue())}
				</div>
			),
			header: () => 'Price',
			footer: () => 'Price',
		}),
	];

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			rowSelection,
			globalFilter,
		},
		onSortingChange: setSorting,
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		enableGlobalFilter: true,
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		initialState: {},
	});

	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle
						iconProps={{
							icon: 'BorderFull',
							color: 'blue',
							size: 'text-3xl',
						}}>
						Order Details
					</CardTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody className='overflow-auto'>
				<TableTemplate table={table} hasFooter={false} />
			</CardBody>
			<CardFooter className='border-t border-dashed border-t-inherit pt-4'>
				<CardFooterChild />
				<CardFooterChild>
					<div className='flex min-w-sm flex-col gap-4'>
						<div className='flex'>
							<div className='flex-1 text-zinc-500'>Subtotal:</div>
							<div className='flex-1'>{priceFormat(241.48)}</div>
						</div>
						<div className='flex'>
							<div className='flex-1 text-zinc-500'>Discount:</div>
							<div className='flex-1'>{priceFormat(20)}</div>
						</div>
						<div className='flex'>
							<div className='flex-1 text-zinc-500'>TAX:</div>
							<div className='flex-1'>{priceFormat(22.148)}</div>
						</div>
						<div className='flex text-xl font-bold'>
							<div className='flex-1 text-zinc-500'>Total:</div>
							<div className='flex-1'>{priceFormat(263.628)}</div>
						</div>
					</div>
				</CardFooterChild>
			</CardFooter>
		</Card>
	);
};

export default TableOrderProductExample;
