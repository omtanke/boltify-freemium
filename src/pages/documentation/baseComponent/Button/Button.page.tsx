import Header, { HeaderLeft } from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Button, { TButtonDimensions, TButtonVariants } from '@/components/ui/Button';
import variantMD from './_md/variant.md';
import sizeMD from './_md/size.md';
import colorSolidMd from './_md/colorSolid.md';
import colorOutlineMd from './_md/colorOutline.md';
import colorDefaultMd from './_md/colorDefault.md';
import colorSoftMd from './_md/colorSoft.md';
import borderWidthMd from './_md/borderWidth.md';
import roundedMd from './_md/rounded.md';
import iconMd from './_md/icon.md';
import rightIconMd from './_md/rightIcon.md';
import onlyIconMd from './_md/onlyIcon.md';
import activeMd from './_md/active.md';
import disableMd from './_md/disable.md';
import loadingMd from './_md/loading.md';
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardSubTitle,
	CardTitle,
} from '@/components/ui/Card';
import PreviewComponent from '@/components/utils/PreviewComponent';
import { arrColors } from '@/types/colors.type';
import { arrBorderWidth } from '@/types/borderWidth.type';
import { arrRounded } from '@/types/rounded.type';
import MdViewer from '@/components/utils/MdViewer';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import buttonSource from '@/components/ui/Button.tsx?raw'; // eslint-disable-line import/extensions

const ButtonPage = () => {
	const BTN_VARIANT: TButtonVariants[] = ['solid', 'outline', 'default', 'soft', 'link'];
	const BTN_SIZE: TButtonDimensions[] = ['xs', 'sm', 'default', 'lg', 'xl'];

	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.button },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.button.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.button.text}
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
									variant
								</CardTitle>
								<CardSubTitle>
									<code>TButtonVariants</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Explore the most commonly used button styles such as solid, outline,
								ghost, soft, link, and more.
							</div>
							<PreviewComponent inIFrame={false} mdFile={variantMD}>
								<div className='flex flex-wrap items-center gap-4'>
									{BTN_VARIANT.map((item) => (
										<Button key={item} variant={item} aria-label={item}>
											{item}
										</Button>
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
										<div className='flex flex-wrap items-center gap-4'>
											{arrColors.map((item) => (
												<Button
													key={item}
													variant='solid'
													color={item}
													aria-label={item}>
													{item}
												</Button>
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
										<div className='flex flex-wrap items-center gap-4'>
											{arrColors.map((item) => (
												<Button
													key={item}
													variant='outline'
													color={item}
													aria-label={item}>
													{item}
												</Button>
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
										<div className='flex flex-wrap items-center gap-4'>
											{arrColors.map((item) => (
												<Button
													key={item}
													variant='default'
													color={item}
													aria-label={item}>
													{item}
												</Button>
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
										<div className='flex flex-wrap items-center gap-4'>
											{arrColors.map((item) => (
												<Button
													key={item}
													variant='soft'
													color={item}
													aria-label={item}>
													{item}
												</Button>
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
										icon: 'Ruler',
										color: 'amber',
										size: 'text-3xl',
									}}>
									dimension
								</CardTitle>
								<CardSubTitle>
									<code>TButtonDimensions</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Buttons stacked small to large sizes.
							</div>
							<PreviewComponent inIFrame={false} mdFile={sizeMD}>
								<div className='flex flex-wrap items-center gap-4'>
									{BTN_SIZE.map((item) => (
										<Button
											key={item}
											variant='solid'
											dimension={item}
											aria-label={item}>
											{item}
										</Button>
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
										<Button
											key={item}
											variant='outline'
											borderWidth={item}
											aria-label={item}>
											{item}
										</Button>
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
										<Button
											key={item}
											variant='soft'
											rounded={item}
											aria-label={item}>
											{item}
										</Button>
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
									Icons
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody className='flex flex-col gap-4'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>icon</CardTitle>{' '}
										<CardSubTitle>
											<code>TIcons</code>
										</CardSubTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										A contained button with an icon.
									</div>
									<PreviewComponent inIFrame={false} mdFile={iconMd}>
										<div className='flex flex-wrap items-center gap-4'>
											<Button
												icon='Cancel02'
												variant='default'
												color='red'
												aria-label='Cancel'>
												Cancel
											</Button>
											<Button
												icon='FloppyDisk'
												variant='soft'
												aria-label='Save'>
												Save
											</Button>
											<Button
												icon='Megaphone02'
												variant='solid'
												color='emerald'
												aria-label='Publish'>
												Publish
											</Button>
											<Button
												icon='ShoppingBasketAdd03'
												variant='outline'
												color='amber'
												aria-label='Add to Cart'>
												Add to Cart
											</Button>
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>rightIcon</CardTitle>
										<CardSubTitle>
											<code>TIcons</code>
										</CardSubTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										A contained button with an icon.
									</div>
									<PreviewComponent inIFrame={false} mdFile={rightIconMd}>
										<div className='flex flex-wrap items-center gap-4'>
											<Button
												rightIcon='ArrowRight01'
												variant='default'
												color='zinc'
												aria-label='Read more'>
												Read more
											</Button>
											<Button
												rightIcon='Login03'
												variant='soft'
												aria-label='Sign up'>
												Sign up
											</Button>
										</div>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Only icon</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										A contained button with an icon.
									</div>
									<PreviewComponent inIFrame={false} mdFile={onlyIconMd}>
										<div className='flex flex-wrap items-center gap-4'>
											<Button
												icon='Home09'
												variant='soft'
												color='emerald'
												aria-label='Home'
											/>
											<Button
												icon='Login03'
												variant='outline'
												aria-label='Login'
											/>
											<Button
												icon='AccountSetting01'
												variant='solid'
												color='secondary'
												aria-label='Settings'
											/>
											<Button
												icon='BorderNone01'
												variant='default'
												color='amber'
												aria-label='Settings'
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
										icon: 'ToggleOn',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									isActive
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>A contained button with an icon.</div>
							<PreviewComponent inIFrame={false} mdFile={activeMd}>
								<div className='flex flex-wrap items-center gap-4'>
									{BTN_VARIANT.map((item) => (
										<Button
											key={item}
											variant={item}
											isActive
											aria-label={item}>
											{item}
										</Button>
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
										icon: 'ToggleOff',
										color: 'red',
										size: 'text-3xl',
									}}>
									isDisable
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>A contained button with an icon.</div>
							<PreviewComponent inIFrame={false} mdFile={disableMd}>
								<div className='flex flex-wrap items-center gap-4'>
									{BTN_VARIANT.map((item) => (
										<Button
											key={item}
											variant={item}
											isDisable
											aria-label={item}>
											{item}
										</Button>
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
										icon: 'Loading03',
										color: 'amber',
										size: 'text-3xl',
									}}>
									isLoading
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>A contained button with an icon.</div>
							<PreviewComponent inIFrame={false} mdFile={loadingMd}>
								<div className='flex flex-wrap items-center gap-4'>
									{BTN_VARIANT.map((item) => (
										<Button
											key={item}
											icon='FloppyDisk'
											variant={item}
											isLoading
											aria-label={item}>
											{item}
										</Button>
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
							<MdViewer code={extractSnippetUtil(buttonSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default ButtonPage;
