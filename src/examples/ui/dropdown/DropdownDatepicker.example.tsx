import { useState } from 'react';
import Dropdown, { DropdownMenu, DropdownToggle } from '@/components/ui/Dropdown';
import Button from '@/components/ui/Button';
import dayjs from 'dayjs';
import { Range } from 'react-date-range';

const DropdownDatepickerExample = () => {
	const [stateDateRange] = useState<Range[]>([
		{
			startDate: dayjs().add(-7, 'day').toDate(),
			endDate: dayjs().add(-1, 'day').toDate(),
			key: 'selection',
		},
	]);

	return (
		<Dropdown>
			<DropdownToggle>
				<Button aria-label='Calendar' variant='link' color='blue' icon='Calendar01'>
					{`${dayjs(stateDateRange[0].startDate).format('DD MMM YY')} / ${dayjs(stateDateRange[0].endDate).format('DD MMM YY')}`}
				</Button>
			</DropdownToggle>
			<DropdownMenu placement='bottom-end'>
				<code>Only Pro</code>
			</DropdownMenu>
		</Dropdown>
	);
};

export default DropdownDatepickerExample;
