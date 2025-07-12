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
import { arrColors } from '@/types/colors.type';
import LegendIndicator from '@/components/ui/LegendIndicator';
import MdViewer from '@/components/utils/MdViewer';
import colorsMd from './_md/colors.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import legendIndicatorSource from '@/components/ui/LegendIndicator.tsx?raw'; // eslint-disable-line import/extensions

const LegendIndicatorPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.legendIndicator },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.legendIndicator.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.legendIndicator.text}
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
					<div className='text-3xl font-bold'>Props</div>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'ColorPicker',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Colors - color
								</CardTitle>
								<CardSubTitle>
									<code>TColors</code>
								</CardSubTitle>
								<CardSubTitle>LegendIndicator</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Zebra-striping list items.</div>
							<PreviewComponent mdFile={colorsMd as RequestInfo} inIFrame={false}>
								{arrColors.map((color) => (
									<LegendIndicator key={color} color={color}>
										<span className='capitalize'>{color}</span>
									</LegendIndicator>
								))}
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
							<MdViewer
								code={extractSnippetUtil(legendIndicatorSource, 'interface')}
							/>
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default LegendIndicatorPage;
