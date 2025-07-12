import { useNavigate } from 'react-router';
import pages from '@/Routes/pages';
import Card, { CardBody, CardFooter, CardFooterChild } from '@/components/ui/Card';
import { OffcanvasNotificationExamplePreview } from '@/examples/overlays/offcanvas/OffcanvasNotification.example';
import { GeneralOrderActivityExamplePreview } from '@/examples/overlays/general/GeneralOrderActivity.example';
import { FilterPaymentModalExamplePreview } from '@/examples/overlays/filters/FilterPaymentModal.example';
import Empty from '@/components/ui/Empty';
import { AddCreateNewUserModalExamplePreview } from '@/examples/overlays/addCreate/AddCreateNewUserModal.example';
import ScaledWrapper from '@/pages/examples/_partial/ScaledWrapper.partial';
import { ReviewSiteFeedbackExamplePreview } from '@/examples/overlays/review/ReviewSiteFeedback.example';
import { ShareAndInviteInviteUserExamplePreview } from '@/examples/overlays/shareAndInvite/ShareAndInviteInviteUser.example';
import EXAMPLE from '@/examples/_index';
import { Content } from '@/components/ui/Modal';

const OverlaysPageContent = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className='col-span-12 mt-12 text-xl'>
				{pages.examples.exampleMain.subPages.overlays.text}
			</div>
			{Object.values(pages.examples.exampleMain.subPages.overlays.subPages).map((subPage) => (
				<button
					aria-label={`${subPage.id} overlay example`}
					key={subPage.id}
					className='col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3'
					onClick={() => navigate(subPage.to)}>
					<Card className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
						<CardBody className='pb-0!'>
							<div className='h-48'>
								{subPage.id === 'offcanvas' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<OffcanvasNotificationExamplePreview />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'general' && (
									<ScaledWrapper>
										<div className='mx-auto w-2/3 pt-18'>
											<GeneralOrderActivityExamplePreview />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'filters' && (
									<ScaledWrapper>
										<div className='mx-auto w-2/3 pt-18'>
											<FilterPaymentModalExamplePreview />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'reviews' && (
									<ScaledWrapper>
										<div className='mx-auto w-2/3 pt-18'>
											<ReviewSiteFeedbackExamplePreview />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'shareAndInvite' && (
									<ScaledWrapper>
										<div className='mx-auto w-2/3 pt-18'>
											<ShareAndInviteInviteUserExamplePreview />
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
								{subPage.id === 'addAndCreateForms' && (
									<ScaledWrapper>
										<div className='mx-auto w-2/3 pt-18'>
											<AddCreateNewUserModalExamplePreview />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'editForms' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<Empty />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'dataManagement' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<Empty />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'feedback' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<Empty />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'dateAndTime' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<Empty />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'authentication' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<Empty />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'fileUploads' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<Empty />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'eCommerce' && (
									<ScaledWrapper>
										<div className='mx-auto w-1/2 pt-18'>
											<Empty />
										</div>
									</ScaledWrapper>
								)}
								{subPage.id === 'inboxChatAndMessages' && (
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

export default OverlaysPageContent;
