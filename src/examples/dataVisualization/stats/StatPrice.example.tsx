import priceFormat from '@/utils/priceFormat.util';
import Icon from '@/components/icon/Icon';

const StatPriceExample = () => {
	return (
		<div>
			<div className='flex items-center gap-2 text-2xl'>
				{priceFormat(73683.32)} <Icon icon='TradeUp' color='emerald' size='text-4xl' />
			</div>
			<div className='text-sm text-emerald-500'>0.2% more than the previous 30 days.</div>
		</div>
	);
};

export default StatPriceExample;
