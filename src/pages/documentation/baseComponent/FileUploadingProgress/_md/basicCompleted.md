```tsx
<div>
	<div className='mb-2 flex'>
		<div className='grow text-xl'>
			<div className='flex items-center gap-2'>
				<Icon icon='FileUpload' size='text-4xl' color='emerald' />
				<div>
					<div className=''>file.txt</div>
					<div className='text-sm text-zinc-500'>9 KB</div>
				</div>
			</div>
		</div>
		<div className='text-2xl font-bold'>
			<Button icon='CheckmarkCircle02' color='emerald' isDisable />
			<Button icon='Delete02' variant='link' color='red' />
		</div>
	</div>
	<Progress color='emerald' value={100} className='h-3' labelEnd={`${100}%`} />
</div>
```
