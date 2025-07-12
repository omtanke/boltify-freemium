import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
	CardSubTitle,
	CardTitle,
} from '@/components/ui/Card';
import PreviewComponent from '@/components/utils/PreviewComponent';
import MdViewer from '@/components/utils/MdViewer';
import Button from '@/components/ui/Button';
import Popover from '@/components/ui/Popover';
import { Image } from '@/assets/images';
import basicUsageMd from './_md/basicUsage.md';
import placemantMd from './_md/placemant.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import popoverSource from '@/components/ui/Popover.tsx?raw'; // eslint-disable-line import/extensions

const PopoverPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.popover },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.popover.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.popover.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Boltify Popovers offer dismissible, interactive elements with custom
						content. Create user-friendly interfaces with clickable areas and in-popover
						interactions.
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
								It can be used as any component you want or just as a string.
							</div>
							<PreviewComponent mdFile={basicUsageMd as RequestInfo} inIFrame={false}>
								<div className='flex flex-wrap gap-4'>
									<Popover
										content={
											<Card className='max-w-sm'>
												<CardHeader>
													<CardHeaderChild>
														<CardTitle
															iconProps={{
																icon: 'Clipboard',
																color: 'violet',
																size: 'text-3xl',
															}}>
															Card title
														</CardTitle>
													</CardHeaderChild>
												</CardHeader>

												<CardBody>
													<img
														src={Image}
														className='mb-4 rounded-md'
														alt=''
													/>
													Some quick example text to build on the card
													title and make up the bulk of the card's
													content.
												</CardBody>
												<CardFooter>
													<CardFooterChild>
														<Button
															aria-label='Go to page'
															variant='soft'
															icon='Sent'>
															Go somewhere
														</Button>
													</CardFooterChild>
												</CardFooter>
											</Card>
										}>
										<Button aria-label='Open' variant='soft'>
											Click me (with ReactNode)
										</Button>
									</Popover>
									<Popover content='This is a text'>
										<Button aria-label='Open' variant='soft'>
											Click me (with string)
										</Button>
									</Popover>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Navigation01',
										color: 'violet',
										size: 'text-3xl',
									}}>
									placement
								</CardTitle>
								<CardSubTitle>
									<code>Placement</code>
								</CardSubTitle>
								<CardSubTitle>Popover</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Can be used in different directions.
							</div>
							<PreviewComponent mdFile={placemantMd as RequestInfo} inIFrame={false}>
								<div className='flex flex-wrap gap-4'>
									<Popover content='This is a text' placement='top'>
										<Button aria-label='Top' variant='soft'>
											Top
										</Button>
									</Popover>
									<Popover content='This is a text' placement='right'>
										<Button aria-label='Right' variant='soft'>
											Right
										</Button>
									</Popover>
									<Popover content='This is a text' placement='bottom'>
										<Button aria-label='Bottom' variant='soft'>
											Bottom
										</Button>
									</Popover>
									<Popover content='This is a text' placement='left'>
										<Button aria-label='Left' variant='soft'>
											Left
										</Button>
									</Popover>
								</div>
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
							<MdViewer code={extractSnippetUtil(popoverSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default PopoverPage;
