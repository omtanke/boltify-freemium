```tsx
<div className='flex flex-col gap-4'>
    <div>
        <div className='mb-2 flex'>
            <div className='grow text-xl'>Loading...</div>
            <div className='text-2xl font-bold'>33%</div>
        </div>
        <Progress value={33} className='h-3' />
    </div>
</div>
<div className='flex flex-col gap-4'>
    <div>
        <div className='mb-2 flex'>
            <div className='grow text-xl'>
                <div className='flex items-center gap-2'>
                    <Icon icon='Image02' />
                    <span>Image is being processed.</span>
                </div>
            </div>
            <div className='text-2xl font-bold'>66%</div>
        </div>
        <Progress value={66} className='h-3' />
    </div>
</div>
```
