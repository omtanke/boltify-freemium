```tsx
<div className='max-w-sm'>
	<div className='mb-2 flex items-center justify-between [&>*]:mb-0'>
		<Label htmlFor='input-helper' className='w-auto!'>This is label</Label>
		<Description id='input-helper-text'>Optional</Description>
	</div>
	<FileInput id='input-helper' aria-describedby='input-helper-text' className='max-w-sm' {...rest} />
</div>
<div className='max-w-sm'>
	<div className='mb-2 flex items-center justify-between [&>*]:mb-0'>
		<Label htmlFor='input-helper-2' className='w-auto!'>This is label</Label>
		<Description id='input-helper-text-2'>
			<Tooltip text='Optional' />
		</Description>
	</div>
	<Input id='input-helper-2' aria-describedby='input-helper-text-2' className='max-w-sm' {...rest} />
</div>
```
