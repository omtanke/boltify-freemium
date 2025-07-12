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
import { Li, ListGroup } from '@/components/ui/List';
import Button from '@/components/ui/Button';
import MdViewer from '@/components/utils/MdViewer';
import defaultUsageMd from './_md/defaultUsage.md';
import withIconMd from './_md/withIcon.md';
import withButtonMd from './_md/withButton.md';
import stripedMd from './_md/striped.md';
import flushMd from './_md/flush.md';
import gutterMd from './_md/gutter.md';
import horizontalMd from './_md/horizontal.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import listSource from '@/components/ui/List.tsx?raw'; // eslint-disable-line import/extensions

const ListGroupPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.listGroup },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.listGroup.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.listGroup.text}
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
									children
								</CardTitle>
								<CardSubTitle>
									<code>ReactNode</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody className='flex flex-col gap-4'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Default usage</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										Predefined solid color button styles.
									</div>
									<PreviewComponent
										mdFile={defaultUsageMd as RequestInfo}
										inIFrame={false}>
										<ListGroup className='min-w-64'>
											<Li>Profile</Li>
											<Li>Settings</Li>
											<Li>Newsletter</Li>
										</ListGroup>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Use with icon - iconProps</CardTitle>
										<CardSubTitle>
											<code>IIconProps</code>
										</CardSubTitle>
										<CardSubTitle>Li</CardSubTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										Predefined solid color button styles.
									</div>
									<PreviewComponent
										mdFile={withIconMd as RequestInfo}
										inIFrame={false}>
										<ListGroup className='min-w-64'>
											<Li iconProps={{ icon: 'User', size: 'text-xl' }}>
												Profile
											</Li>
											<Li iconProps={{ icon: 'Settings02', size: 'text-xl' }}>
												Settings
											</Li>
											<Li iconProps={{ icon: 'News', size: 'text-xl' }}>
												Newsletter
											</Li>
										</ListGroup>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Use with button</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										Predefined solid color button styles.
									</div>
									<PreviewComponent
										mdFile={withButtonMd as RequestInfo}
										inIFrame={false}>
										<ListGroup className='min-w-64'>
											<Li>
												<Button
													aria-label='Active'
													className='p-0!'
													icon='User'
													variant='link'
													isActive>
													Active
												</Button>
											</Li>
											<Li>
												<Button
													aria-label='Default'
													className='p-0!'
													icon='User'
													variant='link'>
													Default
												</Button>
											</Li>
											<Li>
												<Button
													aria-label='Disable'
													className='p-0!'
													icon='User'
													variant='link'
													isDisable>
													Disable
												</Button>
											</Li>
										</ListGroup>
									</PreviewComponent>
								</CardBody>
							</Card>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'RowInsert',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Striped - isStriped
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>ListGroup</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Zebra-striping list items.</div>
							<PreviewComponent mdFile={stripedMd as RequestInfo} inIFrame={false}>
								<ListGroup className='min-w-64' isStriped>
									<Li iconProps={{ icon: 'User', size: 'text-xl' }}>Profile</Li>
									<Li iconProps={{ icon: 'Settings02', size: 'text-xl' }}>
										Settings
									</Li>
									<Li iconProps={{ icon: 'Home02', size: 'text-xl' }}>Address</Li>
									<Li iconProps={{ icon: 'News', size: 'text-xl' }}>
										Newsletter
									</Li>
								</ListGroup>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'RowInsert',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Flush - isFlush
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>ListGroup</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Zebra-striping list items.</div>
							<PreviewComponent mdFile={flushMd as RequestInfo} inIFrame={false}>
								<ListGroup className='min-w-64' isFlush>
									<Li iconProps={{ icon: 'User', size: 'text-xl' }}>Profile</Li>
									<Li iconProps={{ icon: 'Settings02', size: 'text-xl' }}>
										Settings
									</Li>
									<Li iconProps={{ icon: 'Home02', size: 'text-xl' }}>Address</Li>
									<Li iconProps={{ icon: 'News', size: 'text-xl' }}>
										Newsletter
									</Li>
								</ListGroup>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'RowInsert',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Gutters - isGutters
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>ListGroup</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Zebra-striping list items.</div>
							<PreviewComponent mdFile={gutterMd as RequestInfo} inIFrame={false}>
								<ListGroup className='min-w-64' isFlush isGutters={false}>
									<Li iconProps={{ icon: 'User', size: 'text-xl' }}>Profile</Li>
									<Li iconProps={{ icon: 'Settings02', size: 'text-xl' }}>
										Settings
									</Li>
									<Li iconProps={{ icon: 'Home02', size: 'text-xl' }}>Address</Li>
									<Li iconProps={{ icon: 'News', size: 'text-xl' }}>
										Newsletter
									</Li>
								</ListGroup>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'RowInsert',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Horizontal - isHorizontal
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>ListGroup</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Zebra-striping list items.</div>
							<PreviewComponent mdFile={horizontalMd as RequestInfo} inIFrame={false}>
								<ListGroup className='min-w-64' isHorizontal>
									<Li iconProps={{ icon: 'User', size: 'text-xl' }}>Profile</Li>
									<Li iconProps={{ icon: 'Settings02', size: 'text-xl' }}>
										Settings
									</Li>
									<Li iconProps={{ icon: 'Home02', size: 'text-xl' }}>Address</Li>
									<Li iconProps={{ icon: 'News', size: 'text-xl' }}>
										Newsletter
									</Li>
								</ListGroup>
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
							<MdViewer code={extractSnippetUtil(listSource, 'group')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default ListGroupPage;
