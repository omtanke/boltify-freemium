import { TColors } from '@/types/colors.type';
import { TIcons } from '@/types/icons.type';

type TPaymentItem = {
	id: string;
	text: string;
	color: TColors;
	icon: TIcons;
};

export type TPaymentMethodKey = 'VISA' | 'MASTER' | 'PAYPAL' | 'BANK';
export type TPaymentMethod = Record<TPaymentMethodKey, TPaymentItem>;

const PAYMENT_METHOD: TPaymentMethod = {
	VISA: {
		id: 'VISA',
		text: 'Visa',
		color: 'blue',
		icon: 'CreditCard',
	},
	MASTER: {
		id: 'MASTER',
		text: 'Master',
		color: 'amber',
		icon: 'MasterCard',
	},
	PAYPAL: {
		id: 'PAYPAL',
		text: 'PayPal',
		color: 'blue',
		icon: 'Paypal',
	},
	BANK: {
		id: 'BANK',
		text: 'Bank',
		color: 'zinc',
		icon: 'Bank',
	},
};

export default PAYMENT_METHOD;
