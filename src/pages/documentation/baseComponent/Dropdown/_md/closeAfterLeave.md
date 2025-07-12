```tsx
<Dropdown>
	<DropdownToggle>
		<Button variant='soft' color='blue'>
			Dropdown
		</Button>
	</DropdownToggle>
	<DropdownMenu isCloseAfterLeave={false}>
		<DropdownContent className='font-bold text-zinc-500'>TITLE</DropdownContent>
		<DropdownItem icon='View'>View</DropdownItem>
		<DropdownItem icon='Edit02'>Edit</DropdownItem>
		<DropdownDivider />
		<DropdownItem icon='Delete02' color='red'>
			Delete
		</DropdownItem>
	</DropdownMenu>
</Dropdown>
```
