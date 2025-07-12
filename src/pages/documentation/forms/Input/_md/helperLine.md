```tsx
<div className='w-full space-y-2 sm:inline-flex sm:items-center sm:space-y-0 sm:space-x-3 [&>*]:my-0'>
	<Label htmlFor='input-helper' className='w-auto!'>
		This is label
	</Label>
	<Input
		id='input-helper'
		name='placeholder-test'
		placeholder='This is placeholder'
		aria-describedby='input-helper-text'
		className='max-w-sm'
	/>
	<Description id='input-helper-text'>We'll never share your details.</Description>
</div>
```
