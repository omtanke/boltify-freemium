import { useTranslation } from 'react-i18next';

const useDir = () => {
	const { i18n } = useTranslation();

	const dir = i18n.dir();
	const isLTR = dir === 'ltr';
	const isRTL = !isLTR;

	return { dir, isLTR, isRTL };
};
export default useDir;
