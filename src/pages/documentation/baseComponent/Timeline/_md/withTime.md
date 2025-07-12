```tsx
<Timeline>
	<TimelineItem
		header={
			<div className='flex items-center gap-2'>
				<Icon icon='File01' />
				<span>Crete New Task</span>
			</div>
		}
		footer={
			<div className='mt-1 flex items-center gap-2 text-zinc-500'>
				<Avatar src={Avatar1} size='w-6' />
				John Doe
			</div>
		}
		leftContent='14:23'>
		Find more detailed instructions here.
	</TimelineItem>
	<TimelineItem
		header={
			<div className='flex items-center gap-2'>
				<span>Release v2.0.0 quick bug fix</span>
				<Icon icon='Bug02' />
			</div>
		}
		footer={
			<div className='mt-1 flex items-center gap-2 text-zinc-500'>
				<Avatar src={Avatar4} size='w-6' color='amber' />
				Alex Brown
			</div>
		}
		leftContent='12:08'
	/>
	<TimelineItem
		header='Landing page added'
		footer={
			<div className='mt-1 flex items-center gap-2 text-zinc-500'>
				<Avatar name='Jonas Lines' size='w-6' color='emerald' />
				Jonas Lines
			</div>
		}
		leftContent='10:53'>
		Find more detailed instructions here.
	</TimelineItem>
	<TimelineItem header='New Project Start' leftContent='09:48'>
		Finally! You can check it out here.
	</TimelineItem>
</Timeline>
```
