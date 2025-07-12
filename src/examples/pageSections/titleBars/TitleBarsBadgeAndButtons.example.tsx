// @start-snippet:: titleBarsBadgeAndButtonsExampleSource
import Subheader, { SubheaderLeft, SubheaderRight } from '@/components/layout/Subheader';
import Badge from '@/components/ui/Badge';
import PAYMENT_STATUS from '@/constants/paymentStatus.constant';
import ORDER_STATUS from '@/constants/orderStatus.constant';
import Icon from '@/components/icon/Icon';
import dayjs from 'dayjs';
import Button from '@/components/ui/Button';

const TitleBarsBadgeAndButtonsExample = () => {
	return (
		<Subheader>
			<SubheaderLeft>
				<div className='flex flex-col gap-2'>
					<div className='flex gap-2'>
						<div className='text-xl font-bold'>Order #123456</div>
						<Badge color={PAYMENT_STATUS.PAID.color} variant='soft'>
							<div className='truncate'>{PAYMENT_STATUS.PAID.text}</div>
						</Badge>
						<Badge color={ORDER_STATUS.FULFILLED.color} variant='soft'>
							<Icon icon={ORDER_STATUS.FULFILLED.icon} />
							<div className='truncate'>{ORDER_STATUS.FULFILLED.text}</div>
						</Badge>
					</div>
					<div className='text-zinc-500'>
						{dayjs().add(-5, 'day').add(2, 'hours').format('DD MMM, YYYY')}
					</div>
				</div>
			</SubheaderLeft>
			<SubheaderRight>
				<Button aria-label='Delete' variant='soft' color='red' icon='Delete02'>
					Delete
				</Button>
				<Button
					aria-label='Save'
					variant='soft'
					color='emerald'
					icon='FloppyDisk'
					onClick={() => {}}>
					Save changes
				</Button>
			</SubheaderRight>
		</Subheader>
	);
};

export default TitleBarsBadgeAndButtonsExample;
// @end-snippet:: titleBarsBadgeAndButtonsExampleSource
