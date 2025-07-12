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
import Offcanvas, {
	OffcanvasBody,
	OffcanvasFooter,
	OffcanvasFooterChild,
	OffcanvasHeader,
	TOffcanvasPosition,
} from '@/components/ui/Offcanvas';
import MdViewer from '@/components/utils/MdViewer';
import basicUsageMd from './_md/basicUsage.md';
import withoutAnimationMd from './_md/withoutAnimation.md';
import staticBackMd from './_md/staticBack.md';
import positionMd from './_md/position.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import offcanvasSource from '@/components/ui/Offcanvas.tsx?raw'; // eslint-disable-line import/extensions

const OffcanvasPage = () => {
	const [state, setState] = useState<boolean>(false);
	const [stateNotAnimation, setStateNotAnimation] = useState<boolean>(false);
	const [stateNotBack, setStateNotBack] = useState<boolean>(false);

	const [statePosition, setStatePosition] = useState<boolean>(false);
	const positions: TOffcanvasPosition[] = ['right', 'left', 'top', 'bottom'];
	const [selectedPosition, setSelectedPosition] = useState<TOffcanvasPosition>('right');
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.offcanvas },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.offcanvas.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.offcanvas.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Use Tailwind CSS alerts of various colors and border style to provide
						contextual feedback massages. Browse alerts with lists, added links or
						action buttons.
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
							<div className='text-zinc-500'>You can add a close button.</div>
							<PreviewComponent mdFile={basicUsageMd as RequestInfo} inIFrame={false}>
								<Button
									aria-label='Open offcanvas'
									onClick={() => setState(true)}
									variant='soft'>
									Open offcanvas
								</Button>
								<Offcanvas isOpen={state} setIsOpen={setState}>
									<OffcanvasHeader>Header</OffcanvasHeader>
									<OffcanvasBody>Body</OffcanvasBody>
									<OffcanvasFooter>
										<OffcanvasFooterChild>
											<Button
												aria-label='Close'
												onClick={() => setState(false)}
												color='red'>
												Close
											</Button>
										</OffcanvasFooterChild>
										<OffcanvasFooterChild>Child 2</OffcanvasFooterChild>
									</OffcanvasFooter>
								</Offcanvas>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Motion02',
										color: 'amber',
										size: 'text-3xl',
									}}>
									Without animation - isAnimation
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>Offcanvas</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>You can add a close button.</div>
							<PreviewComponent
								mdFile={withoutAnimationMd as RequestInfo}
								inIFrame={false}>
								<Button
									aria-label='Open offcanvas'
									onClick={() => setStateNotAnimation(true)}
									variant='soft'>
									Open offcanvas
								</Button>
								<Offcanvas
									isOpen={stateNotAnimation}
									setIsOpen={setStateNotAnimation}
									isAnimation={false}>
									<OffcanvasHeader>Header</OffcanvasHeader>
									<OffcanvasBody>Body</OffcanvasBody>
									<OffcanvasFooter>
										<OffcanvasFooterChild>
											<Button
												aria-label='Close'
												onClick={() => setStateNotAnimation(false)}
												color='red'>
												Close
											</Button>
										</OffcanvasFooterChild>
										<OffcanvasFooterChild>Child 2</OffcanvasFooterChild>
									</OffcanvasFooter>
								</Offcanvas>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Background',
										color: 'red',
										size: 'text-3xl',
									}}>
									With static backdrop - isStaticBackdrop
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>Offcanvas</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>You can add a close button.</div>
							<PreviewComponent mdFile={staticBackMd as RequestInfo} inIFrame={false}>
								<Button
									aria-label='Open offcanvas'
									onClick={() => setStateNotBack(true)}
									variant='soft'>
									Open offcanvas
								</Button>
								<Offcanvas
									isOpen={stateNotBack}
									setIsOpen={setStateNotBack}
									isStaticBackdrop>
									<OffcanvasHeader>Header</OffcanvasHeader>
									<OffcanvasBody>Body</OffcanvasBody>
									<OffcanvasFooter>
										<OffcanvasFooterChild>
											<Button
												aria-label='Close'
												onClick={() => setStateNotBack(false)}
												color='red'>
												Close
											</Button>
										</OffcanvasFooterChild>
										<OffcanvasFooterChild>Child 2</OffcanvasFooterChild>
									</OffcanvasFooter>
								</Offcanvas>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'ArrowAllDirection',
										color: 'blue',
										size: 'text-3xl',
									}}>
									Position - position
								</CardTitle>
								<CardSubTitle>
									<code>TOffcanvasPosition</code>
								</CardSubTitle>
								<CardSubTitle>Offcanvas</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>You can add a close button.</div>
							<PreviewComponent mdFile={positionMd as RequestInfo} inIFrame={false}>
								<div className='flex flex-wrap gap-4'>
									{positions.map((position) => (
										<Button
											aria-label={position}
											key={position}
											onClick={() => {
												setSelectedPosition(position);
												setStatePosition(true);
											}}
											variant='soft'>
											{position}
										</Button>
									))}
								</div>
								<Offcanvas
									isOpen={statePosition}
									setIsOpen={setStatePosition}
									position={selectedPosition}>
									<OffcanvasHeader>Header</OffcanvasHeader>
									<OffcanvasBody>Body</OffcanvasBody>
									<OffcanvasFooter>
										<OffcanvasFooterChild>
											<Button
												aria-label='Close'
												onClick={() => setStatePosition(false)}
												color='red'>
												Close
											</Button>
										</OffcanvasFooterChild>
										<OffcanvasFooterChild>Child 2</OffcanvasFooterChild>
									</OffcanvasFooter>
								</Offcanvas>
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
							<MdViewer code={extractSnippetUtil(offcanvasSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default OffcanvasPage;
