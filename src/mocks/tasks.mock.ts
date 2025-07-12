import USERS, { TUser } from '@/mocks/users.mock';
import { Ss1, Ss2, Ss3 } from '@/assets/images';
import { TIcons } from '@/types/icons.type';
import { TColors } from '@/types/colors.type';

export type TColumnData = { id: string; title: string; icon: TIcons; color: TColors };
export type TColumnsData = {
	[key: string]: TColumnData;
};

export type TTask = {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	comments?: {
		id: string | number;
		text: string;
		user: TUser;
	}[];
	label: string;
	items: { status: boolean; id: string | number; text: string }[];
	attachments?: { id: string | number; file: string; path: string }[];
	img?: string;
	user: TUser;
};
export type TTasks = {
	[key: string]: TTask[];
};

const TASKS: TTasks = {
	column1: [
		{
			id: '6',
			title: 'Mail App',
			subtitle: 'Boltify Themes',
			description:
				'[{"type":"paragraph","children":[{"text":"Mail application and screens will be added"}]}]',
			label: '7 day left',
			comments: [
				{
					id: 1,
					text: '[{"type":"paragraph","children":[{"text":"The design looks beautiful. 😎"}]}]',
					user: USERS.nicolasLefevre,
				},
				{
					id: 2,
					text: `[{"type":"paragraph","children":[{"text":"Thanks 😎"}]}]`,
					user: USERS.danielaPetrova,
				},
			],
			items: [
				{ id: 1, text: 'Page UI & UX design', status: true },
				{ id: 2, text: 'HTML & SCSS coding', status: true },
				{ id: 3, text: 'React Components to do', status: false },
			],
			attachments: [
				{ id: 1, path: 'somefile.txt', file: 'TXT' },
				{ id: 2, path: 'somefile.txt', file: 'WORD' },
				{ id: 3, path: 'somefile.txt', file: 'PSD' },
			],
			img: Ss1,
			user: USERS.danielaPetrova,
		},
		{
			id: '5',
			title: 'Invoice',
			subtitle: 'Boltify Themes',
			description:
				'[{"type":"paragraph","children":[{"text":"Invoice preview and new creation screens will be added"}]}]',
			label: '5 day left',
			items: [
				{ id: 1, text: 'Lorem ipsum dolor', status: true },
				{ id: 2, text: 'Sit amet.', status: false },
			],
			user: USERS.aulisTiainen,
		},
	],
	column2: [
		{
			id: '4',
			title: 'Landing Page Update',
			subtitle: 'Omtanke Team',
			description: '[{"type":"paragraph","children":[{"text":"Will be redesigned"}]}]',
			label: '5 day left',
			items: [
				{ id: 1, text: 'Draft drawings will be made', status: true },
				{ id: 2, text: 'Page will be updated', status: false },
				{ id: 3, text: 'Will be sent for review.', status: false },
			],
			attachments: [{ id: 2, path: 'somefile.txt', file: 'WORD' }],
			user: USERS.oliviaNovak,
		},
		{
			id: '3',
			title: 'Write Blog',
			subtitle: 'Boltify Themes',
			description:
				'[{"type":"paragraph","children":[{"text":"Explain why it should be chosen"}]}]',
			label: '7 day left',
			items: [{ id: 1, text: 'Lorem ipsum dolor', status: true }],
			attachments: [{ id: 1, path: 'somefile.txt', file: 'TXT' }],
			img: Ss2,
			user: USERS.johndoe,
		},
	],
	column3: [],
	column4: [
		{
			id: '2',
			title: 'Bug Fix',
			subtitle: 'Boltify Themes',
			description: '[{"type":"paragraph","children":[{"text":"Minor bugs will be fixed"}]}]',
			label: '5 day left',
			items: [
				{ id: 1, text: 'Lorem ipsum dolor', status: true },
				{ id: 2, text: 'Sit amet.', status: false },
				{ id: 3, text: 'Aliquam quis varius turpis.', status: false },
			],
			attachments: [
				{ id: 1, path: 'somefile.txt', file: 'TXT' },
				{ id: 2, path: 'somefile.txt', file: 'WORD' },
				{ id: 3, path: 'somefile.txt', file: 'PSD' },
			],
			user: USERS.danielaPetrova,
		},
	],
	column5: [
		{
			id: '1',
			title: 'Project App',
			subtitle: 'Boltify Themes',
			description:
				'[{"type":"paragraph","children":[{"text":"Project tracking screen will be added"}]}]',
			label: '1 day ago',
			items: [
				{ id: 1, text: 'Lorem ipsum dolor', status: true },
				{ id: 2, text: 'Sit amet.', status: false },
				{ id: 3, text: 'Aliquam quis varius turpis.', status: false },
			],
			attachments: [
				{ id: 1, path: 'somefile.txt', file: 'TXT' },
				{ id: 2, path: 'somefile.txt', file: 'WORD' },
				{ id: 3, path: 'somefile.txt', file: 'PSD' },
			],
			img: Ss3,
			user: USERS.nicolasLefevre,
		},
	],
	column6: [],
};

export default TASKS;
