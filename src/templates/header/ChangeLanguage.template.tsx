import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '@/components/ui/Dropdown';
import Button from '@/components/ui/Button';
import Icon from '@/components/icon/Icon';
import LANG from '@/constants/lang.constant';
import { useContext } from 'react';
import ThemeContext from '@/context/themeContext';
import { useTranslation } from 'react-i18next';
import Tooltip from '@/components/ui/Tooltip';

const ChangeLanguageTemplate = () => {
	const { i18n } = useTranslation();
	const { setLanguage } = useContext(ThemeContext);

	const langArray = Object.values(LANG);
	const activeLang = langArray.filter((key) => key.lng === i18n.language)[0];

	return (
		<Dropdown>
			<DropdownToggle hasIcon={false}>
				<div className='flex items-center'>
					<Tooltip text='Change language'>
						<Button
							icon='LanguageSquare'
							variant='link'
							aria-label='Select Language'
							className='!p-0'
						/>
					</Tooltip>
				</div>
			</DropdownToggle>
			<DropdownMenu>
				{langArray.map((item) => (
					<DropdownItem
						isActive={activeLang.lng === item.lng}
						key={item.lng}
						onClick={() => setLanguage(item.lng)}>
						<Icon icon={item.icon} size='text-2xl' className='ltr:mr-2 rtl:ml-2' />
						{item.text}
					</DropdownItem>
				))}
			</DropdownMenu>
		</Dropdown>
	);
};

export default ChangeLanguageTemplate;
