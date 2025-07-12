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
import { useFormik } from 'formik';
import Checkbox, { CheckboxGroup } from '@/components/form/Checkbox';
import Label from '@/components/form/Label';
import { useEffect, useRef } from 'react';
import indeterminateMd from './_md/indeterminate.md';
import checkboxSource from '@/components/form/Checkbox.tsx?raw'; // eslint-disable-line import/extensions
import MdViewer from '@/components/utils/MdViewer';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import labelMd from './_md/label.md';
import variantDefaultMd from './_md/variandDefault.md';
import variantSwitch from './_md/variantSwitch.md';
import defaultDimensionMd from './_md/defaultDimension.md';
import switchDimensionMd from './_md/switchDimension.md';
import disabledMd from './_md/disabled.md';
import descMd from './_md/desc.md';

const CheckboxPage = () => {
	const options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

	const formik = useFormik({
		initialValues: {
			optionLabel: true,
			optionA: true,
			optionB: false,
			optionC: true,
			optionD: false,
			options: [options[1], options[3]],
			defaultSm: false,
			defaultDefault: false,
			defaultLg: false,
			defaultXl: false,
			switchSm: false,
			switchDefault: false,
			switchLg: false,
			switchXl: false,
		},
		onSubmit: () => {},
	});

	const selectedOptions: string[] = options.filter((o) => formik.values.options.includes(o));

	const ref = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (ref.current) {
			if (options.length > selectedOptions.length && selectedOptions.length > 0) {
				ref.current.checked = false;
				ref.current.indeterminate = true;
			} else {
				ref.current.checked = false;
				ref.current.indeterminate = false;
			}
		}
	}, [selectedOptions.length, options.length]);

	const handleSelectAll = () => {
		if (options.length > selectedOptions.length) {
			formik
				.setFieldValue(
					'options',
					options.map((item) => item),
				)
				.then(() => {})
				.catch(() => {});
		} else {
			formik
				.setFieldValue('options', [])
				.then(() => {})
				.catch(() => {});
		}
	};

	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.forms },
							{ ...pages.documentation.forms.subPages.checkbox },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.forms.subPages.checkbox.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.forms.subPages.checkbox.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						A checkbox is an input control that allows a user to select one or more
						options from a number of choices.
					</div>
					<div className='text-3xl font-bold'>Usage</div>
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
								<CardSubTitle>Checkbox</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Basic checkbox example with label.</div>
							<PreviewComponent inIFrame={false} mdFile={labelMd as RequestInfo}>
								<div className='max-w-sm'>
									<Checkbox
										label='This is a label'
										id='optionLabel'
										onChange={formik.handleChange}
										checked={formik.values.optionLabel}
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
									<code>TCheckboxVariants</code>
								</CardSubTitle>
								<CardSubTitle>Checkbox</CardSubTitle>
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
									<div className='text-zinc-500'>Default checkbox variant.</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={variantDefaultMd as RequestInfo}>
										<div className='max-w-sm'>
											<Checkbox
												label='Option A'
												id='optionA'
												onChange={formik.handleChange}
												checked={formik.values.optionA}
											/>
											<Checkbox
												label='Option B'
												id='optionB'
												onChange={formik.handleChange}
												checked={formik.values.optionB}
											/>
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Switch</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>Switch checkbox variant.</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={variantSwitch as RequestInfo}>
										<div className='max-w-sm'>
											<Checkbox
												label='Option C'
												id='optionC'
												variant='switch'
												onChange={formik.handleChange}
												checked={formik.values.optionC}
											/>
											<Checkbox
												label='Option D'
												id='optionD'
												variant='switch'
												onChange={formik.handleChange}
												checked={formik.values.optionD}
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
										icon: 'Ruler',
										color: 'violet',
										size: 'text-3xl',
									}}>
									Size - dimension
								</CardTitle>
								<CardSubTitle>
									<code>TInputDimension</code>
								</CardSubTitle>
								<CardSubTitle>Checkbox</CardSubTitle>
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
									<div className='text-zinc-500'>
										Checkbox default dimensions.
									</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={defaultDimensionMd as RequestInfo}>
										<div className='max-w-sm'>
											<Checkbox
												label='Default - sm'
												id='defaultSm'
												onChange={formik.handleChange}
												checked={formik.values.defaultSm}
												dimension='sm'
											/>
											<Checkbox
												label='Default - default'
												id='defaultDefault'
												onChange={formik.handleChange}
												checked={formik.values.defaultDefault}
											/>
											<Checkbox
												label='Default - lg'
												id='defaultLg'
												onChange={formik.handleChange}
												checked={formik.values.defaultLg}
												dimension='lg'
											/>
											<Checkbox
												label='Default - xl'
												id='defaultXl'
												onChange={formik.handleChange}
												checked={formik.values.defaultXl}
												dimension='xl'
											/>
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Switch</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>Checkbox switch dimensions.</div>
									<PreviewComponent
										inIFrame={false}
										mdFile={switchDimensionMd as RequestInfo}>
										<div className='max-w-sm'>
											<Checkbox
												label='Switch - sm'
												id='switchSm'
												onChange={formik.handleChange}
												checked={formik.values.switchSm}
												dimension='sm'
												variant='switch'
											/>
											<Checkbox
												label='Switch - default'
												id='switchDefault'
												onChange={formik.handleChange}
												checked={formik.values.switchDefault}
												variant='switch'
											/>
											<Checkbox
												label='Switch - lg'
												id='switchLg'
												onChange={formik.handleChange}
												checked={formik.values.switchLg}
												dimension='lg'
												variant='switch'
											/>
											<Checkbox
												label='Switch - xl'
												id='switchXl'
												onChange={formik.handleChange}
												checked={formik.values.switchXl}
												dimension='xl'
												variant='switch'
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
										icon: 'EditOff',
										color: 'red',
										size: 'text-3xl',
									}}>
									Disabled - disabled
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>Checkbox</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Add the <code>disabled</code> boolean attribute on an input to
								remove pointer events, and prevent focusing.
							</div>
							<PreviewComponent inIFrame={false} mdFile={disabledMd as RequestInfo}>
								<div className='flex flex-col gap-4'>
									<div className='max-w-sm'>
										<Checkbox
											label='Option A'
											id='optionA'
											onChange={formik.handleChange}
											checked={formik.values.optionA}
											disabled
										/>
										<Checkbox
											label='Option B'
											id='optionB'
											onChange={formik.handleChange}
											checked={formik.values.optionB}
											disabled
										/>
										<Checkbox
											label='Option C'
											id='optionC'
											onChange={formik.handleChange}
											checked={formik.values.optionC}
											disabled
											variant='switch'
										/>
										<Checkbox
											label='Option D'
											id='optionD'
											onChange={formik.handleChange}
											checked={formik.values.optionD}
											disabled
											variant='switch'
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
										icon: 'Progress03',
										color: 'amber',
										size: 'text-3xl',
									}}>
									Indeterminate
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								You can use it to show indeterminate situations.
							</div>
							<PreviewComponent
								inIFrame={false}
								mdFile={indeterminateMd as RequestInfo}>
								<div>
									<Label htmlFor='options'>Example Checkbox</Label>
									<Checkbox
										ref={ref}
										label='Option All'
										id='options'
										onChange={handleSelectAll}
										checked={options.length === selectedOptions.length}
									/>
									{options.map((item) => (
										<Checkbox
											key={item}
											label={item}
											id={item}
											name='options'
											onChange={formik.handleChange}
											checked={formik.values.options?.includes(item)}
											className='ms-4'
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
										icon: 'HelpCircle',
										color: 'violet',
										size: 'text-3xl',
									}}>
									Description - description
								</CardTitle>
								<CardSubTitle>
									<code>ReactNode</code>
								</CardSubTitle>
								<CardSubTitle>Checkbox</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Basic checkbox example with description.
							</div>
							<PreviewComponent inIFrame={false} mdFile={descMd as RequestInfo}>
								<CheckboxGroup>
									<Checkbox
										label='Option A'
										id='optionA'
										onChange={formik.handleChange}
										checked={formik.values.optionA}
									/>
									<Checkbox
										label='Option B'
										description='Notify me when this action happens. this action happens. this action happens.'
										id='optionB'
										onChange={formik.handleChange}
										checked={formik.values.optionB}
									/>
								</CheckboxGroup>
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
							<MdViewer code={extractSnippetUtil(checkboxSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default CheckboxPage;
