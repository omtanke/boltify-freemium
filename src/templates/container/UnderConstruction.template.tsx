import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router';

const UnderConstructionTemplate = () => {
	const navigate = useNavigate();

	return (
		<Container>
			<div className='flex h-full flex-col items-center justify-stretch p-8'>
				<div className='flex h-full flex-col items-center justify-center gap-4'>
					<div className='text-9xl font-black'>Under Construction</div>
					<div className=''>
						Sorry, the page you are looking for will be available soon.
					</div>
					<Button
						aria-label='Back'
						variant='solid'
						color='primary'
						icon='ArrowLeft01'
						dimension='lg'
						onClick={() => navigate(-1)}>
						Back
					</Button>
				</div>
				<div className='text-zinc-500'>
					© All Rights Reserved. {dayjs().format('YYYY')}.
				</div>
			</div>
		</Container>
	);
};

export default UnderConstructionTemplate;
