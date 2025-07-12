```tsx
<div className='grid grid-cols-12 gap-4'>
	<div className='col-span-12 2xl:col-span-6'>
		<Card>
			<div className='grid grid-cols-12 divide-x divide-zinc-500/10 dark:divide-zinc-500/25'>
				<div className='col-span-12 lg:col-span-4'>
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
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</CardBody>
					<CardFooter>
						<CardFooterChild>
							<Button variant='soft' icon='Sent'>
								Go somewhere
							</Button>
						</CardFooterChild>
					</CardFooter>
				</div>
				<div className='col-span-12 lg:col-span-4'>
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
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</CardBody>
					<CardFooter>
						<CardFooterChild>
							<Button variant='soft' icon='Sent'>
								Go somewhere
							</Button>
						</CardFooterChild>
					</CardFooter>
				</div>
				<div className='col-span-12 lg:col-span-4'>
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
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</CardBody>
					<CardFooter>
						<CardFooterChild>
							<Button variant='soft' icon='Sent'>
								Go somewhere
							</Button>
						</CardFooterChild>
					</CardFooter>
				</div>
			</div>
		</Card>
	</div>
	<div className='col-span-12 2xl:col-span-6'>
		<Card>
			<div className='grid grid-cols-12 divide-x divide-zinc-500/10 dark:divide-zinc-500/25'>
				<div className='col-span-12 lg:col-span-4'>
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
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</CardBody>
					<CardFooter>
						<CardFooterChild>
							<Button variant='soft' icon='Sent'>
								Go somewhere
							</Button>
						</CardFooterChild>
					</CardFooter>
				</div>
				<div
					className='col-span-12 items-stretch bg-cover bg-center lg:col-span-4'
					style={{
						backgroundImage: `url(${Image}`,
					}}></div>
				<div className='col-span-12 flex flex-col lg:col-span-4'>
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
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</CardBody>
					<CardFooter>
						<CardFooterChild>
							<Button variant='soft' icon='Sent'>
								Go somewhere
							</Button>
						</CardFooterChild>
					</CardFooter>
				</div>
			</div>
		</Card>
	</div>
</div>
```
