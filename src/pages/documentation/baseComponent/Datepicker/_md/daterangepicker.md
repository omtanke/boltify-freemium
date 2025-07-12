```tsx
import { useState } from 'react';
import dayjs from 'dayjs';
import { DateRangePicker, Range } from 'react-date-range';
import colors from '@/tailwindcss/colors.tailwind';

const MyComponent = () => {
	const [stateDateRangePicker, setStateDateRangePicker] = useState<RangeKeyDict>({
		selection: {
			startDate: dayjs().startOf('week').add(-1, 'week').toDate(),
			endDate: dayjs().endOf('week').toDate(),
			key: 'selection',
		},
		selection2: {
			startDate: dayjs().startOf('week').add(-1, 'week').add(2, 'day').toDate(),
			endDate: dayjs().endOf('week').add(-4, 'day').toDate(),
			key: 'selection2',
		},
		selection3: {
			startDate: dayjs().startOf('week').add(2, 'week').add(2, 'day').toDate(),
			endDate: dayjs().startOf('week').add(3, 'week').add(5, 'day').toDate(),
			key: 'selection3',
		},
		selection4: {
			startDate: dayjs().startOf('week').add(-2, 'week').add(2, 'day').toDate(),
			endDate: dayjs().startOf('week').add(-2, 'week').add(5, 'day').toDate(),
			key: 'selection4',
		},
	});

	return (
		<DateRangePicker
			onChange={(item) =>
				setStateDateRangePicker({
					...stateDateRangePicker,
					...item,
				})
			}
			moveRangeOnFirstSelection={false}
			retainEndDateOnFirstSelection={false}
			months={2}
			ranges={Object.values(stateDateRangePicker)}
			direction='horizontal'
			rangeColors={[
				colors.blue['500'],
				colors.emerald['500'],
				colors.amber['500'],
				colors.violet['500'],
			]}
		/>
	);
};

export default MyComponent;
```
