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
import StyledIcon, { TStyledIconVariants } from '@/components/ui/StyledIcon';
import { arrColors } from '@/types/colors.type';
import { arrRounded } from '@/types/rounded.type';
import MdViewer from '@/components/utils/MdViewer';
import basicUsageMD from './_md/basicUsage.md';
import solidColorMd from './_md/solidColor.md';
import outlineColorMd from './_md/outlineColor.md';
import ghostColorMd from './_md/ghostColor.md';
import softColorMd from './_md/softColor.md';
import softOutlineColorMd from './_md/softOutlineColor.md';
import roundedMd from './_md/rounded.md';
import styledIconSource from '@/components/ui/StyledIcon.tsx?raw'; // eslint-disable-line import/extensions
import extractSnippetUtil from '@/utils/extractSnippet.util';

const StyledIconsPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.styledIcons },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.styledIcons.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.styledIcons.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						A versatile collection of pre-formatted icons in a variety of shapes,
						colors, and sizes. Ideal for integrating into buttons, cards, and content
						blocks
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
									Basic usage - variant
								</CardTitle>
								<CardSubTitle>
									<code>TStyledIconVariants</code>
								</CardSubTitle>
								<CardSubTitle>StyledIcon</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Can be used with State</div>
							<PreviewComponent mdFile={basicUsageMD as RequestInfo} inIFrame={false}>
								<div className='flex flex-wrap items-center gap-4'>
									{['solid', 'outline', 'ghost', 'soft', 'softOutline'].map(
										(item) => (
											<div
												key={item}
												className='flex flex-col items-center justify-center gap-2'>
												<StyledIcon
													variant={item as TStyledIconVariants}
													icon='Energy'
													color='emerald'
													rounded='rounded-2xl'
												/>
												<span className='capitalize'>{item}</span>
											</div>
										),
									)}
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
									Color - color
								</CardTitle>
								<CardSubTitle>
									<code>TColors</code>
								</CardSubTitle>
								<CardSubTitle>StyledIcon</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody className='flex flex-col gap-4'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Solid color variants</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										Predefined solid color icon styles.
									</div>
									<PreviewComponent
										mdFile={solidColorMd as RequestInfo}
										inIFrame={false}>
										<div className='flex flex-wrap gap-4'>
											{arrColors.map((item) => (
												<div
													key={item}
													className='flex flex-col items-center justify-center gap-2'>
													<StyledIcon
														variant='solid'
														icon='Energy'
														color={item}
														rounded='rounded-2xl'
													/>
													<span className='capitalize'>{item}</span>
												</div>
											))}
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Outline color variants</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										Predefined outline color icon styles.
									</div>
									<PreviewComponent
										mdFile={outlineColorMd as RequestInfo}
										inIFrame={false}>
										<div className='flex flex-wrap gap-4'>
											{arrColors.map((item) => (
												<div
													key={item}
													className='flex flex-col items-center justify-center gap-2'>
													<StyledIcon
														variant='outline'
														icon='Energy'
														color={item}
														rounded='rounded-2xl'
													/>
													<span className='capitalize'>{item}</span>
												</div>
											))}
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Ghost color variants</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										Predefined ghost color icon styles.
									</div>
									<PreviewComponent
										mdFile={ghostColorMd as RequestInfo}
										inIFrame={false}>
										<div className='flex flex-wrap gap-4'>
											{arrColors.map((item) => (
												<div
													key={item}
													className='flex flex-col items-center justify-center gap-2'>
													<StyledIcon
														variant='ghost'
														icon='Energy'
														color={item}
														rounded='rounded-2xl'
													/>
													<span className='capitalize'>{item}</span>
												</div>
											))}
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Soft color variants</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										Predefined soft color icon styles.
									</div>
									<PreviewComponent
										mdFile={softColorMd as RequestInfo}
										inIFrame={false}>
										<div className='flex flex-wrap gap-4'>
											{arrColors.map((item) => (
												<div
													key={item}
													className='flex flex-col items-center justify-center gap-2'>
													<StyledIcon
														variant='soft'
														icon='Energy'
														color={item}
														rounded='rounded-2xl'
													/>
													<span className='capitalize'>{item}</span>
												</div>
											))}
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Soft Outline color variants</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										Predefined softOutline color icon styles.
									</div>
									<PreviewComponent
										mdFile={softOutlineColorMd as RequestInfo}
										inIFrame={false}>
										<div className='flex flex-wrap gap-4'>
											{arrColors.map((item) => (
												<div
													key={item}
													className='flex flex-col items-center justify-center gap-2'>
													<StyledIcon
														variant='softOutline'
														icon='Energy'
														color={item}
														rounded='rounded-2xl'
													/>
													<span className='capitalize'>{item}</span>
												</div>
											))}
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
										icon: 'JoinRound',
										color: 'blue',
										size: 'text-3xl',
									}}>
									Rounded - rounded
								</CardTitle>
								<CardSubTitle>
									<code>TRounded</code>
								</CardSubTitle>
								<CardSubTitle>StyledIcon</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Can be used with State</div>
							<PreviewComponent mdFile={roundedMd as RequestInfo} inIFrame={false}>
								<div className='flex items-center gap-4'>
									{arrRounded.map((item) => (
										<div
											key={item}
											className='flex flex-col items-center justify-center gap-2'>
											<StyledIcon
												key={item}
												icon='Energy'
												color='amber'
												rounded={item}
												variant='softOutline'
											/>
											<span>{item}</span>
										</div>
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
							<MdViewer code={extractSnippetUtil(styledIconSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default StyledIconsPage;
