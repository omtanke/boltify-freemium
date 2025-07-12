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
import Progress, { ProgressBar } from '@/components/ui/Progress';
import Badge from '@/components/ui/Badge';
import { arrColors } from '@/types/colors.type';
import { arrRounded } from '@/types/rounded.type';
import ProgressCircular from '@/components/ui/ProgressCircular';
import MdViewer from '@/components/utils/MdViewer';
import basicUsageMd from './_md/basicUsage.md';
import customHeightMd from './_md/customHeight.md';
import labelInProgressMd from './_md/labelInProgress.md';
import labelEndMd from './_md/labelEnd.md';
import labelTitleMd from './_md/labelTitle.md';
import labelFloatMd from './_md/labelFloat.md';
import colorMd from './_md/color.md';
import multipleMd from './_md/multiple.md';
import roundedMd from './_md/rounded.md';
import straightMd from './_md/straight.md';
import verticalMd from './_md/vertical.md';
import circularBasicMd from './_md/circularBasic.md';
import circularTypeMd from './_md/circularType.md';
import circularStrokeType from './_md/circularStrokeType.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import progressSource from '@/components/ui/Progress.tsx?raw'; // eslint-disable-line import/extensions
import progressCircularSource from '@/components/ui/ProgressCircular.tsx?raw'; // eslint-disable-line import/extensions

const ProgressPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.progress },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.progress.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.progress.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Progress bar reflects the completion of a task or a process. Explore
						horizontal, circular or vertical bar component with various label styles.
					</div>

					<div className='text-3xl font-bold'>Usage</div>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'ColorPicker',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Basic usage
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Determinate progress bars visually indicate the completion status of
								a process by gradually filling the container from 0% to 100%,
								providing a clear representation of how much of the task has been
								completed.
							</div>
							<PreviewComponent mdFile={basicUsageMd as RequestInfo} inIFrame={false}>
								<Progress value={25} />
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Ruler',
										color: 'amber',
										size: 'text-3xl',
									}}>
									Height - className
								</CardTitle>
								<CardSubTitle>
									<code>string</code>
								</CardSubTitle>
								<CardSubTitle>Progress</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								You can specify the height of the progress bar using tailwind's
								height classes.
							</div>
							<PreviewComponent
								mdFile={customHeightMd as RequestInfo}
								inIFrame={false}>
								<div className='flex flex-col gap-4'>
									<Progress value={25} />
									<Progress value={50} className='h-4' />
									<Progress value={75} className='h-8' />
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Heading01',
										color: 'blue',
										size: 'text-3xl',
									}}>
									Label
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='flex flex-col gap-4'>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>Within progress bar - label</CardTitle>
											<CardSubTitle>
												<code>string</code>
											</CardSubTitle>
											<CardSubTitle>Progress</CardSubTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<div className='text-zinc-500'>
											You can add any text you want to the progress bar.
										</div>
										<PreviewComponent
											mdFile={labelInProgressMd as RequestInfo}
											inIFrame={false}>
											<div className='flex flex-col gap-4'>
												<Progress value={25} label='25%' className='h-6' />
												<Progress value={50} label='50%' className='h-6' />
												<Progress value={75} label='75%' className='h-6' />
												<Progress
													value={100}
													label='Completed'
													className='h-6'
												/>
											</div>
										</PreviewComponent>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>Label at the end - labelEnd</CardTitle>
											<CardSubTitle>
												<code>ReactNode</code>
											</CardSubTitle>
											<CardSubTitle>Progress</CardSubTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<div className='text-zinc-500'>
											Place text or icon at the end of a progress.
										</div>
										<PreviewComponent
											mdFile={labelEndMd as RequestInfo}
											inIFrame={false}>
											<div className='flex flex-col gap-4'>
												<Progress
													value={25}
													labelEnd='25%'
													className='h-6'
												/>
												<Progress
													value={50}
													labelEnd='50%'
													className='h-6'
												/>
												<Progress
													value={75}
													labelEnd='75%'
													className='h-6'
												/>
												<Progress
													color='amber'
													value={80}
													labelEnd={
														<Icon
															icon='Alert01'
															color='amber'
															size='text-2xl'
														/>
													}
													className='h-6'
												/>
												<Progress
													color='emerald'
													value={100}
													labelEnd={
														<Icon
															icon='CheckmarkCircle02'
															color='emerald'
															size='text-2xl'
														/>
													}
													className='h-6'
												/>
											</div>
										</PreviewComponent>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>Title label</CardTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<div className='text-zinc-500'>
											You can also use Tailwind's classes however you want.
										</div>
										<PreviewComponent
											mdFile={labelTitleMd as RequestInfo}
											inIFrame={false}>
											<div className='flex flex-col gap-4'>
												<div className='flex flex-col gap-4'>
													<div>
														<div className='mb-2 flex'>
															<div className='grow text-xl'>
																Loading...
															</div>
															<div className='text-2xl font-bold'>
																33%
															</div>
														</div>
														<Progress value={33} className='h-3' />
													</div>
												</div>
												<div className='flex flex-col gap-4'>
													<div>
														<div className='mb-2 flex'>
															<div className='grow text-xl'>
																<div className='flex items-center gap-2'>
																	<Icon icon='Image02' />
																	<span>
																		Image is being processed.
																	</span>
																</div>
															</div>
															<div className='text-2xl font-bold'>
																66%
															</div>
														</div>
														<Progress value={66} className='h-3' />
													</div>
												</div>
											</div>
										</PreviewComponent>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>Floating label</CardTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<div className='text-zinc-500'>
											The label with the number floats above the progress bar.
										</div>
										<PreviewComponent
											mdFile={labelFloatMd as RequestInfo}
											inIFrame={false}>
											<div className='flex flex-col gap-4'>
												<div>
													<Badge
														variant='outline'
														className='ms-[calc(33%-1.25rem)] mb-2 text-xs'>
														33%
													</Badge>
													<Progress value={33} />
												</div>
												<div>
													<Badge
														color='emerald'
														variant='outline'
														className='ms-[calc(66%-1.25rem)] mb-2 text-xs'>
														66%
													</Badge>
													<Progress color='emerald' value={66} />
												</div>
											</div>
										</PreviewComponent>
									</CardBody>
								</Card>
							</div>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'ColorPicker',
										color: 'amber',
										size: 'text-3xl',
									}}>
									Color - color
								</CardTitle>
								<CardSubTitle>
									<code>TColors</code>
								</CardSubTitle>
								<CardSubTitle>Progress</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								You can give the component's <code>color</code> prop any color you
								want from the list of allowed colors (<code>TColors</code>).
							</div>
							<PreviewComponent mdFile={colorMd as RequestInfo} inIFrame={false}>
								<div className='flex flex-col gap-4'>
									{arrColors.map((color, i) => (
										<Progress
											key={color}
											color={color}
											value={(i + 1) * 9}
											labelEnd={color}
										/>
									))}
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'ColorPicker',
										color: 'amber',
										size: 'text-3xl',
									}}>
									Multiple Bars
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								You can put multiple <b>ProgressBar</b> components as children of
								the <b>Progress</b> component
							</div>
							<PreviewComponent mdFile={multipleMd as RequestInfo} inIFrame={false}>
								<Progress>
									<ProgressBar value={32} isStraight />
									<ProgressBar value={14} color='emerald' isStraight />
									<ProgressBar value={23} color='amber' isStraight />
								</Progress>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Shapes',
										color: 'red',
										size: 'text-3xl',
									}}>
									Shape
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='flex flex-col gap-4'>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>Radius - rounded</CardTitle>
											<CardSubTitle>
												<code>TRounded</code>
											</CardSubTitle>
											<CardSubTitle>Progress</CardSubTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<div className='text-zinc-500'>
											You can change the shape of the corners by giving the
											desired value to the <code>rounded</code> prop of the
											component.
										</div>
										<PreviewComponent
											mdFile={roundedMd as RequestInfo}
											inIFrame={false}>
											<div className='flex flex-col gap-4'>
												{arrRounded.map((round, i) => (
													<Progress
														key={round}
														value={(i + 1) * 10}
														label={`${(i + 1) * 10}%`}
														rounded={round}
														className='h-6'
														labelEnd={round}
													/>
												))}
											</div>
										</PreviewComponent>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>Straight bar - isStraight</CardTitle>
											<CardSubTitle>
												<code>boolean</code>
											</CardSubTitle>
											<CardSubTitle>Progress</CardSubTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<div className='text-zinc-500'>
											You can straighten the shape of the bar by setting the
											component's <code>isStraight</code> prop to{' '}
											<code>true</code>.
										</div>
										<PreviewComponent
											mdFile={straightMd as RequestInfo}
											inIFrame={false}>
											<div className='flex flex-col gap-4'>
												{arrRounded.map((round, i) => (
													<Progress
														key={round}
														value={(i + 1) * 10}
														label={`${(i + 1) * 10}%`}
														rounded={round}
														className='h-6'
														labelEnd={round}
														isStraight
														color='amber'
													/>
												))}
											</div>
										</PreviewComponent>
									</CardBody>
								</Card>
							</div>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Analytics01',
										color: 'amber',
										size: 'text-3xl',
									}}>
									Vertical progress - isVertical
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>Progress</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								To do this, just give the <code>isVertical</code> prop{' '}
								<code>true</code>. You can make simple charts.
							</div>
							<PreviewComponent mdFile={verticalMd as RequestInfo} inIFrame={false}>
								<div className='flex gap-6'>
									<Progress value={32} isVertical className='w-3' />
									<Progress value={44} isVertical className='w-3' />
									<Progress value={66} isVertical className='w-3' />
									<Progress value={86} isVertical className='w-3' />
									<Progress value={56} isVertical className='w-3' />
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'PieChart06',
										color: 'violet',
										size: 'text-3xl',
									}}>
									Circular progress
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='flex flex-col gap-4'>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>Basic usage</CardTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<div className='text-zinc-500'>
											You can use it in a circular shape with the{' '}
											<b>ProgressCircular</b> component.
										</div>
										<PreviewComponent
											mdFile={circularBasicMd as RequestInfo}
											inIFrame={false}>
											<div className='flex gap-6'>
												<ProgressCircular value={40} className='size-32' />
												<ProgressCircular
													color='emerald'
													value={60}
													className='size-32'>
													<div>
														<div>60%</div>
														<div className='text-xs'>Progress</div>
													</div>
												</ProgressCircular>
											</div>
										</PreviewComponent>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>Circular type - type</CardTitle>
											<CardSubTitle>
												<code>'full' | 'quarter' | 'half'</code>
											</CardSubTitle>
											<CardSubTitle>ProgressCircular</CardSubTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<div className='text-zinc-500'>
											You can use 3 different types.
										</div>
										<PreviewComponent
											mdFile={circularTypeMd as RequestInfo}
											inIFrame={false}>
											<div className='flex gap-6'>
												<ProgressCircular
													color='amber'
													value={25}
													className='size-32'>
													<div>
														<div>25%</div>
														<div className='text-xs'>Progress</div>
													</div>
												</ProgressCircular>
												<ProgressCircular
													type='quarter'
													color='emerald'
													value={50}
													className='size-32'>
													<div>
														<div>50%</div>
														<div className='text-xs'>Progress</div>
													</div>
												</ProgressCircular>
												<ProgressCircular
													type='half'
													color='violet'
													value={75}
													className='size-32'>
													<div>
														<div>75%</div>
														<div className='text-xs'>Progress</div>
													</div>
												</ProgressCircular>
											</div>
										</PreviewComponent>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>
												Stroke types - bgStrokeWidth, circleStrokeWidth and
												strokeLinecap
											</CardTitle>
											<CardSubTitle>ProgressCircular</CardSubTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<div className='text-zinc-500'>
											You can make different designs using{' '}
											<code>bgStrokeWidth</code>,{' '}
											<code>circleStrokeWidth</code> and{' '}
											<code>strokeLinecap</code>.
										</div>
										<PreviewComponent
											mdFile={circularStrokeType as RequestInfo}
											inIFrame={false}>
											<div className='flex gap-6'>
												<ProgressCircular
													color='blue'
													type='quarter'
													value={25}
													bgStrokeWidth={1}
													circleStrokeWidth={3}
													strokeLinecap='butt'
													className='size-48'>
													<div>
														<div>25%</div>
														<div className='text-xs'>Progress</div>
													</div>
												</ProgressCircular>
												<ProgressCircular
													type='quarter'
													color='emerald'
													value={50}
													bgStrokeWidth={1}
													circleStrokeWidth={3}
													className='size-48'>
													<div>
														<div>50%</div>
														<div className='text-xs'>Progress</div>
													</div>
												</ProgressCircular>
												<ProgressCircular
													type='half'
													color='red'
													value={75}
													bgStrokeWidth={3}
													circleStrokeWidth={1}
													className='size-48'>
													<div>
														<div>75%</div>
														<div className='text-xs'>Progress</div>
													</div>
												</ProgressCircular>
											</div>
										</PreviewComponent>
									</CardBody>
								</Card>
							</div>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>API</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<MdViewer
								code={`${extractSnippetUtil(progressSource, 'interface')}\n\n ${extractSnippetUtil(progressCircularSource, 'interface')}`}
							/>
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default ProgressPage;
