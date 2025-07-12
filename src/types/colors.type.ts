export type TColorFlat = 'inherit' | 'current' | 'transparent' | 'black' | 'white';
export type TColors =
	// | 'customColor'
	| 'primary'
	| 'secondary'
	// | 'slate'
	// | 'gray'
	| 'zinc'
	// | 'neutral'
	// | 'stone'
	| 'red'
	// | 'orange'
	| 'amber'
	// | 'yellow'
	| 'lime'
	// | 'green'
	| 'emerald'
	// | 'teal'
	// | 'cyan'
	| 'sky'
	| 'blue'
	// | 'indigo'
	| 'violet';
// | 'purple'
// | 'fuchsia'
// | 'pink'
// | 'rose';

export type TAllColors = TColorFlat | TColors;

export const arrColorFlat: TColorFlat[] = ['inherit', 'current', 'transparent', 'black', 'white'];
// @start-snippet:: arrColors
export const arrColors: TColors[] = [
	// 'customColor',
	'primary',
	'secondary',
	'zinc',
	'red',
	'amber',
	'lime',
	'emerald',
	'sky',
	'blue',
	'violet',
];
// @end-snippet:: arrColors

export const arrAllColors: TAllColors[] = [...arrColorFlat, ...arrColors];
