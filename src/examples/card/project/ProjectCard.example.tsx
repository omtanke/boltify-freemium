// @start-snippet:: projectCardExampleSource
import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
} from '@/components/ui/Card';
import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Logo } from '@/assets/images';
import Button from '@/components/ui/Button';
import dayjs from 'dayjs';
import Badge from '@/components/ui/Badge';
import Avatar from '@/components/ui/Avatar';
import AvatarGroup from '@/components/ui/AvatarGroup';
import Icon from '@/components/icon/Icon';
import Progress from '@/components/ui/Progress';

const ProjectCardExample = () => {
	return (
		<Card className='h-full'>
			<CardHeader className='border-b border-inherit'>
				<CardHeaderChild>
					<div className=''>
						<img src={Logo} alt='' className='size-12' />
					</div>
					<div className=''>
						<div>Boltify</div>
						<div className='font-bold'>React Tailwind CSS Admin & Starter Template</div>
					</div>
				</CardHeaderChild>
				<CardHeaderChild>
					<Button aria-label='More' icon='More' variant='link' />
				</CardHeaderChild>
			</CardHeader>
			<CardBody className='!px-0'>
				<div className='grid grid-cols-12 divide-y divide-zinc-500/25'>
					<div className='col-span-12 grid grid-cols-12 gap-4 divide-x divide-zinc-500/50 p-4'>
						<div className='col-span-4'>
							<div>23</div>
							<div className='text-zinc-500'>Tasks</div>
						</div>
						<div className='col-span-4'>
							<div>11</div>
							<div className='text-zinc-500'>In Progress</div>
						</div>
						<div className='col-span-4'>
							<div>12</div>
							<div className='text-zinc-500'>Completed</div>
						</div>
					</div>
					<div className='col-span-12 grid grid-cols-12 gap-4 p-4'>
						<div className='col-span-3 text-zinc-500'>Due Date</div>
						<div className='col-span-9'>
							{dayjs().add(21, 'day').format('DD MMM, YYYY')}
						</div>

						<div className='col-span-3 text-zinc-500'>Category</div>
						<div className='col-span-9'>
							<Badge variant='soft' color='zinc'>
								<div className='h-4 w-1 rounded-2xl bg-blue-500'></div>
								<span>UI/UX</span>
							</Badge>
						</div>

						<div className='col-span-3 text-zinc-500'>Assignee</div>
						<div className='col-span-9 flex items-center gap-2'>
							<Avatar src={Avatar1} size='w-6' /> <span>John Doe</span>
						</div>

						<div className='col-span-3 text-zinc-500'>Team</div>
						<div className='col-span-9 flex items-center gap-2'>
							<AvatarGroup color='zinc'>
								<Avatar src={Avatar2} size='w-6' />
								<Avatar src={Avatar3} size='w-6' />
								<Avatar src={Avatar4} size='w-6' />
								<Avatar src={Avatar5} size='w-6' />
							</AvatarGroup>
						</div>
					</div>
				</div>
			</CardBody>
			<CardFooter className='border-t border-inherit pt-4'>
				<CardFooterChild>
					<div className='flex items-center gap-2 text-zinc-500'>
						<Icon icon='Message01' /> <span>2</span>
					</div>
					<div className='h-4 border-e border-zinc-500/25'></div>
					<div className='flex items-center gap-2 text-zinc-500'>
						<Icon icon='Attachment' /> <span>5</span>
					</div>
				</CardFooterChild>
				<CardFooterChild>
					<div className='w-32'>
						<Progress value={42} />
					</div>
					<div className='text-zinc-500'>42%</div>
				</CardFooterChild>
			</CardFooter>
		</Card>
	);
};

export default ProjectCardExample;
// @end-snippet:: projectCardExampleSource
