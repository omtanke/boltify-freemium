```tsx
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Collapse from '@/components/ui/Collapse';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';

const MyComponent = () => {
	const [status, setStatus] = useState<boolean>(false);
	const [status2, setStatus2] = useState<boolean>(false);
	const [status3, setStatus3] = useState<boolean>(false);

	return (
		<div className='grid grid-cols-4 gap-4 lg:grid-cols-12'>
			<div className='col-span-4'>
				<Card>
					<CardHeader>
						<CardHeaderChild>
							<Button
								variant='soft'
								isActive={status}
								rightIcon={status ? 'ArrowUp01' : 'ArrowDown01'}
								onClick={() => setStatus(!status)}>
								Collapse
							</Button>
						</CardHeaderChild>
					</CardHeader>
					<Collapse isOpen={status}>
						<CardBody>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed magna
							nec magna sollicitudin pharetra at vel tellus. Cras sed maximus arcu, eu
							ultricies tellus. Suspendisse vitae velit euismod, finibus metus sed,
							pulvinar lectus.
						</CardBody>
					</Collapse>
				</Card>
			</div>
			<div className='col-span-4 flex flex-col gap-4'>
				<Button
					variant='soft'
					isActive={status2}
					rightIcon={status2 ? 'ArrowUp01' : 'ArrowDown01'}
					onClick={() => setStatus2(!status2)}>
					Collapse
				</Button>
				<Collapse isOpen={status2}>
					<Card>
						<CardBody>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed magna
							nec magna sollicitudin pharetra at vel tellus. Cras sed maximus arcu, eu
							ultricies tellus. Suspendisse vitae velit euismod, finibus metus sed,
							pulvinar lectus.
						</CardBody>
					</Card>
				</Collapse>
			</div>
			<div className='col-span-4'>
				<Card>
					<CardBody>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed magna
							nec magna sollicitudin pharetra at vel tellus. Cras sed maximus arcu, eu
							ultricies tellus. Suspendisse vitae velit euismod, finibus metus sed,
							pulvinar lectus.
							<Collapse isOpen={status3}>
								Aenean at eros quis tellus posuere mollis sed eget libero. Integer
								at velit pulvinar, dignissim lacus quis, interdum purus. Maecenas mi
								orci, molestie sed massa vel, tempus blandit tortor. Donec lobortis
								convallis ante, ut dapibus sapien tempor ac. Mauris blandit ligula
								libero, at vestibulum mi posuere faucibus. Etiam ac condimentum ex.
								Pellentesque habitant morbi tristique senectus et netus et malesuada
								fames ac turpis egestas. Mauris pretium, arcu ac hendrerit
								ullamcorper, velit mauris pretium odio, sed consectetur felis nisi
								ac magna. Curabitur vel placerat eros. Sed dictum vestibulum nulla
								eu dictum.
							</Collapse>
						</div>
						<Button
							variant='default'
							className='mt-2 p-0!'
							rightIcon={status3 ? 'ArrowUp01' : 'ArrowDown01'}
							onClick={() => setStatus3(!status3)}>
							Read {!status3 ? 'more' : 'less'}
						</Button>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};

export default MyComponent;
```
