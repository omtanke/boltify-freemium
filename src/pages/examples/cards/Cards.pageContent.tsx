import { useNavigate } from 'react-router';
import pages from '@/Routes/pages';
import Card, { CardBody, CardFooter, CardFooterChild } from '@/components/ui/Card';
import EXAMPLE from '@/examples/_index';
import ScaledWrapper from '@/pages/examples/_partial/ScaledWrapper.partial';

const CardsPageContent = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className='col-span-12 mt-12 text-xl'>
				{pages.examples.exampleMain.subPages.cards.text}
			</div>
			{Object.values(pages.examples.exampleMain.subPages.cards.subPages).map((subPage) => (
				<button
					aria-label={`${subPage.id} card example`}
					key={subPage.id}
					className='col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3'
					onClick={() => navigate(subPage.to)}>
					<Card className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
						<CardBody className='pb-0!'>
							<div className='h-48'>
								{subPage.id === 'projects' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2'>
											<EXAMPLE.Card.Project.Card />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'integrations' && (
									<ScaledWrapper>
										<div className='mx-auto w-2/3'>
											<EXAMPLE.Card.Integrations.Card />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'locationAndAddress' && (
									<ScaledWrapper scale={0.3}>
										<div className='pt-48'>
											<EXAMPLE.Card.LocationAddress.AddAndEdit />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'masonryLayout' && (
									<ScaledWrapper scale={0.3}>
										<EXAMPLE.Card.Masonry.GridView />
									</ScaledWrapper>
								)}
								{subPage.id === 'inlineCards' && (
									<ScaledWrapper>
										<div className='flex flex-col gap-4'>
											<EXAMPLE.Card.InlineCards.ListView />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'brandingFeaturedCards' && (
									<ScaledWrapper scale={0.3}>
										<div className='pt-24'>
											<EXAMPLE.Card.BrandingFeaturedCard.DownloadApp />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'trialCards' && (
									<ScaledWrapper>
										<div className='mx-auto w-2/3 pt-18'>
											<EXAMPLE.Card.TrialCards.Alert />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'systemLogs' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-8'>
											<EXAMPLE.Card.SystemLogs.Session />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'importAndExportData' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-12'>
											<EXAMPLE.Card.ImportAndExport.ImportContacts />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'dataSnippets' && (
									<ScaledWrapper scale={0.3}>
										<div className='mx-auto grid w-1/2 grid-cols-2 gap-4 pt-32'>
											<EXAMPLE.Card.DataSnippets.UserList />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'contacts' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<EXAMPLE.Card.Contacts.UserConnect />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'cardNavs' && (
									<ScaledWrapper>
										<div className='mx-auto w-2/3 pt-18'>
											<EXAMPLE.Card.CardNavs.SoftColor />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'filesAndFolders' && (
									<ScaledWrapper>
										<div className='pt-18'>
											<EXAMPLE.Card.FilesAndFolders.Folders />
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
			))}
		</>
	);
};

export default CardsPageContent;
