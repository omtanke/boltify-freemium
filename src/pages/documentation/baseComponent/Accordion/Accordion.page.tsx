import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardSubTitle,
	CardTitle,
} from '@/components/ui/Card';
import PreviewComponent from '@/components/utils/PreviewComponent';
import { arrColors } from '@/types/colors.type';
import { arrRounded } from '@/types/rounded.type';
import MdViewer from '@/components/utils/MdViewer';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import accordionSource from '@/components/ui/Accordion.tsx?raw'; // eslint-disable-line import/extensions
import basicMd from './_md/basic.md';
import nestedMd from './_md/nested.md';
import plusMd from './_md/plus.md';
import arrowMd from './_md/arrow.md';
import nowMd from './_md/no.md';
import rightMd from './_md/right.md';
import colorMd from './_md/color.md';
import roundedMd from './_md/rounded.md';

const AccordionPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.accordion },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.accordion.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.accordion.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Browse free customizable Tailwind CSS accordions. Choose from basic, nested,
						bordered, arrowed, and other styles to collapse and expand UI elements.
					</div>
					<div className='text-3xl font-bold'>Usage</div>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Svg3DView',
										color: 'blue',
										size: 'text-3xl',
									}}>
									children
								</CardTitle>
								<CardSubTitle>
									<code>ReactNode</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody className='flex flex-col gap-4'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Basic Usage</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										Click the accordions below to expand/collapse the accordion
										content.
									</div>
									<PreviewComponent inIFrame={false} mdFile={basicMd}>
										<Accordion>
											<AccordionItem id='1' title='Title #1'>
												Cras viverra diam id mattis sodales. Suspendisse
												nulla enim, dictum sed gravida id, pretium ut odio.
												Pellentesque condimentum dictum tristique. Nunc
												elementum mauris at turpis pharetra, ut elementum
												nisl sollicitudin. Morbi mauris nunc, interdum in
												sapien id, consectetur lobortis tortor. Nulla
												facilisi. Nam feugiat diam non quam mattis
												condimentum. Pellentesque habitant morbi tristique
												senectus et netus et malesuada fames ac turpis
												egestas. Morbi venenatis nec metus a facilisis.
												Etiam mollis consectetur dui, non maximus libero
												varius a. Cras tincidunt pellentesque orci, eget
												luctus dui pretium laoreet. Quisque ut nisi aliquet
												dolor cursus bibendum ac et nibh. Etiam lobortis
												odio id vulputate consequat. Pellentesque ultrices
												iaculis molestie.
											</AccordionItem>
											<AccordionItem id='2' title='Title #2'>
												Quisque a tellus eu ex eleifend lobortis.
												Pellentesque habitant morbi tristique senectus et
												netus et malesuada fames ac turpis egestas. Nulla
												tincidunt velit at massa semper, id tempor ligula
												venenatis. Donec gravida tellus in commodo lobortis.
												Praesent a lacus in diam aliquam auctor. Cras
												eleifend elementum dui sed vestibulum. Nulla
												lobortis ornare pellentesque. Nulla ac faucibus
												metus, non ultricies ante. Praesent dignissim
												pellentesque libero nec tempus. In ut scelerisque
												tortor, in facilisis arcu. Phasellus interdum congue
												risus, non commodo diam aliquet vel. Duis non mollis
												eros. Ut sit amet nunc eget est tincidunt vulputate.
											</AccordionItem>
										</Accordion>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Nested Usage</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										A basic form of the accordion with sub menu.
									</div>
									<PreviewComponent inIFrame={false} mdFile={nestedMd}>
										<Accordion>
											<AccordionItem id='1' title='Title #1'>
												<Accordion>
													<AccordionItem id='1.1' title='Title #1.1'>
														Cras viverra diam id mattis sodales.
														Suspendisse nulla enim, dictum sed gravida
														id, pretium ut odio. Pellentesque
														condimentum dictum tristique. Nunc elementum
														mauris at turpis pharetra, ut elementum nisl
														sollicitudin. Morbi mauris nunc, interdum in
														sapien id, consectetur lobortis tortor.
														Nulla facilisi. Nam feugiat diam non quam
														mattis condimentum. Pellentesque habitant
														morbi tristique senectus et netus et
														malesuada fames ac turpis egestas. Morbi
														venenatis nec metus a facilisis. Etiam
														mollis consectetur dui, non maximus libero
														varius a. Cras tincidunt pellentesque orci,
														eget luctus dui pretium laoreet. Quisque ut
														nisi aliquet dolor cursus bibendum ac et
														nibh. Etiam lobortis odio id vulputate
														consequat. Pellentesque ultrices iaculis
														molestie.
													</AccordionItem>
													<AccordionItem id='1.2' title='Title #1.2'>
														Quisque a tellus eu ex eleifend lobortis.
														Pellentesque habitant morbi tristique
														senectus et netus et malesuada fames ac
														turpis egestas. Nulla tincidunt velit at
														massa semper, id tempor ligula venenatis.
														Donec gravida tellus in commodo lobortis.
														Praesent a lacus in diam aliquam auctor.
														Cras eleifend elementum dui sed vestibulum.
														Nulla lobortis ornare pellentesque. Nulla ac
														faucibus metus, non ultricies ante. Praesent
														dignissim pellentesque libero nec tempus. In
														ut scelerisque tortor, in facilisis arcu.
														Phasellus interdum congue risus, non commodo
														diam aliquet vel. Duis non mollis eros. Ut
														sit amet nunc eget est tincidunt vulputate.
													</AccordionItem>
												</Accordion>
											</AccordionItem>
											<AccordionItem id='2' title='Title #2'>
												Quisque a tellus eu ex eleifend lobortis.
												Pellentesque habitant morbi tristique senectus et
												netus et malesuada fames ac turpis egestas. Nulla
												tincidunt velit at massa semper, id tempor ligula
												venenatis. Donec gravida tellus in commodo lobortis.
												Praesent a lacus in diam aliquam auctor. Cras
												eleifend elementum dui sed vestibulum. Nulla
												lobortis ornare pellentesque. Nulla ac faucibus
												metus, non ultricies ante. Praesent dignissim
												pellentesque libero nec tempus. In ut scelerisque
												tortor, in facilisis arcu. Phasellus interdum congue
												risus, non commodo diam aliquet vel. Duis non mollis
												eros. Ut sit amet nunc eget est tincidunt vulputate.
											</AccordionItem>
										</Accordion>
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
										icon: 'PlusSign',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									sign
								</CardTitle>
								<CardSubTitle>
									<code>TAccordionSignProps</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody className='flex flex-col gap-4'>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Plus</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										Click the accordions below to expand/collapse the accordion
										content.
									</div>
									<PreviewComponent inIFrame={false} mdFile={plusMd}>
										<Accordion>
											<AccordionItem id='1' title='Title #1'>
												Cras viverra diam id mattis sodales. Suspendisse
												nulla enim, dictum sed gravida id, pretium ut odio.
												Pellentesque condimentum dictum tristique. Nunc
												elementum mauris at turpis pharetra, ut elementum
												nisl sollicitudin. Morbi mauris nunc, interdum in
												sapien id, consectetur lobortis tortor. Nulla
												facilisi. Nam feugiat diam non quam mattis
												condimentum. Pellentesque habitant morbi tristique
												senectus et netus et malesuada fames ac turpis
												egestas. Morbi venenatis nec metus a facilisis.
												Etiam mollis consectetur dui, non maximus libero
												varius a. Cras tincidunt pellentesque orci, eget
												luctus dui pretium laoreet. Quisque ut nisi aliquet
												dolor cursus bibendum ac et nibh. Etiam lobortis
												odio id vulputate consequat. Pellentesque ultrices
												iaculis molestie.
											</AccordionItem>
											<AccordionItem id='2' title='Title #2'>
												Quisque a tellus eu ex eleifend lobortis.
												Pellentesque habitant morbi tristique senectus et
												netus et malesuada fames ac turpis egestas. Nulla
												tincidunt velit at massa semper, id tempor ligula
												venenatis. Donec gravida tellus in commodo lobortis.
												Praesent a lacus in diam aliquam auctor. Cras
												eleifend elementum dui sed vestibulum. Nulla
												lobortis ornare pellentesque. Nulla ac faucibus
												metus, non ultricies ante. Praesent dignissim
												pellentesque libero nec tempus. In ut scelerisque
												tortor, in facilisis arcu. Phasellus interdum congue
												risus, non commodo diam aliquet vel. Duis non mollis
												eros. Ut sit amet nunc eget est tincidunt vulputate.
											</AccordionItem>
										</Accordion>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>Arrow</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										A basic form of the accordion with sub menu.
									</div>
									<PreviewComponent inIFrame={false} mdFile={arrowMd}>
										<Accordion sign='arrow'>
											<AccordionItem id='1' title='Title #1'>
												Cras viverra diam id mattis sodales. Suspendisse
												nulla enim, dictum sed gravida id, pretium ut odio.
												Pellentesque condimentum dictum tristique. Nunc
												elementum mauris at turpis pharetra, ut elementum
												nisl sollicitudin. Morbi mauris nunc, interdum in
												sapien id, consectetur lobortis tortor. Nulla
												facilisi. Nam feugiat diam non quam mattis
												condimentum. Pellentesque habitant morbi tristique
												senectus et netus et malesuada fames ac turpis
												egestas. Morbi venenatis nec metus a facilisis.
												Etiam mollis consectetur dui, non maximus libero
												varius a. Cras tincidunt pellentesque orci, eget
												luctus dui pretium laoreet. Quisque ut nisi aliquet
												dolor cursus bibendum ac et nibh. Etiam lobortis
												odio id vulputate consequat. Pellentesque ultrices
												iaculis molestie.
											</AccordionItem>
											<AccordionItem id='2' title='Title #2'>
												Quisque a tellus eu ex eleifend lobortis.
												Pellentesque habitant morbi tristique senectus et
												netus et malesuada fames ac turpis egestas. Nulla
												tincidunt velit at massa semper, id tempor ligula
												venenatis. Donec gravida tellus in commodo lobortis.
												Praesent a lacus in diam aliquam auctor. Cras
												eleifend elementum dui sed vestibulum. Nulla
												lobortis ornare pellentesque. Nulla ac faucibus
												metus, non ultricies ante. Praesent dignissim
												pellentesque libero nec tempus. In ut scelerisque
												tortor, in facilisis arcu. Phasellus interdum congue
												risus, non commodo diam aliquet vel. Duis non mollis
												eros. Ut sit amet nunc eget est tincidunt vulputate.
											</AccordionItem>
										</Accordion>
									</PreviewComponent>
								</CardBody>
							</Card>
							<Card>
								<CardHeader>
									<CardHeaderChild>
										<CardTitle>No sign</CardTitle>
									</CardHeaderChild>
								</CardHeader>
								<CardBody>
									<div className='text-zinc-500'>
										A basic form of the accordion with sub menu.
									</div>
									<PreviewComponent inIFrame={false} mdFile={nowMd}>
										<Accordion sign='no'>
											<AccordionItem id='1' title='Title #1'>
												Cras viverra diam id mattis sodales. Suspendisse
												nulla enim, dictum sed gravida id, pretium ut odio.
												Pellentesque condimentum dictum tristique. Nunc
												elementum mauris at turpis pharetra, ut elementum
												nisl sollicitudin. Morbi mauris nunc, interdum in
												sapien id, consectetur lobortis tortor. Nulla
												facilisi. Nam feugiat diam non quam mattis
												condimentum. Pellentesque habitant morbi tristique
												senectus et netus et malesuada fames ac turpis
												egestas. Morbi venenatis nec metus a facilisis.
												Etiam mollis consectetur dui, non maximus libero
												varius a. Cras tincidunt pellentesque orci, eget
												luctus dui pretium laoreet. Quisque ut nisi aliquet
												dolor cursus bibendum ac et nibh. Etiam lobortis
												odio id vulputate consequat. Pellentesque ultrices
												iaculis molestie.
											</AccordionItem>
											<AccordionItem id='2' title='Title #2'>
												Quisque a tellus eu ex eleifend lobortis.
												Pellentesque habitant morbi tristique senectus et
												netus et malesuada fames ac turpis egestas. Nulla
												tincidunt velit at massa semper, id tempor ligula
												venenatis. Donec gravida tellus in commodo lobortis.
												Praesent a lacus in diam aliquam auctor. Cras
												eleifend elementum dui sed vestibulum. Nulla
												lobortis ornare pellentesque. Nulla ac faucibus
												metus, non ultricies ante. Praesent dignissim
												pellentesque libero nec tempus. In ut scelerisque
												tortor, in facilisis arcu. Phasellus interdum congue
												risus, non commodo diam aliquet vel. Duis non mollis
												eros. Ut sit amet nunc eget est tincidunt vulputate.
											</AccordionItem>
										</Accordion>
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
										icon: 'ArrowDataTransferHorizontal',
										color: 'amber',
										size: 'text-3xl',
									}}>
									signPosition
								</CardTitle>
								<CardSubTitle>
									<code>TAccordionSignPositionProps</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Click the accordions below to expand/collapse the accordion content.
							</div>
							<PreviewComponent inIFrame={false} mdFile={rightMd}>
								<Accordion signPosition='right'>
									<AccordionItem id='1' title='Title #1'>
										Cras viverra diam id mattis sodales. Suspendisse nulla enim,
										dictum sed gravida id, pretium ut odio. Pellentesque
										condimentum dictum tristique. Nunc elementum mauris at
										turpis pharetra, ut elementum nisl sollicitudin. Morbi
										mauris nunc, interdum in sapien id, consectetur lobortis
										tortor. Nulla facilisi. Nam feugiat diam non quam mattis
										condimentum. Pellentesque habitant morbi tristique senectus
										et netus et malesuada fames ac turpis egestas. Morbi
										venenatis nec metus a facilisis. Etiam mollis consectetur
										dui, non maximus libero varius a. Cras tincidunt
										pellentesque orci, eget luctus dui pretium laoreet. Quisque
										ut nisi aliquet dolor cursus bibendum ac et nibh. Etiam
										lobortis odio id vulputate consequat. Pellentesque ultrices
										iaculis molestie.
									</AccordionItem>
									<AccordionItem id='2' title='Title #2'>
										Quisque a tellus eu ex eleifend lobortis. Pellentesque
										habitant morbi tristique senectus et netus et malesuada
										fames ac turpis egestas. Nulla tincidunt velit at massa
										semper, id tempor ligula venenatis. Donec gravida tellus in
										commodo lobortis. Praesent a lacus in diam aliquam auctor.
										Cras eleifend elementum dui sed vestibulum. Nulla lobortis
										ornare pellentesque. Nulla ac faucibus metus, non ultricies
										ante. Praesent dignissim pellentesque libero nec tempus. In
										ut scelerisque tortor, in facilisis arcu. Phasellus interdum
										congue risus, non commodo diam aliquet vel. Duis non mollis
										eros. Ut sit amet nunc eget est tincidunt vulputate.
									</AccordionItem>
								</Accordion>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'ColorPicker',
										color: 'blue',
										size: 'text-3xl',
									}}>
									color
								</CardTitle>
								<CardSubTitle>
									<code>TColors</code>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Click the accordions below to expand/collapse the accordion content.
							</div>
							<PreviewComponent inIFrame={false} mdFile={colorMd}>
								<Accordion>
									{arrColors.map((color) => (
										<AccordionItem
											key={color}
											id={color}
											title={`Title #${color}`}
											color={color}>
											Cras viverra diam id mattis sodales. Suspendisse nulla
											enim, dictum sed gravida id, pretium ut odio.
											Pellentesque condimentum dictum tristique. Nunc
											elementum mauris at turpis pharetra, ut elementum nisl
											sollicitudin. Morbi mauris nunc, interdum in sapien id,
											consectetur lobortis tortor. Nulla facilisi. Nam feugiat
											diam non quam mattis condimentum. Pellentesque habitant
											morbi tristique senectus et netus et malesuada fames ac
											turpis egestas. Morbi venenatis nec metus a facilisis.
											Etiam mollis consectetur dui, non maximus libero varius
											a. Cras tincidunt pellentesque orci, eget luctus dui
											pretium laoreet. Quisque ut nisi aliquet dolor cursus
											bibendum ac et nibh. Etiam lobortis odio id vulputate
											consequat. Pellentesque ultrices iaculis molestie.
										</AccordionItem>
									))}
								</Accordion>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'JoinRound',
										color: 'violet',
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
							<div className='text-zinc-500'>
								Click the accordions below to expand/collapse the accordion content.
							</div>
							<PreviewComponent inIFrame={false} mdFile={roundedMd}>
								<div className='grid grid-cols-12 gap-4'>
									{arrRounded.map((item) => (
										<Accordion
											key={item}
											rounded={item}
											className='col-span-12 md:col-span-6 lg:col-span-4'>
											<AccordionItem id='1' title={`Title #1 ${item}`}>
												Cras viverra diam id mattis sodales. Suspendisse
												nulla enim, dictum sed gravida id, pretium ut odio.
												Pellentesque condimentum dictum tristique. Nunc
												elementum mauris at turpis pharetra, ut elementum
												nisl sollicitudin. Morbi mauris nunc, interdum in
												sapien id, consectetur lobortis tortor. Nulla
												facilisi. Nam feugiat diam non quam mattis
												condimentum. Pellentesque habitant morbi tristique
												senectus et netus et malesuada fames ac turpis
												egestas. Morbi venenatis nec metus a facilisis.
												Etiam mollis consectetur dui, non maximus libero
												varius a. Cras tincidunt pellentesque orci, eget
												luctus dui pretium laoreet. Quisque ut nisi aliquet
												dolor cursus bibendum ac et nibh. Etiam lobortis
												odio id vulputate consequat. Pellentesque ultrices
												iaculis molestie.
											</AccordionItem>
											<AccordionItem id='2' title={`Title #2 ${item}`}>
												Cras viverra diam id mattis sodales. Suspendisse
												nulla enim, dictum sed gravida id, pretium ut odio.
												Pellentesque condimentum dictum tristique. Nunc
												elementum mauris at turpis pharetra, ut elementum
												nisl sollicitudin. Morbi mauris nunc, interdum in
												sapien id, consectetur lobortis tortor. Nulla
												facilisi. Nam feugiat diam non quam mattis
												condimentum. Pellentesque habitant morbi tristique
												senectus et netus et malesuada fames ac turpis
												egestas. Morbi venenatis nec metus a facilisis.
												Etiam mollis consectetur dui, non maximus libero
												varius a. Cras tincidunt pellentesque orci, eget
												luctus dui pretium laoreet. Quisque ut nisi aliquet
												dolor cursus bibendum ac et nibh. Etiam lobortis
												odio id vulputate consequat. Pellentesque ultrices
												iaculis molestie.
											</AccordionItem>
										</Accordion>
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
							<MdViewer code={extractSnippetUtil(accordionSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default AccordionPage;
