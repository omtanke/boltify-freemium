```tsx
import React from 'react';
import Button from '@/components/ui/Button';
import { toast, ToastContentProps } from 'react-toastify';
import { Logo } from '@/assets/images';

const MyComponent = () => {
	const notify = () =>
		toast(
			({ closeToast }: ToastContentProps) => (
				<div className='grid grid-cols-12 overflow-hidden rounded-xl border-zinc-500/25'>
					<div className='col-span-9'>
						<div className='flex items-center justify-center gap-4 p-4'>
							<div className='shrink-0'>
								<img src={Logo} alt='' className='h-9 w-9' />
							</div>
							<div className='grow'>
								<div className='line-clamp-1 font-bold'>
									This is a notification title and is set to a maximum of one
									lines of text.
								</div>
								<div className='line-clamp-1'>
									This is a notification content and is set to a maximum of one
									lines of text.
								</div>
							</div>
						</div>
					</div>
					<div className='col-span-3 border-s border-inherit'>
						<div className='flex h-full w-full flex-col items-center justify-center divide-y divide-zinc-500/25'>
							<div className='flex h-full w-full items-center justify-center'>
								<button
									className='h-full w-full hover:bg-zinc-500/25'
									onClick={() => closeToast('reply')}>
									Reply
								</button>
							</div>
							<div className='flex h-full w-full items-center justify-center'>
								<button
									className='h-full w-full hover:bg-zinc-500/25'
									onClick={() => closeToast('ignore')}>
									Ignore
								</button>
							</div>
						</div>
					</div>
				</div>
			),
			{
				closeButton: false,
				className: 'p-0! bg-zinc-500/10! backdrop-blur-md',
			},
		);
	return (
		<Button variant='outline' onClick={notify} icon='Rocket'>
			Show Toast
		</Button>
	);
};

export default MyComponent;
```
