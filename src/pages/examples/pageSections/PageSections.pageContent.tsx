import { useNavigate } from 'react-router';
import pages from '@/Routes/pages';
import Card, { CardBody, CardFooter, CardFooterChild } from '@/components/ui/Card';
import EXAMPLE from '@/examples/_index';
import Empty from '@/components/ui/Empty';
import ScaledWrapper from '@/pages/examples/_partial/ScaledWrapper.partial';

const PageSectionsPageContent = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className='col-span-12 mt-12 text-xl'>
				{pages.examples.exampleMain.subPages.pageSections.text}
			</div>
			{Object.values(pages.examples.exampleMain.subPages.pageSections.subPages).map(
				(subPage) => (
					<button
						aria-label={`${subPage.id} page section example`}
						key={subPage.id}
						className='col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3'
						onClick={() => navigate(subPage.to)}>
						<Card className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
							<CardBody className='pb-0!'>
								<div className='h-48'>
									{subPage.id === 'heroSections' && (
										<ScaledWrapper scale={0.3}>
											<EXAMPLE.PageSections.HeroSections.WithImageAndText />
										</ScaledWrapper>
									)}
									{subPage.id === 'iconSection' && (
										<ScaledWrapper scale={0.3}>
											<div className='pt-18'>
												<EXAMPLE.PageSections.IconSections.IconGrayBackgroundOnHover />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'pricingSections' && (
										<ScaledWrapper scale={0.3}>
											<EXAMPLE.PageSections.PricingSections.Card />
										</ScaledWrapper>
									)}
									{subPage.id === 'faqSections' && (
										<ScaledWrapper scale={0.3}>
											<EXAMPLE.PageSections.FaqSections.RightAlignedWithBorderBottom />
										</ScaledWrapper>
									)}
									{subPage.id === 'listGroup' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2 pt-18'>
												<EXAMPLE.PageSections.ListGroup.LogoWithButton />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'descriptionList' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2 pt-18'>
												<EXAMPLE.PageSections.DescriptionList.SimpleWithIcon />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'timeline' && (
										<ScaledWrapper>
											<div className='mx-auto w-2/3 pt-18'>
												<EXAMPLE.PageSections.Timeline.OrderActivity />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'setUpFlows' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2 pt-18'>
												<Empty />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'userProfile' && (
										<ScaledWrapper>
											<div className=''>
												<EXAMPLE.PageSections.UserProfile.HeaderWithTabs />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'notificationSystem' && (
										<ScaledWrapper>
											<EXAMPLE.PageSections.NotificationSystems.TableFormatListOfCheckbox />
										</ScaledWrapper>
									)}
									{subPage.id === 'quickActions' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2 pt-18'>
												<EXAMPLE.PageSections.QuickActions.LargeGroupButton />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'banners' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2 pt-18'>
												<Empty />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'titleBars' && (
										<ScaledWrapper>
											<div className='pt-24'>
												<EXAMPLE.PageSections.TitleBars.TagsAndButtons />
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

export default PageSectionsPageContent;
