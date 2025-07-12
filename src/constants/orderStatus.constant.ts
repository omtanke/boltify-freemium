import { TColors } from '@/types/colors.type';
import { TIcons } from '@/types/icons.type';

type TOrderStatusItem = {
	id: string;
	text: string;
	color: TColors;
	icon: TIcons;
};

export type TOrderStatusKey = 'READY_FOR_PICKUP' | 'FULFILLED' | 'UNFULFILLED';

export type TOrderStatus = Record<TOrderStatusKey, TOrderStatusItem>;

const ORDER_STATUS: TOrderStatus = {
	READY_FOR_PICKUP: {
		id: 'READY_FOR_PICKUP',
		text: 'Ready for pickup',
		color: 'emerald',
		icon: 'Clock01',
	},
	FULFILLED: {
		id: 'FULFILLED',
		text: 'Fulfilled',
		color: 'zinc',
		icon: 'Clock01',
	},
	UNFULFILLED: {
		id: 'UNFULFILLED',
		text: 'Unfulfilled',
		color: 'red',
		icon: 'Clock01',
	},
};

export default ORDER_STATUS;
