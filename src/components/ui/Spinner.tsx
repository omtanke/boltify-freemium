import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { TColors } from '@/types/colors.type';
import themeConfig from '@/config/theme.config';

// @start-snippet:: interface
interface ISpinnerProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	color?: TColors;
}
// @end-snippet:: interface
const Spinner: FC<ISpinnerProps> = (props) => {
	const { className, color = themeConfig.themeColor, ...rest } = props;

	const colorClass: Record<TColors, string> = {
		primary: 'text-primary-500',
		secondary: 'text-secondary-500',
		zinc: 'text-zinc-500',
		red: 'text-red-500',
		amber: 'text-amber-500',
		lime: 'text-lime-500',
		emerald: 'text-emerald-500',
		sky: 'text-sky-500',
		blue: 'text-blue-500',
		violet: 'text-violet-500',
	};

	return (
		<div
			className={classNames(
				'inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent',
				[`${color && colorClass[color]}`],
				className,
			)}
			role='status'
			aria-label='loading'
			{...rest}>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};
Spinner.displayName = 'Spinner';

export default Spinner;
