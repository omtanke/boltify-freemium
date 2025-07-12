import {
	cloneElement,
	forwardRef,
	HTMLAttributes,
	ReactElement,
	ReactNode,
	RefObject,
	useRef,
} from 'react';
import classNames from 'classnames';
import useDomRect from '@/hooks/useDomRect';
import useDir from '@/hooks/useDir';
import { IValidationBaseProps } from './Validation';

interface IFieldWrapProps extends HTMLAttributes<HTMLDivElement>, Partial<IValidationBaseProps> {
	children: ReactElement;
	className?: string;
	firstSuffix?: ReactNode;
	lastSuffix?: ReactNode;
}
const FieldWrap = forwardRef<HTMLDivElement, IFieldWrapProps>((props, ref) => {
	const {
		children,
		className,
		firstSuffix,
		lastSuffix,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		isValidMessage,
		isValid,
		isTouched,
		invalidFeedback,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		validFeedback,
		...rest
	} = props;

	const sharedClasses = classNames(
		'absolute top-[2px] bottom-[2px] flex justify-center items-center px-1 rounded-sm',
	);

	const divFirstRef = useRef<HTMLDivElement>(null);
	const [domFirstRect] = useDomRect(divFirstRef as RefObject<HTMLElement>);

	const divLastRef = useRef<HTMLDivElement>(null);
	const [domLastRect] = useDomRect(divLastRef as RefObject<HTMLElement>);

	const { isLTR } = useDir();

	return (
		<div
			ref={ref}
			data-component-name='FieldWrap'
			className={classNames('relative w-full', className)}
			{...rest}>
			{firstSuffix && (
				<div ref={divFirstRef} className={classNames(sharedClasses, 'start-2')}>
					{firstSuffix}
				</div>
			)}
			{cloneElement(children, {
				// @ts-ignore
				isValid,
				isTouched,
				invalidFeedback,
				style: {
					paddingLeft:
						(firstSuffix && isLTR && `calc(${domFirstRect?.width}px + 1rem)`) ||
						(lastSuffix && !isLTR && `calc(${domLastRect?.width}px + 1rem)`),
					paddingRight:
						(firstSuffix && !isLTR && `calc(${domFirstRect?.width}px + 1rem)`) ||
						(lastSuffix && isLTR && `calc(${domLastRect?.width}px + 1rem)`),
				},
			})}
			{lastSuffix && (
				<div ref={divLastRef} className={classNames(sharedClasses, 'end-2')}>
					{lastSuffix}
				</div>
			)}
		</div>
	);
});
FieldWrap.displayName = 'FieldWrap';

export default FieldWrap;
