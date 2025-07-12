import Container from '@/components/layout/Container';
import { useOutletContext, useSearchParams } from 'react-router';
import { OutletContextType } from '@/pages/apps/sales/_layouts/Sales.layout';
import { useEffect, useState } from 'react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import CUSTOMERS, { ICustomer } from '@/mocks/customers.mock';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/icon/Icon';
import EXAMPLE from '@/examples/_index';
import { Logo, LogoFacit, LogoFyr } from '@/assets/images';
import FieldWrap from '@/components/form/FieldWrap';
import Input from '@/components/form/Input';
import ButtonGroup from '@/components/ui/ButtonGroup';

const currentCustomer = (id: number): ICustomer | undefined => {
	return CUSTOMERS.find((customer) => customer.id === id);
};

const CustomerViewPage = () => {
	const [searchParams] = useSearchParams();
	const customerId = searchParams.get('customerId');

	const [data] = useState<ICustomer | undefined>(currentCustomer(Number(customerId)));

	const { setHeaderLeft } = useOutletContext<OutletContextType>();
	useEffect(() => {
		setHeaderLeft(
			<Breadcrumb
				list={[
					{ ...pages.apps.customer },
					{ ...pages.apps.customer.subPages.view },
					...(customerId
						? [
								{
									...pages.apps.customer.subPages.view,
									text: data ? `${data?.firstName} ${data?.lastName}` : 'New',
								},
							]
						: []),
				]}
			/>,
		);
		return () => {
			setHeaderLeft(undefined);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [customerId]);

	return (
		<>
			<Container>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12'>
						<Card>
							<CardBody>
								<EXAMPLE.PageSections.UserProfile.HeaderWithTabs />
							</CardBody>
						</Card>
					</div>
					<div className='col-span-12'>
						<Card>
							<CardBody>
								<div className='grid grid-cols-12 gap-4 divide-zinc-500/25 xl:divide-x'>
									<div className='col-span-12 flex flex-col gap-4 pb-4 xl:col-span-4 xl:pe-4 xl:pb-0'>
										<div className='flex flex-col gap-2'>
											<div className='mb-2 text-2xl font-bold'>About</div>
											<EXAMPLE.PageSections.DescriptionList.SimpleWithIcon />
										</div>
										<hr className='my-4 border-zinc-500/25' />
										<div className='flex flex-col gap-2'>
											<div className='mb-2 text-2xl font-bold'>
												Organization
											</div>
											<div>
												<EXAMPLE.Ui.Dropdown.CompanyDetails />
											</div>
										</div>
										<hr className='my-4 border-zinc-500/25' />
										<div className='flex flex-col gap-2'>
											<div className='mb-2 text-2xl font-bold'>
												Connections
											</div>
											<EXAMPLE.PageSections.ListGroup.AvatarWithButton />
										</div>
									</div>
									<div className='col-span-12 flex flex-col gap-4 xl:col-span-8'>
										<EXAMPLE.DataVisualization.DataCard.StatCardsWithProgress />
										<Card>
											<CardHeader>
												<CardHeaderChild>
													<CardTitle
														iconProps={{
															icon: 'DocumentAttachment',
															color: 'blue',
															size: 'text-3xl',
														}}>
														Projects
													</CardTitle>
												</CardHeaderChild>
												<CardHeaderChild>
													<div>
														<FieldWrap
															firstSuffix={<Icon icon='Search02' />}>
															<Input
																name='search'
																type='search'
																placeholder='Search...'
																dimension='sm'
															/>
														</FieldWrap>
													</div>
													<Button
														variant='solid'
														icon='PlusSign'
														aria-label='Add Project'>
														Add Project
													</Button>
												</CardHeaderChild>
											</CardHeader>
											<CardHeader className='border-b border-inherit'>
												<CardHeaderChild className='gap-8'>
													<Button
														icon='Work'
														className='px-0!'
														aria-label='Open'>
														Open
													</Button>
													<Button
														icon='WorkAlert'
														variant='link'
														className='px-0!'
														aria-label='Close'>
														Closed
													</Button>
												</CardHeaderChild>
											</CardHeader>
											<CardBody>
												<div className='divide-y divide-zinc-500/25'>
													<div className='flex items-center gap-4 py-4'>
														<div className='flex grow items-center gap-4'>
															<div className=''>
																<img
																	src={Logo}
																	className='size-12'
																	alt='Logo'
																/>
															</div>
															<div>
																<div>
																	Boltify | React Tailwind CSS
																	Admin & Starter Template
																</div>
																<div className='text-sm text-zinc-500'>
																	Updated 3 days ago
																</div>
															</div>
														</div>
														<ButtonGroup variant='soft' color='zinc'>
															<Button
																icon='Copy01'
																aria-label='Copy'
															/>
															<Button
																icon='Delete01'
																aria-label='Delete'
															/>
														</ButtonGroup>
													</div>
													<div className='flex items-center gap-4 py-4'>
														<div className='flex grow items-center gap-4'>
															<div className=''>
																<img
																	src={LogoFyr}
																	className='size-12'
																	alt='Logo'
																/>
															</div>
															<div>
																<div>
																	Boltify | React Tailwind Admin
																	Dashboard
																</div>
																<div className='text-sm text-zinc-500'>
																	Updated 7 days ago
																</div>
															</div>
														</div>
														<ButtonGroup variant='soft' color='zinc'>
															<Button
																icon='Copy01'
																aria-label='Copy'
															/>
															<Button
																icon='Delete01'
																aria-label='Delete'
															/>
														</ButtonGroup>
													</div>
													<div className='flex items-center gap-4 py-4'>
														<div className='flex grow items-center gap-4'>
															<div className=''>
																<img
																	src={LogoFacit}
																	className='size-12'
																	alt='Logo'
																/>
															</div>
															<div>
																<div>
																	Boltify | React Admin Dashboard
																</div>
																<div className='text-sm text-zinc-500'>
																	Updated 2 weeks ago
																</div>
															</div>
														</div>
														<ButtonGroup variant='soft' color='zinc'>
															<Button
																icon='Copy01'
																aria-label='Copy'
															/>
															<Button
																icon='Delete01'
																aria-label='Delete'
															/>
														</ButtonGroup>
													</div>
												</div>
											</CardBody>
										</Card>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Container>
		</>
	);
};

export default CustomerViewPage;
