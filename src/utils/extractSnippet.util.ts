const extractSnippetUtil = (
	sourceCode: string,
	key: string,
	separator: string = '\n\n',
): string => {
	const lines = sourceCode.split(/\r?\n/);
	const collected: string[] = [];
	let collecting = false;
	let buffer: string[] = [];

	const unwrap = (line: string) =>
		line.replace(/^\s*(?:\/\/|\{\s*\/\*)\s*/, '').replace(/\s*(?:\*\/\})?\s*$/, '');

	const dedent = (chunk: string[]): string[] => {
		const indents = chunk.filter((l) => l.trim()).map((l) => l.match(/^\s*/)?.[0].length ?? 0);
		const minIndent = indents.length ? Math.min(...indents) : 0;
		return chunk.map((l) => l.slice(minIndent));
	};

	for (const line of lines) {
		const trimmed = line.trim();
		const content = unwrap(trimmed);

		if (content.startsWith(`@start-snippet::`) && content.includes(key)) {
			collecting = true;
			buffer = [];
			continue;
		}

		if (collecting && content.startsWith(`@end-snippet::`) && content.includes(key)) {
			const dedented = dedent(buffer);
			collected.push(dedented.join('\n'));
			collecting = false;
			buffer = [];
			continue;
		}

		if (collecting) {
			buffer.push(line);
		}
	}

	return collected.join(separator);
};

export default extractSnippetUtil;
