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
import Badge, { TBadgeVariants } from '@/components/ui/Badge';
import { arrRounded } from '@/types/rounded.type';
import { arrBorderWidth } from '@/types/borderWidth.type';
import Button from '@/components/ui/Button';
import Avatar from '@/components/ui/Avatar';
import { Avatar1, Avatar3 } from '@/assets/images';
import MdViewer from '@/components/utils/MdViewer';
import variantMd from './_md/variant.md';
import colorSolidMd from './_md/colorSolid.md';
import colorOutlineMd from './_md/colorOutline.md';
import colorDefaultMd from './_md/colorDefault.md';
import colorSoftMd from './_md/colorSoft.md';
import roundedMd from './_md/rounded.md';
import borderWidthMd from './_md/borderWidth.md';
import withIconMd from './_md/withIcon.md';
import withButtonMd from './_md/withButton.md';
import withAvatarMd from './_md/withAvatar.md';
import positionedMd from './_md/positioned.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import badgeSource from '@/components/ui/Badge.tsx?raw'; // eslint-disable-line import/extensions

const BadgePage = () => {
	const BADGE_VARIANT: TBadgeVariants[] = ['solid', 'outline', 'default', 'soft'];
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.badge },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.badge.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.badge.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Browse Tailwind badges (often referred to as labels or chips) - small
						rounded or pilled tags, status/category indicators or a visual cue. May come
						with avatar or counter, be removable or animated.
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
									variant
								</CardTitle>
								<CardSubTitle>
									<code>TBadgeVariants</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Explore the most commonly used button styles such as solid, outline,
								ghost, soft, link, and more.
							</div>
							<PreviewComponent inIFrame={false} mdFile={variantMd}>
								<div className='flex flex-wrap gap-4'>
									{BADGE_VARIANT.map((item) => (
										<Badge key={item} variant={item}>
											<span className='font-bold capitalize'>{item}</span>{' '}
											<span>badge</span>
										</Badge>
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
									color
								</CardTitle>
								<CardSubTitle>
									<code>TColors</code>
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
										<div className='flex flex-wrap gap-4'>
											{arrColors.map((item) => (
												<Badge key={item} variant='solid' color={item}>
													<span className='font-bold capitalize'>
														{item}
													</span>{' '}
													solid badge
												</Badge>
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
										<div className='flex flex-wrap gap-4'>
											{arrColors.map((item) => (
												<Badge key={item} variant='outline' color={item}>
													<span className='font-bold capitalize'>
														{item}
													</span>{' '}
													outline badge
												</Badge>
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
										<div className='flex flex-wrap gap-4'>
											{arrColors.map((item) => (
												<Badge key={item} variant='default' color={item}>
													<span className='font-bold capitalize'>
														{item}
													</span>{' '}
													default badge
												</Badge>
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
										<div className='flex flex-wrap gap-4'>
											{arrColors.map((item) => (
												<Badge key={item} variant='soft' color={item}>
													<span className='font-bold capitalize'>
														{item}
													</span>{' '}
													soft badge
												</Badge>
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
									rounded
								</CardTitle>
								<CardSubTitle>
									<code>TRounded</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-xl font-bold'>Soft rounded variants</div>
							<div className='text-zinc-500'>
								Predefined solid color intensity button styles.
							</div>
							<PreviewComponent inIFrame={false} mdFile={roundedMd}>
								<div className='flex flex-wrap items-center gap-4'>
									{arrRounded.map((item) => (
										<Badge key={item} variant='soft' rounded={item}>
											{item}
										</Badge>
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
										icon: 'PenTool01',
										color: 'violet',
										size: 'text-3xl',
									}}>
									borderWidth
								</CardTitle>
								<CardSubTitle>
									<code>TBorderWidth</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-xl font-bold'>Outline border width variants</div>
							<div className='text-zinc-500'>
								Predefined solid color intensity button styles.
							</div>
							<PreviewComponent inIFrame={false} mdFile={borderWidthMd}>
								<div className='flex flex-wrap items-center gap-4'>
									{arrBorderWidth.map((item) => (
										<Badge
											key={item}
											variant='outline'
											color='violet'
											borderWidth={item}>
											{item}
										</Badge>
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
										icon: 'Award02',
										color: 'secondary',
										size: 'text-3xl',
									}}>
									With Icon
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-xl font-bold'>Solid color intensity variants</div>
							<div className='text-zinc-500'>
								Predefined outline color intensity badge styles.
							</div>
							<PreviewComponent inIFrame={false} mdFile={withIconMd}>
								<div className='flex flex-wrap gap-4'>
									<Badge variant='outline' color='emerald' rounded='rounded-full'>
										<Icon icon='Tick02' /> Connected
									</Badge>
									<Badge variant='soft' color='amber' rounded='rounded-full'>
										<Icon icon='Alert02' /> Attention
									</Badge>
									<Badge variant='default' color='blue' rounded='rounded-full'>
										<Icon icon='Loading03' /> Loading
									</Badge>
									<Badge variant='solid' color='zinc' rounded='rounded-full'>
										<Icon icon='ToggleOff' /> Closed
									</Badge>
									<Badge variant='soft' color='red' rounded='rounded-full'>
										<Icon icon='TradeDown' /> 23.4
									</Badge>
									<Badge variant='soft' color='emerald' rounded='rounded-full'>
										<Icon icon='TradeUp' /> 7.6
									</Badge>
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
									With Button
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>You can add a close button.</div>
							<PreviewComponent inIFrame={false} mdFile={withButtonMd}>
								<div className='flex flex-wrap items-center gap-4'>
									<Badge variant='soft' color='violet' rounded='rounded-full'>
										Remove Item
										<Button
											aria-label='Cancel'
											icon='CancelCircle'
											color='violet'
											dimension='xs'
											className='p-0!'
										/>
									</Badge>
									<Button
										aria-label='Notification'
										variant='soft'
										className='flex gap-2'>
										Notification
										<Badge
											color='red'
											variant='solid'
											rounded='rounded-full'
											className='aspect-square text-xs font-bold'>
											9
										</Badge>
									</Button>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'UserCircle',
										color: 'amber',
										size: 'text-3xl',
									}}>
									With Avatar
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>You can add a close button.</div>
							<PreviewComponent inIFrame={false} mdFile={withAvatarMd}>
								<div className='flex flex-wrap gap-4'>
									<Badge variant='soft' color='blue' rounded='rounded-full'>
										<Avatar src={Avatar1} size='w-8' className='my-1.5' />
										John Doe
									</Badge>
									<Badge variant='soft' color='red' rounded='rounded-full'>
										<Avatar
											src={Avatar3}
											size='w-8'
											className='my-1.5'
											color='red'
										/>
										Suzana Doe
										<Button
											aria-label='Cancel'
											icon='CancelCircle'
											color='red'
											dimension='xs'
											className='p-0!'
										/>
									</Badge>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'AlignSelection',
										color: 'violet',
										size: 'text-3xl',
									}}>
									Positioned
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Position a badge in the corner of a link, button, avatar or any
								other component.
							</div>
							<PreviewComponent inIFrame={false} mdFile={positionedMd}>
								<div className='flex flex-wrap gap-4'>
									<Button
										aria-label='Mail'
										color='emerald'
										variant='soft'
										className='relative'
										icon='Mail02'>
										Mail
										<Badge
											className='absolute -end-3 -top-3'
											color='red'
											rounded='rounded-full'
											variant='solid'>
											3
										</Badge>
									</Button>
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
							<MdViewer code={extractSnippetUtil(badgeSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default BadgePage;
