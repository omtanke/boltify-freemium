import { useEffect, useState } from 'react';
import themeConfig from '@/config/theme.config';

const useDocumentTitle = ({
	title = themeConfig.projectTitle,
	name = themeConfig.projectName,
}: {
	/**
	 * Project Name
	 *
	 * Example: Project Name | Page Name
	 */
	title?: string;
	/**
	 * Page Name
	 *
	 * Example: Project Name | Page Name
	 */
	name?: string;
}) => {
	const [documentTitle, setDocumentTitle] = useState<string>(`${title} | ${name}`);

	useEffect(() => {
		document.title = documentTitle;
	}, [documentTitle, title, name]);

	return [documentTitle, setDocumentTitle];
};

export default useDocumentTitle;
