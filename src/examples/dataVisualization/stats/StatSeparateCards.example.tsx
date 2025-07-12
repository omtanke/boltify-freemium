// @start-snippet:: statSeparateCardsExampleSource
import Card, { CardBody } from '@/components/ui/Card';
import { Bing, Google, Yahoo, Yandex } from '@/assets/images';
import priceFormat from '@/utils/priceFormat.util';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/icon/Icon';

const StatSeparateCardsExample = () => {
	return (
		<Card>
			<CardBody className='!p-0'>
				<div className='grid grid-cols-1 divide-x divide-y divide-zinc-500/10 lg:grid-cols-2 xl:grid-cols-4 xl:divide-y-0 dark:divide-zinc-500/25 [&>*]:p-6'>
					<div className='flex flex-col gap-4'>
						<img src={Google} alt='Google' className='size-12' />
						<div className='text-4xl font-extrabold text-blue-500'>
							{priceFormat(2134191)}
						</div>
						<div className='flex items-center gap-2'>
							<span className='text-zinc-500'>Sales last 30 days</span>
							<Badge variant='soft' color='emerald' rounded='rounded-lg'>
								<Icon icon='TradeUp' /> 7.6
							</Badge>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<img src={Bing} alt='Bing' className='size-12' />
						<div className='text-4xl font-extrabold text-blue-500'>
							{priceFormat(1241245)}
						</div>
						<div className='flex items-center gap-2'>
							<span className='text-zinc-500'>Sales last 30 days</span>
							<Badge variant='soft' color='red' rounded='rounded-lg'>
								<Icon icon='TradeDown' /> 4.2
							</Badge>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<img src={Yandex} alt='Yandex' className='size-12' />
						<div className='text-4xl font-extrabold text-blue-500'>
							{priceFormat(96831)}
						</div>
						<div className='flex items-center gap-2'>
							<span className='text-zinc-500'>Sales last 30 days</span>
							<Badge variant='soft' color='emerald' rounded='rounded-lg'>
								<Icon icon='TradeUp' /> 8.3
							</Badge>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<img src={Yahoo} alt='Yahoo' className='size-12' />
						<div className='text-4xl font-extrabold text-blue-500'>
							{priceFormat(60812)}
						</div>
						<div className='flex items-center gap-2'>
							<span className='text-zinc-500'>Sales last 30 days</span>
							<Badge variant='soft' color='emerald' rounded='rounded-lg'>
								<Icon icon='TradeUp' /> 21.4
							</Badge>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default StatSeparateCardsExample;
// @end-snippet:: statSeparateCardsExampleSource
