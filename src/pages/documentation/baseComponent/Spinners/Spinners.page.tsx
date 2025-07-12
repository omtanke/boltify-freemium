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
import Spinner from '@/components/ui/Spinner';
import { arrColors } from '@/types/colors.type';
import MdViewer from '@/components/utils/MdViewer';
import basicUsageMd from './_md/basicUsage.md';
import colorUsageMd from './_md/colorUsage.md';
import spinnerSource from '@/components/ui/Spinner.tsx?raw'; // eslint-disable-line import/extensions
import extractSnippetUtil from '@/utils/extractSnippet.util';

const SpinnersPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.spinners },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.spinners.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.spinners.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Spinner component indicates a loading state using a rotating circle
						animation. A visual cue for loading pages, cards, components, forms, etc.
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
							<div className='text-zinc-500'>A simple loading status.</div>
							<PreviewComponent mdFile={basicUsageMd as RequestInfo} inIFrame={false}>
								<Spinner />
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
									Color - color
								</CardTitle>
								<CardSubTitle>
									<code>TColors</code>
								</CardSubTitle>
								<CardSubTitle>Spinner</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Predefined spinner color styles.</div>
							<PreviewComponent mdFile={colorUsageMd as RequestInfo} inIFrame={false}>
								<div className='flex gap-4'>
									{arrColors.map((color) => (
										<Spinner key={color} color={color} />
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
							<MdViewer code={extractSnippetUtil(spinnerSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default SpinnersPage;
