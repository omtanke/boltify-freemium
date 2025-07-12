```tsx
<Popover
    content={
        <Card className='max-w-sm'>
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
                <img
                    src={Image}
                    className='mb-4 rounded-md'
                    alt=''
                />
                Some quick example text to build on the card
                title and make up the bulk of the card's
                content.
            </CardBody>
            <CardFooter>
                <CardFooterChild>
                    <Button variant='soft' icon='Sent'>
                        Go somewhere
                    </Button>
                </CardFooterChild>
            </CardFooter>
        </Card>
    }>
    <Button variant='soft'>Click me (with ReactNode)</Button>
</Popover>
<Popover content='This is a text'>
    <Button variant='soft'>Click me (with string)</Button>
</Popover>
```
