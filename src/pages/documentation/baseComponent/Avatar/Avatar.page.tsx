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
import Avatar, { TAvatarSize, TAvatarVariants } from '@/components/ui/Avatar';
import { Avatar1, Avatar2, Avatar3 } from '@/assets/images';
import { arrColors } from '@/types/colors.type';
import { arrRounded } from '@/types/rounded.type';
import { arrBorderWidth } from '@/types/borderWidth.type';
import MdViewer from '@/components/utils/MdViewer';
import srcMd from './_md/src.md';
import nameMd from './_md/name.md';
import variantImageMd from './_md/variantImage.md';
import variantNameMd from './_md/variantName.md';
import imageColorMd from './_md/imageColor.md';
import nameColorMd from './_md/nameColor.md';
import borderWidthMd from './_md/borderWidth.md';
import roundedMd from './_md/rounded.md';
import sizeMd from './_md/size.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import avatarSource from '@/components/ui/Avatar.tsx?raw'; // eslint-disable-line import/extensions

const arrAvatarSizes: TAvatarSize[] = [
	'w-2',
	'w-2.5',
	'w-3',
	'w-3.5',
	'w-4',
	'w-5',
	'w-6',
	'w-7',
	'w-8',
	'w-9',
	'w-10',
	'w-11',
	'w-12',
	'w-14',
	'w-16',
	'w-20',
	'w-24',
	'w-28',
	'w-32',
	'w-36',
	'w-40',
	'w-44',
	'w-48',
	'w-52',
	'w-56',
	'w-60',
	'w-64',
	'w-72',
	'w-80',
	'w-96',
];
const AVATAR_VARIANT: TAvatarVariants[] = ['solid', 'outline', 'default', 'soft'];

const AvatarPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.avatar },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.avatar.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.avatar.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Use Boltify Avatars as placeholders for user profile pictures or initials.
						Choose from circular, rounded, with status indicators, badges, and more.
					</div>
					<div className='text-3xl font-bold'>Usage</div>

					{/* SRC */}
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Link02',
										color: 'blue',
										size: 'text-3xl',
									}}>
									src
								</CardTitle>
								<CardSubTitle>
									<code>string</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Write the URL of the avatar image.</div>
							<PreviewComponent inIFrame={false} mdFile={srcMd}>
								<div className='flex flex-wrap gap-4'>
									<Avatar src={Avatar1} name='John Doe' />
									<Avatar src={Avatar2} name='John Doe' color='zinc' />
									<Avatar src={Avatar3} name='John Doe' color='secondary' />
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>
					{/* Name */}
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Tag02',
										color: 'secondary',
										size: 'text-3xl',
									}}>
									name
								</CardTitle>
								<CardSubTitle>
									<code>string</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Write the URL of the avatar image.</div>
							<PreviewComponent inIFrame={false} mdFile={nameMd}>
								<div className='flex flex-wrap gap-4'>
									<Avatar name='John Doe' />
									<Avatar name='John Doe' color='zinc' />
									<Avatar name='John Doe' color='secondary' />
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					{/* Variant */}
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
									<code>TAvatarVariants</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody className='flex flex-col gap-4'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>With image variants</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										If you use PNG images, you can adjust the background color.
									</div>
									<PreviewComponent inIFrame={false} mdFile={variantImageMd}>
										<div className='flex flex-wrap gap-4'>
											{AVATAR_VARIANT.map((item) => (
												<Avatar
													key={item}
													src={Avatar1}
													name='John Doe'
													variant={item}
												/>
											))}
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>

							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Without image variants</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										You can use it if the image is not uploaded or with the
										initials of the name.
									</div>
									<PreviewComponent inIFrame={false} mdFile={variantNameMd}>
										<div className='flex flex-wrap gap-4'>
											{AVATAR_VARIANT.map((item) => (
												<Avatar key={item} name='John Doe' variant={item} />
											))}
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
						</CardBody>
					</Card>

					{/* Color */}
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
										<CardTitle>Color and PNG image variants</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										If you use PNG images, you can adjust the background color.
									</div>
									<PreviewComponent inIFrame={false} mdFile={imageColorMd}>
										<div className='flex flex-wrap gap-4'>
											{arrColors.map((color) => (
												<Avatar
													key={color}
													src={Avatar1}
													name='John Doe'
													color={color}
												/>
											))}
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>

							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Color and Letter variants</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										You can use it if the image is not uploaded or with the
										initials of the name.
									</div>
									<PreviewComponent inIFrame={false} mdFile={nameColorMd}>
										<div className='flex flex-wrap gap-4'>
											{arrColors.map((color) => (
												<Avatar
													key={color}
													name='John Doe'
													color={color}
													variant='solid'
												/>
											))}
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
						</CardBody>
					</Card>

					{/* Border Width */}
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
							<div className='text-zinc-500'>Write the URL of the avatar image.</div>
							<PreviewComponent inIFrame={false} mdFile={borderWidthMd}>
								<div className='grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12'>
									{arrBorderWidth.map((item) => (
										<div
											key={item}
											className='flex flex-col items-center justify-center gap-4'>
											<Avatar
												borderWidth={item}
												name='John Doe'
												variant='outline'
											/>
											<code>{item}</code>
										</div>
									))}
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					{/* Rounded */}
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
							<div className='text-zinc-500'>Write the URL of the avatar image.</div>
							<PreviewComponent inIFrame={false} mdFile={roundedMd}>
								<div className='grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12'>
									{arrRounded.map((item) => (
										<div
											key={item}
											className='flex flex-col items-center justify-center gap-4'>
											<Avatar rounded={item} src={Avatar1} name='John Doe' />
											<code>{item}</code>
										</div>
									))}
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					{/* Size */}
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Ruler',
										color: 'amber',
										size: 'text-3xl',
									}}>
									size
								</CardTitle>
								<CardSubTitle>
									<code>TRounded</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>Write the URL of the avatar image.</div>
							<PreviewComponent inIFrame={false} mdFile={sizeMd}>
								<div className='flex flex-wrap gap-4'>
									{arrAvatarSizes.map((item) => (
										<div
											key={item}
											className='flex flex-col items-center justify-center gap-4'>
											<Avatar size={item} src={Avatar1} name='John Doe' />
											<code>{item}</code>
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
							<MdViewer code={extractSnippetUtil(avatarSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default AvatarPage;
