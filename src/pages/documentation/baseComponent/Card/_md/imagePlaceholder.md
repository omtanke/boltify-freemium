```tsx
<div className='grid grid-cols-12 gap-4'>
	<div className='col-span-12 md:col-span-6 xl:col-span-3'>
		<Card>
			<img src={Image} className='mb-4' alt='' />
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
	<div className='col-span-12 md:col-span-6 xl:col-span-3'>
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
			<img src={Image} className='mb-4' alt='' />
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
	<div className='col-span-12 md:col-span-6 xl:col-span-3'>
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
			<img src={Image} className='mb-4' alt='' />
			<CardFooter>
				<CardFooterChild>
					<Button variant='soft' icon='Sent'>
						Go somewhere
					</Button>
				</CardFooterChild>
			</CardFooter>
		</Card>
	</div>
	<div className='col-span-12 md:col-span-6 xl:col-span-3'>
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
			<img src={Image} alt='' />
		</Card>
	</div>

	<div className='col-span-12 xl:col-span-6'>
		<Card className='grid grid-cols-12 gap-4'>
			<div className='col-span-12 lg:col-span-6'>
				<img src={Image} alt='' />
			</div>
			<div className='col-span-12 flex flex-col lg:col-span-6'>
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
				<CardFooter className='sticky bottom-0'>
					<CardFooterChild>
						<Button variant='soft' icon='Sent'>
							Go somewhere
						</Button>
					</CardFooterChild>
				</CardFooter>
			</div>
		</Card>
	</div>
	<div className='col-span-12 xl:col-span-6'>
		<Card className='grid grid-cols-12 gap-4'>
			<div className='col-span-12 flex flex-col lg:col-span-6'>
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
				<CardFooter className='sticky bottom-0'>
					<CardFooterChild>
						<Button variant='soft' icon='Sent'>
							Go somewhere
						</Button>
					</CardFooterChild>
				</CardFooter>
			</div>
			<div className='col-span-12 lg:col-span-6'>
				<img src={Image} alt='' />
			</div>
		</Card>
	</div>
</div>
```
