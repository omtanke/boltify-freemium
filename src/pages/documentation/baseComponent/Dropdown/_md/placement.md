```tsx
<Dropdown>
	<DropdownToggle>
		<Button variant='soft' color='blue'>
			{item}
		</Button>
	</DropdownToggle>
	<DropdownMenu
		placement='auto' // "auto" | "auto-start" | "auto-end" |  "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end"
	>
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
