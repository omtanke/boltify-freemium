```tsx
<Dropdown>
    <DropdownToggle>
        <Button variant='soft' color='blue'>
            Dropdown
        </Button>
    </DropdownToggle>
    <DropdownMenu>
        <DropdownContent className='font-bold text-zinc-500'>
            <div className='flex flex-col'>
                <div>Signed in as</div>
                <div className='text-zinc-800 dark:text-zinc-200'>
                    john@omtnake.com
                </div>
            </div>
        </DropdownContent>
        <DropdownDivider />
        <DropdownItem icon='User'>Profile</DropdownItem>
        <DropdownItem icon='Home05'>Address</DropdownItem>
        <DropdownDivider />
        <DropdownItem icon='Logout03'>Sign out</DropdownItem>
    </DropdownMenu>
</Dropdown>
<Dropdown>
    <DropdownToggle>
        <Button variant='soft' color='blue'>
            Mega menu
        </Button>
    </DropdownToggle>
    <DropdownMenu isCloseAfterLeave={false}>
        <div className='grid grid-cols-12'>
            <div className='col-span-4'>
                <img
                    src={Image}
                    className='-my-2 -ms-2 h-44 w-56 rounded-s-md object-cover'
                    alt=''
                />
            </div>
            <div className='col-span-4'>
                <DropdownContent className='font-bold text-zinc-500'>
                    Title 1
                </DropdownContent>
                <DropdownItem>Item 1.1</DropdownItem>
                <DropdownItem>Item 1.2</DropdownItem>
                <DropdownItem>Item 1.3</DropdownItem>
            </div>
            <div className='col-span-4'>
                <DropdownContent className='font-bold text-zinc-500'>
                    Title 2
                </DropdownContent>
                <DropdownItem>Item 2.1</DropdownItem>
                <DropdownItem>Item 2.2</DropdownItem>
                <DropdownItem>Item 2.3</DropdownItem>
            </div>
        </div>
    </DropdownMenu>
</Dropdown>
```
