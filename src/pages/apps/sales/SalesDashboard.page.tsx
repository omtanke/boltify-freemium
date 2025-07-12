import Container from '@/components/layout/Container';
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layout/Subheader';
import { useOutletContext } from 'react-router';
import { OutletContextType } from './_layouts/Sales.layout';
import { useEffect, useId, useState } from 'react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Button from '@/components/ui/Button';
import Input from '@/components/form/Input';
import EXAMPLE from '@/examples/_index';

const SalesDashboardPage = () => {
	const { setHeaderLeft } = useOutletContext<OutletContextType>();
	useEffect(() => {
		setHeaderLeft(<Breadcrumb list={[{ ...pages.apps.sales }]} />);
		return () => {
			setHeaderLeft(undefined);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [filter, setFilter] = useState<string>('');
	const id = useId();

	const [range, setRange] = useState<'day' | 'week' | 'month'>('week');

	const ranges = [
		{ key: 'day', label: 'Day' },
		{ key: 'week', label: 'Week' },
		{ key: 'month', label: 'Month' },
	] as const;

	return (
		<>
			<Subheader>
				<SubheaderLeft>
					<div className='my-1 flex rounded-xl bg-zinc-500/10 p-1 backdrop-blur-sm dark:bg-zinc-500/25'>
						{ranges.map(({ key, label }) => (
							<Button
								aria-label='Range'
								key={key}
								className='w-full'
								variant={range === key ? 'solid' : 'link'}
								color={range === key ? 'blue' : 'zinc'}
								rounded='rounded-lg'
								dimension='xs'
								onClick={() => setRange(key)}>
								{label}
							</Button>
						))}
					</div>
				</SubheaderLeft>
				<SubheaderRight>
					<Input
						name='filter'
						id={id}
						dimension='sm'
						type='search'
						placeholder='Filter...'
						variant='solid'
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
						list={id}
					/>
					<datalist aria-label='Filter' id={id}>
						<option aria-label='Sales' value='Sales'></option>
						<option aria-label='Browsers' value='Browsers'></option>
						<option aria-label='Last Orders' value='Last Orders'></option>
						<option aria-label='Referral Traffic' value='Referral Traffic'></option>
						<option aria-label='Project' value='Project'></option>
					</datalist>
				</SubheaderRight>
			</Subheader>
			<Container>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12'>
						<EXAMPLE.DataVisualization.Stat.SeparateCards />
					</div>
					{'sales'.includes(filter.toLowerCase()) && (
						<div className='col-span-12 lg:col-span-8'>
							<EXAMPLE.DataVisualization.ChartAndGraph.LineChartDatepicker />
						</div>
					)}
					{'browsers'.includes(filter.toLowerCase()) && (
						<div className='col-span-12 lg:col-span-4'>
							<EXAMPLE.DataVisualization.DataCard.Browser />
						</div>
					)}
					{'last orders'.includes(filter.toLowerCase()) && (
						<div className='col-span-12 xl:col-span-8 xl:row-span-2'>
							<EXAMPLE.Table.Orders.SearchableFilterOrderTable />
						</div>
					)}
					{'referral traffic'.includes(filter.toLowerCase()) && (
						<div className='col-span-12 lg:col-span-6 xl:col-span-4'>
							<EXAMPLE.DataVisualization.InteractiveDataCards.Traffic />
						</div>
					)}
					{'project'.includes(filter.toLowerCase()) && (
						<div className='col-span-12 lg:col-span-6 xl:col-span-4'>
							<EXAMPLE.Card.Project.Card />
						</div>
					)}
				</div>
			</Container>
		</>
	);
};

export default SalesDashboardPage;
