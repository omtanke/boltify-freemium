import { useNavigate } from 'react-router';
import pages from '@/Routes/pages';
import Card, { CardBody, CardFooter, CardFooterChild } from '@/components/ui/Card';
import ScaledWrapper from '@/pages/examples/_partial/ScaledWrapper.partial';
import EXAMPLE from '@/examples/_index';

const NavigationsPageContent = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className='col-span-12 mt-12 text-xl'>
				{pages.examples.exampleMain.subPages.navigations.text}
			</div>
			{Object.values(pages.examples.exampleMain.subPages.navigations.subPages).map(
				(subPage) => (
					<button
						aria-label={`${subPage.id} navigation example`}
						key={subPage.id}
						className='col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3'
						onClick={() => navigate(subPage.to)}>
						<Card className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
							<CardBody className='pb-0!'>
								<div className='h-48'>
									{subPage.id === 'header' && (
										<ScaledWrapper scale={0.3}>
											<div className='pt-24'>
												<EXAMPLE.Navigations.Navbars.CenterAligned />
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

export default NavigationsPageContent;
