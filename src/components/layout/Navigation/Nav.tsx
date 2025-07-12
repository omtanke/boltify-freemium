import {
	FC,
	HTMLAttributes,
	JSXElementConstructor,
	MouseEventHandler,
	ReactElement,
	ReactNode,
	ReactPortal,
	useEffect,
	useId,
	useState,
} from 'react';
import { NavLink, useLocation } from 'react-router';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { TIcons } from '@/types/icons.type';
import useAsideStatus from '@/hooks/useAsideStatus';
import { TColors } from '@/types/colors.type';
import Icon, { IIconProps } from '@/components/icon/Icon';
import Tooltip from '@/components/ui/Tooltip';

const navItemClasses = {
	default: classNames(
		'mb-2 p-3',
		'flex items-center',
		'cursor-pointer',
		'overflow-hidden',
		'rounded-xl',
		'hover:opacity-100',
		'border',
		'text-zinc-500',
		'hover:text-zinc-950 dark:hover:text-zinc-100',
		'grow',
		'transition-all duration-300 ease-in-out',
	),
	inactive: 'border-transparent',
	active: 'border-zinc-300 text-zinc-950 dark:border-zinc-800 dark:text-zinc-100',
	here: 'text-zinc-950 dark:text-zinc-100 border-transparent',
};

const navItemChildCheck = (
	children:
		| ReactElement<unknown, string | JSXElementConstructor<unknown>>
		| string
		| number
		| Iterable<ReactNode>
		| ReactPortal
		| boolean
		| null
		| undefined
		| INavButtonProps,
): boolean => {
	// @ts-expect-error
	return children?.length > 1
		? // @ts-expect-error
			children?.map((child) => child.type.displayName).includes('NavButton')
		: // @ts-expect-error
			children?.type?.displayName === 'NavButton';
};

interface INavItemTextProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
const NavItemText: FC<INavItemTextProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<div
			data-component-name='Nav/NavItemText'
			className={classNames('truncate overflow-hidden whitespace-nowrap', className)}
			{...rest}>
			{children}
		</div>
	);
};
NavItemText.displayName = 'NavItemText';

interface INavItemContentProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
const NavItemContent: FC<INavItemContentProps> = (props) => {
	const { children, className, ...rest } = props;

	const { asideStatus } = useAsideStatus();

	return (
		<div
			data-component-name='Nav/NavItemContent'
			className={classNames(
				'flex w-full items-center justify-between truncate',
				{
					hidden: !asideStatus,
				},
				className,
			)}
			{...rest}>
			{children}
		</div>
	);
};
NavItemContent.displayName = 'NavItemContent';

interface INavIconProps extends Partial<IIconProps> {
	icon?: TIcons;
	className?: string;
}
const NavIcon: FC<INavIconProps> = (props) => {
	const { className, icon = 'DragDrop', color } = props;

	const { asideStatus } = useAsideStatus();

	return (
		<Icon
			data-component-name='Nav/NavIcon'
			icon={icon}
			color={color}
			className={classNames(
				'w-6 flex-none text-2xl',
				{
					'me-3': asideStatus,
				},
				className,
			)}
		/>
	);
};
NavIcon.displayName = 'NavIcon';

interface INavButtonProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string;
	icon: TIcons;
	iconColor?: TColors;
	iconClassName?: string;
	title: string;
}
export const NavButton: FC<INavButtonProps> = (props) => {
	const { icon, iconColor, className, iconClassName, ...rest } = props;

	return (
		<button
			data-component-name='Nav/NavButton'
			type='button'
			className={classNames('cursor-pointer', className)}
			{...rest}>
			<Icon
				icon={icon}
				color={iconColor}
				size='text-2xl'
				className={classNames(
					{
						'text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100': !iconColor,
					},
					'transition-all duration-300 ease-in-out',
					iconClassName,
				)}
			/>
		</button>
	);
};
NavButton.displayName = 'NavButton';

