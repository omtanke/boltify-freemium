```tsx
import { useState } from 'react';
import dayjs from 'dayjs';
import { DateRange, Range } from 'react-date-range';
import colors from '@/tailwindcss/colors.tailwind';

const MyComponent = () => {
	const [stateDateRange, setStateDateRange] = useState<Range[]>([
		{
			startDate: dayjs().toDate(),
			endDate: undefined,
			key: 'selection',
		},
	]);
	return (
		<DateRange
			editableDateInputs
			onChange={(item) => setStateDateRange([item.selection])}
			moveRangeOnFirstSelection={false}
			ranges={stateDateRange}
			color={colors.blue['500']}
		/>
	);
};

export default MyComponent;
```
