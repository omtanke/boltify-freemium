```tsx
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalFooterChild,
	ModalHeader,
} from '@/components/ui/Modal';

const MyComponent = () => {
	const [status, setStatus] = useState<boolean>(false);

	return (
		<>
			<Button onClick={() => setStatus(true)} variant='soft'>
				Open modal
			</Button>
			<Modal isOpen={status} setIsOpen={setStatus}>
				<ModalHeader>Modal Title Here</ModalHeader>
				<ModalBody>Modal content here.</ModalBody>
				<ModalFooter>
					<ModalFooterChild>Footer Child 1</ModalFooterChild>
					<ModalFooterChild>
						<Button color='red' icon='Cancel01' onClick={() => setStatus(false)}>
							Close
						</Button>
						<Button variant='soft' icon='FloppyDisk'>
							Save
						</Button>
					</ModalFooterChild>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default MyComponent;
```
