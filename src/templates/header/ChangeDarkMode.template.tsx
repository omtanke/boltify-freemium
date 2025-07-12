import Button from '@/components/ui/Button';
import DARK_MODE from '@/constants/darkMode.constant';
import useDarkMode from '@/hooks/useDarkMode';
import Tooltip from '@/components/ui/Tooltip';

const ChangeDarkModeTemplate = () => {
	const { setDarkModeStatus, darkModeStatus } = useDarkMode();
	return (
		<Tooltip text='Change theme'>
			<Button
				icon={
					(darkModeStatus === DARK_MODE.LIGHT && 'Sun03') ||
					(darkModeStatus === DARK_MODE.DARK && 'Moon02') ||
					'Computer'
				}
				variant='link'
				aria-label='Select Language'
				className='!p-0'
				onClick={() => {
					if (darkModeStatus === DARK_MODE.LIGHT) setDarkModeStatus(DARK_MODE.DARK);
					if (darkModeStatus === DARK_MODE.DARK) setDarkModeStatus(DARK_MODE.SYSTEM);
					if (darkModeStatus === DARK_MODE.SYSTEM) setDarkModeStatus(DARK_MODE.LIGHT);
				}}
			/>
		</Tooltip>
	);
};

export default ChangeDarkModeTemplate;
