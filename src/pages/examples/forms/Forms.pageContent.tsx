import { useNavigate } from 'react-router';
import pages from '@/Routes/pages';
import Card, { CardBody, CardFooter, CardFooterChild } from '@/components/ui/Card';
import EXAMPLE from '@/examples/_index';
import Empty from '@/components/ui/Empty';
import ScaledWrapper from '@/pages/examples/_partial/ScaledWrapper.partial';
import { Content } from '@/components/ui/Modal';

const FormsPageContent = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className='col-span-12 mt-12 text-xl'>
				{pages.examples.exampleMain.subPages.forms.text}
			</div>
			{Object.values(pages.examples.exampleMain.subPages.forms.subPages).map((subPage) => (
				<button
					aria-label={`${subPage.id} form example`}
					key={subPage.id}
					className='col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3'
					onClick={() => navigate(subPage.to)}>
					<Card className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
						<CardBody className='pb-0!'>
							<div className='h-48'>
								{subPage.id === 'general' && (
									<ScaledWrapper>
										<div className='pt-18'>
											<EXAMPLE.Forms.General.InlineRemovableInputs />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'filters' && (
									<ScaledWrapper>
										<div className='mx-auto w-2/3 pt-12'>
											<EXAMPLE.Forms.Filters.Payments />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'fileUploads' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<EXAMPLE.Forms.FileUploads.SimpleDragDrop />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'addAndCreateForms' && (
									<ScaledWrapper>
										<div className='mx-auto w-2/3 pt-18'>
											<EXAMPLE.Forms.AddCreate.NewUser />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'billingAndPayments' && (
									<ScaledWrapper>
										<div className='mx-auto w-2/3 pt-18'>
											<Content>
												<EXAMPLE.Forms.BillingAndPayments.AddPayment />
											</Content>
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'layouts' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<Empty />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'switches' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<Empty />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'radioAndCheckboxGroups' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<Empty />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'textareaInput' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<Empty />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'giftCards' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<Empty />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'reviews' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<Empty />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'sidebarFilters' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<Empty />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'sectionFilterBars' && (
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
			))}
		</>
	);
};

export default FormsPageContent;
