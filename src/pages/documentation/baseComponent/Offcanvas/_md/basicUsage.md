```tsx
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Offcanvas, {
	OffcanvasBody,
	OffcanvasFooter,
	OffcanvasFooterChild,
	OffcanvasHeader,
	TOffcanvasPosition,
} from '@/components/ui/Offcanvas';

const MyComponent = () => {
	const [state, setState] = useState<boolean>(false);
	return (
		<>
			<Button onClick={() => setState(true)} variant='soft'>
				Open offcanvas
			</Button>
			<Offcanvas isOpen={state} setIsOpen={setState}>
				<OffcanvasHeader>Header</OffcanvasHeader>
				<OffcanvasBody>Body</OffcanvasBody>
				<OffcanvasFooter>
					<OffcanvasFooterChild>
						<Button onClick={() => setState(false)} color='red'>
							Close
						</Button>
					</OffcanvasFooterChild>
					<OffcanvasFooterChild>Child 2</OffcanvasFooterChild>
				</OffcanvasFooter>
			</Offcanvas>
		</>
	);
};

export default MyComponent;
```
