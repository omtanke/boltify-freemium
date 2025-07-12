import { useEffect, useState } from 'react';

const useMdToString = (mdFile: RequestInfo | URL) => {
	const [content, setContent] = useState<string>('');

	const fetchData = async (_mdFile: RequestInfo | URL) => {
		const file: string = await fetch(_mdFile).then((res) => res.text());

		return new Promise((resolve, reject) => {
			if (file) resolve(file);
			else reject(new Error('File not found.'));
		});
	};

	useEffect(() => {
		fetchData(mdFile)
			.then((md) => setContent(md as string))
			.catch((Err) => setContent(Err as string));
	}, [mdFile]);

	return content;
};
export default useMdToString;
