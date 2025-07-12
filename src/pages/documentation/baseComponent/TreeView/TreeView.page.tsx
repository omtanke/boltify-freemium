import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import PreviewComponent from '@/components/utils/PreviewComponent';
import basicUsage from './_md/basicUsage.md';

const TreeViewPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.treeView },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.treeView.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.treeView.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						The tree view uses the{' '}
						<a
							target='_blank'
							href='https://www.npmjs.com/package/rc-tree'
							rel='noreferrer'
							className='text-blue-500 underline decoration-wavy underline-offset-2'>
							"rc-tree"
						</a>{' '}
						component, you can use all its features.
					</div>
					<div className='text-3xl font-bold'>Usage</div>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'BookOpen02',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Basic usage
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Basic Tree View example to expand and collapse the treeview node.
							</div>
							<PreviewComponent mdFile={basicUsage as RequestInfo} inIFrame={false}>
								<code>Only Pro</code>
							</PreviewComponent>
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default TreeViewPage;
