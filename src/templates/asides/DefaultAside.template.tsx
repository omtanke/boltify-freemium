import { useEffect, useState } from 'react';
import Aside, { AsideBody, AsideQuickContainer, AsideQuickNav } from '@/components/layout/Aside';
import { useLocation, useNavigate } from 'react-router';
import Nav, {
	NavCollapse,
	NavItem,
	NavSeparator,
	NavTitle,
} from '@/components/layout/Navigation/Nav';
import pages from '@/Routes/pages';
import Badge from '@/components/ui/Badge';
import AsideHeaderPart from '@/templates/asides/_parts/AsideHeader.part';
import AsideFooterPart from '@/templates/asides/_parts/AsideFooter.part';

const DefaultAsideTemplate = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const tabs = {
		dashboard: {
			id: 'dashboard',
			title: 'Dashboard',
			icon: 'Home09',
		},
		documentation: {
			id: 'documentation',
			title: 'Documentation',
			icon: 'BookBookmark02',
		},
	};
	const [activeTab, setActiveTab] = useState<string>(
		localStorage.getItem('bolt_activeTab') || tabs.dashboard.id,
	);
	const handleActiveTab = (id: string) => {
		setActiveTab(id);
		localStorage.setItem('bolt_activeTab', id);

		if (id === tabs.dashboard.id) navigate(pages.apps.sales.to);
	};

	useEffect(() => {
		if ([tabs.documentation.id].includes(location.pathname.split('/')[1])) {
			setActiveTab(location.pathname.split('/')[1]);
			localStorage.setItem('bolt_activeTab', location.pathname.split('/')[1]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname.split('/')[1]]);

	return (
		<Aside>
			<AsideHeaderPart />
			<AsideBody>
				<AsideQuickContainer>
					{Object.values(tabs).map((tab) => (
						<AsideQuickNav
							key={tab.id}
							icon={tab.icon}
							isActive={activeTab === tab.id}
							onClick={() => handleActiveTab(tab.id)}>
							{tab.title}
						</AsideQuickNav>
					))}
				</AsideQuickContainer>
				<Nav>
					{[tabs.dashboard.id].includes(activeTab as string) && (
						<>
							<NavTitle>Dashboards</NavTitle>
							<NavItem {...pages.apps.sales} />
							<NavTitle>Apps</NavTitle>
							<NavCollapse {...pages.apps.sales}>
								<NavItem {...pages.apps.sales} />
								<NavItem {...pages.apps.sales.subPages?.list} />
								<NavItem {...pages.apps.sales.subPages?.view} />
							</NavCollapse>
							<NavSeparator />
						</>
					)}
					{[tabs.dashboard.id].includes(activeTab as string) && (
						<>
							<NavTitle>Pages Examples</NavTitle>
							<NavCollapse {...pages.pagesExamples.list}>
								<NavItem {...pages.pagesExamples.list.subPages?.example1} />
							</NavCollapse>
							<NavCollapse {...pages.pagesExamples.edit}>
								<NavItem {...pages.pagesExamples.edit.subPages?.example1} />
							</NavCollapse>
							<NavItem {...pages.pagesExamples.login} />
							<NavItem {...pages.pagesExamples.signup} />
							<NavItem {...pages.pagesExamples.notFound} />
							<NavItem {...pages.pagesExamples.underConstruction} />
						</>
					)}
					{[tabs.documentation.id].includes(activeTab as string) && (
						<>
							<NavTitle>Documentation</NavTitle>
							<NavCollapse {...pages.documentation.gettingStarted}>
								<NavItem
									{...pages.documentation.gettingStarted.subPages?.installation}
								/>
								<NavItem
									{...pages.documentation.gettingStarted.subPages?.changelog}
								/>
								<NavItem
									{...pages.documentation.gettingStarted.subPages
										?.projectStructure}
								/>
								<NavItem
									{...pages.documentation.gettingStarted.subPages?.pagesConfigure}
								/>
							</NavCollapse>
							<NavCollapse {...pages.documentation.layout}>
								{Object.values(pages.documentation.layout.subPages).map((item) => (
									<NavItem key={item.id} {...item} />
								))}
							</NavCollapse>
							<NavCollapse {...pages.documentation.content}>
								{Object.values(pages.documentation.content.subPages).map((item) => (
									<NavItem key={item.id} {...item} />
								))}
							</NavCollapse>
							<NavCollapse {...pages.documentation.baseComponent}>
								{Object.values(pages.documentation.baseComponent.subPages).map(
									(item) => (
										<NavItem key={item.id} {...item}>
											{[
												'accordion',
												'avatarGroup',
												'blockquote',
												'chatBubbles',
												'carousel',
												'collapse',
												'context-menu',
												'datepicker',
												'devices',
												'listGroup',
												'modal',
												'offcanvas',
												'popover',
												'progress',
												'fileUploadingProgress',
												'ratings',
												'styledIcons',
												'toasts',
												'timeline',
												'treeView',
											].includes(item.id) && (
												<Badge
													variant='soft'
													className='scale-75'
													color='emerald'>
													PRO
												</Badge>
											)}
										</NavItem>
									),
								)}
							</NavCollapse>
							<NavCollapse {...pages.documentation.forms}>
								{Object.values(pages.documentation.forms.subPages).map((item) => (
									<NavItem key={item.id} {...item}>
										{['input-group', 'file-input', 'range-slider'].includes(
											item.id,
										) && (
											<Badge
												variant='soft'
												className='scale-75'
												color='emerald'>
												PRO
											</Badge>
										)}
									</NavItem>
								))}
							</NavCollapse>
							<NavItem {...pages.documentation.icon} />
						</>
					)}
				</Nav>
			</AsideBody>
			<AsideFooterPart />
		</Aside>
	);
};

export default DefaultAsideTemplate;
