```tsx
<Dropdown>
	<DropdownToggle>
		<Button variant='soft' icon='KeyframesMultiple'>
			Click
		</Button>
	</DropdownToggle>
	<DropdownMenu isCloseAfterLeave={false}>
		<DropdownItem>Item 1</DropdownItem>
		<DropdownItem>Item 2</DropdownItem>
		<Dropdown>
			<DropdownToggle>
				<DropdownItem>Item 3</DropdownItem>
			</DropdownToggle>
			<DropdownMenu isCloseAfterLeave={false} placement='right-end'>
				<DropdownItem>Item 3.1</DropdownItem>
				<DropdownItem>Item 3.2</DropdownItem>
				<Dropdown>
					<DropdownToggle>
						<DropdownItem>Item 3.3</DropdownItem>
					</DropdownToggle>
					<DropdownMenu placement='right-start'>
						<DropdownItem>Item 3.3.1</DropdownItem>
						<DropdownItem>Item 3.3.2</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</DropdownMenu>
		</Dropdown>
	</DropdownMenu>
</Dropdown>
```
