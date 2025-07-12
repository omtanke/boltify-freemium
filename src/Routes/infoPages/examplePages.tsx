import pages from '@/Routes/pages';
import { lazy } from 'react';

const ExamplePage = lazy(() => import('@/pages/examples/Example.page'));

// cards
const CardsPage = lazy(() => import('@/pages/examples/cards/Cards.page'));
const BrandingFeaturedCardsCardExamplePage = lazy(
	() => import('@/pages/examples/cards/BrandingFeaturedCards.example.page'),
);
const CardNavsCardExamplePage = lazy(() => import('@/pages/examples/cards/CardNavs.example.page'));
const ContactsCardExamplePage = lazy(() => import('@/pages/examples/cards/Contacts.example.page'));
const DataSnippetsCardExamplePage = lazy(
	() => import('@/pages/examples/cards/DataSnippets.example.page'),
);
const FilesAndFoldersCardExamplePage = lazy(
	() => import('@/pages/examples/cards/FilesAndFolders.example.page'),
);
const ImportAndExportDataCardExamplePage = lazy(
	() => import('@/pages/examples/cards/ImportAndExportData.example.page'),
);
const InlineCardsCardExamplePage = lazy(
	() => import('@/pages/examples/cards/InlineCards.example.page'),
);
const IntegrationsCardExamplePage = lazy(
	() => import('@/pages/examples/cards/Integrations.example.page'),
);
const LocationAndAddressCardExamplePage = lazy(
	() => import('@/pages/examples/cards/LocationAndAddress.example.page'),
);
const MasonryLayoutCardExamplePage = lazy(
	() => import('@/pages/examples/cards/MasonryLayout.example.page'),
);
const ProjectsCardExamplePage = lazy(() => import('@/pages/examples/cards/Projects.example.page'));
const SystemLogsCardExamplePage = lazy(
	() => import('@/pages/examples/cards/SystemLogs.example.page'),
);
const TrialCardsCardExamplePage = lazy(
	() => import('@/pages/examples/cards/TrialCards.example.page'),
);

// dataVisualization
const ChartsAndGraphExamplePage = lazy(
	() => import('@/pages/examples/dataVisualization/ChartsAndGraph.example.page'),
);
const DataCardsExamplePage = lazy(
	() => import('@/pages/examples/dataVisualization/DataCards.example.page'),
);
const DataMapsExamplePage = lazy(
	() => import('@/pages/examples/dataVisualization/DataMaps.example.page'),
);
const DataVisualizationPage = lazy(
	() => import('@/pages/examples/dataVisualization/DataVisualization.page'),
);
const InteractiveDataCardsExamplePage = lazy(
	() => import('@/pages/examples/dataVisualization/InteractiveDataCards.example.page'),
);
const StatsChartsExamplePage = lazy(
	() => import('@/pages/examples/dataVisualization/StatsCharts.example.page'),
);
const StatsExamplePage = lazy(
	() => import('@/pages/examples/dataVisualization/Stats.example.page'),
);

// forms
const AddAndCreateFormsExamplePage = lazy(
	() => import('@/pages/examples/forms/AddAndCreateForms.example.page'),
);
const BillingAndPaymentsFormsExamplePage = lazy(
	() => import('@/pages/examples/forms/BillingAndPaymentsForms.example.page'),
);
const FileUploadsFormsExamplePage = lazy(
	() => import('@/pages/examples/forms/FileUploadsForms.example.page'),
);
const FilterFormsExamplePage = lazy(
	() => import('@/pages/examples/forms/FilterForms.example.page'),
);
const FormsPage = lazy(() => import('@/pages/examples/forms/Forms.page'));
const GeneralFormsExamplePage = lazy(
	() => import('@/pages/examples/forms/GeneralForms.example.page'),
);
const GiftCardsExamplePage = lazy(() => import('@/pages/examples/forms/GiftCards.example.page'));
const LayoutsExamplePage = lazy(() => import('@/pages/examples/forms/Layouts.example.page'));
const RadioAndCheckboxGroupsExamplePage = lazy(
	() => import('@/pages/examples/forms/RadioAndCheckboxGroups.example.page'),
);
const ReviewsFormsExamplePage = lazy(
	() => import('@/pages/examples/forms/ReviewsForms.example.page'),
);
const SectionFilterBarsExamplePage = lazy(
	() => import('@/pages/examples/forms/SectionFilterBars.example.page'),
);
const SidebarFiltersExamplePage = lazy(
	() => import('@/pages/examples/forms/SidebarFilters.example.page'),
);
const SwitchesExamplePage = lazy(() => import('@/pages/examples/forms/Switches.example.page'));
const TextareaInputExamplePage = lazy(
	() => import('@/pages/examples/forms/TextareaInput.example.page'),
);

