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
import Tooltip from '@/components/ui/Tooltip';
import PreviewComponent from '@/components/utils/PreviewComponent';
import Button from '@/components/ui/Button';
import { Image } from '@/assets/images';
import MdViewer from '@/components/utils/MdViewer';
import childrenMd from './_md/children.md';
import basicMd from './_md/basic.md';
import imagePlaceholderMd from './_md/imagePlaceholder.md';
import groupMd from './_md/group.md';
import onlyMd from './_md/only.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import cardSource from '@/components/ui/Card.tsx?raw'; // eslint-disable-line import/extensions

const CardPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.card },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.card.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.card.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Use pre-built Tailwind CSS cards with various layouts and interactive UI
						components. Ideal for product and event listings, user profiles, dashboards,
						and more.
					</div>
					<div className='text-3xl font-bold'>Usage</div>
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
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent mdFile={childrenMd} inIFrame={false}>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle
												iconProps={{
													icon: 'DashboardSquare03',
													color: 'emerald',
													size: 'text-3xl',
												}}>
												Card {'>'}{' '}
												<Tooltip text='CardHeader > CardHeaderChild'>
													<span className='px-2'>...</span>
												</Tooltip>
												{'>'} CardTitle
											</CardTitle>
											<CardSubTitle>
												Card {'>'}
												<Tooltip text='CardHeader > CardHeaderChild'>
													<span className='px-2'>...</span>
												</Tooltip>
												{'>'} CardSubTitle
											</CardSubTitle>
										</CardHeaderChild>
										<CardHeaderChild>
											<CardTitle
												iconProps={{
													icon: 'DashboardSquare03',
													color: 'emerald',
													size: 'text-3xl',
												}}>
												Card {'>'}
												<Tooltip text='CardHeader > CardHeaderChild'>
													<span className='px-2'>...</span>
												</Tooltip>
												{'>'} CardTitle
											</CardTitle>
											<CardSubTitle>
												Card {'>'}{' '}
												<Tooltip text='CardHeader > CardHeaderChild'>
													<span className='px-2'>...</span>
												</Tooltip>
												{'>'} CardSubTitle
											</CardSubTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>Card {'>'} CardBody</CardBody>
									<CardFooter>
										<CardFooterChild>
											Card {'>'}
											<Tooltip text='CardFooter'>
												<span>...</span>
											</Tooltip>
											{'>'} CardHeaderChild
										</CardFooterChild>
										<CardFooterChild>
											Card {'>'}
											<Tooltip text='CardFooter'>
												<span>...</span>
											</Tooltip>
											{'>'} CardHeaderChild
										</CardFooterChild>
									</CardFooter>
								</Card>
							</PreviewComponent>
						</CardBody>
					</Card>

					<div className='text-3xl font-bold'>Examples</div>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>Basic Usage</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent mdFile={basicMd} inIFrame={false}>
								<div className='grid grid-cols-4 gap-4 lg:grid-cols-8 xl:grid-cols-12'>
									<div className='col-span-4'>
										<Card>
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
												Some quick example text to build on the card title
												and make up the bulk of the card's content.
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
									</div>
									<div className='col-span-4'>
										<Card>
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
													<CardSubTitle>Sub title</CardSubTitle>
												</CardHeaderChild>
											</CardHeader>
											<CardBody>
												Some quick example text to build on the card title
												and make up the bulk of the card's content.
											</CardBody>
											<CardFooter>
												<CardFooterChild>
													<Button
														aria-label='Go to page'
														variant='default'
														icon='Sent'>
														Go somewhere
													</Button>
												</CardFooterChild>
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
									</div>
									<div className='col-span-4'>
										<Card>
											<CardHeader>
												<CardHeaderChild>
													<CardSubTitle>Sub title</CardSubTitle>
												</CardHeaderChild>
											</CardHeader>
											<CardBody>
												Some quick example text to build on the card title
												and make up the bulk of the card's content.
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
									</div>
									<div className='col-span-4'>
										<Card>
											<CardHeader className='mb-4 border-b border-inherit'>
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
												Some quick example text to build on the card title
												and make up the bulk of the card's content.
											</CardBody>
											<CardFooter className='border-t border-inherit pt-4'>
												<CardFooterChild>
													<div className='text-sm text-zinc-500'>
														Last updated 5 mins ago
													</div>
												</CardFooterChild>
											</CardFooter>
										</Card>
									</div>
									<div className='col-span-4'>
										<Card>
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
												Some quick example text to build on the card title
												and make up the bulk of the card's content.
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
											<CardFooter className='border-t border-inherit pt-4'>
												<CardFooterChild>
													<div className='text-sm text-zinc-500'>
														Last updated 5 mins ago
													</div>
												</CardFooterChild>
											</CardFooter>
										</Card>
									</div>
									<div className='col-span-4'>
										<Card>
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
											<CardHeader>
												<CardHeaderChild>
													<CardSubTitle>Sub title</CardSubTitle>
												</CardHeaderChild>
											</CardHeader>
											<CardBody>
												Some quick example text to build on the card title
												and make up the bulk of the card's content.
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
									</div>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>Image placeholders</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Similar to headers and footers, cards can include top and bottom
								image placeholder images at the top.
							</div>
							<PreviewComponent mdFile={imagePlaceholderMd} inIFrame={false}>
								<div className='grid grid-cols-12 gap-4'>
									<div className='col-span-12 md:col-span-6 xl:col-span-3'>
										<Card>
											<img src={Image} className='mb-4' alt='' />
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
												Some quick example text to build on the card title
												and make up the bulk of the card's content.
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
									</div>
									<div className='col-span-12 md:col-span-6 xl:col-span-3'>
										<Card>
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
											<img src={Image} className='mb-4' alt='' />
											<CardBody>
												Some quick example text to build on the card title
												and make up the bulk of the card's content.
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
									</div>
									<div className='col-span-12 md:col-span-6 xl:col-span-3'>
										<Card>
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
												Some quick example text to build on the card title
												and make up the bulk of the card's content.
											</CardBody>
											<img src={Image} className='mb-4' alt='' />
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
									</div>
									<div className='col-span-12 md:col-span-6 xl:col-span-3'>
										<Card>
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
												Some quick example text to build on the card title
												and make up the bulk of the card's content.
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
											<img src={Image} alt='' />
										</Card>
									</div>

									<div className='col-span-12 xl:col-span-6'>
										<Card className='grid grid-cols-12 gap-4'>
											<div className='col-span-12 lg:col-span-6'>
												<img src={Image} alt='' />
											</div>
											<div className='col-span-12 flex flex-col lg:col-span-6'>
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
													Some quick example text to build on the card
													title and make up the bulk of the card's
													content.
												</CardBody>
												<CardFooter className='sticky bottom-0'>
													<CardFooterChild>
														<Button
															aria-label='Go to page'
															variant='soft'
															icon='Sent'>
															Go somewhere
														</Button>
													</CardFooterChild>
												</CardFooter>
											</div>
										</Card>
									</div>
									<div className='col-span-12 xl:col-span-6'>
										<Card className='grid grid-cols-12 gap-4'>
											<div className='col-span-12 flex flex-col lg:col-span-6'>
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
													Some quick example text to build on the card
													title and make up the bulk of the card's
													content.
												</CardBody>
												<CardFooter className='sticky bottom-0'>
													<CardFooterChild>
														<Button
															aria-label='Go to page'
															variant='soft'
															icon='Sent'>
															Go somewhere
														</Button>
													</CardFooterChild>
												</CardFooter>
											</div>
											<div className='col-span-12 lg:col-span-6'>
												<img src={Image} alt='' />
											</div>
										</Card>
									</div>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>Card group</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Similar to headers and footers, cards can include top and bottom
								image placeholder images at the top.
							</div>
							<PreviewComponent mdFile={groupMd} inIFrame={false}>
								<div className='grid grid-cols-12 gap-4'>
									<div className='col-span-12 2xl:col-span-6'>
										<Card>
											<div className='grid grid-cols-12 divide-x divide-zinc-500/10 dark:divide-zinc-500/25'>
												<div className='col-span-12 lg:col-span-4'>
													<img src={Image} className='mb-4' alt='' />
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
												</div>
												<div className='col-span-12 lg:col-span-4'>
													<img src={Image} className='mb-4' alt='' />
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
												</div>
												<div className='col-span-12 lg:col-span-4'>
													<img src={Image} className='mb-4' alt='' />
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
												</div>
											</div>
										</Card>
									</div>
									<div className='col-span-12 2xl:col-span-6'>
										<Card>
											<div className='grid grid-cols-12 divide-x divide-zinc-500/10 dark:divide-zinc-500/25'>
												<div className='col-span-12 lg:col-span-4'>
													<img src={Image} className='mb-4' alt='' />
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
												</div>
												<div
													className='col-span-12 items-stretch bg-cover bg-center lg:col-span-4'
													style={{
														backgroundImage: `url(${Image}`,
													}}></div>
												<div className='col-span-12 flex flex-col lg:col-span-4'>
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
												</div>
											</div>
										</Card>
									</div>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>Only Header, Body or Footer</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Simple body example with text.</div>
							<PreviewComponent mdFile={onlyMd} inIFrame={false}>
								<div className='grid grid-cols-4 gap-4 xl:grid-cols-12'>
									<div className='col-span-4'>
										<Card>
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
												<CardHeaderChild>
													<Button
														aria-label='Go to page'
														variant='soft'
														icon='Sent'>
														Go somewhere
													</Button>
												</CardHeaderChild>
											</CardHeader>
										</Card>
									</div>
									<div className='col-span-4'>
										<Card>
											<CardBody>
												Some quick example text to build on the card title
												and make up the bulk of the card's content.
											</CardBody>
										</Card>
									</div>
									<div className='col-span-4'>
										<Card>
											<CardFooter>
												<CardFooterChild>
													<div className='text-sm text-zinc-500'>
														Last updated 5 mins ago
													</div>
												</CardFooterChild>
												<CardFooterChild>
													<Button
														aria-label='Go to page'
														icon='Refresh'
														color='emerald'
													/>
												</CardFooterChild>
											</CardFooter>
										</Card>
									</div>
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
							<MdViewer code={extractSnippetUtil(cardSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default CardPage;
