```tsx
interface IButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
	borderWidth?: TBorderWidth;
	children: ReactElement<IButtonProps>[];
	className?: string;
	color?: TColors;
	isVertical?: boolean;
	rounded?: TRounded;
	dimension?: TButtonDimensions;
	variant?: TButtonVariants;
}
```
