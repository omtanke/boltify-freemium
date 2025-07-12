import { Avatar1, Avatar2, Avatar3, Avatar5, Avatar6 } from '@/assets/images';
import { TColors } from '@/types/colors.type';

export type TUser = {
	id: string;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	position: string;
	isVerified: boolean;
	image: { org: string };
	socialAuth: {
		google: boolean;
		facebook: boolean;
		apple: boolean;
	};
	role: 'admin' | 'user' | 'moderator';
	twoFactorAuth: boolean;
	phone: string;
	color: TColors;
};

type TUsers = {
	[key in
		| 'johndoe'
		| 'aulisTiainen'
		| 'nicolasLefevre'
		| 'oliviaNovak'
		| 'danielaPetrova']: TUser;
};

const USERS: TUsers = {
	johndoe: {
		id: '1',
		username: 'johndoe',
		firstName: 'John',
		lastName: 'Doe',
		email: 'johndoe@site.com',
		password: '!123Asd',
		position: 'Web Developer',
		isVerified: true,
		image: { org: Avatar1 as string },
		socialAuth: {
			google: true,
			facebook: false,
			apple: true,
		},
		role: 'admin',
		twoFactorAuth: true,
		phone: '+1 (555) 555-1234',
		color: 'blue',
	},
	aulisTiainen: {
		id: '2',
		username: 'aulisTiainen',
		firstName: 'Aulis',
		lastName: 'Tiainen',
		email: 'aulistiainen@site.com',
		password: '!123Asd',
		position: 'Web Developer',
		isVerified: true,
		image: { org: Avatar5 as string },
		socialAuth: {
			google: true,
			facebook: false,
			apple: true,
		},
		role: 'admin',
		twoFactorAuth: true,
		phone: '+1 (555) 555-1234',
		color: 'amber',
	},
	nicolasLefevre: {
		id: '3',
		username: 'nicolaslefevre',
		firstName: 'Nicolas',
		lastName: 'Lefèvre',
		email: 'nicolaslefevre@site.com',
		password: '!123Asd',
		position: 'Web Developer',
		isVerified: true,
		image: { org: Avatar2 as string },
		socialAuth: {
			google: true,
			facebook: false,
			apple: true,
		},
		role: 'admin',
		twoFactorAuth: true,
		phone: '+1 (555) 555-1234',
		color: 'emerald',
	},
	oliviaNovak: {
		id: '4',
		username: 'oliviaNovak',
		firstName: 'Olivia',
		lastName: 'Novak',
		email: 'nicolaslefevre@site.com',
		password: '!123Asd',
		position: 'Web Developer',
		isVerified: true,
		image: { org: Avatar3 as string },
		socialAuth: {
			google: true,
			facebook: false,
			apple: true,
		},
		role: 'admin',
		twoFactorAuth: true,
		phone: '+1 (555) 555-1234',
		color: 'sky',
	},
	danielaPetrova: {
		id: '5',
		username: 'danielaPetrova',
		firstName: 'Daniela',
		lastName: 'Petrova',
		email: 'nicolaslefevre@site.com',
		password: '!123Asd',
		position: 'Web Developer',
		isVerified: true,
		image: { org: Avatar6 as string },
		socialAuth: {
			google: true,
			facebook: false,
			apple: true,
		},
		role: 'admin',
		twoFactorAuth: true,
		phone: '+1 (555) 555-1234',
		color: 'blue',
	},
};

export default USERS;