interface INavItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'onClick'> {
	children?: ReactNode;
	icon?: TIcons;
	iconColor?: TColors;
	isActiveOverwrite?: boolean;
	isChildrenNavButtonOverwrite?: boolean;
	text?: string;
	to?: string;
	className?: string;
	subPages?: unknown;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
export const NavItem: FC<INavItemProps> = (props) => {
	const {
		children,
		icon,
		text = 'Text',
		to,
		className,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		subPages,
		iconColor,
		isActiveOverwrite,
		isChildrenNavButtonOverwrite,
		onClick,
		...rest
	} = props;

	const { t } = useTranslation('menu');

	const { asideStatus, setAsideStatus } = useAsideStatus();

	// @ts-ignore
	const isChildrenNavButton = navItemChildCheck(children);

	const CONTENT = (
		<>
			{asideStatus && (
				<div className='absolute start-[0.125rem] -top-[100vh] bottom-[calc(50%+0.25rem)] hidden w-[0.8125rem] border-s border-b border-zinc-300 ltr:rounded-bl-[10px] rtl:rounded-br-[10px] dark:border-zinc-700 [.group_&]:block'></div>
			)}
			<NavIcon icon={icon} color={iconColor} />
			<NavItemContent>
				<NavItemText>{t(text)}</NavItemText>
				{children && !isChildrenNavButton && !isChildrenNavButtonOverwrite && (
					<div>{children as ReactNode}</div>
				)}
			</NavItemContent>
		</>
	);

	return (
		<Tooltip text={asideStatus ? '' : t(text)} placement='right'>
			<li
				data-component-name='Nav/NavItem'
				className={classNames(
					// 'flex list-none items-center overflow-hidden whitespace-nowrap',
					'relative flex list-none items-center whitespace-nowrap',
					{ '[.group_&]:ps-4': asideStatus },
					className,
				)}
				{...rest}>
				{to ? (
					<>
						{/* For Desktop */}
						<NavLink
							end
							to={to}
							className={({ isActive }) =>
								isActive || isActiveOverwrite
									? classNames(
											navItemClasses.default,
											navItemClasses.active,
											'max-md:hidden',
										)
									: classNames(
											navItemClasses.default,
											navItemClasses.inactive,
											'max-md:hidden',
										)
							}>
							{CONTENT}
						</NavLink>
						{/* For Mobile */}
						<NavLink
							end
							to={to}
							onClick={() => setAsideStatus(false)}
							className={({ isActive }) =>
								isActive || isActiveOverwrite
									? classNames(
											navItemClasses.default,
											navItemClasses.active,
											'md:hidden',
										)
									: classNames(
											navItemClasses.default,
											navItemClasses.inactive,
											'md:hidden',
										)
							}>
							{CONTENT}
						</NavLink>
					</>
				) : (
					<>
						{/* For Desktop */}
						<button
							onClick={onClick}
							className={classNames(
								navItemClasses.default,
								{ [`${navItemClasses.inactive}`]: !isActiveOverwrite },
								{ [`${navItemClasses.active}`]: isActiveOverwrite },
								'max-md:hidden',
							)}>
							{CONTENT}
						</button>
						{/* For Mobile */}
						<button
							onClick={onClick}
							className={classNames(
								navItemClasses.default,
								{ [`${navItemClasses.inactive}`]: !isActiveOverwrite },
								{ [`${navItemClasses.active}`]: isActiveOverwrite },
								'md:hidden',
							)}>
							{CONTENT}
						</button>
					</>
				)}
				{asideStatus &&
					children &&
					(isChildrenNavButton || isChildrenNavButtonOverwrite) && (
						<div className='mb-2 flex items-center gap-3 px-3'>
							{children as ReactNode}
						</div>
					)}
			</li>
		</Tooltip>
	);
};
NavItem.displayName = 'NavItem';

interface INavCollapseProps extends HTMLAttributes<HTMLLIElement> {
	children: ReactNode;
	icon?: TIcons;
	iconColor?: TColors;
	text: string;
	to: string;
	className?: string;
	subPages?: unknown;
}
export const NavCollapse: FC<INavCollapseProps> = (props) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { children, icon, text, className, to, subPages, iconColor, ...rest } = props;

	const { t } = useTranslation('menu');

	const id = useId();
	const [isActive, setIsActive] = useState<boolean>(false);

	const { asideStatus } = useAsideStatus();

	const location = useLocation();
	const here = to !== '/' && location.pathname.includes(to);

	useEffect(() => {
		setIsActive(here);
	}, [here, location.pathname]);

	return (
		<li
			data-component-name='Nav/NavCollapse'
			className={classNames('relative list-none', 'group', className)}
			{...rest}>
			<Tooltip text={asideStatus ? '' : t(text)} placement='right'>
				<div
					role='presentation'
					className={
						isActive || here
							? classNames(navItemClasses.default, navItemClasses.here)
							: classNames(navItemClasses.default, navItemClasses.inactive)
					}
					onClick={() => setIsActive(!isActive)}>
					<NavIcon icon={icon} color={iconColor} />

					<NavItemContent>
						<NavItemText>{t(text)}</NavItemText>
						<div>
							<Icon
								icon='ArrowDown01'
								className={classNames(
									'text-2xl',
									{
										'rotate-180': isActive,
									},
									'transition-all duration-300 ease-in-out',
								)}
							/>
						</div>
					</NavItemContent>
				</div>
			</Tooltip>
			{asideStatus && (
				<div className='absolute start-[0.125rem] -top-[100vh] bottom-[calc(100%-1.5rem)] hidden w-[0.8125rem] border-s border-b border-zinc-300 ltr:rounded-bl-[10px] rtl:rounded-br-[10px] dark:border-zinc-700 [.group_.group_&]:block'></div>
			)}
			<AnimatePresence initial={false}>
				{isActive && (
					<motion.ul
						key={id}
						initial='collapsed'
						animate='open'
						exit='collapsed'
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{
							duration: 0.3,
							ease: [0.04, 0.62, 0.23, 0.98],
						}}
						className={classNames('overflow-hidden', {
							'ms-4': asideStatus,
						})}>
						{children}
					</motion.ul>
				)}
			</AnimatePresence>
		</li>
	);
};
NavCollapse.displayName = 'NavCollapse';

