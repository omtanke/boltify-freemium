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
import Input from '@/components/form/Input';
import PreviewComponent from '@/components/utils/PreviewComponent';
import Description from '@/components/form/Description';
import Label from '@/components/form/Label';
import Tooltip from '@/components/ui/Tooltip';
import MdViewer from '@/components/utils/MdViewer';
import placeholderMd from './_md/placeholder.md';
import labelMd from './_md/label.md';
import variantDefaultMd from './_md/variantDefault.md';
import variantGrayMd from './_md/variantGray.md';
import variantSolidMd from './_md/variantSolid.md';
import variantUnderlineMd from './_md/variantUnderline.md';
import floatLabelMd from './_md/floatLabel.md';
import dimensionMd from './_md/dimension.md';
import disableMd from './_md/disable.md';
import helperBasicMd from './_md/helperBasic.md';
import helperLineMd from './_md/helperLine.md';
import helperHintMd from './_md/helperHint.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import inputSource from '@/components/form/Input.tsx?raw'; // eslint-disable-line import/extensions

const InputPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.forms },
							{ ...pages.documentation.forms.subPages.input },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.forms.subPages.input.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.forms.subPages.input.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						A basic widget for getting the user input is a text field. Keyboard and
						mouse can be used for providing or changing data.
					</div>
					<div className='text-3xl font-bold'>Usage</div>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Hold04',
										color: 'blue',
										size: 'text-3xl',
									}}>
									Placeholder - placeholder
								</CardTitle>
								<CardSubTitle>
									<code>string</code>
								</CardSubTitle>
								<CardSubTitle>Input</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Basic input example with placeholder.
							</div>
							<PreviewComponent
								inIFrame={false}
								mdFile={placeholderMd as RequestInfo}>
								<div className='max-w-sm'>
									<Input
										name='placeholder-test'
										placeholder='This is placeholder'
									/>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Label',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Label - label
								</CardTitle>
								<CardSubTitle>
									<code>string</code>
								</CardSubTitle>
								<CardSubTitle>Input</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Basic input example with label.</div>
							<PreviewComponent inIFrame={false} mdFile={labelMd as RequestInfo}>
								<div className='max-w-sm'>
									<Input
										name='placeholder-test'
										label='This is label'
										placeholder='This is placeholder'
									/>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Settings05',
										color: 'amber',
										size: 'text-3xl',
									}}>
									Variant - variant
								</CardTitle>
								<CardSubTitle>
									<code>TInputVariants</code>
								</CardSubTitle>
								<CardSubTitle>Input</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody className='flex flex-col gap-4'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Default</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>Default input variant.</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={variantDefaultMd as RequestInfo}>
										<div className='max-w-sm'>
											<Input
												name='placeholder-test'
												label='This is label'
												placeholder='This is placeholder'
											/>
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Gray</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>Gray input variant.</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={variantGrayMd as RequestInfo}>
										<div className='max-w-sm'>
											<Input
												name='placeholder-test'
												label='This is label'
												placeholder='This is placeholder'
												variant='gray'
											/>
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Solid</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>Solid input variant.</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={variantSolidMd as RequestInfo}>
										<div className='max-w-sm'>
											<Input
												name='placeholder-test'
												label='This is label'
												placeholder='This is placeholder'
												variant='solid'
											/>
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Underline</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>Underline input variant.</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={variantUnderlineMd as RequestInfo}>
										<div className='max-w-sm'>
											<Input
												name='placeholder-test'
												label='This is label'
												placeholder='This is placeholder'
												variant='underline'
											/>
										</div>
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
										icon: 'Shuffle',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Float Label - isFloatingLabel
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>Input</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Note that to use this you need to define a label using the Input
								component's label prop.
							</div>
							<PreviewComponent inIFrame={false} mdFile={floatLabelMd as RequestInfo}>
								<div className='flex flex-col gap-4'>
									<div className='max-w-sm'>
										<Input
											name='placeholder-test'
											label='This is label'
											placeholder='This is placeholder'
											variant='default'
											isFloatingLabel
										/>
									</div>
									<div className='max-w-sm'>
										<Input
											name='placeholder-test'
											label='This is label'
											placeholder='This is placeholder'
											variant='gray'
											isFloatingLabel
										/>
									</div>
									<div className='max-w-sm'>
										<Input
											name='placeholder-test'
											label='This is label'
											placeholder='This is placeholder'
											variant='solid'
											isFloatingLabel
										/>
									</div>
									<div className='max-w-sm'>
										<Input
											name='placeholder-test'
											label='This is label'
											placeholder='This is placeholder'
											variant='underline'
											isFloatingLabel
										/>
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
										icon: 'Ruler',
										color: 'violet',
										size: 'text-3xl',
									}}>
									Size - dimension
								</CardTitle>
								<CardSubTitle>
									<code>TInputDimension</code>
								</CardSubTitle>
								<CardSubTitle>Input</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Inputs stacked small to large sizes.
							</div>
							<PreviewComponent inIFrame={false} mdFile={dimensionMd as RequestInfo}>
								<div className='flex flex-col gap-4'>
									<div className='max-w-sm'>
										<Input
											name='placeholder-test'
											placeholder='Small size'
											dimension='sm'
										/>
									</div>
									<div className='max-w-sm'>
										<Input name='placeholder-test' placeholder='Default size' />
									</div>
									<div className='max-w-sm'>
										<Input
											name='placeholder-test'
											placeholder='Large size'
											dimension='lg'
										/>
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
										icon: 'EditOff',
										color: 'red',
										size: 'text-3xl',
									}}>
									Disabled - disabled
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>Input</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Add the <code>disabled</code> boolean attribute on an input to
								remove pointer events, and prevent focusing.
							</div>
							<PreviewComponent inIFrame={false} mdFile={disableMd as RequestInfo}>
								<div className='flex flex-col gap-4'>
									<div className='max-w-sm'>
										<Input
											name='placeholder-test'
											label='This is label'
											placeholder='This is placeholder'
											variant='default'
											isFloatingLabel
											disabled
										/>
									</div>
									<div className='max-w-sm'>
										<Input
											name='placeholder-test'
											label='This is label'
											placeholder='This is placeholder'
											variant='gray'
											isFloatingLabel
											disabled
										/>
									</div>
									<div className='max-w-sm'>
										<Input
											name='placeholder-test'
											label='This is label'
											placeholder='This is placeholder'
											variant='solid'
											isFloatingLabel
											disabled
										/>
									</div>
									<div className='max-w-sm'>
										<Input
											name='placeholder-test'
											label='This is label'
											placeholder='This is placeholder'
											variant='underline'
											isFloatingLabel
											disabled
										/>
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
										icon: 'Settings05',
										color: 'amber',
										size: 'text-3xl',
									}}>
									Helper text
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody className='flex flex-col gap-4'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Basic</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										Basic input example with helper text.
									</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={helperBasicMd as RequestInfo}>
										<div className='max-w-sm'>
											<Input
												name='placeholder-test'
												label='This is label'
												placeholder='This is placeholder'
												aria-describedby='input-helper-text'
											/>
											<Description id='input-helper-text' className='mt-2'>
												We'll never share your details.
											</Description>
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Inline helper text</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										Basic input example with inline helper text.
									</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={helperLineMd as RequestInfo}>
										<div className='w-full space-y-2 sm:inline-flex sm:items-center sm:space-y-0 sm:space-x-3 [&>*]:my-0'>
											<Label htmlFor='input-helper' className='w-auto!'>
												This is label
											</Label>
											<Input
												id='input-helper'
												name='placeholder-test'
												placeholder='This is placeholder'
												aria-describedby='input-helper-text'
												className='max-w-sm'
											/>
											<Description id='input-helper-text'>
												We'll never share your details.
											</Description>
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Corner hint</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										Basic input example with corner-hint.
									</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={helperHintMd as RequestInfo}>
										<div className='flex flex-col gap-4'>
											<div className='max-w-sm'>
												<div className='mb-2 flex items-center justify-between [&>*]:mb-0'>
													<Label
														htmlFor='input-helper'
														className='w-auto!'>
														This is label
													</Label>
													<Description id='input-helper-text'>
														Optional
													</Description>
												</div>
												<Input
													id='input-helper'
													name='placeholder-test'
													placeholder='This is placeholder'
													aria-describedby='input-helper-text'
													className='max-w-sm'
												/>
											</div>
											<div className='max-w-sm'>
												<div className='mb-2 flex items-center justify-between [&>*]:mb-0'>
													<Label
														htmlFor='input-helper'
														className='w-auto!'>
														This is label
													</Label>
													<Description id='input-helper-text'>
														<Tooltip text='Optional' />
													</Description>
												</div>
												<Input
													id='input-helper'
													name='placeholder-test'
													placeholder='This is placeholder'
													aria-describedby='input-helper-text'
													className='max-w-sm'
												/>
											</div>
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>API</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<MdViewer code={extractSnippetUtil(inputSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default InputPage;
