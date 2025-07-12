import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import Card, { CardBody } from '@/components/ui/Card';
import MdViewer from '@/components/utils/MdViewer';
import usage1MD from '@/pages/documentation/gettingStarted/PagesConfigure/usage1.md';
import usage2MD from '@/pages/documentation/gettingStarted/PagesConfigure/usage2.md';

const PagesConfigurePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.gettingStarted },
							{ ...pages.documentation.gettingStarted.subPages.pagesConfigure },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.gettingStarted.subPages.pagesConfigure.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.gettingStarted.subPages.pagesConfigure.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-4'>
					<Card>
						<CardBody>
							<MdViewer mdFile={usage1MD} />
						</CardBody>
					</Card>
					<div className='text-2xl text-zinc-500'>
						If you save your page information in the above format in the
						[src/Routes/pages.ts](src/Routes/pages.ts) file, you can easily use it in
						the menus.
					</div>
					<Card>
						<CardBody>
							<MdViewer mdFile={usage2MD} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default PagesConfigurePage;
