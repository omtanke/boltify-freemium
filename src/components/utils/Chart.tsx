import { FC, memo } from 'react';
import ReactApexChart, { Props } from 'react-apexcharts';
import _ from 'lodash';

// import colors from '../../tailwindcss/colors.tailwind';

export interface IChartProps extends Props {
	width?: string | number;
	height?: string | number;
}

const Chart: FC<IChartProps> = (props) => {
	const { series, options, type, width = '100%', height = 'auto' } = props;

	const defaultOptions: Props['options'] = {
		chart: {
			toolbar: {
				show: false,
			},
			zoom: {
				allowMouseWheelZoom: false,
			},
		},
		colors: ['#2b7fff', '#00bc7d', '#fd9a00', '#ff2056', '#ad46ff'],
		dataLabels: {
			enabled: false,
		},
		grid: {
			show: true,
			borderColor: `rgba(113, 113, 123, 0.25)`,
			strokeDashArray: 0,
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
			},
			padding: {
				top: 0,
				right: 10,
				bottom: 0,
				left: 10,
			},
		},
		legend: {
			labels: {
				colors: '#71717b',
			},
			markers: {
				size: 7,
				shape: 'circle',
				strokeWidth: 0,
				offsetX: -2,
				offsetY: 0,
			},
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
			},
			candlestick: {
				colors: {
					upward: `#00bc7d`,
					downward: `#ff2056`,
				},
			},
			boxPlot: {
				colors: {
					upper: `#00bc7d`,
					lower: `#ff2056`,
				},
			},
		},
		stroke: {
			// show: true,
			// width: 2,
			// colors: ['transparent'],
		},
		tooltip: {
			theme: 'dark',
		},
		xaxis: {
			axisBorder: {
				show: true,
				color: `rgba(113, 113, 123, 0.5)`,
			},
			axisTicks: {
				show: false,
			},
			labels: {
				style: {
					colors: '#71717b',
				},
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: '#71717b',
				},
			},
			title: {
				style: {
					color: '#71717b',
				},
			},
		},
	};

	return (
		<ReactApexChart
			options={_.merge(defaultOptions, options)}
			series={series}
			type={type}
			height={height}
			width={width}
		/>
	);
};
Chart.displayName = 'Chart';

export default memo(Chart);
