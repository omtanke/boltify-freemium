// @start-snippet:: chartAndGraphLineChartDatepickerExampleSource
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardHeaderSeparator,
	CardTitle,
} from '@/components/ui/Card';
import ChartLinePart from '@/parts/charts/ChartLine.part';
import EX_Dropdown from '@/examples/ui/dropdown/_index';
import EX_Stat from '@/examples/dataVisualization/stats/_index';

const ChartAndGraphLineChartDatepickerExample = () => {
	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle
						iconProps={{
							icon: 'Energy',
							color: 'blue',
							size: 'text-3xl',
						}}>
						Sales
					</CardTitle>
					<CardHeaderSeparator />
					<EX_Stat.Price />
				</CardHeaderChild>
				<CardHeaderChild>
					<EX_Dropdown.Datepicker />
					<EX_Dropdown.Download />
					<EX_Dropdown.Others />
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<ChartLinePart />
			</CardBody>
		</Card>
	);
};

export default ChartAndGraphLineChartDatepickerExample;
// @end-snippet:: chartAndGraphLineChartDatepickerExampleSource
