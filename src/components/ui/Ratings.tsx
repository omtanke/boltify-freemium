import { Dispatch, FC, HTMLAttributes, SetStateAction } from 'react';

// @start-snippet:: interface
export type RatingValues = 0 | 1 | 2 | 3 | 4 | 5;
interface IRatingsProps extends HTMLAttributes<HTMLDivElement> {
	id: string;
	className?: string;
	selectedRating: RatingValues;
	setSelectedRating: Dispatch<SetStateAction<RatingValues>>;
	type?: 'star' | 'heart';
	isDisable?: boolean;
}
// @end-snippet:: interface

const Ratings: FC<IRatingsProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	const {
		id,
		className,
		selectedRating,
		setSelectedRating,
		type = 'star',
		isDisable,
		// @ts-ignore
		...rest
	} = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};
Ratings.displayName = 'Ratings';

export default Ratings;