// overlays
const AddCreateFormsExamplePage = lazy(
	() => import('@/pages/examples/overlays/AddCreateForms.example.page'),
);
const AuthenticationExamplePage = lazy(
	() => import('@/pages/examples/overlays/Authentication.example.page'),
);
const BillingAndPaymentsExamplePage = lazy(
	() => import('@/pages/examples/overlays/BillingAndPayments.example.page'),
);
const DataAndTimeExamplePage = lazy(
	() => import('@/pages/examples/overlays/DataAndTime.example.page'),
);
const DataManagementExamplePage = lazy(
	() => import('@/pages/examples/overlays/DataManagement.example.page'),
);
const ECommerceExamplePage = lazy(() => import('@/pages/examples/overlays/ECommerce.example.page'));
const EditFormsExamplePage = lazy(() => import('@/pages/examples/overlays/EditForms.example.page'));
const FeedbackExamplePage = lazy(() => import('@/pages/examples/overlays/Feedback.example.page'));
const FileUploadsExamplePage = lazy(
	() => import('@/pages/examples/overlays/FileUploads.example.page'),
);
const FilterExamplePage = lazy(() => import('@/pages/examples/overlays/Filter.example.page'));
const GeneralExamplePage = lazy(() => import('@/pages/examples/overlays/General.example.page'));
const InboxChatAndMessagesExamplePage = lazy(
	() => import('@/pages/examples/overlays/InboxChatAndMessages.example.page'),
);
const OffcanvasExamplePage = lazy(() => import('@/pages/examples/overlays/Offcanvas.example.page'));
const OverlaysPage = lazy(() => import('@/pages/examples/overlays/Overlays.page'));
const ReviewsExamplePage = lazy(() => import('@/pages/examples/overlays/Reviews.example.page'));
const ShareAndInviteExamplePage = lazy(
	() => import('@/pages/examples/overlays/ShareAndInvite.example.page'),
);

// pageSections
const BannersExamplePage = lazy(() => import('@/pages/examples/pageSections/Banners.example.page'));
const DescriptionListExamplePage = lazy(
	() => import('@/pages/examples/pageSections/DescriptionList.example.page'),
);
const ListGroupExamplePage = lazy(
	() => import('@/pages/examples/pageSections/ListGroup.example.page'),
);
const NotificationSystemExamplePage = lazy(
	() => import('@/pages/examples/pageSections/NotificationSystem.example.page'),
);
const PageSectionsPage = lazy(() => import('@/pages/examples/pageSections/PageSections.page'));
const QuickActionsExamplePage = lazy(
	() => import('@/pages/examples/pageSections/QuickActions.example.page'),
);
const SetupFlowsExamplePage = lazy(
	() => import('@/pages/examples/pageSections/SetupFlows.example.page'),
);
const TimelineExamplePage = lazy(
	() => import('@/pages/examples/pageSections/Timeline.example.page'),
);
const TitleBarsExamplePage = lazy(
	() => import('@/pages/examples/pageSections/TitleBars.example.page'),
);
const UserProfileExamplePage = lazy(
	() => import('@/pages/examples/pageSections/UserProfile.example.page'),
);
const HeroSectionsExamplePage = lazy(
	() => import('@/pages/examples/pageSections/HeroSections.example.page'),
);
const IconSectionsExamplePage = lazy(
	() => import('@/pages/examples/pageSections/IconSections.example.page'),
);
const PricingSectionsExamplePage = lazy(
	() => import('@/pages/examples/pageSections/PricingSections.example.page'),
);
const FaqSectionsExamplePage = lazy(
	() => import('@/pages/examples/pageSections/FaqSections.example.page'),
);

