import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardSubTitle,
	CardTitle,
} from '@/components/ui/Card';
import PreviewComponent from '@/components/utils/PreviewComponent';
import List, { Li } from '@/components/ui/List';
import MdViewer from '@/components/utils/MdViewer';
import typesMd from './_md/types.md';
import withIconMd from './_md/withIcon.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import listSource from '@/components/ui/List.tsx?raw'; // eslint-disable-line import/extensions

const ListsPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.lists },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.lists.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.lists.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Browse and customize beautiful Tailwind CSS buttons in various styles,
						states, and sizes. Find active, disabled, pill, icon, and other free button
						examples.
					</div>

					<div className='text-3xl font-bold'>Props</div>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Svg3DView',
										color: 'blue',
										size: 'text-3xl',
									}}>
									List types - type
								</CardTitle>
								<CardSubTitle>
									<code>TListTypes</code>
								</CardSubTitle>
								<CardSubTitle>List</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent mdFile={typesMd as RequestInfo} inIFrame={false}>
								<div className='flex flex-col gap-8'>
									<div>
										<span className='font-mono font-bold text-zinc-500'>
											list-disc
										</span>
										<List type='list-disc'>
											<Li>
												Now this is a story all about how, my life got
												flipped-turned upside down
											</Li>
											<Li>
												And I'd like to take a minute just sit right there
											</Li>
											<Li>
												I'll tell you how I became the prince of a town
												called Bel-Air
											</Li>
										</List>
									</div>
									<div>
										<span className='font-mono font-bold text-zinc-500'>
											list-decimal
										</span>
										<List type='list-decimal'>
											<Li>
												Now this is a story all about how, my life got
												flipped-turned upside down
											</Li>
											<Li>
												And I'd like to take a minute just sit right there
											</Li>
											<Li>
												I'll tell you how I became the prince of a town
												called Bel-Air
											</Li>
										</List>
									</div>
									<div>
										<span className='font-mono font-bold text-zinc-500'>
											list-none
										</span>
										<List type='list-none'>
											<Li>
												Now this is a story all about how, my life got
												flipped-turned upside down
											</Li>
											<Li>
												And I'd like to take a minute just sit right there
											</Li>
											<Li>
												I'll tell you how I became the prince of a town
												called Bel-Air
											</Li>
										</List>
									</div>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Svg3DView',
										color: 'blue',
										size: 'text-3xl',
									}}>
									Other icons - iconProps
								</CardTitle>
								<CardSubTitle>
									<code>IIconProps</code>
								</CardSubTitle>
								<CardSubTitle>Li</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent mdFile={withIconMd as RequestInfo} inIFrame={false}>
								<List type='list-none'>
									<Li iconProps={{ icon: 'Cancel01', color: 'red' }}>
										Now this is a story all about how, my life got
										flipped-turned upside down
									</Li>
									<Li iconProps={{ icon: 'Alert01', color: 'amber' }}>
										And I'd like to take a minute just sit right there
									</Li>
									<Li iconProps={{ icon: 'Tick02', color: 'emerald' }}>
										I'll tell you how I became the prince of a town called
										Bel-Air
									</Li>
								</List>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>API</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<MdViewer code={extractSnippetUtil(listSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default ListsPage;
