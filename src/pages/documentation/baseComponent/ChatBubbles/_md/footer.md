```tsx
<ChatBubbles isAvatar>
	<ChatBubblesSeparate>Today 09:00</ChatBubblesSeparate>
	<ChatBubblesItem
		image='...'
		username='...'
		footer={
			<div className='flex items-center gap-2'>
				<Icon icon='AlertCircle' />
				Edited: 09:08
			</div>
		}>
		...
	</ChatBubblesItem>
	<ChatBubblesItem
		image='...'
		username='...'
		isMyContent
		footer={
			<div className='flex items-center gap-2 text-blue-500'>
				<Icon icon='TickDouble02' />
				Read: 09:16
			</div>
		}>
		...
	</ChatBubblesItem>
	<ChatBubblesItem image='...' username='...'>
		...
	</ChatBubblesItem>
	<ChatBubblesItem
		image='...'
		username='...'
		isMyContent
		footer={
			<div className='flex items-center gap-2'>
				<Icon icon='Tick02' />
				Sent: 09:32
			</div>
		}>
		...
	</ChatBubblesItem>
	<ChatBubblesItem
		image='...'
		username='...'
		isMyContent
		footer={
			<div className='flex items-center gap-2 text-red-500'>
				<Icon icon='Alert01' />
				Not Sent
			</div>
		}>
		...
	</ChatBubblesItem>
</ChatBubbles>
```
