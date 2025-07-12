import { FC } from 'react';

interface IExampleHeaderPartialProps {
	title: string;
	description: string;
}

const ExampleHeaderPartial: FC<IExampleHeaderPartialProps> = (props) => {
	const { title, description } = props;
	return (
		<>
			<div className='col-span-12 flex flex-col items-center justify-center gap-8 py-32'>
				<div className='text-6xl'>{title}</div>
				<div className='text max-w-5xl text-center text-2xl text-zinc-500'>
					{description}
				</div>
			</div>
		</>
	);
};

export default ExampleHeaderPartial;
