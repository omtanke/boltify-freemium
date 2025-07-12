```tsx
<div className='grid grid-cols-4 gap-4 xl:grid-cols-12'>
	<div className='col-span-4'>
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<CardTitle
						iconProps={{
							icon: 'Clipboard',
							color: 'violet',
							size: 'text-3xl',
						}}>
						Card title
					</CardTitle>
				</CardHeaderChild>
				<CardHeaderChild>
					<Button variant='soft' icon='Sent'>
						Go somewhere
					</Button>
				</CardHeaderChild>
			</CardHeader>
		</Card>
	</div>
	<div className='col-span-4'>
		<Card>
			<CardBody>
				Some quick example text to build on the card title and make up the bulk of the
				card's content.
			</CardBody>
		</Card>
	</div>
	<div className='col-span-4'>
		<Card>
			<CardFooter>
				<CardFooterChild>
					<div className='text-sm text-zinc-500'>Last updated 5 mins ago</div>
				</CardFooterChild>
				<CardFooterChild>
					<Button icon='Refresh' color='emerald' />
				</CardFooterChild>
			</CardFooter>
		</Card>
	</div>
</div>
```
