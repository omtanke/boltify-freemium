import { FC } from 'react';

// Define allowed status keys and options
export type TStatusKey = 'backlog' | 'todo' | 'changeRequest' | 'inProgress' | 'inReview' | 'done';

export interface DropdownChangeStatusExampleProps {
	/** Initial selected status key, defaults to 'inProgress' */
	initialStatusKey?: TStatusKey;
	/** Callback invoked when status changes */
	onStatusChange?: (key: TStatusKey) => void;
}

const DropdownChangeStatusExample: FC<DropdownChangeStatusExampleProps> = () => {
	return <code>Only Pro</code>;
};

export default DropdownChangeStatusExample;
