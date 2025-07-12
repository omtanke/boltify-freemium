import { useState } from 'react';
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
import Button from '@/components/ui/Button';
import Collapse from '@/components/ui/Collapse';
import MdViewer from '@/components/utils/MdViewer';
import usageMd from './_md/usage.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import collapseSource from '@/components/ui/Collapse.tsx?raw'; // eslint-disable-line import/extensions

const CollapsePage = () => {
	const [status, setStatus] = useState<boolean>(false);
	const [status2, setStatus2] = useState<boolean>(false);
	const [status3, setStatus3] = useState<boolean>(false);

	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.collapse },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.collapse.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.collapse.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Boltify's Tailwind CSS Collapse component represents toggle buttons, to show
						and hide or collapse and expand content or navigation items, managing its
						visibility.
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
									Children
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
							<PreviewComponent mdFile={usageMd as RequestInfo} inIFrame={false}>
								<div className='grid grid-cols-4 gap-4 lg:grid-cols-12'>
									<div className='col-span-4'>
										<Card>
											<CardHeader>
												<CardHeaderChild>
													<Button
														variant='soft'
														isActive={status}
														rightIcon={
															status ? 'ArrowUp01' : 'ArrowDown01'
														}
														onClick={() => setStatus(!status)}
														aria-label='Collapse'>
														Collapse
													</Button>
												</CardHeaderChild>
											</CardHeader>
											<Collapse isOpen={status}>
												<CardBody>
													Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. Donec sed magna nec magna
													sollicitudin pharetra at vel tellus. Cras sed
													maximus arcu, eu ultricies tellus. Suspendisse
													vitae velit euismod, finibus metus sed, pulvinar
													lectus.
												</CardBody>
											</Collapse>
										</Card>
									</div>
									<div className='col-span-4 flex flex-col gap-4'>
										<Button
											variant='soft'
											isActive={status2}
											rightIcon={status2 ? 'ArrowUp01' : 'ArrowDown01'}
											onClick={() => setStatus2(!status2)}
											aria-label='Collapse'>
											Collapse
										</Button>
										<Collapse isOpen={status2}>
											<Card>
												<CardBody>
													Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. Donec sed magna nec magna
													sollicitudin pharetra at vel tellus. Cras sed
													maximus arcu, eu ultricies tellus. Suspendisse
													vitae velit euismod, finibus metus sed, pulvinar
													lectus.
												</CardBody>
											</Card>
										</Collapse>
									</div>
									<div className='col-span-4'>
										<Card>
											<CardBody>
												<div>
													Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. Donec sed magna nec magna
													sollicitudin pharetra at vel tellus. Cras sed
													maximus arcu, eu ultricies tellus. Suspendisse
													vitae velit euismod, finibus metus sed, pulvinar
													lectus.
													<Collapse isOpen={status3}>
														Aenean at eros quis tellus posuere mollis
														sed eget libero. Integer at velit pulvinar,
														dignissim lacus quis, interdum purus.
														Maecenas mi orci, molestie sed massa vel,
														tempus blandit tortor. Donec lobortis
														convallis ante, ut dapibus sapien tempor ac.
														Mauris blandit ligula libero, at vestibulum
														mi posuere faucibus. Etiam ac condimentum
														ex. Pellentesque habitant morbi tristique
														senectus et netus et malesuada fames ac
														turpis egestas. Mauris pretium, arcu ac
														hendrerit ullamcorper, velit mauris pretium
														odio, sed consectetur felis nisi ac magna.
														Curabitur vel placerat eros. Sed dictum
														vestibulum nulla eu dictum.
													</Collapse>
												</div>
												<Button
													variant='default'
													className='mt-2 p-0!'
													rightIcon={
														status3 ? 'ArrowUp01' : 'ArrowDown01'
													}
													onClick={() => setStatus3(!status3)}
													aria-label='Collapse'>
													Read {!status3 ? 'more' : 'less'}
												</Button>
											</CardBody>
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
							<MdViewer code={extractSnippetUtil(collapseSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default CollapsePage;
