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
import MdViewer from '@/components/utils/MdViewer';
import PreviewComponent from '@/components/utils/PreviewComponent';
import Tooltip from '@/components/ui/Tooltip';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Placement } from '@floating-ui/react';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import sourceCode from './Tooltip.page.tsx?raw'; // eslint-disable-line import/extensions
import tooltipSource from '@/components/ui/Tooltip.tsx?raw'; // eslint-disable-line import/extensions
import placementMd from './_md/placement.md';

const TooltipPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.tooltip },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.tooltip.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.tooltip.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Use tooltip component, floating non-actionable labels that explain interface
						elements or features, to improve user experience and navigation.
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
								Tooltip are meant to be exactly that, a hint or tip on what a tool
								or other interaction does. They are meant to clarify or help you use
								the content that they hover over, not add additional content:
							</div>
							<PreviewComponent
								code={extractSnippetUtil(sourceCode, 'basic')}
								inIFrame={false}>
								{/* @start-snippet:: basic */}
								<Tooltip text='Lorem ipsum dolor sit amet' />
								{/* @end-snippet:: basic */}
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
									With children
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Tooltip can also be used to enter a description for any component or
								html element.
							</div>
							<PreviewComponent
								code={extractSnippetUtil(sourceCode, 'withChildren')}
								inIFrame={false}>
								<div className='flex flex-wrap items-center gap-4'>
									{/* @start-snippet:: withChildren */}
									<Tooltip text='Lorem ipsum dolor sit amet'>
										<Button aria-label='Hover me' variant='soft'>
											Hover me
										</Button>
									</Tooltip>
									<Tooltip text='Lorem ipsum dolor sit amet'>
										<Badge variant='soft' color='amber' rounded='rounded-full'>
											<Icon icon='Alert02' /> Attention
										</Badge>
									</Tooltip>
									{/* @end-snippet:: withChildren */}
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'ArrowAllDirection',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Placement
								</CardTitle>
								<CardSubTitle>
									<code>Placement</code>
								</CardSubTitle>
								<CardSubTitle>Tooltip</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Hover over the following badges to see the other tooltip
								orientation:
							</div>
							<PreviewComponent mdFile={placementMd} inIFrame={false}>
								<div className='grid w-fit grid-cols-3 gap-4'>
									{['top-start', 'top', 'top-end'].map((item) => (
										<Tooltip
											key={item}
											placement={item as Placement}
											text='Lorem ipsum dolor sit amet'>
											<Badge
												variant='soft'
												color='blue'
												className='justify-center'
												rounded='rounded-full'>
												{item}
											</Badge>
										</Tooltip>
									))}
									{['left-start', undefined, 'right-start'].map((item) =>
										item ? (
											<Tooltip
												key={item}
												placement={item as Placement}
												text='Lorem ipsum dolor sit amet'>
												<Badge
													variant='soft'
													color='amber'
													className='justify-center'
													rounded='rounded-full'>
													{item}
												</Badge>
											</Tooltip>
										) : (
											<div key={item}></div>
										),
									)}
									{['left', undefined, 'right'].map((item) =>
										item ? (
											<Tooltip
												key={item}
												placement={item as Placement}
												text='Lorem ipsum dolor sit amet'>
												<Badge
													variant='soft'
													color='amber'
													className='justify-center'
													rounded='rounded-full'>
													{item}
												</Badge>
											</Tooltip>
										) : (
											<div key={item}></div>
										),
									)}
									{['left-end', undefined, 'right-end'].map((item) =>
										item ? (
											<Tooltip
												key={item}
												placement={item as Placement}
												text='Lorem ipsum dolor sit amet'>
												<Badge
													variant='soft'
													color='amber'
													className='justify-center'
													rounded='rounded-full'>
													{item}
												</Badge>
											</Tooltip>
										) : (
											<div key={item}></div>
										),
									)}
									{['bottom-start', 'bottom', 'bottom-end'].map((item) => (
										<Tooltip
											key={item}
											placement={item as Placement}
											text='Lorem ipsum dolor sit amet'>
											<Badge
												variant='soft'
												color='blue'
												className='justify-center'
												rounded='rounded-full'>
												{item}
											</Badge>
										</Tooltip>
									))}
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
							<MdViewer code={extractSnippetUtil(tooltipSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default TooltipPage;
