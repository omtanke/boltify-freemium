import { useNavigate } from 'react-router';
import pages from '@/Routes/pages';
import Card, { CardBody, CardFooter, CardFooterChild } from '@/components/ui/Card';
import EXAMPLE from '@/examples/_index';
import ScaledWrapper from '@/pages/examples/_partial/ScaledWrapper.partial';

const DataVisualizationPageContent = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className='col-span-12 mt-12 text-xl'>
				{pages.examples.exampleMain.subPages.dataVisualization.text}
			</div>
			{Object.values(pages.examples.exampleMain.subPages.dataVisualization.subPages).map(
				(subPage) => (
					<button
						aria-label={`${subPage.id} data visualization example`}
						key={subPage.id}
						className='col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3'
						onClick={() => navigate(subPage.to)}>
						<Card className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
							<CardBody className='pb-0!'>
								<div className='h-48'>
									{subPage.id === 'chartsAndGraph' && (
										<ScaledWrapper>
											<EXAMPLE.DataVisualization.ChartAndGraph.LineChartDatepicker />
										</ScaledWrapper>
									)}
									{subPage.id === 'interactiveDataCards' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2'>
												<EXAMPLE.DataVisualization.InteractiveDataCards.Traffic />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'dataCards' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2'>
												<EXAMPLE.DataVisualization.DataCard.Browser />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'dataMaps' && (
										<ScaledWrapper>
											<EXAMPLE.DataVisualization.Map.World />
										</ScaledWrapper>
									)}
									{subPage.id === 'stats' && (
										<ScaledWrapper scale={0.4}>
											<div className='pt-24'>
												<EXAMPLE.DataVisualization.Stat.SeparateCards />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'statsCharts' && (
										<ScaledWrapper>
											<div className='pt-24'>
												<EXAMPLE.DataVisualization.StatCharts.WithLine />
											</div>
										</ScaledWrapper>
									)}
								</div>
							</CardBody>
							<CardFooter className='border-t border-inherit pt-4'>
								<CardFooterChild>{subPage.text}</CardFooterChild>
							</CardFooter>
						</Card>
					</button>
				),
			)}
		</>
	);
};

export default DataVisualizationPageContent;
