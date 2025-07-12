// @start-snippet:: timelineOrderActivityExampleSource
import Timeline, { TimelineHeader, TimelineItem } from '@/components/ui/Timeline';
import dayjs from 'dayjs';
import Icon from '@/components/icon/Icon';

const TimelineOrderActivityExample = () => {
	return (
		<Timeline>
			<TimelineHeader>{dayjs().add(-1, 'day').format('D MMM, YYYY')}</TimelineHeader>
			<TimelineItem
				lineClassName='after:bg-emerald-500!'
				dotClassName='bg-emerald-500!'
				header={
					<div className='flex items-center gap-2'>
						<Icon icon='File01' size='text-xl' />
						<span>Order was placed (Order ID: #123456)</span>
					</div>
				}
				footer={
					<div className='mt-1 flex items-center gap-2 text-zinc-500'>
						{dayjs().add(-23, 'hours').format('dddd - HH:mm')}
					</div>
				}>
				Your order has been placed successfully
			</TimelineItem>
			<TimelineItem
				lineClassName='after:bg-emerald-500!'
				dotClassName='bg-emerald-500!'
				header={
					<div className='flex items-center gap-2'>
						<Icon icon='ShippingCenter' size='text-xl' />
						<span>Pick-up</span>
					</div>
				}
				footer={
					<div className='mt-1 flex items-center gap-2 text-zinc-500'>
						{dayjs().add(-21.3, 'hours').format('dddd - HH:mm')}
					</div>
				}>
				Pick-up scheduled with courier
			</TimelineItem>
			<TimelineItem
				lineClassName='after:bg-emerald-500!'
				dotClassName='bg-emerald-500!'
				header={
					<div className='flex items-center gap-2'>
						<Icon icon='ShippingLoading' size='text-xl' />
						<span>Dispatched</span>
					</div>
				}
				footer={
					<div className='mt-1 flex items-center gap-2 text-zinc-500'>
						{dayjs().add(-18.5, 'hours').format('dddd - HH:mm')}
					</div>
				}>
				Item has been picked up by courier
			</TimelineItem>
			<TimelineHeader>{dayjs().format('D MMM, YYYY')}</TimelineHeader>
			<TimelineItem
				lineClassName='after:bg-emerald-500!'
				dotClassName='bg-emerald-500!'
				header={
					<div className='flex items-center gap-2'>
						<Icon icon='ContainerTruck02' size='text-xl' />
						<span>Package arrived</span>
					</div>
				}
				footer={
					<div className='mt-1 flex items-center gap-2 text-zinc-500'>
						{dayjs().add(2.31, 'hours').format('dddd - HH:mm')}
					</div>
				}>
				Package arrived at an Amazon facility, NY
			</TimelineItem>
			<TimelineItem
				dotClassName='bg-emerald-500!'
				header={
					<div className='flex items-center gap-2'>
						<Icon icon='DeliverySent02' size='text-xl' />
						<span>Dispatched for delivery</span>
					</div>
				}
				footer={
					<div className='mt-1 flex items-center gap-2 text-zinc-500'>
						{dayjs().add(5.93, 'hours').format('dddd - HH:mm')}
					</div>
				}>
				Package has left an Amazon facility, NY
			</TimelineItem>
			<TimelineItem
				lineClassName='after:bg-transparent!'
				header={
					<div className='flex items-center gap-2'>
						<Icon icon='PackageDelivered' size='text-xl' />
						<span>Delivery</span>
					</div>
				}>
				Package will be delivered by tomorrow
			</TimelineItem>
		</Timeline>
	);
};

export default TimelineOrderActivityExample;
// @end-snippet:: timelineOrderActivityExampleSource
