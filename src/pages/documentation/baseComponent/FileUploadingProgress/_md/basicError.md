```tsx
<div>
	<div className='mb-2 flex'>
		<div className='grow text-xl'>
			<div className='flex items-center gap-2'>
				<Icon icon='FileUpload' size='text-4xl' color='red' />
				<div>
					<div className='font-bold text-red-500'>file.txt</div>
					<div className='text-sm text-zinc-500'>9 KB</div>
				</div>
			</div>
		</div>
		<div className='text-2xl font-bold'>
			<Button icon='Refresh' variant='link' color='zinc' />
			<Button icon='Delete02' variant='link' color='red' />
		</div>
	</div>
	<Progress color='red' value={80} className='h-3' labelEnd={`${80}%`} />
</div>
```
