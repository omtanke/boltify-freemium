import { useNavigate } from 'react-router';
import pages from '@/Routes/pages';
import Card, { CardBody, CardFooter, CardFooterChild } from '@/components/ui/Card';
import EXAMPLE from '@/examples/_index';
import Empty from '@/components/ui/Empty';
import ScaledWrapper from '@/pages/examples/_partial/ScaledWrapper.partial';

const UserInterfacePageContent = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className='col-span-12 mt-12 text-xl'>
				{pages.examples.exampleMain.subPages.userInterface.text}
			</div>
			{Object.values(pages.examples.exampleMain.subPages.userInterface.subPages).map(
				(subPage) => (
					<button
						aria-label={`${subPage.id} user interface example`}
						key={subPage.id}
						className='col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3'
						onClick={() => navigate(subPage.to)}>
						<Card className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
							<CardBody className='pb-0!'>
								<div className='h-48'>
									{subPage.id === 'dropdown' && (
										<ScaledWrapper>
											<div className='mx-auto flex w-full items-center justify-center pt-32'>
												<EXAMPLE.Ui.Dropdown.Assign />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'select' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2 pt-18'>
												<Empty />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'buttons' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2 pt-18'>
												<Empty />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'buttonGroups' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2 pt-18'>
												<Empty />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'badges' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2 pt-18'>
												<Empty />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'progressBars' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2 pt-18'>
												<Empty />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'popovers' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2 pt-18'>
												<Empty />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'links' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2 pt-18'>
												<Empty />
											</div>
										</ScaledWrapper>
									)}
									{subPage.id === 'navs' && (
										<ScaledWrapper>
											<div className='mx-auto w-1/2 pt-18'>
												<Empty />
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

export default UserInterfacePageContent;
