```tsx
<div className='grid grid-cols-4 gap-4 lg:grid-cols-8 xl:grid-cols-12'>
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
			</CardHeader>
			<CardBody>
				Some quick example text to build on the card title and make up the bulk of the
				card's content.
			</CardBody>
			<CardFooter>
				<CardFooterChild>
					<Button variant='soft' icon='Sent'>
						Go somewhere
					</Button>
				</CardFooterChild>
			</CardFooter>
		</Card>
	</div>
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
					<CardSubTitle>Sub title</CardSubTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				Some quick example text to build on the card title and make up the bulk of the
				card's content.
			</CardBody>
			<CardFooter>
				<CardFooterChild>
					<Button variant='default' icon='Sent'>
						Go somewhere
					</Button>
				</CardFooterChild>
				<CardFooterChild>
					<Button variant='soft' icon='Sent'>
						Go somewhere
					</Button>
				</CardFooterChild>
			</CardFooter>
		</Card>
	</div>
	<div className='col-span-4'>
		<Card>
			<CardHeader>
				<CardHeaderChild>
					<CardSubTitle>Sub title</CardSubTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				Some quick example text to build on the card title and make up the bulk of the
				card's content.
			</CardBody>
			<CardFooter>
				<CardFooterChild>
					<Button variant='soft' icon='Sent'>
						Go somewhere
					</Button>
				</CardFooterChild>
			</CardFooter>
		</Card>
	</div>
	<div className='col-span-4'>
		<Card>
			<CardHeader className='mb-4 border-b border-inherit'>
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
			</CardHeader>
			<CardBody>
				Some quick example text to build on the card title and make up the bulk of the
				card's content.
			</CardBody>
			<CardFooter className='border-t border-inherit pt-4'>
				<CardFooterChild>
					<div className='text-sm text-zinc-500'>Last updated 5 mins ago</div>
				</CardFooterChild>
			</CardFooter>
		</Card>
	</div>
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
			</CardHeader>
			<CardBody>
				Some quick example text to build on the card title and make up the bulk of the
				card's content.
			</CardBody>
			<CardFooter>
				<CardFooterChild>
					<Button variant='soft' icon='Sent'>
						Go somewhere
					</Button>
				</CardFooterChild>
			</CardFooter>
			<CardFooter className='border-t border-inherit pt-4'>
				<CardFooterChild>
					<div className='text-sm text-zinc-500'>Last updated 5 mins ago</div>
				</CardFooterChild>
			</CardFooter>
		</Card>
	</div>
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
			</CardHeader>
			<CardHeader>
				<CardHeaderChild>
					<CardSubTitle>Sub title</CardSubTitle>
				</CardHeaderChild>
			</CardHeader>
			<CardBody>
				Some quick example text to build on the card title and make up the bulk of the
				card's content.
			</CardBody>
			<CardFooter>
				<CardFooterChild>
					<Button variant='soft' icon='Sent'>
						Go somewhere
					</Button>
				</CardFooterChild>
			</CardFooter>
		</Card>
	</div>
</div>
```
