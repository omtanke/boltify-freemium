import classNames from 'classnames';

const EmptyItem = (props: { className?: string }) => {
	const { className, ...rest } = props;
	return (
		<div
			className={classNames(
				'flex gap-6 rounded-3xl border border-zinc-500/25 bg-zinc-100 p-4 dark:bg-zinc-950',
				className,
			)}
			{...rest}>
			<div className='size-16 shrink-0 rounded-xl bg-zinc-500/25'></div>
			<div className='flex grow flex-col justify-center gap-4'>
				<div className='h-4 w-3/4 rounded-xl bg-zinc-500/25'></div>
				<div className='h-4 w-full rounded-xl bg-zinc-500/25'></div>
			</div>
		</div>
	);
};

const Empty = () => {
	return (
		<div className='translate-y-16 transform-3d'>
			<EmptyItem className='translate-z-3' />
			<EmptyItem className='-translate-y-12 translate-z-2 scale-90 opacity-75' />
			<EmptyItem className='-translate-y-26 translate-z-1 scale-75 opacity-50' />
		</div>
	);
};

export default Empty;
