```tsx
import { useState } from 'react';
import dayjs from 'dayjs';
import { Calendar } from 'react-date-range';

const MyComponent = () => {
	const [stateCalendar, setStateCalendar] = useState<Date>(dayjs().toDate());
	return <Calendar onChange={(item) => setStateCalendar(item)} date={stateCalendar} />;
};

export default MyComponent;
```
