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
import Radio, { RadioGroup, TRadioDimension } from '@/components/form/Radio';

import MdViewer from '@/components/utils/MdViewer';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import radioSource from '@/components/form/Radio.tsx?raw'; // eslint-disable-line import/extensions
import labelMd from './_md/label.md';
import dimensionMd from './_md/dimension.md';
import disabledMd from './_md/disabled.md';
import descMd from './_md/desc.md';

const RadioPage = () => {
	const options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
	const optionsDimension: string[] = ['sm', 'default', 'lg', 'xl'];

	const formik = useFormik({
		initialValues: {
			radioOption: options[1],
			optionsDimensionValue: optionsDimension[1],
			radioDisableOption: options[1],
			radioDescOption: options[1],
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
							{ ...pages.documentation.forms.subPages.radio },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.forms.subPages.radio.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.forms.subPages.radio.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						A radio input allows people to select only one option from a number of
						choices. Radio is generally displayed in a radio group.
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
								<CardSubTitle>Radio</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Basic radio example with label.</div>
							<PreviewComponent inIFrame={false} mdFile={labelMd as RequestInfo}>
								<RadioGroup isInline>
									{options.map((i) => (
										<Radio
											key={i}
											label={i}
											name='radioOption'
											value={i}
											selectedValue={formik.values.radioOption}
											onChange={formik.handleChange}
										/>
									))}
								</RadioGroup>
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
								<CardSubTitle>Radio</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Radio input dimensions.</div>
							<PreviewComponent inIFrame={false} mdFile={dimensionMd as RequestInfo}>
								<RadioGroup isInline>
									{optionsDimension.map((i) => (
										<Radio
											key={i}
											label={i}
											name='optionsDimensionValue'
											value={i}
											selectedValue={formik.values.optionsDimensionValue}
											onChange={formik.handleChange}
											dimension={i as TRadioDimension}
										/>
									))}
								</RadioGroup>
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
								<CardSubTitle>Radio</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Add the <code>disabled</code> boolean attribute on an input to
								remove pointer events, and prevent focusing.
							</div>
							<PreviewComponent inIFrame={false} mdFile={disabledMd as RequestInfo}>
								<RadioGroup isInline>
									{options.map((i) => (
										<Radio
											key={i}
											label={i}
											name='radioDisableOption'
											value={i}
											selectedValue={formik.values.radioDisableOption}
											onChange={formik.handleChange}
											disabled
										/>
									))}
								</RadioGroup>
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
								<CardSubTitle>Radio</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Basic radio example with description.
							</div>
							<PreviewComponent inIFrame={false} mdFile={descMd as RequestInfo}>
								<RadioGroup isInline>
									{['Option 1', 'Option 2'].map((i) => (
										<Radio
											key={i}
											label={i}
											name='radioDescOption'
											value={i}
											selectedValue={formik.values.radioDescOption}
											onChange={formik.handleChange}
											description='Notify me when this action happens. this action happens. this action happens.'
										/>
									))}
								</RadioGroup>
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
							<MdViewer code={extractSnippetUtil(radioSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default RadioPage;
