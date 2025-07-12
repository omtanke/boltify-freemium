```tsx
<div className='max-w-sm'>
	<div className='mb-2 flex items-center justify-between [&>*]:mb-0'>
		<Label
			htmlFor='input-helper'
			className='w-auto!'>
			This is label
		</Label>
		<Description id='input-helper-text'>
			Optional
		</Description>
	</div>
	<Select
		id='input-helper'
		name='placeholder-test'
		placeholder='This is placeholder'
		aria-describedby='input-helper-text'
		className='max-w-sm'
	/>
</div>
<div className='max-w-sm'>
	<div className='mb-2 flex items-center justify-between [&>*]:mb-0'>
		<Label
			htmlFor='input-helper'
			className='w-auto!'>
			This is label
		</Label>
		<Description id='input-helper-text'>
			<Tooltip text='Optional' />
		</Description>
	</div>
	<Select
		id='input-helper'
		name='placeholder-test'
		placeholder='This is placeholder'
		aria-describedby='input-helper-text'
		className='max-w-sm'
	/>
</div>
```
