import {
	createColumnHelper,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
	VisibilityState,
} from '@tanstack/react-table';
import { ChangeEvent, useState } from 'react';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import ORDER_STATUS from '@/constants/orderStatus.constant';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/icon/Icon';
import PAYMENT_METHOD from '@/constants/paymentMethod.constant';
import TableTemplate, {
	TableCardFooterTemplate,
	TableIndeterminateCheckbox,
} from '@/templates/common/TableParts.template';
import PAYMENT_STATUS from '@/constants/paymentStatus.constant';
import Dropdown, { DropdownMenu, DropdownToggle } from '@/components/ui/Dropdown';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/form/Checkbox';
import dayjs from 'dayjs';
import EX_Dropdown from '@/examples/ui/dropdown/_index';
import { Link, useNavigate } from 'react-router';
import pages from '@/Routes/pages';
import ORDERS, { IOrder } from '@/mocks/orders.mock';

const columnHelper = createColumnHelper<IOrder>();

const TableSearchableFilterOrderTableExample = () => {
	const navigate = useNavigate();

	const [data] = useState(() => [...ORDERS]);

	const [sorting, setSorting] = useState<SortingState>([{ id: 'id', desc: true }]);
	const [globalFilter, setGlobalFilter] = useState<string>('');
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
		id: true,
		date: false,
		product: true,
		status: true,
		customer: true,
		paymentMethod: true,
		paymentStatus: true,
		items: true,
		actions: true,
	});
	const [rowSelection, setRowSelection] = useState({});

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target;
		setColumnVisibility((prev) => ({
			...prev,
			[name]: checked,
		}));
	};

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
				className: '!py-0',
			},
		}),
		columnHelper.accessor('id', {
			cell: (info) => (
				<Link
					to={{
						pathname: pages.apps.sales.subPages.view.to,
						search: `?orderId=${info.getValue()}`,
					}}>
					<span className='text-emerald-500'>#{info.getValue()}</span>
				</Link>
			),
			header: () => 'Order',
			footer: () => 'Order',
		}),
		columnHelper.accessor('date', {
			cell: (info) => (
				<span className='capitalize'>
					{dayjs(info.renderValue()).format('D MMM YYYY - HH:mm')}
				</span>
			),
			header: () => 'Date',
			footer: () => 'Date',
		}),
		columnHelper.accessor('product', {
			cell: (info) => <span className='capitalize'>{info.renderValue()}</span>,
			header: () => 'Purchased',
			footer: () => 'Purchased',
		}),
		columnHelper.accessor('status', {
			cell: (info) => {
				const data = ORDER_STATUS[info.row.original.status];
				return (
					<Badge color={data.color} variant='soft'>
						<Icon icon={data.icon} />
						<div className='truncate'>{data.text}</div>
					</Badge>
				);
			},
			header: () => 'Status',
			footer: () => 'Status',
		}),
		columnHelper.accessor('customer', {
			header: () => 'Customer',
			footer: () => 'Customer',
		}),
		columnHelper.accessor('payment.method', {
			cell: (info) => {
				const data = PAYMENT_METHOD[info.row.original.payment.method];
				return (
					<div className='flex items-center gap-2'>
						<Icon icon={data.icon} color={data.color} size='text-2xl' />
						<div>****{info.row.original.payment.info}</div>
					</div>
				);
			},
			header: () => 'Payment Method',
			footer: () => 'Payment Method',
			id: 'paymentMethod',
		}),
		columnHelper.accessor('payment.status', {
			cell: (info) => {
				const data = PAYMENT_STATUS[info.row.original.payment.status];
				return (
					<div className='flex items-center gap-2'>
						<Badge variant='soft' color={data.color} className='truncate'>
							{data.text}
						</Badge>
					</div>
				);
			},
			header: () => 'Payment Status',
			footer: () => 'Payment Status',
			id: 'paymentStatus',
		}),
		columnHelper.accessor('items', {
			header: () => 'Items',
			footer: () => 'Items',
		}),
		columnHelper.display({
			cell: (info) => (
				<div className='flex items-center gap-2'>
					<Button
						aria-label='View'
						icon='Invoice03'
						variant='link'
						onClick={() =>
							navigate(
								`${pages.apps.invoices.subPages.view.to}?invoiceId=${info.row.original.id}`,
							)
						}
					/>
				</div>
			),
			header: 'Invoice',
			footer: 'Invoice',
			id: 'actions',
		}),
	];

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			rowSelection,
			globalFilter,
			columnVisibility,
		},
		onSortingChange: setSorting,
		enableRowSelection: true,
		onRowSelectionChange: setRowSelection,
		enableGlobalFilter: true,
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: { pageSize: 10 },
		},
	});

	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle
						iconProps={{
							icon: 'ShippingLoading',
							color: 'red',
							size: 'text-3xl',
						}}>
						Last Orders
					</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<EX_Dropdown.Datepicker />
					<Dropdown>
						<DropdownToggle hasIcon={false}>
							<Button aria-label='Delete' icon='ColumnDelete' variant='link' />
						</DropdownToggle>
						<DropdownMenu placement='bottom-end'>
							<div className='flex items-center'>
								<div className='grow'>Order</div>
								<div className='shrink'>
									<Checkbox
										dimension='sm'
										name='id'
										checked={columnVisibility.id}
										onChange={handleCheckboxChange}
									/>
								</div>
							</div>
							<div className='flex items-center'>
								<div className='grow'>Date</div>
								<div className='shrink'>
									<Checkbox
										dimension='sm'
										name='date'
										checked={columnVisibility.date}
										onChange={handleCheckboxChange}
									/>
								</div>
							</div>
							<div className='flex items-center'>
								<div className='grow'>Purchased</div>
								<div className='shrink'>
									<Checkbox
										dimension='sm'
										name='product'
										checked={columnVisibility.product}
										onChange={handleCheckboxChange}
									/>
								</div>
							</div>
							<div className='flex items-center'>
								<div className='grow'>Status</div>
								<div className='shrink'>
									<Checkbox
										dimension='sm'
										name='status'
										checked={columnVisibility.status}
										onChange={handleCheckboxChange}
									/>
								</div>
							</div>
							<div className='flex items-center'>
								<div className='grow'>Customer</div>
								<div className='shrink'>
									<Checkbox
										dimension='sm'
										name='customer'
										checked={columnVisibility.customer}
										onChange={handleCheckboxChange}
									/>
								</div>
							</div>
							<div className='flex items-center'>
								<div className='grow'>Payment Method</div>
								<div className='shrink'>
									<Checkbox
										dimension='sm'
										name='paymentMethod'
										checked={columnVisibility.paymentMethod}
										onChange={handleCheckboxChange}
									/>
								</div>
							</div>
							<div className='flex items-center'>
								<div className='grow'>Payment Status</div>
								<div className='shrink'>
									<Checkbox
										dimension='sm'
										name='paymentStatus'
										checked={columnVisibility.paymentStatus}
										onChange={handleCheckboxChange}
									/>
								</div>
							</div>
							<div className='flex items-center'>
								<div className='grow'>Items</div>
								<div className='shrink'>
									<Checkbox
										dimension='sm'
										name='items'
										checked={columnVisibility.items}
										onChange={handleCheckboxChange}
									/>
								</div>
							</div>
							<div className='flex items-center'>
								<div className='grow'>Actions</div>
								<div className='shrink'>
									<Checkbox
										dimension='sm'
										name='actions'
										checked={columnVisibility.actions}
										onChange={handleCheckboxChange}
									/>
								</div>
							</div>
						</DropdownMenu>
					</Dropdown>
				</CardHeaderChild>
			</CardHeader>
			<CardBody className='overflow-auto'>
				<TableTemplate table={table} hasFooter={false} />
			</CardBody>
			<TableCardFooterTemplate table={table} />
		</Card>
	);
};

export default TableSearchableFilterOrderTableExample;
