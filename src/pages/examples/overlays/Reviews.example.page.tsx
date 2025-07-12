import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';
import EXAMPLE from '@/examples/_index';
import Container from '@/components/layout/Container';
import reviewSiteFeedbackExampleSource from '@/examples/overlays/review/ReviewSiteFeedback.example.tsx?raw'; // eslint-disable-line import/extensions
import ExampleHeaderPartial from '@/pages/examples/_partial/ExampleHeader.partial';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import ExampleItemPartial from '@/pages/examples/_partial/ExampleItem.partial';

const ReviewsExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.overlays },
							{
								...pages.examples.exampleMain.subPages.overlays.subPages.reviews,
							},
						]}
					/>
				</HeaderLeft>
				<HeaderRight>
					<ChangeDarkModeTemplate />
					<ChangeLanguageTemplate />
					<EXAMPLE.Ui.Dropdown.Notifications />
				</HeaderRight>
			</Header>
			<Container>
				<div className='grid grid-cols-12 gap-4'>
					<ExampleHeaderPartial
						title='Reviews'
						description='Utilize interactive reviews modals to display and manage customer feedback, enhancing user engagement and review process.'
					/>

					<ExampleItemPartial
						title='Site Feedback'
						code={extractSnippetUtil(
							reviewSiteFeedbackExampleSource,
							'reviewSiteFeedbackExampleSource',
						)}
						iFrameProps={{ initialWidth: 640 }}>
						<div>
							<EXAMPLE.Overlays.Review.SiteFeedback />
						</div>
					</ExampleItemPartial>
				</div>
			</Container>
		</>
	);
};

export default ReviewsExamplePage;
