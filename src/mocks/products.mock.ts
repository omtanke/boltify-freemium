import { TIcons } from '@/types/icons.type';
import { TColors } from '@/types/colors.type';

export interface IBaseTags {
	id: number;
	name: string;
	icon: TIcons;
	color: TColors;
}
export interface ITags extends IBaseTags {
	description?: string;
}
export interface ICategory extends IBaseTags {
	description?: string;
}
export interface IProduct {
	id: number;
	name: string;
	price: number;
	sku: string;
	stock: number;
	sold: number;
	category: ICategory[];
	tag: ITags[];
	store: string[];
	coupon?: string[];
	status: boolean;
	image: string;
}

const PRODUCTS: IProduct[] = [
	{
		id: 1,
		name: 'Apple AirPods Pro 2',
		price: 189.0,
		sku: 'APL-APP2-WL',
		stock: 250,
		sold: 1200,
		category: [{ id: 1, name: 'Electronics', icon: 'DeviceMobile', color: 'blue' }],
		tag: [
			{
				id: 1,
				name: 'Wireless',
				icon: 'Wifi',
				color: 'emerald',
				description: 'Bluetooth 5.3 connectivity',
			},
			{ id: 2, name: 'Premium', icon: 'Star', color: 'amber' },
		],
		store: ['Amazon', 'BestBuy'],
		coupon: ['SAVE10'],
		status: true,
		image: 'https://example.com/images/airpods-pro-2.jpg',
	},
	{
		id: 2,
		name: 'Samsung Galaxy S23',
		price: 799.99,
		sku: 'SMS-S23-5G',
		stock: 150,
		sold: 800,
		category: [
			{ id: 1, name: 'Electronics', icon: 'DeviceMobile', color: 'blue' },
			{ id: 3, name: 'Mobile', icon: 'Smartphone', color: 'sky' },
		],
		tag: [
			{ id: 1, name: 'Wireless', icon: 'Wifi', color: 'emerald' },
			{ id: 3, name: 'New', icon: 'Sparkles', color: 'violet' },
		],
		store: ['Amazon', 'eBay'],
		status: true,
		image: 'https://example.com/images/galaxy-s23.jpg',
	},
	{
		id: 3,
		name: 'Sony WH-1000XM5 Headphones',
		price: 348.0,
		sku: 'SNY-WH1000XM5',
		stock: 180,
		sold: 950,
		category: [{ id: 2, name: 'Audio', icon: 'Headphones', color: 'red' }],
		tag: [
			{ id: 2, name: 'Premium', icon: 'Star', color: 'amber' },
			{
				id: 4,
				name: 'Noise‑Cancelling',
				icon: 'VolumeOff',
				color: 'zinc',
				description: 'Industry‑leading ANC',
			},
		],
		store: ['BestBuy', 'Amazon'],
		coupon: ['AUDIO5'],
		status: false,
		image: 'https://example.com/images/wh-1000xm5.jpg',
	},
	{
		id: 4,
		name: 'Lego Star Wars X‑Wing',
		price: 59.99,
		sku: 'LEG-XWNG-75273',
		stock: 320,
		sold: 430,
		category: [
			{
				id: 7,
				name: 'Gaming',
				icon: 'Puzzle',
				color: 'secondary',
				description: 'Building sets & collectibles',
			},
		],
		tag: [{ id: 5, name: 'Classic', icon: 'Cube', color: 'amber' }],
		store: ['Amazon', 'eBay'],
		status: true,
		image: 'https://example.com/images/lego-xwing.jpg',
	},
	{
		id: 5,
		name: 'Instant Pot Duo 7‑in‑1',
		price: 89.0,
		sku: 'IPOT-DUO-60',
		stock: 200,
		sold: 670,
		category: [
			{ id: 4, name: 'Home Appliances', icon: 'Home', color: 'lime' },
			{ id: 8, name: 'Kitchen', icon: 'Kitchen2', color: 'secondary' },
		],
		tag: [
			{
				id: 6,
				name: 'Smart',
				icon: 'Cpu',
				color: 'sky',
				description: 'Multiple cooking modes',
			},
		],
		store: ['Amazon', 'Walmart'],
		coupon: ['KITCHEN10'],
		status: true,
		image: 'https://example.com/images/instant-pot-duo.jpg',
	},
	{
		id: 6,
		name: 'Nike Air Zoom Pegasus 40',
		price: 120.0,
		sku: 'NKE-PGX40-M',
		stock: 140,
		sold: 520,
		category: [{ id: 9, name: 'Apparel', icon: 'TShirt', color: 'zinc' }],
		tag: [{ id: 7, name: 'Fitness', icon: 'Activity', color: 'red' }],
		store: ['Nike.com', 'FootLocker'],
		status: true,
		image: 'https://example.com/images/pegasus-40.jpg',
	},
	{
		id: 7,
		name: 'The Lean Startup',
		price: 19.99,
		sku: 'BK-LEAN-START',
		stock: 500,
		sold: 4300,
		category: [{ id: 5, name: 'Books', icon: 'BookOpen', color: 'primary' }],
		tag: [
			{
				id: 8,
				name: 'Bestseller',
				icon: 'TrendingUp',
				color: 'blue',
				description: 'Over 3 million copies sold',
			},
		],
		store: ['Amazon', 'Barnes & Noble'],
		coupon: ['READ5'],
		status: true,
		image: 'https://example.com/images/lean-startup.jpg',
	},
	{
		id: 8,
		name: 'Logitech MX Master 3 Mouse',
		price: 99.99,
		sku: 'LOG-MX3',
		stock: 210,
		sold: 760,
		category: [
			{ id: 1, name: 'Electronics', icon: 'DeviceMobile', color: 'blue' },
			{ id: 2, name: 'Audio', icon: 'Headphones', color: 'red' }, // reuse audio icon for peripherals
		],
		tag: [
			{ id: 2, name: 'Premium', icon: 'Star', color: 'amber' },
			{ id: 6, name: 'Smart', icon: 'Cpu', color: 'sky' },
		],
		store: ['Amazon', 'BestBuy'],
		status: true,
		image: 'https://example.com/images/mx-master-3.jpg',
	},
	{
		id: 9,
		name: 'Fitbit Charge 5',
		price: 129.95,
		sku: 'FBT-CHG5',
		stock: 175,
		sold: 880,
		category: [{ id: 6, name: 'Wearables', icon: 'Watch', color: 'red' }],
		tag: [
			{ id: 7, name: 'Fitness', icon: 'Activity', color: 'red' },
			{ id: 6, name: 'Smart', icon: 'Cpu', color: 'sky' },
		],
		store: ['Fitbit.com', 'Amazon'],
		coupon: ['HEALTH10'],
		status: true,
		image: 'https://example.com/images/charge-5.jpg',
	},
	{
		id: 10,
		name: 'KitchenAid Artisan Mixer',
		price: 379.99,
		sku: 'KA-ARTISAN-5QT',
		stock: 95,
		sold: 340,
		category: [
			{ id: 8, name: 'Kitchen', icon: 'Kitchen2', color: 'secondary' },
			{ id: 4, name: 'Home Appliances', icon: 'Home', color: 'lime' },
		],
		tag: [{ id: 9, name: 'Classic', icon: 'Cube', color: 'amber' }],
		store: ['KitchenAid.com', 'Amazon'],
		status: true,
		image: 'https://example.com/images/artisan-mixer.jpg',
	},
	{
		id: 11,
		name: 'Patagonia Down Sweater Jacket',
		price: 229.0,
		sku: 'PTG-DWN-JKT',
		stock: 120,
		sold: 410,
		category: [
			{ id: 9, name: 'Apparel', icon: 'TShirt', color: 'zinc' },
			{ id: 10, name: 'Outdoors', icon: 'TreeDeciduous', color: 'emerald' },
		],
		tag: [
			{
				id: 10,
				name: 'Eco‑Friendly',
				icon: 'Leaf',
				color: 'emerald',
				description: 'Recycled materials',
			},
		],
		store: ['Patagonia.com', 'REI'],
		coupon: ['OUTDOOR10'],
		status: true,
		image: 'https://example.com/images/down-jacket.jpg',
	},
	{
		id: 12,
		name: 'Echo Dot (5th Gen)',
		price: 49.99,
		sku: 'AMZ-ECHO-DOT5',
		stock: 300,
		sold: 2200,
		category: [
			{ id: 1, name: 'Electronics', icon: 'DeviceMobile', color: 'blue' },
			{ id: 3, name: 'Mobile', icon: 'Smartphone', color: 'sky' },
		],
		tag: [{ id: 6, name: 'Smart', icon: 'Cpu', color: 'sky' }],
		store: ['Amazon'],
		coupon: ['VOICE5'],
		status: true,
		image: 'https://example.com/images/echo-dot-5th.jpg',
	},
	{
		id: 13,
		name: 'Nintendo Switch OLED',
		price: 349.99,
		sku: 'NTD-SWITCH-OLED',
		stock: 160,
		sold: 1300,
		category: [{ id: 7, name: 'Gaming', icon: 'Puzzle', color: 'secondary' }],
		tag: [
			{ id: 3, name: 'New', icon: 'Sparkles', color: 'violet' },
			{ id: 2, name: 'Premium', icon: 'Star', color: 'amber' },
		],
		store: ['GameStop', 'Amazon'],
		status: true,
		image: 'https://example.com/images/switch-oled.jpg',
	},
	{
		id: 14,
		name: 'Hydro Flask Water Bottle 32 oz',
		price: 44.95,
		sku: 'HYDRO-32OZ',
		stock: 260,
		sold: 980,
		category: [{ id: 10, name: 'Outdoors', icon: 'TreeDeciduous', color: 'emerald' }],
		tag: [
			{ id: 10, name: 'Eco‑Friendly', icon: 'Leaf', color: 'emerald' },
			{ id: 9, name: 'Classic', icon: 'Cube', color: 'amber' },
		],
		store: ['HydroFlask.com', 'Amazon'],
		coupon: ['HYDRO5'],
		status: true,
		image: 'https://example.com/images/hydro-flask.jpg',
	},
	{
		id: 15,
		name: 'Ray‑Ban Wayfarer Sunglasses',
		price: 155.0,
		sku: 'RB-WAYFARER',
		stock: 140,
		sold: 620,
		category: [{ id: 11, name: 'Accessories', icon: 'Sun', color: 'amber' }],
		tag: [
			{ id: 5, name: 'Classic', icon: 'Cube', color: 'emerald' },
			{ id: 2, name: 'Premium', icon: 'Star', color: 'amber' },
		],
		store: ['RayBan.com', 'SunglassHut'],
		status: true,
		image: 'https://example.com/images/wayfarer.jpg',
	},
];

export default PRODUCTS;
