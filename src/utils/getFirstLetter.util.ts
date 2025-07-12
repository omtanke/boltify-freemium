const getFirstLetterUtil = (text: string, letterCount = 2): string =>
	text
		.split(/\s/)
		.slice(0, letterCount)
		.map((word) => word[0])
		.join('')
		.toUpperCase();

export default getFirstLetterUtil;
