import { useState } from 'react';
import Chart from '@/components/utils/Chart';
import { IChartOptions } from '@/interface/chart.interface';
import dayjs from 'dayjs';

const ChartLinePart = () => {
	const [state] = useState<IChartOptions>({
		series: [
			{
				name: 'Visit',
				data: [31, 40, 28, 51, 42, 109, 100],
			},
			{
				name: 'Order',
				data: [11, 32, 45, 32, 34, 52, 41],
			},
		],
		options: {
			chart: { height: 350, type: 'line' },
			legend: {
				position: 'top',
				// @ts-ignore
				offsetX: '100%',
				markers: { size: 4, shape: 'circle', strokeWidth: 0, offsetX: -4 },
				itemMargin: { horizontal: 8, vertical: 0 },
			},
			dataLabels: { enabled: false },
			stroke: { curve: 'smooth' },
			xaxis: {
				type: 'datetime',
				categories: [
					dayjs().add(-7, 'day').toISOString(),
					dayjs().add(-6, 'day').toISOString(),
					dayjs().add(-5, 'day').toISOString(),
					dayjs().add(-4, 'day').toISOString(),
					dayjs().add(-3, 'day').toISOString(),
					dayjs().add(-2, 'day').toISOString(),
					dayjs().add(-1, 'day').toISOString(),
				],
			},
			tooltip: { x: { format: 'dd MMM yyyy HH:mm' } },
			grid: { yaxis: { lines: { show: false } } },
		},
	});

	return (
		<Chart
			options={state.options}
			series={state.series}
			type={state.options.chart?.type}
			height={state.options.chart?.height}
		/>
	);
};

export default ChartLinePart;
