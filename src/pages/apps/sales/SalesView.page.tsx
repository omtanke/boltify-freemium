import Container from '@/components/layout/Container';
import { useOutletContext, useSearchParams } from 'react-router';
import { OutletContextType } from '@/pages/apps/sales/_layouts/Sales.layout';
import { useEffect } from 'react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import EXAMPLE from '@/examples/_index';
import Avatar from '@/components/ui/Avatar';
import User from '@/mocks/users.mock';
import PAYMENT_METHOD from '@/constants/paymentMethod.constant';

const SalesViewPage = () => {
	const [searchParams] = useSearchParams();
	const orderId = searchParams.get('orderId');

	const { setHeaderLeft } = useOutletContext<OutletContextType>();
	useEffect(() => {
		setHeaderLeft(
			<Breadcrumb
				list={[
					{ ...pages.apps.sales },
					{ ...pages.apps.sales.subPages.view },
					...(orderId ? [{ ...pages.apps.sales.subPages.view, text: orderId }] : []),
				]}
			/>,
		);
		return () => {
			setHeaderLeft(undefined);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderId]);

	return (
		<>
			<EXAMPLE.PageSections.TitleBars.BadgeAndButtons />
			<Container>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12 flex flex-col gap-4 md:col-span-8'>
						<div>
							<EXAMPLE.Table.Products.OrderProduct />
						</div>
						<Card>
							<CardHeader>
								<CardHeaderChild>
									<CardTitle
										iconProps={{
											icon: 'ShippingLoading',
											color: 'emerald',
											size: 'text-3xl',
										}}>
										Order activity
									</CardTitle>
								</CardHeaderChild>
							</CardHeader>
							<CardBody>
								<EXAMPLE.PageSections.Timeline.OrderActivity />
							</CardBody>
						</Card>
					</div>
					<div className='col-span-12 flex flex-col gap-4 md:col-span-4'>
						<Card className='bg-zinc-500/5!'>
							<CardHeader>
								<CardHeaderChild>
									<CardTitle
										iconProps={{
											icon: 'User',
											color: 'amber',
											size: 'text-3xl',
										}}>
										Customer details
									</CardTitle>
								</CardHeaderChild>
							</CardHeader>
							<CardBody className='p-2!'>
								<div className='rounded-lg bg-white p-4 dark:bg-zinc-950'>
									<div className='flex justify-between'>
										<div>
											<Badge color='emerald' variant='soft'>
												Online
											</Badge>
										</div>
										<div className='flex flex-col items-center gap-2'>
											<div className='mb-4'>
												<Avatar
													src={User.oliviaNovak.image.org}
													color={User.oliviaNovak.color}
													size='w-24'
												/>
											</div>
											<div>
												{`${User.oliviaNovak.firstName} ${
													User.oliviaNovak.lastName
												}`}
											</div>
											<div className='text-zinc-500'>
												{User.oliviaNovak.position}
											</div>
										</div>
										<div>
											<EXAMPLE.Ui.Dropdown.Others />
										</div>
									</div>
									<div className='-mx-4 my-4 border-t border-zinc-500/25'></div>
									<div className='flex justify-between gap-4'>
										<div className='flex gap-2'>
											<Icon icon='Facebook01' size='text-xl' />
											<Icon icon='Google' size='text-xl' />
										</div>
										<a href={`mailto:${User.oliviaNovak.email}`}>
											{User.oliviaNovak.email}
										</a>
									</div>
								</div>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<CardHeaderChild>
									<CardTitle
										iconProps={{
											icon: 'ShippingLoading',
											color: 'emerald',
											size: 'text-3xl',
										}}>
										Shipping address
									</CardTitle>
								</CardHeaderChild>
								<CardHeaderChild>
									<Button aria-label='Edit' variant='link' className='px-0!'>
										Edit
									</Button>
								</CardHeaderChild>
							</CardHeader>
							<CardBody>
								<div className='mb-2 text-2xl font-bold'>New York,</div>
								<div>20 W 34th St.,</div>
								<div>NY 10001</div>
								<div className='mt-2'>+1 555-123-4567</div>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<CardHeaderChild>
									<CardTitle
										iconProps={{
											icon: 'MapPin',
											color: 'blue',
											size: 'text-3xl',
										}}>
										Billing address
									</CardTitle>
								</CardHeaderChild>
								<CardHeaderChild>
									<Button aria-label='Edit' variant='link' className='px-0!'>
										Edit
									</Button>
								</CardHeaderChild>
							</CardHeader>
							<CardBody>
								<div className='mb-2 text-2xl font-bold'>New York,</div>
								<div>20 W 34th St.,</div>
								<div>NY 10001</div>
								<div className='mt-2'>+1 555-123-4567</div>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<CardHeaderChild>
									<CardTitle
										iconProps={{
											icon: 'MoneyAdd01',
											color: 'violet',
											size: 'text-3xl',
										}}>
										Payment
									</CardTitle>
								</CardHeaderChild>
							</CardHeader>
							<CardBody>
								<div className='flex gap-4'>
									<div>
										<Icon
											icon={PAYMENT_METHOD.MASTER.icon}
											color={PAYMENT_METHOD.MASTER.color}
											size='text-6xl'
										/>
									</div>
									<div className='flex flex-col gap-1'>
										<div className='text-xl font-bold'>Master Card</div>
										<div className='text-zinc-500'>
											Ending: 2345, Expires: 12/30
										</div>
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

export default SalesViewPage;
