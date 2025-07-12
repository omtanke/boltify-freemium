import { ReactNode } from 'react';

type ScaledWrapperProps = {
	scale?: number;
	children: ReactNode;
};

const ScaledWrapper = ({ scale = 0.5, children }: ScaledWrapperProps) => {
	const inverseScale = 1 / scale;

	return (
		<div className='pointer-events-none relative h-full w-full overflow-hidden'>
			<div
				className='absolute start-0 top-0 origin-top-left overflow-hidden'
				style={{
					transform: `scale(${scale})`,
					width: `${inverseScale * 100}%`,
					// height: `${inverseScale * 100}%`,
				}}>
				{children}
			</div>
		</div>
	);
};

export default ScaledWrapper;
