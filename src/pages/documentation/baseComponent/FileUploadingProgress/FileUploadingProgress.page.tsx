import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import Progress from '@/components/ui/Progress';
import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
	CardTitle,
} from '@/components/ui/Card';
import PreviewComponent from '@/components/utils/PreviewComponent';
import Button from '@/components/ui/Button';
import basicProgressMd from './_md/basicProgress.md';
import basicPause from './_md/basicPause.md';
import basicError from './_md/basicError.md';
import basicCompleted from './_md/basicCompleted.md';
import multipleMd from './_md/multiple.md';
import MdViewer from '@/components/utils/MdViewer';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import progressSource from '@/components/ui/Progress.tsx?raw'; // eslint-disable-line import/extensions

const FileUploadingProgressPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.fileUploadingProgress },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={
								pages.documentation.baseComponent.subPages.fileUploadingProgress
									.icon
							}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.fileUploadingProgress.text}
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
							<div className='flex flex-col gap-4'>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>Progress file</CardTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<PreviewComponent
											mdFile={basicProgressMd as RequestInfo}
											inIFrame={false}>
											<div>
												<div className='mb-2 flex'>
													<div className='grow text-xl'>
														<div className='flex items-center gap-2'>
															<Icon
																icon='FileUpload'
																size='text-4xl'
																color='blue'
															/>
															<div>
																<div>file.txt</div>
																<div className='text-sm text-zinc-500'>
																	9 KB
																</div>
															</div>
														</div>
													</div>
													<div className='text-2xl font-bold'>
														<Button
															aria-label='Pause'
															icon='Pause'
															variant='link'
															color='zinc'
														/>
														<Button
															aria-label='Cancel'
															icon='Cancel01'
															variant='link'
															color='red'
														/>
													</div>
												</div>
												<Progress
													value={45}
													className='h-3'
													labelEnd={`${45}%`}
												/>
											</div>
										</PreviewComponent>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>Pause</CardTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<PreviewComponent
											mdFile={basicPause as RequestInfo}
											inIFrame={false}>
											<div>
												<div className='mb-2 flex'>
													<div className='grow text-xl'>
														<div className='flex items-center gap-2'>
															<Icon
																icon='FileUpload'
																size='text-4xl'
																color='amber'
															/>
															<div>
																<div>file.txt</div>
																<div className='text-sm text-zinc-500'>
																	9 KB
																</div>
															</div>
														</div>
													</div>
													<div className='text-2xl font-bold'>
														<Button
															aria-label='Play'
															icon='Play'
															variant='link'
															color='zinc'
														/>
														<Button
															aria-label='Cancel'
															icon='Cancel01'
															variant='link'
															color='red'
														/>
													</div>
												</div>
												<Progress
													color='amber'
													value={66}
													className='h-3'
													labelEnd={`${66}%`}
												/>
											</div>
										</PreviewComponent>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>Error</CardTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<PreviewComponent
											mdFile={basicError as RequestInfo}
											inIFrame={false}>
											<div>
												<div className='mb-2 flex'>
													<div className='grow text-xl'>
														<div className='flex items-center gap-2'>
															<Icon
																icon='FileUpload'
																size='text-4xl'
																color='red'
															/>
															<div>
																<div className='font-bold text-red-500'>
																	file.txt
																</div>
																<div className='text-sm text-zinc-500'>
																	9 KB
																</div>
															</div>
														</div>
													</div>
													<div className='text-2xl font-bold'>
														<Button
															aria-label='Refresh'
															icon='Refresh'
															variant='link'
															color='zinc'
														/>
														<Button
															aria-label='Delete file'
															icon='Delete02'
															variant='link'
															color='red'
														/>
													</div>
												</div>
												<Progress
													color='red'
													value={80}
													className='h-3'
													labelEnd={`${80}%`}
												/>
											</div>
										</PreviewComponent>
									</CardBody>
								</Card>
								<Card>
									<CardHeader>
										<CardHeaderChild>
											<CardTitle>Completed</CardTitle>
										</CardHeaderChild>
									</CardHeader>
									<CardBody>
										<PreviewComponent
											mdFile={basicCompleted as RequestInfo}
											inIFrame={false}>
											<div>
												<div className='mb-2 flex'>
													<div className='grow text-xl'>
														<div className='flex items-center gap-2'>
															<Icon
																icon='FileUpload'
																size='text-4xl'
																color='emerald'
															/>
															<div>
																<div className=''>file.txt</div>
																<div className='text-sm text-zinc-500'>
																	9 KB
																</div>
															</div>
														</div>
													</div>
													<div className='text-2xl font-bold'>
														<Button
															icon='CheckmarkCircle02'
															color='emerald'
															isDisable
															aria-label='Accept'
														/>
														<Button
															icon='Delete02'
															variant='link'
															color='red'
															aria-label='Delete'
														/>
													</div>
												</div>
												<Progress
													color='emerald'
													value={100}
													className='h-3'
													labelEnd={`${100}%`}
												/>
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
										icon: 'KeyframesMultiple',
										color: 'violet',
										size: 'text-3xl',
									}}>
									Multiple files
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<PreviewComponent mdFile={multipleMd as RequestInfo} inIFrame={false}>
								<Card>
									<CardBody className='space-y-4'>
										<div>
											<div className='mb-2 flex'>
												<div className='grow text-xl'>
													<div className='flex items-center gap-2'>
														<Icon
															icon='FileUpload'
															size='text-4xl'
															color='blue'
														/>
														<div>
															<div>file.txt</div>
															<div className='text-sm text-zinc-500'>
																9 KB
															</div>
														</div>
													</div>
												</div>
												<div className='text-2xl font-bold'>
													<Button
														icon='Pause'
														variant='link'
														color='zinc'
														aria-label='Pause'
													/>
													<Button
														icon='Cancel01'
														variant='link'
														color='red'
														aria-label='Cancel'
													/>
												</div>
											</div>
											<Progress
												value={76}
												className='h-3'
												labelEnd={`${76}%`}
											/>
										</div>
										<div>
											<div className='mb-2 flex'>
												<div className='grow text-xl'>
													<div className='flex items-center gap-2'>
														<Icon
															icon='FileUpload'
															size='text-4xl'
															color='blue'
														/>
														<div>
															<div>file.txt</div>
															<div className='text-sm text-zinc-500'>
																9 KB
															</div>
														</div>
													</div>
												</div>
												<div className='text-2xl font-bold'>
													<Button
														icon='Pause'
														variant='link'
														color='zinc'
														aria-label='Pause'
													/>
													<Button
														icon='Cancel01'
														variant='link'
														color='red'
														aria-label='Cancel'
													/>
												</div>
											</div>
											<Progress
												value={45}
												className='h-3'
												labelEnd={`${45}%`}
											/>
										</div>
									</CardBody>
									<CardFooter className='bg-zinc-500/10 pt-4'>
										<CardFooterChild>2 left</CardFooterChild>
										<CardFooterChild>
											<Button
												icon='Pause'
												color='amber'
												variant='link'
												className='px-0!'
												aria-label='Pause'>
												Pause
											</Button>
											<Button
												icon='Cancel01'
												variant='link'
												color='red'
												className='px-0!'
												aria-label='Cancel'>
												Cancel
											</Button>
										</CardFooterChild>
									</CardFooter>
								</Card>
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
							<MdViewer code={`${extractSnippetUtil(progressSource, 'interface')}`} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default FileUploadingProgressPage;
