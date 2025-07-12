```tsx
<Card>
	<CardHeader>
		<CardHeaderChild>
			<CardTitle
				iconProps={{
					icon: 'DashboardSquare03',
					color: 'emerald',
					size: 'text-3xl',
				}}>
				Card {'>'}{' '}
				<Tooltip text='CardHeader > CardHeaderChild'>
					<span className='px-2'>...</span>
				</Tooltip>
				{'>'} CardTitle
			</CardTitle>
			<CardSubTitle>
				Card {'>'}
				<Tooltip text='CardHeader > CardHeaderChild'>
					<span className='px-2'>...</span>
				</Tooltip>
				{'>'} CardSubTitle
			</CardSubTitle>
		</CardHeaderChild>
		<CardHeaderChild>
			<CardTitle
				iconProps={{
					icon: 'DashboardSquare03',
					color: 'emerald',
					size: 'text-3xl',
				}}>
				Card {'>'}
				<Tooltip text='CardHeader > CardHeaderChild'>
					<span className='px-2'>...</span>
				</Tooltip>
				{'>'} CardTitle
			</CardTitle>
			<CardSubTitle>
				Card {'>'}{' '}
				<Tooltip text='CardHeader > CardHeaderChild'>
					<span className='px-2'>...</span>
				</Tooltip>
				{'>'} CardSubTitle
			</CardSubTitle>
		</CardHeaderChild>
	</CardHeader>
	<CardBody>Card {'>'} CardBody</CardBody>
	<CardFooter>
		<CardFooterChild>
			Card {'>'}
			<Tooltip text='CardFooter'>
				<span>...</span>
			</Tooltip>
			{'>'} CardHeaderChild
		</CardFooterChild>
		<CardFooterChild>
			Card {'>'}
			<Tooltip text='CardFooter'>
				<span>...</span>
			</Tooltip>
			{'>'} CardHeaderChild
		</CardFooterChild>
	</CardFooter>
</Card>
```
