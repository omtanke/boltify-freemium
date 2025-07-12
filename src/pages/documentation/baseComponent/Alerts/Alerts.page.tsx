import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import Alert, { TAlertVariants } from '@/components/ui/Alert';
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardSubTitle,
	CardTitle,
} from '@/components/ui/Card';
import PreviewComponent from '@/components/utils/PreviewComponent';
import { arrColors } from '@/types/colors.type';
import MdViewer from '@/components/utils/MdViewer';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import alertSource from '@/components/ui/Alert.tsx?raw'; // eslint-disable-line import/extensions
import variantMd from './_md/variant.md';
import colorSolidMd from './_md/colorSolid.md';
import colorOutlineMd from './_md/colorOutline.md';
import colorDefaultMd from './_md/colorDefault.md';
import colorSoftMd from './_md/colorSoft.md';
import iconMd from './_md/icon.md';
import closeableMd from './_md/closeable.md';

const AlertsPage = () => {
	const ALERT_VARIANT: TAlertVariants[] = ['solid', 'outline', 'default', 'soft'];

	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.alerts },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.alerts.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.alerts.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Use Tailwind CSS alerts of various colors and border style to provide
						contextual feedback massages. Browse alerts with lists, added links or
						action buttons.
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
									Variant
								</CardTitle>
								<CardSubTitle className='flex gap-2'>
									<code>TAlertVariants</code>
									<div className='text-xs'>
										'solid' | 'outline' | 'default' | 'soft'
									</div>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Explore the most commonly used button styles such as solid, outline,
								ghost, soft, link, and more.
							</div>
							<PreviewComponent inIFrame={false} mdFile={variantMd}>
								<div className='grid grid-cols-12 gap-4'>
									{ALERT_VARIANT.map((item) => (
										<Alert key={item} variant={item} className='col-span-12'>
											<span className='font-bold capitalize'>{item}</span>{' '}
											alert! You should check in on some of those fields
											below.
										</Alert>
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
										icon: 'ColorPicker',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Color
								</CardTitle>
								<CardSubTitle className='flex gap-2'>
									<code>TColors</code>
									<div className='text-xs'>
										'primary' | 'secondary' | 'zinc' | 'red' | 'amber' | 'lime'
										| 'emerald' | 'sky' | 'blue' | 'violet'
									</div>
								</CardSubTitle>
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
										Predefined solid color button styles.
									</div>
									<PreviewComponent inIFrame={false} mdFile={colorSolidMd}>
										<div className='grid grid-cols-12 gap-4'>
											{arrColors.map((item) => (
												<Alert
													key={item}
													variant='solid'
													color={item}
													className='col-span-12'>
													<span className='font-bold capitalize'>
														{item}
													</span>{' '}
													solid alert! You should check in on some of
													those fields below.
												</Alert>
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
										Predefined outline color button styles
									</div>
									<PreviewComponent inIFrame={false} mdFile={colorOutlineMd}>
										<div className='grid grid-cols-12 gap-4'>
											{arrColors.map((item) => (
												<Alert
													key={item}
													variant='outline'
													color={item}
													className='col-span-12'>
													<span className='font-bold capitalize'>
														{item}
													</span>{' '}
													outline alert! You should check in on some of
													those fields below.
												</Alert>
											))}
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>

							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Default color variants</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										Predefined default color button styles
									</div>
									<PreviewComponent inIFrame={false} mdFile={colorDefaultMd}>
										<div className='grid grid-cols-12 gap-4'>
											{arrColors.map((item) => (
												<Alert
													key={item}
													variant='default'
													color={item}
													className='col-span-12'>
													<span className='font-bold capitalize'>
														{item}
													</span>{' '}
													default alert! You should check in on some of
													those fields below.
												</Alert>
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
										Predefined soft color button styles
									</div>
									<PreviewComponent inIFrame={false} mdFile={colorSoftMd}>
										<div className='grid grid-cols-12 gap-4'>
											{arrColors.map((item) => (
												<Alert
													key={item}
													variant='soft'
													color={item}
													className='col-span-12'>
													<span className='font-bold capitalize'>
														{item}
													</span>{' '}
													soft alert! You should check in on some of those
													fields below.
												</Alert>
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
										icon: 'Award02',
										color: 'secondary',
										size: 'text-3xl',
									}}>
									Icon
								</CardTitle>
								<CardSubTitle>
									<code>TIcons</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-xl font-bold'>Solid color intensity variants</div>
							<div className='text-zinc-500'>
								Predefined outline color intensity alert styles.
							</div>
							<PreviewComponent inIFrame={false} mdFile={iconMd}>
								<div className='grid grid-cols-12 gap-4'>
									<Alert
										variant='outline'
										icon='Alert01'
										color='amber'
										title='Icon Outline Alert'
										className='col-span-12'>
										<span className='font-bold capitalize'>Icon</span> outline
										alert! You should check in on some of those fields below.
									</Alert>
									<Alert
										variant='soft'
										icon='LaurelWreathFirst01'
										color='emerald'
										title='Icon Soft Alert'
										className='col-span-12'>
										<span className='font-bold capitalize'>Icon</span> outline
										alert! You should check in on some of those fields below.
									</Alert>
									<Alert
										variant='default'
										icon='CancelSquare'
										color='red'
										title='Icon Soft Alert'
										className='col-span-12'>
										<span className='font-bold capitalize'>Icon</span> outline
										alert! You should check in on some of those fields below.
									</Alert>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Cancel01',
										color: 'red',
										size: 'text-3xl',
									}}>
									Closable
								</CardTitle>
								<CardSubTitle>
									<code>isClosable</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>You can add a close button.</div>
							<PreviewComponent inIFrame={false} mdFile={closeableMd}>
								<div className='grid grid-cols-12 gap-4'>
									<Alert
										variant='outline'
										icon='Alert01'
										color='amber'
										title='Icon Outline Alert'
										className='col-span-12'
										isClosable>
										<span className='font-bold capitalize'>Icon</span> outline
										alert! You should check in on some of those fields below.
									</Alert>
									<Alert
										variant='soft'
										icon='LaurelWreathFirst01'
										color='emerald'
										title='Icon Soft Alert'
										className='col-span-12'
										isClosable>
										<span className='font-bold capitalize'>Icon</span> outline
										alert! You should check in on some of those fields below.
									</Alert>
									<Alert
										variant='default'
										icon='CancelSquare'
										color='red'
										title='Icon Soft Alert'
										className='col-span-12'
										isClosable>
										<span className='font-bold capitalize'>Icon</span> outline
										alert! You should check in on some of those fields below.
									</Alert>
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
							<MdViewer code={extractSnippetUtil(alertSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default AlertsPage;
