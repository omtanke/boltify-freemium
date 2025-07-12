import { Children, cloneElement, FC, HTMLAttributes, ReactElement } from 'react';
import classNames from 'classnames';
import { IButtonProps, TButtonDimensions, TButtonVariants } from './Button';
import { TBorderWidth } from '@/types/borderWidth.type';
import { TColors } from '@/types/colors.type';
import { TRounded } from '@/types/rounded.type';

// @start-snippet:: interface
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
// @end-snippet:: interface
const ButtonGroup: FC<IButtonGroupProps> = (props) => {
	const {
		borderWidth,
		children,
		className,
		color,
		isVertical = false,
		rounded,
		dimension,
		variant,
		...rest
	} = props;

	const classes = classNames('flex flex-wrap', { 'flex-col': isVertical });

	const childClasses = classNames({
		/**
		 * For Horizontal
		 */
		'not-last:ltr:rounded-r-none!': !isVertical,
		'not-last:rtl:rounded-l-none!': !isVertical,
		'not-first:ltr:rounded-l-none!': !isVertical,
		'not-first:rtl:rounded-r-none!': !isVertical,
		/**
		 * For Vertical
		 */
		'not-last:rounded-b-none!': isVertical,
		'not-first:rounded-t-none!': isVertical,
	});

	return (
		<div data-component-name='ButtonGroup' className={classNames(classes, className)} {...rest}>
			{Children.map(children, (child) =>
				cloneElement(child, {
					className: classNames(childClasses, child.props.className),
					borderWidth: borderWidth || child.props.borderWidth,
					color: color || child.props.color,
					rounded: rounded || child.props.rounded,
					dimension: dimension || child.props.dimension,
					variant: variant || child.props.variant,
				}),
			)}
		</div>
	);
};
ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
