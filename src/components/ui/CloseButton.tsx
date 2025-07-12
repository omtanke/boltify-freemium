import { Dispatch, FC, SetStateAction } from 'react';
import classNames from 'classnames';
import Button, { IButtonProps } from './Button';
import { TColors } from '@/types/colors.type';

interface ICloseButtonProps extends IButtonProps {
	className?: string;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	color?: TColors;
}

const CloseButton: FC<ICloseButtonProps> = (props) => {
	const { className, setIsOpen, color = 'red', ...rest } = props;

	const classes = classNames(className);

	return (
		<Button
			data-component-name='CloseButton'
			icon='Cancel01'
			color={color}
			className={classes}
			onClick={() => (setIsOpen ? setIsOpen(false) : undefined)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...rest}
		/>
	);
};
CloseButton.displayName = 'CloseButton';

export default CloseButton;
