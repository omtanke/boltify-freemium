import { FC, HTMLAttributes, ReactNode, useId, useState } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import useRoundedSize from '@/hooks/useRoundedSize';
import useAsideStatus from '@/hooks/useAsideStatus';
import getFirstLetterUtil from '@/utils/getFirstLetter.util';

interface IUserProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	src?: string;
	name?: string;
	namePrefix?: ReactNode;
	nameSuffix?: ReactNode;
	position?: string;
	suffix?: ReactNode;
	isLoading?: boolean;
}
const User: FC<IUserProps> = (props) => {
	const {
		children,
		className,
		name = 'Anonymous',
		position,
		src,
		namePrefix,
		nameSuffix,
		suffix,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		isLoading = false,
		...rest
	} = props;

	const { asideStatus } = useAsideStatus();

	const id = useId();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const { roundedCustom } = useRoundedSize('rounded-xl');

	return (
		<div data-component-name='User' className={classNames('relative', className)} {...rest}>
			<div
				className={classNames(
					'mb-2 min-w-[4.5rem] overflow-hidden rounded-xl bg-white dark:bg-zinc-950',
					{
						'ltr:translate-x-[-0.625rem] rtl:translate-x-[0.625rem]': !asideStatus,
					},
					'transition-all duration-300 ease-in-out',
				)}>
				<div
					className={classNames(
						'flex cursor-pointer gap-4 p-3',
						'text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100',
						'transition-all duration-300 ease-in-out',
					)}
					onClick={() => setIsOpen((prevState) => !prevState)}
					role='presentation'>
					{src ? (
						<img
							src={src}
							alt='Avatar'
							className={classNames('bg-secondary-500/25 h-12 w-12 object-cover', [
								`${roundedCustom(-2)}`,
							])}
						/>
					) : (
						<div
							className={classNames(
								'bg-primary-500/25 text-primary-500 flex aspect-square h-12 w-12 items-center justify-center',
								[`${roundedCustom(-2)}`],
							)}>
							{name && getFirstLetterUtil(name)}
						</div>
					)}
					<div className='flex basis-full flex-wrap items-center truncate'>
						<div className='flex basis-full items-center gap-2 truncate'>
							{namePrefix && <span>{namePrefix}</span>}
							<span className='truncate font-semibold'>{name}</span>
							{nameSuffix && <span>{nameSuffix}</span>}
						</div>
						{position && (
							<div className='basis-full truncate text-xs first-letter:uppercase'>
								{position}
							</div>
						)}
					</div>
					{suffix && <div className='flex items-center'>{suffix}</div>}
				</div>
				<AnimatePresence>
					{isOpen && (
						<motion.ul
							key={id}
							initial='collapsed'
							animate='open'
							exit='collapsed'
							variants={{
								open: { height: 'auto' },
								collapsed: { height: 0 },
							}}
							transition={{ duration: 0.3 }}
							// @ts-ignore
							className='px-3'>
							{children}
						</motion.ul>
					)}
				</AnimatePresence>
			</div>
			<span
				className={classNames('absolute end-0 top-0 -me-1 -mt-1 flex h-3 w-3', {
					'ltr:translate-x-[0.625rem] rtl:translate-x-[-0.625rem]': !asideStatus,
				})}>
				<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75' />
				<span className='relative inline-flex h-3 w-3 rounded-full bg-blue-500' />
			</span>
		</div>
	);
};
User.displayName = 'User';

export default User;
