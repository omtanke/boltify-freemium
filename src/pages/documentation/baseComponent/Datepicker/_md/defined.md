```tsx
import { useState } from 'react';
import dayjs from 'dayjs';
import { DefinedRange, Range } from 'react-date-range';

const MyComponent = () => {
	const [stateDefinedRange, setStateDefinedRange] = useState<Range[]>([
		{
			startDate: dayjs().toDate(),
			endDate: undefined,
			key: 'selection',
		},
	]);

	return (
		<DefinedRange
			onChange={(item) => setStateDefinedRange([item.selection])}
			ranges={stateDefinedRange}
		/>
	);
};

export default MyComponent;
```
