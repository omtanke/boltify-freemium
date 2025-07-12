import { FC } from 'react';
import classNames from 'classnames';
import { TDarkMode } from '@/types/darkMode.type';
import useAsideStatus from '@/hooks/useAsideStatus';
import useDarkMode from '@/hooks/useDarkMode';
import DARK_MODE from '@/constants/darkMode.constant';
import Icon from '@/components/icon/Icon';

interface IStyledButtonProps {
	text: string;
	icon: string;
	status: TDarkMode;
}
const StyledButton: FC<IStyledButtonProps> = ({ text, icon, status }) => {
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();
	const { asideStatus } = useAsideStatus();

	const handeClick = () => {
		if (!asideStatus) {
			if (darkModeStatus === DARK_MODE.DARK) {
				setDarkModeStatus(DARK_MODE.LIGHT);
			} else if (darkModeStatus === DARK_MODE.LIGHT) {
				setDarkModeStatus(DARK_MODE.SYSTEM);
			} else {
				setDarkModeStatus(DARK_MODE.DARK);
			}
		} else {
			setDarkModeStatus(status);
		}
	};

	if (!asideStatus && darkModeStatus !== status) return null;
	return (
		<button
			type='button'
			aria-label={`${text} Mode`}
			className={classNames(
				'p-1.5',
				'rounded-lg',
				'text-zinc-500 dark:hover:text-zinc-100',
				'flex flex-auto items-center justify-center',
				'truncate',
				{
					'bg-white shadow-lg dark:bg-zinc-800 dark:text-white':
						darkModeStatus === status,
					'hover:text-zinc-950': darkModeStatus !== status,
				},
				'transition-all duration-300 ease-in-out',
			)}
			onClick={handeClick}>
			<Icon
				icon={icon}
				className={classNames('text-xl', {
					'ltr:mr-1.5 rtl:ml-1.5': asideStatus,
				})}
			/>
			{asideStatus && (
				<span className='truncate overflow-hidden whitespace-nowrap'>{text}</span>
			)}
		</button>
	);
};
const DarkModeSwitcherPart = () => {
	return (
		<div className='mb-1 flex w-full overflow-hidden py-2 text-sm'>
			<StyledButton icon='Moon02' status={DARK_MODE.DARK} text='Dark' />
			<StyledButton icon='Sun03' status={DARK_MODE.LIGHT} text='Light' />
			<StyledButton icon='Computer' status={DARK_MODE.SYSTEM} text='System' />
		</div>
	);
};

export default DarkModeSwitcherPart;
