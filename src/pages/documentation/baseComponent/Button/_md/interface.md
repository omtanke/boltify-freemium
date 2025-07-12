```tsx
export type TButtonVariants = 'solid' | 'outline' | 'default' | 'soft' | 'link';
export type TButtonDimensions = 'xs' | 'sm' | 'default' | 'lg' | 'xl';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
	borderWidth?: TBorderWidth; // 'border' | 'border-2' | 'border-4' | 'border-8' | 'border-0'
	children?: ReactNode;
	className?: string;
	color?: TColors; //'primary' | 'secondary' | 'zinc' | 'red' | 'amber' | 'lime' | 'emerald' | 'sky' | 'blue' | 'violet'
	icon?: TIcons; // THugeIcons | string
	isActive?: boolean;
	isDisable?: boolean;
	isLoading?: boolean;
	rightIcon?: TIcons; // THugeIcons | string
	rounded?: TRounded; // 'rounded-none' | 'rounded-xs' | 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full'
	dimension?: TButtonDimensions; // 'xs' | 'sm' | 'default' | 'lg' | 'xl'
	variant?: TButtonVariants; // 'solid' | 'outline' | 'default' | 'soft' | 'link'
}
```
