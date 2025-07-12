```tsx
import { useState } from 'react';
import Ratings, { RatingValues } from '@/components/ui/Ratings';

const MyComponent = () => {
	const [state, setState] = useState<RatingValues>(4);
	return (
		<>
			<Ratings id='star' selectedRating={state} setSelectedRating={setState} type='star' />
			<Ratings id='heart' selectedRating={state} setSelectedRating={setState} type='heart' />
		</>
	);
};

export default MyComponent;
```
