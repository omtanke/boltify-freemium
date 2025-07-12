```tsx
<div>
	<div className='mb-2 flex'>
		<div className='grow text-xl'>
			<div className='flex items-center gap-2'>
				<Icon icon='FileUpload' size='text-4xl' color='amber' />
				<div>
					<div>file.txt</div>
					<div className='text-sm text-zinc-500'>9 KB</div>
				</div>
			</div>
		</div>
		<div className='text-2xl font-bold'>
			<Button icon='Play' variant='link' color='zinc' />
			<Button icon='Cancel01' variant='link' color='red' />
		</div>
	</div>
	<Progress color='amber' value={66} className='h-3' labelEnd={`${66}%`} />
</div>
```
