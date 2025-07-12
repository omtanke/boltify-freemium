type TColorItem = {
	'50': string;
	'100': string;
	'200': string;
	'300': string;
	'400': string;
	'500': string;
	'600': string;
	'700': string;
	'800': string;
	'900': string;
	'950': string;
};

interface DefaultColors {
	inherit: string;
	current: string;
	transparent: string;
	black: string;
	white: string;
	slate: TColorItem;
	gray: TColorItem;
	zinc: TColorItem;
	neutral: TColorItem;
	stone: TColorItem;
	red: TColorItem;
	orange: TColorItem;
	amber: TColorItem;
	yellow: TColorItem;
	lime: TColorItem;
	green: TColorItem;
	emerald: TColorItem;
	teal: TColorItem;
	cyan: TColorItem;
	sky: TColorItem;
	blue: TColorItem;
	indigo: TColorItem;
	violet: TColorItem;
	purple: TColorItem;
	fuchsia: TColorItem;
	pink: TColorItem;
	rose: TColorItem;
}

interface AllColor extends DefaultColors {
	primary: {
		50: '#F5FFF4';
		100: '#E6FFEC';
		200: '#CCFFD8';
		300: '#99FFAD';
		400: '#80FF94';
		500: '#66FF4C';
		600: '#59E644';
		700: '#4CC63B';
		800: '#3E9E32';
		900: '#307729';
		950: '#1C4E1F';
	};
	secondary: {
		50: '#FFF4EF';
		100: '#FFE4DA';
		200: '#FFC6B0';
		300: '#FFA388';
		400: '#FF8C66';
		500: '#FF7A47';
		600: '#E66E40';
		700: '#CC6138';
		800: '#B35430';
		900: '#8A3F24';
		950: '#4A2113';
	};
}

const colors: AllColor = {
	inherit: getComputedStyle(document.documentElement).getPropertyValue('--color-inherit'),
	current: getComputedStyle(document.documentElement).getPropertyValue('--color-current'),
	transparent: getComputedStyle(document.documentElement).getPropertyValue('--color-transparent'),
	black: getComputedStyle(document.documentElement).getPropertyValue('--color-black'),
	white: getComputedStyle(document.documentElement).getPropertyValue('--color-white'),
	slate: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-slate-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-slate-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-slate-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-slate-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-slate-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-slate-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-slate-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-slate-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-slate-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-slate-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-slate-950'),
	},
	gray: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-gray-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-gray-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-gray-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-gray-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-gray-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-gray-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-gray-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-gray-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-gray-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-gray-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-gray-950'),
	},
	zinc: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-zinc-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-zinc-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-zinc-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-zinc-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-zinc-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-zinc-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-zinc-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-zinc-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-zinc-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-zinc-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-zinc-950'),
	},
	neutral: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-neutral-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-neutral-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-neutral-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-neutral-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-neutral-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-neutral-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-neutral-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-neutral-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-neutral-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-neutral-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-neutral-950'),
	},
	stone: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-stone-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-stone-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-stone-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-stone-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-stone-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-stone-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-stone-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-stone-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-stone-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-stone-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-stone-950'),
	},
	red: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-red-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-red-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-red-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-red-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-red-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-red-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-red-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-red-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-red-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-red-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-red-950'),
	},
	orange: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-orange-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-orange-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-orange-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-orange-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-orange-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-orange-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-orange-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-orange-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-orange-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-orange-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-orange-950'),
	},
	amber: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-amber-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-amber-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-amber-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-amber-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-amber-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-amber-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-amber-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-amber-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-amber-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-amber-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-amber-950'),
	},
	yellow: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-yellow-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-yellow-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-yellow-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-yellow-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-yellow-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-yellow-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-yellow-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-yellow-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-yellow-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-yellow-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-yellow-950'),
	},
	lime: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-lime-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-lime-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-lime-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-lime-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-lime-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-lime-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-lime-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-lime-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-lime-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-lime-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-lime-950'),
	},
	green: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-green-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-green-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-green-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-green-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-green-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-green-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-green-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-green-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-green-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-green-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-green-950'),
	},
	emerald: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-emerald-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-emerald-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-emerald-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-emerald-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-emerald-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-emerald-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-emerald-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-emerald-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-emerald-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-emerald-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-emerald-950'),
	},
	teal: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-teal-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-teal-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-teal-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-teal-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-teal-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-teal-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-teal-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-teal-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-teal-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-teal-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-teal-950'),
	},
	cyan: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-cyan-950'),
	},
	sky: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-sky-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-sky-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-sky-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-sky-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-sky-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-sky-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-sky-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-sky-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-sky-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-sky-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-sky-950'),
	},
	blue: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-blue-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-blue-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-blue-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-blue-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-blue-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-blue-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-blue-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-blue-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-blue-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-blue-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-blue-950'),
	},
	indigo: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-indigo-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-indigo-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-indigo-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-indigo-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-indigo-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-indigo-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-indigo-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-indigo-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-indigo-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-indigo-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-indigo-950'),
	},
	violet: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-violet-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-violet-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-violet-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-violet-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-violet-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-violet-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-violet-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-violet-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-violet-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-violet-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-violet-950'),
	},
	purple: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-purple-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-purple-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-purple-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-purple-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-purple-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-purple-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-purple-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-purple-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-purple-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-purple-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-purple-950'),
	},
	fuchsia: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-fuchsia-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-fuchsia-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-fuchsia-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-fuchsia-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-fuchsia-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-fuchsia-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-fuchsia-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-fuchsia-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-fuchsia-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-fuchsia-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-fuchsia-950'),
	},
	pink: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-pink-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-pink-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-pink-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-pink-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-pink-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-pink-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-pink-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-pink-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-pink-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-pink-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-pink-950'),
	},
	rose: {
		50: getComputedStyle(document.documentElement).getPropertyValue('--color-rose-50'),
		100: getComputedStyle(document.documentElement).getPropertyValue('--color-rose-100'),
		200: getComputedStyle(document.documentElement).getPropertyValue('--color-rose-200'),
		300: getComputedStyle(document.documentElement).getPropertyValue('--color-rose-300'),
		400: getComputedStyle(document.documentElement).getPropertyValue('--color-rose-400'),
		500: getComputedStyle(document.documentElement).getPropertyValue('--color-rose-500'),
		600: getComputedStyle(document.documentElement).getPropertyValue('--color-rose-600'),
		700: getComputedStyle(document.documentElement).getPropertyValue('--color-rose-700'),
		800: getComputedStyle(document.documentElement).getPropertyValue('--color-rose-800'),
		900: getComputedStyle(document.documentElement).getPropertyValue('--color-rose-900'),
		950: getComputedStyle(document.documentElement).getPropertyValue('--color-rose-950'),
	},
	primary: {
		50: '#F5FFF4',
		100: '#E6FFEC',
		200: '#CCFFD8',
		300: '#99FFAD',
		400: '#80FF94',
		500: '#66FF4C',
		600: '#59E644',
		700: '#4CC63B',
		800: '#3E9E32',
		900: '#307729',
		950: '#1C4E1F',
	},
	secondary: {
		50: '#FFF4EF',
		100: '#FFE4DA',
		200: '#FFC6B0',
		300: '#FFA388',
		400: '#FF8C66',
		500: '#FF7A47',
		600: '#E66E40',
		700: '#CC6138',
		800: '#B35430',
		900: '#8A3F24',
		950: '#4A2113',
	},
};

export default colors;
