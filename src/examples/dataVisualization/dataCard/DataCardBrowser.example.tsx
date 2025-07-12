// @start-snippet:: dataCardBrowserExampleSource
import Card, {
	CardBody,
	CardFooter,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/icon/Icon';
import ProgressCircular from '@/components/ui/ProgressCircular';
import Checkbox from '@/components/form/Checkbox';
import { useState } from 'react';

const DataCardBrowserExample = () => {
	const [checked, setChecked] = useState<boolean>(true);
	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle
						iconProps={{
							icon: 'DashboardBrowsing',
							color: 'emerald',
							size: 'text-3xl',
						}}>
						Browsers
					</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<Badge variant='outline' color='emerald' rounded='rounded-full'>
						<Icon icon='Tick02' /> Good
					</Badge>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12'>
						<ProgressCircular
							type='quarter'
							color='emerald'
							value={85}
							bgStrokeWidth={4}
							circleStrokeWidth={2}
							className='!size-48'>
							<div>
								<div>85%</div>
								<div className='text-xs'>Progress</div>
							</div>
						</ProgressCircular>
						<div className='text-zinc-500'>
							Visitors are viewing website from the desktop device. 57% of all users
							are using MacOS
						</div>
					</div>
					<div className='col-span-4 flex flex-col gap-2 rounded-lg bg-zinc-500/10 p-4'>
						<Icon icon='Chrome' size='text-4xl' color='zinc' />
						<div className='text-zinc-500'>Chrome</div>
						<div className='text-2xl font-extrabold'>48%</div>
					</div>
					<div className='col-span-4 flex flex-col gap-2 rounded-lg bg-zinc-500/10 p-4'>
						<Icon icon='Safari' size='text-4xl' color='zinc' />
						<div className='text-zinc-500'>Safari</div>
						<div className='text-2xl font-extrabold'>36%</div>
					</div>
					<div className='col-span-4 flex flex-col gap-2 rounded-lg bg-zinc-500/10 p-4'>
						<Icon icon='Browser' size='text-4xl' color='zinc' />
						<div className='text-zinc-500'>Other</div>
						<div className='text-2xl font-extrabold'>16%</div>
					</div>
				</div>
			</CardBody>
			<CardFooter>
				<div className='flex w-full gap-4 rounded-lg border border-zinc-500/25 p-4'>
					<div className='flex grow items-center gap-2'>
						<Icon icon='Notification01' size='text-2xl' />
						<div>
							<div>Push Notification</div>
							<div className='text-sm text-zinc-500'>
								Automatically send me notifications
							</div>
						</div>
					</div>
					<div>
						<Checkbox
							variant='switch'
							checked={checked}
							onChange={(event) => {
								setChecked(event.target.checked);
							}}
						/>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
};

export default DataCardBrowserExample;
// @end-snippet:: dataCardBrowserExampleSource
