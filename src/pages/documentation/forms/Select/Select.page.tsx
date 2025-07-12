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
import selectSource from '@/components/form/Select.tsx?raw'; // eslint-disable-line import/extensions
import PreviewComponent from '@/components/utils/PreviewComponent';
import Select from '@/components/form/Select';
import MdViewer from '@/components/utils/MdViewer';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import Description from '@/components/form/Description';
import Label from '@/components/form/Label';
import Tooltip from '@/components/ui/Tooltip';
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
import multipleMd from './_md/multiple.md';

const SelectPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.forms },
							{ ...pages.documentation.forms.subPages.select },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.forms.subPages.select.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.forms.subPages.select.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Select allows users to make a single selection or multiple selections from a
						list of options.
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
								<CardSubTitle>Select</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Basic select example with placeholder.
							</div>
							<PreviewComponent
								inIFrame={false}
								mdFile={placeholderMd as RequestInfo}>
								<div className='max-w-sm'>
									<Select
										name='placeholder-test'
										placeholder='This is a placeholder'>
										<optgroup label='Swedish Cars'>
											<option value='volvo'>Volvo</option>
											<option value='saab'>Saab</option>
										</optgroup>
										<optgroup label='German Cars'>
											<option value='mercedes'>Mercedes</option>
											<option value='audi'>Audi</option>
										</optgroup>
									</Select>
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
								<CardSubTitle>Select</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Basic select example with label.</div>
							<PreviewComponent inIFrame={false} mdFile={labelMd as RequestInfo}>
								<div className='max-w-sm'>
									<Select
										name='placeholder-test'
										label='This is label'
										placeholder='Select option'>
										<optgroup label='Swedish Cars'>
											<option value='volvo'>Volvo</option>
											<option value='saab'>Saab</option>
										</optgroup>
										<optgroup label='German Cars'>
											<option value='mercedes'>Mercedes</option>
											<option value='audi'>Audi</option>
										</optgroup>
									</Select>
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
									<code>TSelectVariants</code>
								</CardSubTitle>
								<CardSubTitle>Select</CardSubTitle>
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
									<div className='text-zinc-500'>Default select variant.</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={variantDefaultMd as RequestInfo}>
										<div className='max-w-sm'>
											<Select
												name='placeholder-test'
												label='This is label'
												placeholder='Select option'>
												<optgroup label='Swedish Cars'>
													<option value='volvo'>Volvo</option>
													<option value='saab'>Saab</option>
												</optgroup>
												<optgroup label='German Cars'>
													<option value='mercedes'>Mercedes</option>
													<option value='audi'>Audi</option>
												</optgroup>
											</Select>
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
									<div className='text-zinc-500'>Gray select variant.</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={variantGrayMd as RequestInfo}>
										<div className='max-w-sm'>
											<Select
												name='placeholder-test'
												label='This is label'
												placeholder='Select option'
												variant='gray'>
												<optgroup label='Swedish Cars'>
													<option value='volvo'>Volvo</option>
													<option value='saab'>Saab</option>
												</optgroup>
												<optgroup label='German Cars'>
													<option value='mercedes'>Mercedes</option>
													<option value='audi'>Audi</option>
												</optgroup>
											</Select>
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
									<div className='text-zinc-500'>Solid select variant.</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={variantSolidMd as RequestInfo}>
										<div className='max-w-sm'>
											<Select
												name='placeholder-test'
												label='This is label'
												placeholder='Select option'
												variant='solid'>
												<optgroup label='Swedish Cars'>
													<option value='volvo'>Volvo</option>
													<option value='saab'>Saab</option>
												</optgroup>
												<optgroup label='German Cars'>
													<option value='mercedes'>Mercedes</option>
													<option value='audi'>Audi</option>
												</optgroup>
											</Select>
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
									<div className='text-zinc-500'>Underline select variant.</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={variantUnderlineMd as RequestInfo}>
										<div className='max-w-sm'>
											<Select
												name='placeholder-test'
												label='This is label'
												placeholder='Select option'
												variant='underline'>
												<optgroup label='Swedish Cars'>
													<option value='volvo'>Volvo</option>
													<option value='saab'>Saab</option>
												</optgroup>
												<optgroup label='German Cars'>
													<option value='mercedes'>Mercedes</option>
													<option value='audi'>Audi</option>
												</optgroup>
											</Select>
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
										icon: 'KeyframesMultiple',
										color: 'blue',
										size: 'text-3xl',
									}}>
									Multiple item - multiple
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>Select</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Basic select example with placeholder.
							</div>
							<PreviewComponent inIFrame={false} mdFile={multipleMd as RequestInfo}>
								<div className='max-w-sm'>
									<Select
										name='placeholder-test'
										multiple
										label='This is label'
										placeholder='Select option'
										aria-describedby='select-helper-text'>
										<optgroup label='Swedish Cars'>
											<option value='volvo'>Volvo</option>
											<option value='saab'>Saab</option>
										</optgroup>
										<optgroup label='German Cars'>
											<option value='mercedes'>Mercedes</option>
											<option value='audi'>Audi</option>
										</optgroup>
									</Select>
									<Description id='select-helper-text' className='mt-2'>
										Hold <kbd>Cmd</kbd> (Mac) / <kbd>Ctrl</kbd> (Windows) to
										select multiple options.
									</Description>
								</div>
							</PreviewComponent>
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
								<CardSubTitle>Select</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Note that to use this you need to define a label using the Select
								component's label prop.
							</div>
							<PreviewComponent inIFrame={false} mdFile={floatLabelMd as RequestInfo}>
								<div className='flex flex-col gap-4'>
									<div className='max-w-sm'>
										<Select
											name='placeholder-test'
											label='This is label'
											placeholder='Select option'
											variant='default'
											isFloatingLabel>
											<optgroup label='Swedish Cars'>
												<option value='volvo'>Volvo</option>
												<option value='saab'>Saab</option>
											</optgroup>
											<optgroup label='German Cars'>
												<option value='mercedes'>Mercedes</option>
												<option value='audi'>Audi</option>
											</optgroup>
										</Select>
									</div>
									<div className='max-w-sm'>
										<Select
											name='placeholder-test'
											label='This is label'
											placeholder='Select option'
											variant='gray'
											isFloatingLabel>
											<optgroup label='Swedish Cars'>
												<option value='volvo'>Volvo</option>
												<option value='saab'>Saab</option>
											</optgroup>
											<optgroup label='German Cars'>
												<option value='mercedes'>Mercedes</option>
												<option value='audi'>Audi</option>
											</optgroup>
										</Select>
									</div>
									<div className='max-w-sm'>
										<Select
											name='placeholder-test'
											label='This is label'
											placeholder='Select option'
											variant='solid'
											isFloatingLabel>
											<optgroup label='Swedish Cars'>
												<option value='volvo'>Volvo</option>
												<option value='saab'>Saab</option>
											</optgroup>
											<optgroup label='German Cars'>
												<option value='mercedes'>Mercedes</option>
												<option value='audi'>Audi</option>
											</optgroup>
										</Select>
									</div>
									<div className='max-w-sm'>
										<Select
											name='placeholder-test'
											label='This is label'
											placeholder='Select option'
											variant='underline'
											isFloatingLabel>
											<optgroup label='Swedish Cars'>
												<option value='volvo'>Volvo</option>
												<option value='saab'>Saab</option>
											</optgroup>
											<optgroup label='German Cars'>
												<option value='mercedes'>Mercedes</option>
												<option value='audi'>Audi</option>
											</optgroup>
										</Select>
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
									<code>TSelectDimension</code>
								</CardSubTitle>
								<CardSubTitle>Select</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Selects stacked small to large sizes.
							</div>
							<PreviewComponent inIFrame={false} mdFile={dimensionMd as RequestInfo}>
								<div className='flex flex-col gap-4'>
									<div className='max-w-sm'>
										<Select
											name='placeholder-test'
											placeholder='Small size'
											dimension='sm'>
											<optgroup label='Swedish Cars'>
												<option value='volvo'>Volvo</option>
												<option value='saab'>Saab</option>
											</optgroup>
											<optgroup label='German Cars'>
												<option value='mercedes'>Mercedes</option>
												<option value='audi'>Audi</option>
											</optgroup>
										</Select>
									</div>
									<div className='max-w-sm'>
										<Select name='placeholder-test' placeholder='Default size'>
											<optgroup label='Swedish Cars'>
												<option value='volvo'>Volvo</option>
												<option value='saab'>Saab</option>
											</optgroup>
											<optgroup label='German Cars'>
												<option value='mercedes'>Mercedes</option>
												<option value='audi'>Audi</option>
											</optgroup>
										</Select>
									</div>
									<div className='max-w-sm'>
										<Select
											name='placeholder-test'
											placeholder='Large size'
											dimension='lg'>
											<optgroup label='Swedish Cars'>
												<option value='volvo'>Volvo</option>
												<option value='saab'>Saab</option>
											</optgroup>
											<optgroup label='German Cars'>
												<option value='mercedes'>Mercedes</option>
												<option value='audi'>Audi</option>
											</optgroup>
										</Select>
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
								<CardSubTitle>Select</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Add the <code>disabled</code> boolean attribute on an select to
								remove pointer events, and prevent focusing.
							</div>
							<PreviewComponent inIFrame={false} mdFile={disableMd as RequestInfo}>
								<div className='flex flex-col gap-4'>
									<div className='max-w-sm'>
										<Select
											name='placeholder-test'
											label='This is label'
											placeholder='Select option'
											variant='default'
											isFloatingLabel
											disabled>
											<optgroup label='Swedish Cars'>
												<option value='volvo'>Volvo</option>
												<option value='saab'>Saab</option>
											</optgroup>
											<optgroup label='German Cars'>
												<option value='mercedes'>Mercedes</option>
												<option value='audi'>Audi</option>
											</optgroup>
										</Select>
									</div>
									<div className='max-w-sm'>
										<Select
											name='placeholder-test'
											label='This is label'
											placeholder='Select option'
											variant='gray'
											isFloatingLabel
											disabled>
											<optgroup label='Swedish Cars'>
												<option value='volvo'>Volvo</option>
												<option value='saab'>Saab</option>
											</optgroup>
											<optgroup label='German Cars'>
												<option value='mercedes'>Mercedes</option>
												<option value='audi'>Audi</option>
											</optgroup>
										</Select>
									</div>
									<div className='max-w-sm'>
										<Select
											name='placeholder-test'
											label='This is label'
											placeholder='Select option'
											variant='solid'
											isFloatingLabel
											disabled>
											<optgroup label='Swedish Cars'>
												<option value='volvo'>Volvo</option>
												<option value='saab'>Saab</option>
											</optgroup>
											<optgroup label='German Cars'>
												<option value='mercedes'>Mercedes</option>
												<option value='audi'>Audi</option>
											</optgroup>
										</Select>
									</div>
									<div className='max-w-sm'>
										<Select
											name='placeholder-test'
											label='This is label'
											placeholder='Select option'
											variant='underline'
											isFloatingLabel
											disabled>
											<optgroup label='Swedish Cars'>
												<option value='volvo'>Volvo</option>
												<option value='saab'>Saab</option>
											</optgroup>
											<optgroup label='German Cars'>
												<option value='mercedes'>Mercedes</option>
												<option value='audi'>Audi</option>
											</optgroup>
										</Select>
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
										Basic select example with helper text.
									</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={helperBasicMd as RequestInfo}>
										<div className='max-w-sm'>
											<Select
												name='placeholder-test'
												label='This is label'
												placeholder='Select option'
												aria-describedby='select-helper-text'>
												<optgroup label='Swedish Cars'>
													<option value='volvo'>Volvo</option>
													<option value='saab'>Saab</option>
												</optgroup>
												<optgroup label='German Cars'>
													<option value='mercedes'>Mercedes</option>
													<option value='audi'>Audi</option>
												</optgroup>
											</Select>
											<Description id='select-helper-text' className='mt-2'>
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
										Basic select example with inline helper text.
									</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={helperLineMd as RequestInfo}>
										<div className='w-full space-y-2 sm:inline-flex sm:items-center sm:space-y-0 sm:space-x-3 [&>*]:my-0'>
											<Label htmlFor='select-helper' className='w-auto!'>
												This is label
											</Label>
											<Select
												id='select-helper'
												name='placeholder-test'
												placeholder='Select option'
												aria-describedby='select-helper-text'
												className='max-w-sm'>
												<optgroup label='Swedish Cars'>
													<option value='volvo'>Volvo</option>
													<option value='saab'>Saab</option>
												</optgroup>
												<optgroup label='German Cars'>
													<option value='mercedes'>Mercedes</option>
													<option value='audi'>Audi</option>
												</optgroup>
											</Select>
											<Description id='select-helper-text'>
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
										Basic select example with corner-hint.
									</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={helperHintMd as RequestInfo}>
										<div className='flex flex-col gap-4'>
											<div className='max-w-sm'>
												<div className='mb-2 flex items-center justify-between [&>*]:mb-0'>
													<Label
														htmlFor='select-helper'
														className='w-auto!'>
														This is label
													</Label>
													<Description id='select-helper-text'>
														Optional
													</Description>
												</div>
												<Select
													id='select-helper'
													name='placeholder-test'
													placeholder='Select option'
													aria-describedby='select-helper-text'
													className='max-w-sm'>
													<optgroup label='Swedish Cars'>
														<option value='volvo'>Volvo</option>
														<option value='saab'>Saab</option>
													</optgroup>
													<optgroup label='German Cars'>
														<option value='mercedes'>Mercedes</option>
														<option value='audi'>Audi</option>
													</optgroup>
												</Select>
											</div>
											<div className='max-w-sm'>
												<div className='mb-2 flex items-center justify-between [&>*]:mb-0'>
													<Label
														htmlFor='select-helper'
														className='w-auto!'>
														This is label
													</Label>
													<Description id='select-helper-text'>
														<Tooltip text='Optional' />
													</Description>
												</div>
												<Select
													id='select-helper'
													name='placeholder-test'
													placeholder='Select option'
													aria-describedby='select-helper-text'
													className='max-w-sm'>
													<optgroup label='Swedish Cars'>
														<option value='volvo'>Volvo</option>
														<option value='saab'>Saab</option>
													</optgroup>
													<optgroup label='German Cars'>
														<option value='mercedes'>Mercedes</option>
														<option value='audi'>Audi</option>
													</optgroup>
												</Select>
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
							<MdViewer code={extractSnippetUtil(selectSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default SelectPage;
