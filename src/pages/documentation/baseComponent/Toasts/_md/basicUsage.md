```tsx
import React from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/icon/Icon';
import { toast } from 'react-toastify';

const MyComponent = () => {
	const notify = () =>
		toast('This is a toast notify!', {
			icon: () => <Icon icon='Energy' size='text-2xl' color='blue' />,
		});
	return (
		<Button variant='outline' onClick={notify} icon='Rocket'>
			Show Toast
		</Button>
	);
};

export default MyComponent;
```