// searchAndCommand
const CommandPalettesExamplePage = lazy(
	() => import('@/pages/examples/searchAndCommand/CommandPalettes.example.page'),
);
const SearchAndCommandPalettesPage = lazy(
	() => import('@/pages/examples/searchAndCommand/SearchAndCommandPalettes.page'),
);
const SearchResultsExamplePage = lazy(
	() => import('@/pages/examples/searchAndCommand/SearchResults.example.page'),
);
const SidebarSearchExamplePage = lazy(
	() => import('@/pages/examples/searchAndCommand/SidebarSearch.example.page'),
);

// navigations
const NavigationsPage = lazy(() => import('@/pages/examples/navigations/Navigations.page'));
const HeaderExamplePage = lazy(() => import('@/pages/examples/navigations/Header.example.page'));

// contactAndFootersPage
const ContactAndFootersPage = lazy(
	() => import('@/pages/examples/contactAndFooters/ContactAndFooters.page'),
);
const ContactExamplePage = lazy(
	() => import('@/pages/examples/contactAndFooters/Contact.example.page'),
);
const FooterExamplePage = lazy(
	() => import('@/pages/examples/contactAndFooters/Footer.example.page'),
);

// tables
const ECommerceTableExamplePage = lazy(
	() => import('@/pages/examples/tables/ECommerce.example.page'),
);
const OrdersTableExamplePage = lazy(() => import('@/pages/examples/tables/Orders.example.page'));
const OtherTableExamplePage = lazy(() => import('@/pages/examples/tables/Other.example.page'));
const ProductsTableExamplePage = lazy(
	() => import('@/pages/examples/tables/Products.example.page'),
);
const ProjectsTableExamplePage = lazy(
	() => import('@/pages/examples/tables/Projects.example.page'),
);
const TablesPage = lazy(() => import('@/pages/examples/tables/Tables.page'));
const UsersTableExamplePage = lazy(() => import('@/pages/examples/tables/Users.example.page'));

// userInterface
const BadgesExamplePage = lazy(() => import('@/pages/examples/userInterface/Badges.example.page'));
const ButtonGroupsExamplePage = lazy(
	() => import('@/pages/examples/userInterface/ButtonGroups.example.page'),
);
const ButtonsExamplePage = lazy(
	() => import('@/pages/examples/userInterface/Buttons.example.page'),
);
const DropdownExamplePage = lazy(
	() => import('@/pages/examples/userInterface/Dropdown.example.page'),
);
const LinksExamplePage = lazy(() => import('@/pages/examples/userInterface/Links.example.page'));
const NavsExamplePage = lazy(() => import('@/pages/examples/userInterface/Navs.example.page'));
const PopoversExamplePage = lazy(
	() => import('@/pages/examples/userInterface/Popovers.example.page'),
);
const ProgressBarsExamplePage = lazy(
	() => import('@/pages/examples/userInterface/ProgressBars.example.page'),
);
const SelectExamplePage = lazy(() => import('@/pages/examples/userInterface/Select.example.page'));
const UserInterfacePage = lazy(() => import('@/pages/examples/userInterface/UserInterface.page'));

