// @start-snippet:: interactiveDataCardTrafficExampleSource
import Card, {
	CardBody,
	CardFooter,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '@/components/ui/Card';
import Progress, { ProgressBar } from '@/components/ui/Progress';
import Avatar from '@/components/ui/Avatar';
import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5 } from '@/assets/images';
import AvatarGroup from '@/components/ui/AvatarGroup';
import Button from '@/components/ui/Button';
import EX_Dropdown from '@/examples/ui/dropdown/_index';

const InteractiveDataCardTrafficExample = () => {
	return (
		<Card className='h-full'>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle
						iconProps={{
							icon: 'TrafficLight',
							color: 'amber',
							size: 'text-3xl',
						}}>
						Referral Traffic
					</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<EX_Dropdown.Download />
					<EX_Dropdown.Others />
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12'>
						<Progress className='gap-1'>
							<ProgressBar value={32} />
							<ProgressBar value={24} color='emerald' />
							<ProgressBar value={15} color='amber' />
						</Progress>
					</div>
					<div className='col-span-12 flex items-center gap-4'>
						<div className='flex grow items-center gap-2'>
							<div className='size-4 rounded-full bg-blue-500'></div>
							<div className=''>google.com</div>
						</div>
						<div className='font-mono text-zinc-500'>96k</div>
					</div>
					<div className='col-span-12 flex items-center gap-4'>
						<div className='flex grow items-center gap-2'>
							<div className='size-4 rounded-full bg-emerald-500'></div>
							<div className=''>instagram.com</div>
						</div>
						<div className='font-mono text-zinc-500'>72k</div>
					</div>
					<div className='col-span-12 flex items-center gap-4'>
						<div className='flex grow items-center gap-2'>
							<div className='size-4 rounded-full bg-amber-500'></div>
							<div className=''>youtube.com</div>
						</div>
						<div className='font-mono text-zinc-500'>45k</div>
					</div>
					<div className='col-span-12 flex items-center gap-4'>
						<div className='flex grow items-center gap-2'>
							<div className='size-4 rounded-full bg-zinc-500'></div>
							<div className=''>Others</div>
						</div>
						<div className='font-mono text-zinc-500'>29k</div>
					</div>
					<div className='col-span-12 flex items-center gap-4'>
						<AvatarGroup size='w-10'>
							<Avatar src={Avatar1} name='John Doe' color='emerald' />
							<Avatar src={Avatar2} name='John Doe' color='amber' />
							<Avatar src={Avatar3} name='John Doe' color='violet' />
							<Avatar src={Avatar4} name='John Doe' color='zinc' />
							<Avatar src={Avatar5} name='John Doe' color='secondary' />
						</AvatarGroup>
						<div className='text-zinc-500'>184K more</div>
					</div>
				</div>
			</CardBody>
			<CardFooter className='border-t border-zinc-500/25 !py-2'>
				<Button className='w-full' aria-label='View full reports'>
					View full reports
				</Button>
			</CardFooter>
		</Card>
	);
};

export default InteractiveDataCardTrafficExample;
// @end-snippet:: interactiveDataCardTrafficExampleSource
