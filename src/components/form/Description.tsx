import { FC, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface IDescriptionProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
	id: string;
}

const Description: FC<IDescriptionProps> = (props) => {
	const { children, className, ...rest } = props;

	const classes = classNames(className, 'text-sm text-zinc-500');

	return (
		<div className={classes} {...rest}>
			{children}
		</div>
	);
};
Description.displayName = 'Description';

export default Description;