const ExamplePages = [
	// Examples
	{
		path: pages.examples.exampleMain.to,
		children: [
			{
				path: pages.examples.exampleMain.to,
				element: <ExamplePage />,
			},

			// dataVisualization
			{
				path: pages.examples.exampleMain.subPages.dataVisualization.to,
				element: <DataVisualizationPage />,
			},
			{
				path: pages.examples.exampleMain.subPages.dataVisualization.subPages.chartsAndGraph
					.to,
				element: <ChartsAndGraphExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.dataVisualization.subPages
					.interactiveDataCards.to,
				element: <InteractiveDataCardsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.dataVisualization.subPages.dataCards.to,
				element: <DataCardsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.dataVisualization.subPages.dataMaps.to,
				element: <DataMapsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.dataVisualization.subPages.stats.to,
				element: <StatsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.dataVisualization.subPages.statsCharts.to,
				element: <StatsChartsExamplePage />,
			},

			// tables
			{
				path: pages.examples.exampleMain.subPages.tables.to,
				element: <TablesPage />,
			},
			{
				path: pages.examples.exampleMain.subPages.tables.subPages.projects.to,
				element: <ProjectsTableExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.tables.subPages.products.to,
				element: <ProductsTableExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.tables.subPages.users.to,
				element: <UsersTableExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.tables.subPages.orders.to,
				element: <OrdersTableExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.tables.subPages.eCommerce.to,
				element: <ECommerceTableExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.tables.subPages.others.to,
				element: <OtherTableExamplePage />,
			},

			// cards
			{
				path: pages.examples.exampleMain.subPages.cards.to,
				element: <CardsPage />,
			},
			{
				path: pages.examples.exampleMain.subPages.cards.subPages.projects.to,
				element: <ProjectsCardExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.cards.subPages.locationAndAddress.to,
				element: <LocationAndAddressCardExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.cards.subPages.integrations.to,
				element: <IntegrationsCardExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.cards.subPages.masonryLayout.to,
				element: <MasonryLayoutCardExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.cards.subPages.inlineCards.to,
				element: <InlineCardsCardExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.cards.subPages.brandingFeaturedCards.to,
				element: <BrandingFeaturedCardsCardExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.cards.subPages.trialCards.to,
				element: <TrialCardsCardExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.cards.subPages.systemLogs.to,
				element: <SystemLogsCardExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.cards.subPages.importAndExportData.to,
				element: <ImportAndExportDataCardExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.cards.subPages.dataSnippets.to,
				element: <DataSnippetsCardExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.cards.subPages.contacts.to,
				element: <ContactsCardExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.cards.subPages.cardNavs.to,
				element: <CardNavsCardExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.cards.subPages.filesAndFolders.to,
				element: <FilesAndFoldersCardExamplePage />,
			},

			// Overlays
			{
				path: pages.examples.exampleMain.subPages.overlays.to,
				element: <OverlaysPage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.offcanvas.to,
				element: <OffcanvasExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.general.to,
				element: <GeneralExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.filters.to,
				element: <FilterExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.reviews.to,
				element: <ReviewsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.shareAndInvite.to,
				element: <ShareAndInviteExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.billingAndPayments.to,
				element: <BillingAndPaymentsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.addAndCreateForms.to,
				element: <AddCreateFormsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.editForms.to,
				element: <EditFormsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.dataManagement.to,
				element: <DataManagementExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.feedback.to,
				element: <FeedbackExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.dateAndTime.to,
				element: <DataAndTimeExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.authentication.to,
				element: <AuthenticationExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.fileUploads.to,
				element: <FileUploadsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.eCommerce.to,
				element: <ECommerceExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.overlays.subPages.inboxChatAndMessages.to,
				element: <InboxChatAndMessagesExamplePage />,
			},

			// 	Forms
			{
				path: pages.examples.exampleMain.subPages.forms.to,
				element: <FormsPage />,
			},
			{
				path: pages.examples.exampleMain.subPages.forms.subPages.general.to,
				element: <GeneralFormsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.forms.subPages.filters.to,
				element: <FilterFormsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.forms.subPages.fileUploads.to,
				element: <FileUploadsFormsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.forms.subPages.addAndCreateForms.to,
				element: <AddAndCreateFormsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.forms.subPages.billingAndPayments.to,
				element: <BillingAndPaymentsFormsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.forms.subPages.layouts.to,
				element: <LayoutsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.forms.subPages.switches.to,
				element: <SwitchesExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.forms.subPages.radioAndCheckboxGroups.to,
				element: <RadioAndCheckboxGroupsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.forms.subPages.textareaInput.to,
				element: <TextareaInputExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.forms.subPages.giftCards.to,
				element: <GiftCardsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.forms.subPages.reviews.to,
				element: <ReviewsFormsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.forms.subPages.sidebarFilters.to,
				element: <SidebarFiltersExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.forms.subPages.sectionFilterBars.to,
				element: <SectionFilterBarsExamplePage />,
			},

			// 	Search & Command Palettes
			{
				path: pages.examples.exampleMain.subPages.searchAndCommandPalettes.to,
				element: <SearchAndCommandPalettesPage />,
			},
			{
				path: pages.examples.exampleMain.subPages.searchAndCommandPalettes.subPages
					.sidebarSearch.to,
				element: <SidebarSearchExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.searchAndCommandPalettes.subPages
					.commandPalettes.to,
				element: <CommandPalettesExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.searchAndCommandPalettes.subPages
					.searchResults.to,
				element: <SearchResultsExamplePage />,
			},

			// Navigations
			{
				path: pages.examples.exampleMain.subPages.navigations.to,
				element: <NavigationsPage />,
			},
			{
				path: pages.examples.exampleMain.subPages.navigations.subPages.header.to,
				element: <HeaderExamplePage />,
			},

			// Navigations
			{
				path: pages.examples.exampleMain.subPages.contactAndFooters.to,
				element: <ContactAndFootersPage />,
			},
			{
				path: pages.examples.exampleMain.subPages.contactAndFooters.subPages.contact.to,
				element: <ContactExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.contactAndFooters.subPages.footer.to,
				element: <FooterExamplePage />,
			},

			// 	Page Sections
			{
				path: pages.examples.exampleMain.subPages.pageSections.to,
				element: <PageSectionsPage />,
			},
			{
				path: pages.examples.exampleMain.subPages.pageSections.subPages.listGroup.to,
				element: <ListGroupExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.pageSections.subPages.descriptionList.to,
				element: <DescriptionListExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.pageSections.subPages.timeline.to,
				element: <TimelineExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.pageSections.subPages.setUpFlows.to,
				element: <SetupFlowsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.pageSections.subPages.userProfile.to,
				element: <UserProfileExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.pageSections.subPages.heroSections.to,
				element: <HeroSectionsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.pageSections.subPages.iconSection.to,
				element: <IconSectionsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.pageSections.subPages.pricingSections.to,
				element: <PricingSectionsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.pageSections.subPages.faqSections.to,
				element: <FaqSectionsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.pageSections.subPages.notificationSystem
					.to,
				element: <NotificationSystemExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.pageSections.subPages.quickActions.to,
				element: <QuickActionsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.pageSections.subPages.banners.to,
				element: <BannersExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.pageSections.subPages.titleBars.to,
				element: <TitleBarsExamplePage />,
			},

			// 	User Interface
			{
				path: pages.examples.exampleMain.subPages.userInterface.to,
				element: <UserInterfacePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.userInterface.subPages.dropdown.to,
				element: <DropdownExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.userInterface.subPages.select.to,
				element: <SelectExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.userInterface.subPages.buttons.to,
				element: <ButtonsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.userInterface.subPages.buttonGroups.to,
				element: <ButtonGroupsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.userInterface.subPages.badges.to,
				element: <BadgesExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.userInterface.subPages.progressBars.to,
				element: <ProgressBarsExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.userInterface.subPages.popovers.to,
				element: <PopoversExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.userInterface.subPages.links.to,
				element: <LinksExamplePage />,
			},
			{
				path: pages.examples.exampleMain.subPages.userInterface.subPages.navs.to,
				element: <NavsExamplePage />,
			},
		],
	},
];

export default ExamplePages;
