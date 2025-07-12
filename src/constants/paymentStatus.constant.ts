import { TColors } from '@/types/colors.type';
import { TIcons } from '@/types/icons.type';

type TPaymentItem = {
	id: string;
	text: string;
	color: TColors;
	icon: TIcons;
};

export type TPaymentStatusKey =
	| 'PAID'
	| 'PENDING'
	| 'PARTIALLY_PAID'
	| 'PARTIALLY_REFUNDED'
	| 'REFUNDED'
	| 'CANCELLED';
export type TPaymentStatus = Record<TPaymentStatusKey, TPaymentItem>;

const PAYMENT_STATUS: TPaymentStatus = {
	PAID: {
		id: 'PAID',
		text: 'Paid',
		color: 'emerald',
		icon: 'CreditCard',
	},
	PENDING: {
		id: 'PENDING',
		text: 'Pending',
		color: 'amber',
		icon: 'CreditCard',
	},
	PARTIALLY_PAID: {
		id: 'PARTIALLY_PAID',
		text: 'Partially Paid',
		color: 'emerald',
		icon: 'CreditCard',
	},
	PARTIALLY_REFUNDED: {
		id: 'PARTIALLY_REFUNDED',
		text: 'Partially Refunded',
		color: 'zinc',
		icon: 'CreditCard',
	},
	REFUNDED: {
		id: 'REFUNDED',
		text: 'Refunded',
		color: 'zinc',
		icon: 'CreditCard',
	},
	CANCELLED: {
		id: 'CANCELLED',
		text: 'Cancelled',
		color: 'red',
		icon: 'CreditCard',
	},
};

export default PAYMENT_STATUS;
