import pages from '@/Routes/pages';
import { lazy } from 'react';
const GettingStartedPage = lazy(
	() => import('@/pages/documentation/gettingStarted/GettingStarted.page'),
);
const InstallationPage = lazy(
	() => import('@/pages/documentation/gettingStarted/Installation/Installation.page'),
);
const ChangelogPage = lazy(
	() => import('@/pages/documentation/gettingStarted/Changelog/Changelog.page'),
);
const ProjectStructurePage = lazy(
	() => import('@/pages/documentation/gettingStarted/ProjectStructure/ProjectStructure.page'),
);
const PagesConfigurePage = lazy(
	() => import('@/pages/documentation/gettingStarted/PagesConfigure/PagesConfigure.page'),
);

const ContentPage = lazy(() => import('@/pages/documentation/content/Content.page'));
const TypographyPage = lazy(
	() => import('@/pages/documentation/content/Typography/Typography.page'),
);

const LayoutPage = lazy(() => import('@/pages/documentation/layout/Layout.page'));
const AsidePage = lazy(() => import('@/pages/documentation/layout/Aside/Aside.page'));
const WrapperPage = lazy(() => import('@/pages/documentation/layout/Wrapper/Wrapper.page'));
const HeaderPage = lazy(() => import('@/pages/documentation/layout/Header/Header.page'));
const SubheaderPage = lazy(() => import('@/pages/documentation/layout/Subheader/Subheader.page'));
const ContainerPage = lazy(() => import('@/pages/documentation/layout/Container/Container.page'));

const BaseComponentPage = lazy(
	() => import('@/pages/documentation/baseComponent/BaseComponent.page'),
);
const AccordionPage = lazy(
	() => import('@/pages/documentation/baseComponent/Accordion/Accordion.page'),
);
const AlertsPage = lazy(() => import('@/pages/documentation/baseComponent/Alerts/Alerts.page'));
const AvatarPage = lazy(() => import('@/pages/documentation/baseComponent/Avatar/Avatar.page'));
const AvatarGroupPage = lazy(
	() => import('@/pages/documentation/baseComponent/AvatarGroup/AvatarGroup.page'),
);
const BadgePage = lazy(() => import('@/pages/documentation/baseComponent/Badge/Badge.page'));
const BlockquotePage = lazy(
	() => import('@/pages/documentation/baseComponent/Blockquote/Blockquote.page'),
);
const ButtonPage = lazy(() => import('@/pages/documentation/baseComponent/Button/Button.page'));
const ButtonGroupPage = lazy(
	() => import('@/pages/documentation/baseComponent/ButtonGroup/ButtonGroup.page'),
);
const CardPage = lazy(() => import('@/pages/documentation/baseComponent/Card/Card.page'));
const ChatBubblesPage = lazy(
	() => import('@/pages/documentation/baseComponent/ChatBubbles/ChatBubbles.page'),
);
const CarouselPage = lazy(
	() => import('@/pages/documentation/baseComponent/Carousel/Carousel.page'),
);
const CollapsePage = lazy(
	() => import('@/pages/documentation/baseComponent/Collapse/Collapse.page'),
);
const ContextMenuPage = lazy(
	() => import('@/pages/documentation/baseComponent/ContextMenu/ContextMenu.page'),
);
const DatepickerPage = lazy(
	() => import('@/pages/documentation/baseComponent/Datepicker/Datepicker.page'),
);
const DevicesPage = lazy(() => import('@/pages/documentation/baseComponent/Devices/Devices.page'));
const DropdownPage = lazy(
	() => import('@/pages/documentation/baseComponent/Dropdown/Dropdown.page'),
);
const ListsPage = lazy(() => import('@/pages/documentation/baseComponent/Lists/Lists.page'));
const ListGroupPage = lazy(
	() => import('@/pages/documentation/baseComponent/ListGroup/ListGroup.page'),
);
const LegendIndicatorPage = lazy(
	() => import('@/pages/documentation/baseComponent/LegendIndicator/LegendIndicator.page'),
);
const ModalPage = lazy(() => import('@/pages/documentation/baseComponent/Modal/Modal.page'));
const OffcanvasPage = lazy(
	() => import('@/pages/documentation/baseComponent/Offcanvas/Offcanvas.page'),
);
const PopoverPage = lazy(() => import('@/pages/documentation/baseComponent/Popover/Popover.page'));
const ProgressPage = lazy(
	() => import('@/pages/documentation/baseComponent/Progress/Progress.page'),
);
const FileUploadingProgressPage = lazy(
	() =>
		import(
			'@/pages/documentation/baseComponent/FileUploadingProgress/FileUploadingProgress.page'
		),
);
const RatingsPage = lazy(() => import('@/pages/documentation/baseComponent/Ratings/Ratings.page'));
const SkeletonPage = lazy(
	() => import('@/pages/documentation/baseComponent/Skeleton/Skeleton.page'),
);
const SpinnersPage = lazy(
	() => import('@/pages/documentation/baseComponent/Spinners/Spinners.page'),
);
const StyledIconsPage = lazy(
	() => import('@/pages/documentation/baseComponent/StyledIcons/StyledIcons.page'),
);
const ToastsPage = lazy(() => import('@/pages/documentation/baseComponent/Toasts/Toasts.page'));
const TimelinePage = lazy(
	() => import('@/pages/documentation/baseComponent/Timeline/Timeline.page'),
);
const TreeViewPage = lazy(
	() => import('@/pages/documentation/baseComponent/TreeView/TreeView.page'),
);
const TooltipPage = lazy(() => import('@/pages/documentation/baseComponent/Tooltip/Tooltip.page'));

