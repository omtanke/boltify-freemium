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
import Input, { TInputVariants } from '@/components/form/Input';
import InputGroup from '@/components/form/InputGroup';
import Button, { TButtonVariants } from '@/components/ui/Button';
import PreviewComponent from '@/components/utils/PreviewComponent';
import FieldWrap from '@/components/form/FieldWrap';
import Select from '@/components/form/Select';
import { useFormik } from 'formik';
import Label from '@/components/form/Label';
import dimensionMd from './_md/dimension.md';
import withButtonMd from './_md/withButton.md';
import withInputMd from './_md/withInput.md';
import multipleInputsMd from './_md/multipleInputs.md';
import multipleAddonsMd from './_md/multipleAddons.md';
import withActionsBtnMd from './_md/withActionsBtn.md';
import withFieldWrapper from './_md/withFieldWrapper.md';
import MdViewer from '@/components/utils/MdViewer';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import InputGroupSource from '@/components/form/InputGroup.tsx?raw'; // eslint-disable-line import/extensions

interface IFormValues {
	buttonVariant: string;
	inputVariant: string;
}

const InputGroupPage = () => {
	const buttonVariants: string[] = ['solid', 'outline', 'default', 'soft'];
	const inputVariants: string[] = ['solid', 'default', 'gray', 'underline'];

	const formik = useFormik<IFormValues>({
		initialValues: {
			buttonVariant: 'solid',
			inputVariant: 'solid',
		},
		onSubmit: () => {},
	});

	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.forms },
							{ ...pages.documentation.forms.subPages.inputGroup },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.forms.subPages.inputGroup.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.forms.subPages.inputGroup.text}
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
					<div className='text-3xl font-bold'>Usage</div>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Settings05',
										color: 'blue',
										size: 'text-3xl',
									}}>
									Sizes - dimension
								</CardTitle>
								<CardSubTitle>
									<code>TInputDimension</code>
								</CardSubTitle>
								<CardSubTitle>InputGroup</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Input groups stacked from small to large.
							</div>
							<PreviewComponent inIFrame={false} mdFile={dimensionMd as RequestInfo}>
								<div className='flex flex-col gap-4'>
									<div className='max-w-sm'>
										<InputGroup dimension='sm'>
											<Button
												aria-label='Small'
												variant='outline'
												color='zinc'
												inert>
												Small
											</Button>
											<Input
												name='Test'
												variant='default'
												placeholder='This is placeholder'
											/>
										</InputGroup>
									</div>
									<div className='max-w-sm'>
										<InputGroup dimension='default'>
											<Button
												aria-label='Default'
												variant='outline'
												color='zinc'
												inert>
												Default
											</Button>
											<Input
												name='Test'
												variant='default'
												placeholder='This is placeholder'
											/>
										</InputGroup>
									</div>
									<div className='max-w-sm'>
										<InputGroup dimension='lg'>
											<Button
												aria-label='Large'
												variant='outline'
												color='zinc'
												inert>
												Large
											</Button>
											<Input
												name='Test'
												variant='default'
												placeholder='This is placeholder'
											/>
										</InputGroup>
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
										icon: 'Rectangular',
										color: 'amber',
										size: 'text-3xl',
									}}>
									With Button
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Group can be made with the button.</div>
							<PreviewComponent inIFrame={false} mdFile={withButtonMd as RequestInfo}>
								<div className='flex flex-col gap-4'>
									<div className='max-w-sm'>
										<InputGroup dimension='default'>
											<Button
												aria-label='Solid'
												variant='solid'
												color='zinc'
												inert>
												Solid
											</Button>
											<Input
												name='Test'
												variant='default'
												placeholder='This is placeholder'
											/>
										</InputGroup>
									</div>
									<div className='max-w-sm'>
										<InputGroup dimension='default'>
											<Button
												aria-label='Outline'
												variant='outline'
												color='zinc'
												inert>
												Outline
											</Button>
											<Input
												name='Test'
												variant='default'
												placeholder='This is placeholder'
											/>
										</InputGroup>
									</div>
									<div className='max-w-sm'>
										<InputGroup dimension='default'>
											<Button
												aria-label='Default'
												variant='default'
												color='zinc'
												inert>
												Default
											</Button>
											<Input
												name='Test'
												variant='default'
												placeholder='This is placeholder'
											/>
										</InputGroup>
									</div>
									<div className='max-w-sm'>
										<InputGroup dimension='default'>
											<Button
												aria-label='Soft'
												variant='soft'
												color='zinc'
												inert>
												Soft
											</Button>
											<Input
												name='Test'
												variant='default'
												placeholder='This is placeholder'
											/>
										</InputGroup>
									</div>
								</div>
							</PreviewComponent>

							<div className='mt-8 text-zinc-500'>
								You can test the compatibility of designs live.
							</div>
							<div className='mt-4 grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-12'>
								<div className='col-span-3'>
									<Label htmlFor='buttonVariant'>Button Variant</Label>
									<Select
										name='buttonVariant'
										onChange={formik.handleChange}
										value={formik.values.buttonVariant}
										placeholder='Select button variant'>
										{buttonVariants.map((i) => (
											<option key={i} value={i}>
												{i}
											</option>
										))}
									</Select>
								</div>
								<div className='col-span-3'>
									<Label htmlFor='buttonVariant'>Input Variant</Label>
									<Select
										name='inputVariant'
										onChange={formik.handleChange}
										value={formik.values.inputVariant}
										placeholder='Select input variant'>
										{inputVariants.map((i) => (
											<option key={i} value={i}>
												{i}
											</option>
										))}
									</Select>
								</div>
								<div className='col-span-3 col-start-1'>
									<div className='max-w-sm'>
										<Label htmlFor='examplePreview'>Example</Label>
										<InputGroup dimension='default'>
											<Button
												aria-label={formik.values.buttonVariant}
												variant={
													formik.values.buttonVariant as TButtonVariants
												}
												color='zinc'
												inert>
												{formik.values.buttonVariant}
											</Button>
											{/* @ts-ignore */}
											<Input
												name='examplePreview'
												variant={
													formik.values.inputVariant as TInputVariants
												}
												placeholder={formik.values.inputVariant}
											/>
										</InputGroup>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'CustomField',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									With Input
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Group can be made with the inert inputs.
							</div>
							<PreviewComponent inIFrame={false} mdFile={withInputMd as RequestInfo}>
								<div className='flex flex-col gap-4'>
									<div className='max-w-sm'>
										<InputGroup>
											<Input
												name='Test'
												variant='solid'
												placeholder='solid'
												value='solid'
												inert
											/>
											<Input
												name='Test'
												variant='solid'
												placeholder='This is placeholder'
											/>
										</InputGroup>
									</div>
									<div className='max-w-sm'>
										<InputGroup>
											<Input
												name='Test'
												variant='default'
												placeholder='default'
												value='default'
												inert
											/>
											<Input
												name='Test'
												variant='default'
												placeholder='This is placeholder'
											/>
										</InputGroup>
									</div>
									<div className='max-w-sm'>
										<InputGroup>
											<Input
												name='Test'
												variant='gray'
												placeholder='gray'
												value='gray'
												inert
											/>
											<Input
												name='Test'
												variant='gray'
												placeholder='This is placeholder'
											/>
										</InputGroup>
									</div>
									<div className='max-w-sm'>
										<InputGroup>
											<Input
												name='Test'
												variant='underline'
												placeholder='underline'
												value='underline'
												inert
											/>
											<Input
												name='Test'
												variant='underline'
												placeholder='This is placeholder'
											/>
										</InputGroup>
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
										icon: 'Layout3Column',
										color: 'violet',
										size: 'text-3xl',
									}}>
									Multiple Inputs
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Multiple stacked inputs.</div>
							<PreviewComponent
								inIFrame={false}
								mdFile={multipleInputsMd as RequestInfo}>
								<div className='flex flex-col gap-4'>
									<div className='max-w-xl'>
										<InputGroup>
											<Button
												aria-label='First & Last Name'
												variant='outline'
												color='zinc'
												className='text-nowrap'
												inert>
												First & Last Name
											</Button>
											<Input
												name='Test'
												variant='default'
												placeholder='First Name'
											/>
											<Input
												name='Test'
												variant='default'
												placeholder='Last Name'
											/>
										</InputGroup>
									</div>
									<div className='max-w-xl'>
										<InputGroup>
											<Input
												name='Test'
												variant='default'
												placeholder='First Name'
											/>
											<Input
												name='Test'
												variant='default'
												placeholder='Last Name'
											/>
											<Button
												aria-label='First & Last Name'
												variant='outline'
												color='zinc'
												className='text-nowrap'
												inert>
												First & Last Name
											</Button>
										</InputGroup>
									</div>
									<div className='max-w-xl'>
										<InputGroup>
											<Input name='USD' variant='default' placeholder='USD' />
											<Button
												aria-label='Curreny'
												icon='ArrowDataTransferHorizontal'
												color='zinc'
												variant='solid'
												inert
											/>
											<Input name='EUR' variant='default' placeholder='EUR' />
										</InputGroup>
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
										icon: 'ColumnInsert',
										color: 'blue',
										size: 'text-3xl',
									}}>
									Multiple Add-on
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Multiple stacked inputs.</div>
							<PreviewComponent
								inIFrame={false}
								mdFile={multipleAddonsMd as RequestInfo}>
								<div className='flex flex-col gap-4'>
									<div className='max-w-sm'>
										<InputGroup>
											<Button
												aria-label='Dollar'
												variant='outline'
												color='zinc'
												className='text-nowrap'
												inert>
												$
											</Button>
											<Button
												aria-label='0.00'
												variant='outline'
												color='zinc'
												className='text-nowrap'
												inert>
												0.00
											</Button>
											<Input
												name='Test'
												variant='default'
												placeholder='Price'
											/>
										</InputGroup>
									</div>
									<div className='max-w-sm'>
										<InputGroup>
											<Input
												name='Test'
												variant='default'
												placeholder='Price'
											/>
											<Button
												aria-label='Dollar'
												variant='outline'
												color='zinc'
												className='text-nowrap'
												inert>
												$
											</Button>
											<Button
												aria-label='0.00'
												variant='outline'
												color='zinc'
												className='text-nowrap'
												inert>
												0.00
											</Button>
										</InputGroup>
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
										icon: 'Rectangular',
										color: 'amber',
										size: 'text-3xl',
									}}>
									With Actions Button
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Multiple stacked inputs.</div>
							<PreviewComponent
								inIFrame={false}
								mdFile={withActionsBtnMd as RequestInfo}>
								<div className='flex flex-col gap-4'>
									<div className='max-w-xl'>
										<InputGroup>
											<Button
												aria-label='https://'
												variant='outline'
												color='zinc'
												className='text-nowrap'
												inert>
												https://
											</Button>
											<Input
												name='Test'
												variant='default'
												placeholder='example.com'
												type='url'
											/>

											<Button
												aria-label='Check'
												variant='outline'
												color='zinc'
												className='text-nowrap'>
												Check
											</Button>
											<Button
												aria-label='Submit'
												variant='solid'
												color='blue'
												className='text-nowrap'>
												Submit
											</Button>
										</InputGroup>
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
										icon: 'Cells',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									With FieldWrapper
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Multiple stacked inputs.</div>
							<PreviewComponent
								inIFrame={false}
								mdFile={withFieldWrapper as RequestInfo}>
								<div className='flex flex-col gap-4'>
									<div className='max-w-xl'>
										<InputGroup>
											<FieldWrap firstSuffix='https://'>
												<Input
													name='Test'
													variant='default'
													placeholder='example.com'
													type='url'
												/>
											</FieldWrap>
											<Button
												aria-label='Submit'
												variant='solid'
												color='blue'
												className='text-nowrap'>
												Submit
											</Button>
										</InputGroup>
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
							<MdViewer code={extractSnippetUtil(InputGroupSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default InputGroupPage;