interface INavTitleProps extends HTMLAttributes<HTMLLIElement> {
	children: string;
	className?: string;
}
export const NavTitle: FC<INavTitleProps> = (props) => {
	const { children, className, ...rest } = props;

	const { t } = useTranslation('menu');

	const { asideStatus } = useAsideStatus();

	return (
		<Tooltip text={asideStatus ? '' : t(children)} placement='right'>
			<li
				data-component-name='Nav/NavTitle'
				className={classNames(
					'list-none truncate overflow-hidden px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-zinc-500',
					className,
				)}
				{...rest}>
				{asideStatus ? (
					children
				) : (
					<div className='my-1.5 h-2 w-full max-w-[6rem] rounded-full bg-zinc-500' />
				)}
			</li>
		</Tooltip>
	);
};
NavTitle.displayName = 'NavTitle';

interface INavUserProps extends HTMLAttributes<HTMLLIElement> {
	children?: ReactNode;
	image?: string;
	text: string;
	to?: string;
	className?: string;
}
export const NavUser: FC<INavUserProps> = (props) => {
	// TODO
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { children, image, text, to, className, ...rest } = props;

	const { t } = useTranslation('menu');

	const { asideStatus, setAsideStatus } = useAsideStatus();
	// @ts-ignore
	const isChildrenNavButton = navItemChildCheck(children);

	const CONTENT = (
		<>
			{/*TODO*/}
			{/*<Avatar*/}
			{/*	src={image}*/}
			{/*	name={text}*/}
			{/*	className={classNames('w-6 rounded-full', {*/}
			{/*		'me-3': asideStatus,*/}
			{/*	})}*/}
			{/*	rounded='rounded-sm'*/}
			{/*/>*/}
			<NavItemContent>
				<NavItemText>{t(text)}</NavItemText>
				{children && !isChildrenNavButton && <div>{children as ReactNode}</div>}
			</NavItemContent>
		</>
	);

	return (
		<Tooltip text={asideStatus ? '' : t(text)} placement='right'>
			<li
				data-component-name='Nav/NavUser'
				className={classNames(
					'flex list-none items-center overflow-hidden whitespace-nowrap',
					className,
				)}
				{...rest}>
				{to ? (
					<>
						{/* For Desktop */}
						<NavLink
							end
							to={to}
							className={({ isActive }) =>
								isActive
									? classNames(
											navItemClasses.default,
											navItemClasses.active,
											'max-md:hidden',
										)
									: classNames(
											navItemClasses.default,
											navItemClasses.inactive,
											'max-md:hidden',
										)
							}>
							{CONTENT}
						</NavLink>
						{/* For Mobile */}
						<NavLink
							end
							to={to}
							onClick={() => setAsideStatus(false)}
							className={({ isActive }) =>
								isActive
									? classNames(
											navItemClasses.default,
											navItemClasses.active,
											'md:hidden',
										)
									: classNames(
											navItemClasses.default,
											navItemClasses.inactive,
											'md:hidden',
										)
							}>
							{CONTENT}
						</NavLink>
					</>
				) : (
					<>
						{/* For Desktop */}
						<div
							className={classNames(
								navItemClasses.default,
								navItemClasses.inactive,
								'max-md:hidden',
							)}>
							{CONTENT}
						</div>
						{/* For Mobile */}
						<div
							className={classNames(
								navItemClasses.default,
								navItemClasses.inactive,
								'md:hidden',
							)}>
							{CONTENT}
						</div>
					</>
				)}
				{asideStatus && children && isChildrenNavButton && (
					<div className='mb-2 flex items-center gap-3 px-3'>{children as ReactNode}</div>
				)}
			</li>
		</Tooltip>
	);
};
NavUser.displayName = 'NavUser';

interface INavSeparatorProps extends HTMLAttributes<HTMLLIElement> {
	className?: string;
}
export const NavSeparator: FC<INavSeparatorProps> = (props) => {
	const { className, ...rest } = props;
	return (
		<li
			data-component-name='Nav/NavSeparator'
			className={classNames(
				'mb-2 list-none rounded-full border-b border-zinc-500/10',
				className,
			)}
			{...rest}
		/>
	);
};
NavSeparator.displayName = 'NavSeparator';

interface INavProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
const Nav: FC<INavProps> = (props) => {
	const { children, className, ...rest } = props;

	return (
		<nav data-component-name='Nav' className={classNames(className)} {...rest}>
			<ul>{children}</ul>
		</nav>
	);
};
Nav.displayName = 'Nav';

export default Nav;
