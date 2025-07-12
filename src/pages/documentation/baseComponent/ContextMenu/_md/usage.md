```tsx
import { useRef } from 'react';
import Dropdown, {
	DropdownDivider,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '@/components/ui/Dropdown';

const MyComponent = () => {
	const targetRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<div
				ref={targetRef}
				className='flex h-56 w-96 items-center justify-center gap-2 rounded-xl border-2 border-dashed border-blue-500 text-2xl'>
				<Icon icon='MouseRightClick01' size='text-4xl' />
				<span>Right click</span>
			</div>
			<ContextMenu ref={targetRef}>
				<DropdownMenu isOpen>
					<DropdownItem icon='MailReply02'>Reply</DropdownItem>
					<DropdownItem icon='MailReplyAll02'>Reply all</DropdownItem>
					<DropdownItem icon='LinkForward'>Forward</DropdownItem>
					<DropdownItem icon='MailSend02'>Resend</DropdownItem>
					<DropdownDivider />
					<Dropdown>
						<DropdownToggle>
							<DropdownItem icon='MoreHorizontal'>More</DropdownItem>
						</DropdownToggle>
						<DropdownMenu placement='right-start'>
							<DropdownItem>Item 3.3.1</DropdownItem>
							<DropdownItem>Item 3.3.2</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<DropdownDivider />
					<DropdownItem icon='Mail02'>Mark as unread</DropdownItem>
					<DropdownItem icon='MailOpen02'>Mark as read</DropdownItem>
					<DropdownItem icon='DeliveryBox02'>Archive</DropdownItem>
					<DropdownItem icon='Delete02' color='red'>
						Delete
					</DropdownItem>
					<DropdownDivider />
					<DropdownItem icon='InformationCircle' color='amber'>
						Report spam
					</DropdownItem>
				</DropdownMenu>
			</ContextMenu>
		</>
	);
};

export default MyComponent;
```
