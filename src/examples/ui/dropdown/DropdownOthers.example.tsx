import Dropdown, { DropdownMenu, DropdownToggle } from '@/components/ui/Dropdown';
import Button from '@/components/ui/Button';

const DropdownOthersExample = () => {
	return (
		<Dropdown>
			<DropdownToggle hasIcon={false}>
				<Button aria-label='More' icon='More' variant='link' />
			</DropdownToggle>
			<DropdownMenu placement='bottom-end'>
				<code>Only Pro</code>
			</DropdownMenu>
		</Dropdown>
	);
};

export default DropdownOthersExample;