const InputPage = lazy(() => import('@/pages/documentation/forms/Input/Input.page'));
const InputGroupPage = lazy(() => import('@/pages/documentation/forms/InputGroup/InputGroup.page'));
const TextareaPage = lazy(() => import('@/pages/documentation/forms/Textarea/Textarea.page'));
const FileInputPage = lazy(() => import('@/pages/documentation/forms/FileInput/FileInput.page'));
const CheckboxPage = lazy(() => import('@/pages/documentation/forms/Checkbox/Checkbox.page'));
const RadioPage = lazy(() => import('@/pages/documentation/forms/Radio/Radio.page'));
const SelectPage = lazy(() => import('@/pages/documentation/forms/Select/Select.page'));
const RangeSliderPage = lazy(
	() => import('@/pages/documentation/forms/RangeSlider/RangeSlider.page'),
);

const IconPage = lazy(() => import('@/pages/documentation/Icon.page'));

const DocumentationPages = [
	/**
	 * Documentation
	 */
	// Getting Started
	{
		path: pages.documentation.gettingStarted.to,
		children: [
			{
				path: pages.documentation.gettingStarted.to,
				element: <GettingStartedPage />,
			},
			{
				path: pages.documentation.gettingStarted.subPages.installation.to,
				element: <InstallationPage />,
			},
			{
				path: pages.documentation.gettingStarted.subPages.changelog.to,
				element: <ChangelogPage />,
			},
			{
				path: pages.documentation.gettingStarted.subPages.projectStructure.to,
				element: <ProjectStructurePage />,
			},
			{
				path: pages.documentation.gettingStarted.subPages.pagesConfigure.to,
				element: <PagesConfigurePage />,
			},
		],
	},
	// Content
	{
		path: pages.documentation.content.to,
		children: [
			{
				path: pages.documentation.content.to,
				element: <ContentPage />,
			},
			{
				path: pages.documentation.content.subPages.typography.to,
				element: <TypographyPage />,
			},
		],
	},
	// Layout
	{
		path: pages.documentation.layout.to,
		children: [
			{
				path: pages.documentation.layout.to,
				element: <LayoutPage />,
			},
			{
				path: pages.documentation.layout.subPages.aside.to,
				element: <AsidePage />,
			},
			{
				path: pages.documentation.layout.subPages.wrapper.to,
				element: <WrapperPage />,
			},
			{
				path: pages.documentation.layout.subPages.header.to,
				element: <HeaderPage />,
			},
			{
				path: pages.documentation.layout.subPages.subheader.to,
				element: <SubheaderPage />,
			},
			{
				path: pages.documentation.layout.subPages.container.to,
				element: <ContainerPage />,
			},
		],
	},
	// Base Component
	{
		path: pages.documentation.baseComponent.to,
		children: [
			{
				path: pages.documentation.baseComponent.to,
				element: <BaseComponentPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.accordion.id,
				element: <AccordionPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.alerts.id,
				element: <AlertsPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.avatar.id,
				element: <AvatarPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.avatarGroup.id,
				element: <AvatarGroupPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.badge.id,
				element: <BadgePage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.blockquote.id,
				element: <BlockquotePage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.button.id,
				element: <ButtonPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.buttonGroup.id,
				element: <ButtonGroupPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.card.id,
				element: <CardPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.chatBubbles.id,
				element: <ChatBubblesPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.carousel.id,
				element: <CarouselPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.collapse.id,
				element: <CollapsePage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.contextMenu.id,
				element: <ContextMenuPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.datepicker.id,
				element: <DatepickerPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.devices.id,
				element: <DevicesPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.dropdown.id,
				element: <DropdownPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.lists.id,
				element: <ListsPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.listGroup.id,
				element: <ListGroupPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.legendIndicator.id,
				element: <LegendIndicatorPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.modal.id,
				element: <ModalPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.offcanvas.id,
				element: <OffcanvasPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.popover.id,
				element: <PopoverPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.progress.id,
				element: <ProgressPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.fileUploadingProgress.id,
				element: <FileUploadingProgressPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.ratings.id,
				element: <RatingsPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.skeleton.id,
				element: <SkeletonPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.spinners.id,
				element: <SpinnersPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.styledIcons.id,
				element: <StyledIconsPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.toasts.id,
				element: <ToastsPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.timeline.id,
				element: <TimelinePage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.treeView.id,
				element: <TreeViewPage />,
			},
			{
				path: pages.documentation.baseComponent.subPages.tooltip.id,
				element: <TooltipPage />,
			},
		],
	},
	// Forms
	{
		path: pages.documentation.forms.to,
		children: [
			{
				path: pages.documentation.forms.subPages.input.to,
				element: <InputPage />,
			},
			{
				path: pages.documentation.forms.subPages.inputGroup.to,
				element: <InputGroupPage />,
			},
			{
				path: pages.documentation.forms.subPages.textarea.to,
				element: <TextareaPage />,
			},
			{
				path: pages.documentation.forms.subPages.fileInput.to,
				element: <FileInputPage />,
			},
			{
				path: pages.documentation.forms.subPages.checkbox.to,
				element: <CheckboxPage />,
			},
			{
				path: pages.documentation.forms.subPages.radio.to,
				element: <RadioPage />,
			},
			{
				path: pages.documentation.forms.subPages.select.to,
				element: <SelectPage />,
			},
			{
				path: pages.documentation.forms.subPages.rangeSlider.to,
				element: <RangeSliderPage />,
			},
		],
	},
	// Icon
	{
		path: pages.documentation.icon.to,
		element: <IconPage />,
	},
];
export default DocumentationPages;
