import { FC } from 'react';
import { TIcons } from '@/types/icons.type';
import { TColors } from '@/types/colors.type';
import themeConfig from '@/config/theme.config';
import { TRounded } from '@/types/rounded.type';

// @start-snippet:: interface
export type TStyledIconVariants = 'solid' | 'outline' | 'ghost' | 'soft' | 'softOutline';
interface IStyledIconProps {
	className?: string;
	icon: TIcons;
	variant?: TStyledIconVariants;
	color?: TColors;
	rounded?: TRounded;
}
// @end-snippet:: interface
const StyledIcon: FC<IStyledIconProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		icon,
		className,
		variant = 'solid',
		color = themeConfig.themeColor,
		rounded = 'rounded-full',
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
StyledIcon.displayName = 'StyledIcon';

export default StyledIcon;
