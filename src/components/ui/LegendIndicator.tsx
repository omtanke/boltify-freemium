import { FC, HTMLProps, ReactNode } from 'react';
import classNames from 'classnames';
import { TColors } from '@/types/colors.type';

// @start-snippet:: interface
interface ILegendIndicatorProps extends HTMLProps<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	color?: TColors;
}
// @end-snippet:: interface
const LegendIndicator: FC<ILegendIndicatorProps> = (props) => {
	const { children, className, color, ...rest } = props;

	const colorClass: Record<TColors, string> = {
		primary: 'bg-primary-500',
		secondary: 'bg-secondary-500',
		zinc: 'bg-zinc-500',
		red: 'bg-red-500',
		amber: 'bg-amber-500',
		lime: 'bg-lime-500',
		emerald: 'bg-emerald-500',
		sky: 'bg-sky-500',
		blue: 'bg-blue-500',
		violet: 'bg-violet-500',
	};

	return (
		<div className={classNames('flex items-center gap-2', className)} {...rest}>
			<div className={`h-2 w-2 rounded-full ${color && colorClass[color]}`}></div>
			{children}
		</div>
	);
};

export default LegendIndicator;
