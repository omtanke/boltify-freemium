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
import Button, { TButtonVariants } from '@/components/ui/Button';
import ButtonGroup from '@/components/ui/ButtonGroup';
import MdViewer from '@/components/utils/MdViewer';
import variantMd from './_md/variant.md';
import verticalMd from './_md/vertical.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import buttonGroupSource from '@/components/ui/ButtonGroup.tsx?raw'; // eslint-disable-line import/extensions

const ButtonGroupPage = () => {
	const BTN_VARIANT: TButtonVariants[] = ['solid', 'outline', 'default', 'soft'];

	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.buttonGroup },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.buttonGroup.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.buttonGroup.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Button groups have the same properties as buttons, they are pre-built
						Tailwind CSS buttons that can be stacked in a vertical line or placed
						horizontally. They are often used in toolbars, such as in WYSIWYG editors.
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
							<PreviewComponent mdFile={variantMd} inIFrame={false}>
								<div className='flex flex-wrap items-center gap-4'>
									{BTN_VARIANT.map((item) => (
										<ButtonGroup key={item} variant={item}>
											<Button aria-label='Example'>{item}</Button>
											<Button aria-label='Example'>Button</Button>
											<Button aria-label='Example'>Button</Button>
										</ButtonGroup>
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
										icon: 'CarouselVertical',
										color: 'secondary',
										size: 'text-3xl',
									}}>
									isVertical
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Explore the most commonly used button styles such as solid, outline,
								ghost, soft, link, and more.
							</div>
							<PreviewComponent mdFile={verticalMd} inIFrame={false}>
								<div className='flex flex-wrap items-center gap-4'>
									{BTN_VARIANT.map((item) => (
										<ButtonGroup
											key={item}
											variant={item}
											isVertical
											color='secondary'>
											<Button aria-label='Example'>{item}</Button>
											<Button aria-label='Example'>Button</Button>
											<Button aria-label='Example'>Button</Button>
										</ButtonGroup>
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
							<MdViewer code={extractSnippetUtil(buttonGroupSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default ButtonGroupPage;
