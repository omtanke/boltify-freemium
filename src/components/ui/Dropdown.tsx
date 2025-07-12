import {
	cloneElement,
	Dispatch,
	ElementType,
	FC,
	forwardRef,
	HTMLAttributes,
	MutableRefObject,
	ReactElement,
	ReactNode,
	Ref,
	SetStateAction,
	useCallback,
	useRef,
	useState,
	useEffect,
} from 'react';
import {
	useFloating,
	autoUpdate,
	offset,
	flip,
	shift,
	Placement,
	ReferenceType,
} from '@floating-ui/react';
import classNames from 'classnames';
import { IButtonProps } from './Button';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { TBorderWidth } from '@/types/borderWidth.type';
import themeConfig from '@/config/theme.config';
import { TRounded } from '@/types/rounded.type';
import { TColors } from '@/types/colors.type';
import { TIcons } from '@/types/icons.type';
import Icon from '@/components/icon/Icon';

// @start-snippet:: interface
export interface IDropdownProps extends HTMLAttributes<HTMLElement> {
	children: ReactElement<IDropdownToggleProps | IDropdownMenuProps>[];
	className?: string;
	/* If you want to interfere with the open-closed state, you can use it by defining the state. */
	isOpen?: boolean;
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
	tag?: ElementType;
}
// @end-snippet:: interface
const Dropdown: FC<IDropdownProps> = (props) => {
	const { children, className, isOpen = null, setIsOpen, tag: Tag = 'div' } = props;

	const [state, setState] = useState<boolean>(
		!!(isOpen !== null && !!setIsOpen ? isOpen : false),
	);

	const dropdownRef = useRef(null);
	const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);

	const setRefs = useCallback((node: HTMLElement | null) => {
		// @ts-ignore
		dropdownRef.current = node;
		setReferenceElement(node);
	}, []);

	const classes = classNames('inline-flex');

	// Clicking outside to close
	const closeMenu = useCallback(() => {
		if (isOpen !== null && !!setIsOpen) {
			setIsOpen(false);
		} else {
			setState(false);
		}
	}, [isOpen, setIsOpen]);
	// @ts-ignore
	useOnClickOutside(dropdownRef, closeMenu);

	return (
		<Tag
			data-component-name='Dropdown'
			ref={setRefs}
			className={classNames(classes, className)}>
			{children.map((child: ReactElement, index: number) =>
				// @ts-expect-error
				['DropdownMenu', 'DropdownToggle'].includes(child.type.displayName as string)
					? cloneElement(child, {
							// @ts-ignore
							isOpen: isOpen !== null && !!setIsOpen ? isOpen : state,
							setIsOpen: isOpen !== null && !!setIsOpen ? setIsOpen : setState,
							referenceElement,
							setReferenceElement,
							key: index,
						})
					: child,
			)}
		</Tag>
	);
};
Dropdown.displayName = 'Dropdown';

// @start-snippet:: interface
export interface IDropdownToggleProps {
	children: ReactElement<IButtonProps | IDropdownItemProps>;
	hasIcon?: boolean;
	isOpen?: boolean;
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
	setReferenceElement?: Dispatch<SetStateAction<HTMLElement>>;
	trigger?: 'click' | 'hover';
}
// @end-snippet:: interface
export const DropdownToggle: FC<IDropdownToggleProps> = (props) => {
	const {
		children,
		isOpen = false,
		setIsOpen,
		hasIcon = true,
		setReferenceElement,
		trigger = 'click',
	} = props;

	const eventProps =
		trigger === 'click'
			? {
					onClick: () => {
						// @ts-expect-error
						if (children.props.onClick) children.props.onClick();
						if (setIsOpen) {
							setIsOpen(!isOpen);
						}
					},
				}
			: {
					onMouseEnter: () => {
						// @ts-expect-error
						if (children.props.onMouseEnter) children.props.onMouseEnter();
						if (setIsOpen) {
							setIsOpen(true);
						}
					},
				};

	return cloneElement(children, {
		// @ts-expect-error
		'data-component-name': `Dropdown/DropdownToggle [${children.type.displayName}]`,
		ref: setReferenceElement,
		...eventProps,
		rightIcon: hasIcon
			? // @ts-expect-error
				(children.type.displayName === 'Button' && 'ArrowDown01') || 'ArrowRight01'
			: undefined,
		isActive: isOpen,
		className: classNames(
			{
				// Only presentation
				show: isOpen,
			},
			children?.props?.className,
		),
		'aria-expanded': isOpen,
	});
};
DropdownToggle.displayName = 'DropdownToggle';

function mergeRefs<T>(...refs: (Ref<T> | undefined)[]) {
	return (node: T | null) => {
		refs.forEach((ref) => {
			if (typeof ref === 'function') {
				ref(node);
			} else if (ref && 'current' in ref) {
				(ref as MutableRefObject<T | null>).current = node;
			}
		});
	};
}

