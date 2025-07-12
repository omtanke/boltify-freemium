import { FC } from 'react';
import classNames from 'classnames';
import { TIcons } from '@/types/icons.type';
import Icon from '@/components/icon/Icon';
import { Link, useNavigate } from 'react-router';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '@/components/ui/Dropdown';
import Button from '@/components/ui/Button';

interface IBreadcrumbItemProps {
	text: string;
	to?: string;
	icon?: TIcons;
}
interface IBreadcrumbProps {
	className?: string;
	list: IBreadcrumbItemProps[];
	homePath?: string;
}
const Breadcrumb: FC<IBreadcrumbProps> = (props) => {
	const { className, list, homePath = '/sales' } = props;
	const navigate = useNavigate();

	return (
		<div
			data-component-name='Breadcrumb'
			className={classNames(className, 'flex items-center gap-2 text-zinc-500')}>
			<Icon
				icon='Home09'
				onClick={() => navigate(homePath)}
				className='hidden cursor-pointer md:flex'
			/>
			<Dropdown className='inline-flex! md:hidden!'>
				<DropdownToggle>
					<Button icon='MoreVerticalSquare01' color='zinc' aria-label='' />
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem icon='Home09' onClick={() => navigate(homePath)}>
						Home
					</DropdownItem>
					{list.map((item) => {
						if (item.to) {
							return (
								<DropdownItem
									key={item.text}
									className='last:hidden'
									icon={item.icon}>
									<Link to={item.to}>{item.text}</Link>
								</DropdownItem>
							);
						}
						return (
							<DropdownItem key={item.text} className='last:hidden' icon={item.icon}>
								{item.text}
							</DropdownItem>
						);
					})}
				</DropdownMenu>
			</Dropdown>
			{list.map((item, idx) => {
				const isLast = idx === list.length - 1;
				const baseClass =
					'flex items-center gap-1 before:pe-2 before:content-["/"] last:font-bold';
				const responsiveClass = isLast ? 'flex' : 'hidden md:flex';
				const className = classNames(baseClass, responsiveClass);

				if (item.to) {
					return (
						<Link key={item.text} className={className} to={item.to}>
							{item.icon && <Icon icon={item.icon} />}
							<div className='truncate max-md:max-w-32'>{item.text}</div>
						</Link>
					);
				}
				return (
					<div key={item.text} className={className}>
						{item.icon && <Icon icon={item.icon} />}
						<div className='truncate max-md:max-w-32'>{item.text}</div>
					</div>
				);
			})}
		</div>
	);
};
Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
