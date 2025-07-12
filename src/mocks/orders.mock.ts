import { TOrderStatusKey } from '@/constants/orderStatus.constant';
import { TPaymentMethodKey } from '@/constants/paymentMethod.constant';
import { TPaymentStatusKey } from '@/constants/paymentStatus.constant';
import dayjs from 'dayjs';

export type IOrder = {
	id: number;
	date: string;
	product: string;
	status: TOrderStatusKey;
	customer: string;
	payment: {
		method: TPaymentMethodKey;
		info: string;
		status: TPaymentStatusKey;
	};
	items: number;
};

const ORDERS: IOrder[] = [
	{
		id: 100001,
		date: dayjs().add(-5, 'day').add(2, 'hours').toISOString(),
		product: 'Black T-shirt',
		status: 'FULFILLED',
		customer: 'John Doe',
		payment: { method: 'VISA', info: '1234', status: 'PAID' },
		items: 1,
	},
	{
		id: 100002,
		date: dayjs().add(-4.8, 'day').add(1.5, 'hours').toISOString(),
		product: 'White Hoodie',
		status: 'FULFILLED',
		customer: 'Jane Smith',
		payment: { method: 'MASTER', info: '5678', status: 'PAID' },
		items: 2,
	},
	{
		id: 100003,
		date: dayjs().add(-4.6, 'day').add(3, 'hours').toISOString(),
		product: 'Red Cap',
		status: 'READY_FOR_PICKUP',
		customer: 'Tom Harris',
		payment: { method: 'PAYPAL', info: '@gmail.com', status: 'PENDING' },
		items: 1,
	},
	{
		id: 100004,
		date: dayjs().add(-4.4, 'day').add(2.7, 'hours').toISOString(),
		product: 'Green Jacket',
		status: 'FULFILLED',
		customer: 'Emily Clark',
		payment: { method: 'BANK', info: '8791', status: 'REFUNDED' },
		items: 3,
	},
	{
		id: 100005,
		date: dayjs().add(-4.2, 'day').add(1.9, 'hours').toISOString(),
		product: 'Blue Jeans',
		status: 'FULFILLED',
		customer: 'Mike Jordan',
		payment: { method: 'VISA', info: '9321', status: 'PAID' },
		items: 2,
	},
	{
		id: 100006,
		date: dayjs().add(-4, 'day').add(1.4, 'hours').toISOString(),
		product: 'Sneakers',
		status: 'UNFULFILLED',
		customer: 'Olivia Stone',
		payment: { method: 'PAYPAL', info: '@outlook.com', status: 'PARTIALLY_PAID' },
		items: 4,
	},
	{
		id: 100007,
		date: dayjs().add(-3.8, 'day').add(1.2, 'hours').toISOString(),
		product: 'Leather Belt',
		status: 'FULFILLED',
		customer: 'Liam Brooks',
		payment: { method: 'BANK', info: '4411', status: 'REFUNDED' },
		items: 1,
	},
	{
		id: 100008,
		date: dayjs().add(-3.6, 'day').add(2, 'hours').toISOString(),
		product: 'Running Shorts',
		status: 'READY_FOR_PICKUP',
		customer: 'Emma Wilson',
		payment: { method: 'VISA', info: '0007', status: 'PARTIALLY_REFUNDED' },
		items: 5,
	},
	{
		id: 100009,
		date: dayjs().add(-3.4, 'day').add(1.6, 'hours').toISOString(),
		product: 'Denim Jacket',
		status: 'FULFILLED',
		customer: 'Noah Bennett',
		payment: { method: 'MASTER', info: '1199', status: 'CANCELLED' },
		items: 3,
	},
	{
		id: 100010,
		date: dayjs().add(-3.2, 'day').add(0.9, 'hours').toISOString(),
		product: 'Wool Scarf',
		status: 'FULFILLED',
		customer: 'Ava Summers',
		payment: { method: 'PAYPAL', info: '@protonmail.com', status: 'PAID' },
		items: 2,
	},
	{
		id: 100011,
		date: dayjs().add(-3, 'day').add(0.6, 'hours').toISOString(),
		product: 'Baseball Cap',
		status: 'UNFULFILLED',
		customer: 'James King',
		payment: { method: 'BANK', info: '5566', status: 'PARTIALLY_REFUNDED' },
		items: 1,
	},
	{
		id: 100012,
		date: dayjs().add(-2.9, 'day').add(2.3, 'hours').toISOString(),
		product: 'Black Hoodie',
		status: 'READY_FOR_PICKUP',
		customer: 'Sophia Hill',
		payment: { method: 'VISA', info: '3344', status: 'PAID' },
		items: 3,
	},
	{
		id: 100013,
		date: dayjs().add(-2.7, 'day').add(1.1, 'hours').toISOString(),
		product: 'White T-shirt',
		status: 'FULFILLED',
		customer: 'William Ford',
		payment: { method: 'MASTER', info: '2288', status: 'PAID' },
		items: 2,
	},
	{
		id: 100014,
		date: dayjs().add(-2.5, 'day').add(2.6, 'hours').toISOString(),
		product: 'Cargo Pants',
		status: 'FULFILLED',
		customer: 'Ella Scott',
		payment: { method: 'PAYPAL', info: '@tutanota.com', status: 'PENDING' },
		items: 4,
	},
	{
		id: 100015,
		date: dayjs().add(-2.3, 'day').add(1.8, 'hours').toISOString(),
		product: 'Tank Top',
		status: 'FULFILLED',
		customer: 'Henry Adams',
		payment: { method: 'BANK', info: '2022', status: 'REFUNDED' },
		items: 1,
	},
	{
		id: 100016,
		date: dayjs().add(-2.1, 'day').add(0.5, 'hours').toISOString(),
		product: 'Puffer Jacket',
		status: 'FULFILLED',
		customer: 'Grace Turner',
		payment: { method: 'VISA', info: '4455', status: 'PAID' },
		items: 3,
	},
	{
		id: 100017,
		date: dayjs().add(-1.9, 'day').add(1.7, 'hours').toISOString(),
		product: 'Canvas Bag',
		status: 'UNFULFILLED',
		customer: 'Logan Perry',
		payment: { method: 'PAYPAL', info: '@aol.com', status: 'PARTIALLY_PAID' },
		items: 2,
	},
	{
		id: 100018,
		date: dayjs().add(-1.7, 'day').add(2.1, 'hours').toISOString(),
		product: 'Wool Hat',
		status: 'READY_FOR_PICKUP',
		customer: 'Zoe Bell',
		payment: { method: 'MASTER', info: '0912', status: 'PAID' },
		items: 1,
	},
	{
		id: 100019,
		date: dayjs().add(-1.5, 'day').add(1.3, 'hours').toISOString(),
		product: 'Graphic Tee',
		status: 'FULFILLED',
		customer: 'Ethan Ross',
		payment: { method: 'VISA', info: '3388', status: 'PAID' },
		items: 3,
	},
	{
		id: 100020,
		date: dayjs().add(-1.3, 'day').add(2.8, 'hours').toISOString(),
		product: 'Sports Bra',
		status: 'UNFULFILLED',
		customer: 'Mia Gray',
		payment: { method: 'BANK', info: '5656', status: 'PARTIALLY_REFUNDED' },
		items: 2,
	},
	{
		id: 100021,
		date: dayjs().add(-1.1, 'day').add(0.4, 'hours').toISOString(),
		product: 'Track Pants',
		status: 'FULFILLED',
		customer: 'Lucas Wood',
		payment: { method: 'PAYPAL', info: '@yandex.com', status: 'PAID' },
		items: 1,
	},
	{
		id: 100022,
		date: dayjs().add(-0.9, 'day').add(1.9, 'hours').toISOString(),
		product: 'Yoga Leggings',
		status: 'FULFILLED',
		customer: 'Isla Knight',
		payment: { method: 'VISA', info: '8899', status: 'CANCELLED' },
		items: 3,
	},
	{
		id: 100023,
		date: dayjs().add(-0.7, 'day').add(1.5, 'hours').toISOString(),
		product: 'Polo Shirt',
		status: 'READY_FOR_PICKUP',
		customer: 'Mason Webb',
		payment: { method: 'MASTER', info: '9090', status: 'PAID' },
		items: 2,
	},
];

export default ORDERS;