// @start-snippet:: interface
export interface IDropdownMenuProps extends HTMLAttributes<HTMLUListElement> {
	borderWidth?: TBorderWidth;
	children: ReactNode | ReactNode[];
	className?: string;
	fallbackPlacements?: Placement[];
	isCloseAfterLeave?: boolean;
	isOpen?: boolean;
	placement?: Placement;
	rounded?: TRounded;
	setIsOpen?: Dispatch<SetStateAction<boolean>>;
	referenceElement?: ReferenceType | null;
}
// @end-snippet:: interface
export const DropdownMenu = forwardRef<HTMLUListElement, IDropdownMenuProps>((props, ref) => {
	const {
		isOpen = false,
		setIsOpen,
		children,
		className,
		placement = 'bottom-start',
		isCloseAfterLeave = true,
		borderWidth = themeConfig.borderWidth,
		rounded = themeConfig.rounded,
		fallbackPlacements = ['top-start', 'bottom-start'],
		referenceElement = null,
		...rest
	} = props;

	const { refs, floatingStyles } = useFloating({
		placement,
		middleware: [offset(4), flip({ fallbackPlacements }), shift({ padding: 5 })],
		whileElementsMounted: autoUpdate,
	});

	useEffect(() => {
		refs.setReference(referenceElement);
	}, [referenceElement, refs]);

	const onMouseLeave = isCloseAfterLeave && setIsOpen ? () => setIsOpen(false) : undefined;

	if (!isOpen) return null;
	return (
		<ul
			data-component-name='Dropdown/DropdownMenu'
			role='presentation'
			ref={mergeRefs(ref, refs.setFloating)}
			// dynamic positioning must be disabled for responsive alignment
			style={floatingStyles}
			data-placement={placement}
			className={classNames(
				'flex flex-col gap-2 px-2 py-2',
				'z-[9999]',
				'min-w-60',
				'border-zinc-300/25 bg-white shadow-lg dark:border-zinc-800/50 dark:bg-zinc-900',
				borderWidth,
				rounded,
				className,
			)}
			onMouseLeave={onMouseLeave}
			{...rest}>
			{children}
		</ul>
	);
});
DropdownMenu.displayName = 'DropdownMenu';

// @start-snippet:: interface
export interface IDropdownItemProps extends HTMLAttributes<HTMLLIElement> {
	children: ReactNode;
	className?: string;
	color?: TColors;
	isActive?: boolean;
	isDisabled?: boolean;
	icon?: TIcons;
	rightIcon?: TIcons;
	isOpen?: boolean;
}
// @end-snippet:: interface
export const DropdownItem = forwardRef<HTMLLIElement, IDropdownItemProps>((props, ref) => {
	const {
		children,
		className,
		color,
		isActive = false,
		isDisabled,
		icon,
		rightIcon,
		isOpen,
		...rest
	} = props;

	const colorClass: Record<TColors, string> = {
		primary: 'text-primary-500',
		secondary: 'text-secondary-500',
		zinc: 'text-zinc-500',
		red: 'text-red-500',
		amber: 'text-amber-500',
		lime: 'text-lime-500',
		emerald: 'text-emerald-500',
		sky: 'text-sky-500',
		blue: 'text-blue-500',
		violet: 'text-violet-500',
	};

	const classes = classNames(
		'p-2',
		'flex items-center w-full',
		'whitespace-nowrap',
		'cursor-pointer',
		'rounded-sm',
		'border-zinc-300/25 dark:border-zinc-800/50',
		{ 'hover:bg-zinc-500/10': !isDisabled },
		[color && colorClass[color]],
		{
			'bg-zinc-500/5': isActive || isOpen,
		},
		{ '!opacity-50 cursor-not-allowed': isDisabled },
		themeConfig.transition,
	);
	return (
		<li
			data-component-name='Dropdown/DropdownItem'
			ref={ref}
			className={classNames(classes, className)}
			{...rest}>
			{icon && <Icon icon={icon} className='inline-flex text-xl ltr:mr-1.5 rtl:ml-1.5' />}
			{children}
			{rightIcon && (
				<Icon icon={rightIcon} className='inline-flex text-xl ltr:ml-1.5 rtl:mr-1.5' />
			)}
		</li>
	);
});
DropdownItem.displayName = 'DropdownItem';

// @start-snippet:: interface
type IDropdownDividerProps = HTMLAttributes<HTMLDivElement>;
// @end-snippet:: interface
export const DropdownDivider: FC<IDropdownDividerProps> = (props) => {
	const { className, ...rest } = props;
	return <div className={classNames('-mx-2 border-t border-inherit', className)} {...rest}></div>;
};
DropdownDivider.displayName = 'DropdownDivider';

// @start-snippet:: interface
type IDropdownContentProps = HTMLAttributes<HTMLDivElement>;
// @end-snippet:: interface
export const DropdownContent: FC<IDropdownContentProps> = (props) => {
	const { children, className, ...rest } = props;
	return (
		<div className={classNames('px-2', className)} {...rest}>
			{children}
		</div>
	);
};
DropdownContent.displayName = 'DropdownContent';

export default Dropdown;
