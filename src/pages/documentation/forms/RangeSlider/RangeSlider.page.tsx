import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import PreviewComponent from '@/components/utils/PreviewComponent';
import RangeSlider from '@/components/form/RangeSlider';
import exampleMd from './_md/example.md';
import MdViewer from '@/components/utils/MdViewer';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import rangeSliderSource from '@/components/form/RangeSlider.tsx?raw'; // eslint-disable-line import/extensions
import Label from '@/components/form/Label';

const RangeSliderPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.forms },
							{ ...pages.documentation.forms.subPages.rangeSlider },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.forms.subPages.rangeSlider.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.forms.subPages.rangeSlider.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						The Slider component, a type of range input, offers a consistent and
						customizable way for users to select values within a defined range. This
						intuitive component is ideal for adjusting settings such as volume,
						brightness, or for applying filters in various applications.
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
									Example
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Basic range slider example with label.
							</div>
							<PreviewComponent inIFrame={false} mdFile={exampleMd as RequestInfo}>
								<div className='max-w-sm'>
									<Label htmlFor='rangeSlider'>This is a label</Label>
									<RangeSlider
										id='rangeSlider'
										name='range'
										min={0}
										max={100}
										step={1}
										value={25}
									/>
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
							<MdViewer code={extractSnippetUtil(rangeSliderSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default RangeSliderPage;
