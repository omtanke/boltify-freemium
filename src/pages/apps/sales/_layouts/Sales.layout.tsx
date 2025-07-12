import { Outlet } from 'react-router';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';

export interface OutletContextType {
	headerLeft?: ReactNode;
	setHeaderLeft: Dispatch<SetStateAction<ReactNode>>;
}

const SalesLayout = () => {
	const [headerLeft, setHeaderLeft] = useState('');

	return (
		<>
			<Header>
				<HeaderLeft>{headerLeft}</HeaderLeft>
				<HeaderRight>
					<ChangeDarkModeTemplate />
					<ChangeLanguageTemplate />
				</HeaderRight>
			</Header>
			<Outlet context={{ headerLeft, setHeaderLeft }} />
		</>
	);
};

export default SalesLayout;
