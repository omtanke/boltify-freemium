import Dropdown, { DropdownMenu, DropdownToggle } from '@/components/ui/Dropdown';
import Button from '@/components/ui/Button';

const DropdownDownloadExample = () => {
	return (
		<Dropdown>
			<DropdownToggle hasIcon={false}>
				<Button icon='Download02' variant='link' aria-label='Download' />
			</DropdownToggle>
			<DropdownMenu placement='bottom-end' rounded='rounded-2xl'>
				<code>Only Pro</code>
			</DropdownMenu>
		</Dropdown>
	);
};

export default DropdownDownloadExample;
