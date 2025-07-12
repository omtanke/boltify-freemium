import { FC, HTMLAttributes, ReactNode } from 'react';
import { TColors } from '@/types/colors.type';
import themeConfig from '@/config/theme.config';
import { TRounded } from '@/types/rounded.type';

// @start-snippet:: interface
type TAccordionSignProps = 'plus' | 'arrow' | 'no';
type TAccordionSignPositionProps = 'left' | 'right';
// @end-snippet:: interface

// @start-snippet:: interface
interface IAccordionItemProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	id: string;
	title: string;
	// activeItem?: string;
	// setActiveItem?: Dispatch<SetStateAction<string | undefined>>;
	sign?: TAccordionSignProps;
	signPosition?: TAccordionSignPositionProps;
	color?: TColors;
}
// @end-snippet:: interface
export const AccordionItem: FC<IAccordionItemProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */

	const {
		id,
		children,
		className,
		title,
		// @ts-ignore
		activeItem,
		// @ts-ignore
		setActiveItem,
		sign,
		signPosition,
		color = themeConfig.themeColor,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
AccordionItem.displayName = 'AccordionItem';

// @start-snippet:: interface
interface IAccordionProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	activeItemId?: string;
	sign?: TAccordionSignProps;
	signPosition?: TAccordionSignPositionProps;
	color?: TColors;
	rounded?: TRounded;
}
// @end-snippet:: interface
const Accordion: FC<IAccordionProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		children,
		className,
		activeItemId,
		sign = 'plus',
		signPosition = 'left',
		color,
		rounded = themeConfig.rounded,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
Accordion.displayName = 'Accordion';

export default Accordion;
