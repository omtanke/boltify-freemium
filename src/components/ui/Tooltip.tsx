import { cloneElement, FC, HTMLAttributes, ReactElement, ReactNode, useState, useRef } from 'react';
import classNames from 'classnames';
import {
	useFloating,
	offset,
	flip,
	shift,
	arrow,
	autoUpdate,
	useHover,
	useFocus,
	useDismiss,
	useRole,
	useInteractions,
	FloatingArrow,
	Placement,
} from '@floating-ui/react';
import { TBorderWidth } from '@/types/borderWidth.type';
import { TRounded } from '@/types/rounded.type';
import Icon from '@/components/icon/Icon';
import Portal from '@/components/layout/Portal/Portal';

// @start-snippet:: interface
interface ITooltipProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
	text: ReactNode;
	placement?: Placement;
	borderWidth?: TBorderWidth;
	rounded?: TRounded;
}
// @end-snippet:: interface
const Tooltip: FC<ITooltipProps> = (props) => {
	const {
		children,
		className,
		text,
		placement = 'top',
		borderWidth = 'border',
		rounded = 'rounded-lg',
		...rest
	} = props;

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const arrowRef = useRef(null);

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		placement,
		middleware: [offset(8), flip(), shift(), arrow({ element: arrowRef, padding: 8 })],
		whileElementsMounted: autoUpdate,
	});

	const hover = useHover(context);
	const focus = useFocus(context);
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: 'tooltip' });

	const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

	const getComponentName = (child: ReactNode): string =>
		// @ts-ignore
		child?.props['data-component-name'] || child?.type?.displayName || child?.type;

	return (
		<>
			{['string', 'undefined'].includes(typeof children) ? (
				<span
					data-component-name='Tooltip/Reference'
					ref={refs.setReference}
					className='cursor-pointer'
					{...getReferenceProps()}>
					{children || (
						<Icon
							icon='InformationCircle'
							className={classNames('inline-flex', className)}
						/>
					)}
				</span>
			) : (
				cloneElement(children as ReactElement, {
					// @ts-ignore
					'data-component-name': `${getComponentName(children)} is cloned with Tooltip`,
					ref: refs.setReference,
					// @ts-expect-error
					className: classNames('cursor-pointer', children.props.className),
					...getReferenceProps(),
				})
			)}
			{isOpen && text !== '' && (
				<Portal>
					<div
						data-component-name='Tooltip/Popper'
						ref={refs.setFloating}
						style={floatingStyles}
						className={classNames(
							'z-[9998] px-2 py-1',
							'max-w-xs',
							'border-zinc-500/10 drop-shadow-lg backdrop-blur-xs',
							borderWidth,
							rounded,
							className,
						)}
						{...getFloatingProps()}
						{...rest}>
						{text}
						<FloatingArrow
							ref={arrowRef}
							context={context}
							className='relative z-[9999] fill-zinc-50 backdrop-blur-xs dark:fill-zinc-950 [&>path:first-of-type]:stroke-zinc-500/10'
							strokeWidth={0.5}
						/>
					</div>
				</Portal>
			)}
		</>
	);
};
Tooltip.displayName = 'Tooltip';

export default Tooltip;
