import { FC, HTMLAttributes } from 'react';

// @start-snippet:: interface
type TDeviceTypes = 'mobile' | 'desktop';
interface IDevicesProps extends HTMLAttributes<HTMLElement> {
	src: string;
	className?: string;
	device?: TDeviceTypes;
}
// @end-snippet:: interface
const Devices: FC<IDevicesProps> = (props) => {
	/* eslint-disable @typescript-eslint/no-unused-vars */
	// @ts-ignore
	const { src, className, device = 'mobile', ...rest } = props;
	/* eslint-enable @typescript-eslint/no-unused-vars */

	return <code>Only Pro</code>;
};

export default Devices;
