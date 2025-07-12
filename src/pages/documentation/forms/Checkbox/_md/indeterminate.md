```tsx
import Label from '@/components/form/Label';
import Checkbox from '@/components/form/Checkbox';
import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';

const Example = () => {
	const options: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

	const formik = useFormik({
		initialValues: {
			yourKey: [options[1], options[3]],
		},
		onSubmit: () => {},
	});

	const selectedOptions: string[] = options.filter((o) => formik.values.yourKey.includes(o));

	const ref = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (ref.current) {
			if (options.length > selectedOptions.length && selectedOptions.length > 0) {
				ref.current.checked = false;
				ref.current.indeterminate = true;
			} else {
				ref.current.checked = options.length === selectedOptions.length;
				ref.current.indeterminate = false;
			}
		}
	}, [selectedOptions.length, options.length]);

	const handleSelectAll = () => {
		if (options.length > selectedOptions.length) {
			formik
				.setFieldValue(
					'yourKey',
					options.map((item) => item),
				)
				.then(() => {})
				.catch(() => {});
		} else {
			formik
				.setFieldValue('yourKey', [])
				.then(() => {})
				.catch(() => {});
		}
	};

	return (
		<div>
			<Label htmlFor='yourKey'>Example Checkbox</Label>
			<Checkbox
				ref={ref}
				label='Option All'
				id='yourKey'
				onChange={handleSelectAll}
				checked={options.length === selectedOptions.length}
			/>
			{options.map((item) => (
				<Checkbox
					key={item}
					label={item}
					id={item}
					name='yourKey'
					onChange={formik.handleChange}
					checked={formik.values.yourKey?.includes(item)}
					className='ms-4'
					value={item}
				/>
			))}
		</div>
	);
};

export default Example;
```
