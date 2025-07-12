import { useState } from 'react';
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
import Button from '@/components/ui/Button';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalFooterChild,
	ModalHeader,
	TModalSize,
} from '@/components/ui/Modal';
import { arrScreens, TScreens } from '@/types/screens.type';
import MdViewer from '@/components/utils/MdViewer';
import basicUsageMd from './_md/basicUsage.md';
import centeredMd from './_md/centered.md';
import scrollableMd from './_md/scrollable.md';
import staticBackMd from './_md/staticBack.md';
import sizeMd from './_md/size.md';
import fullscreenMd from './_md/fullscreen.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import modalSource from '@/components/ui/Modal.tsx?raw'; // eslint-disable-line import/extensions

const ModalPage = () => {
	const [status, setStatus] = useState<boolean>(false);
	const [statusCentered, setStatusCentered] = useState<boolean>(false);
	const [statusScroll, setStatusScroll] = useState<boolean>(false);
	const [statusScrollNot, setStatusScrollNot] = useState<boolean>(false);
	const [statusBackdrop, setStatusBackdrop] = useState<boolean>(false);
	const [statusBackdropNot, setStatusBackdropNot] = useState<boolean>(false);

	const customModalSizes: TModalSize[] = ['50%', '20vw', 'sm', 'md', 'lg', 'xl', '2xl'];
	const [statusSize, setStatusSize] = useState<boolean>(false);
	const [size, setSize] = useState<TModalSize>('sm');

	const screens: (TScreens | boolean)[] = [true, false, ...arrScreens];
	const [statusScreen, setStatusScreen] = useState<boolean>(false);
	const [screen, setScreen] = useState<TScreens | boolean>('sm');

	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.modal },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.modal.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.modal.text}
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
										icon: 'BookOpen02',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Basic usage
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>You can add a close button.</div>
							<PreviewComponent mdFile={basicUsageMd as RequestInfo} inIFrame={false}>
								<Button
									aria-label='Open'
									onClick={() => setStatus(true)}
									variant='soft'>
									Open modal
								</Button>
								<Modal isOpen={status} setIsOpen={setStatus}>
									<ModalHeader>Modal Title Here</ModalHeader>
									<ModalBody>Modal content here.</ModalBody>
									<ModalFooter>
										<ModalFooterChild>Footer Child 1</ModalFooterChild>
										<ModalFooterChild>
											<Button
												aria-label='Close'
												color='red'
												icon='Cancel01'
												onClick={() => setStatus(false)}>
												Close
											</Button>
											<Button
												aria-label='Save'
												variant='soft'
												icon='FloppyDisk'>
												Save
											</Button>
										</ModalFooterChild>
									</ModalFooter>
								</Modal>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Centralized',
										color: 'amber',
										size: 'text-3xl',
									}}>
									Centered - isCentered
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>Modal</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>You can add a close button.</div>
							<PreviewComponent mdFile={centeredMd as RequestInfo} inIFrame={false}>
								<Button
									aria-label='Open'
									onClick={() => setStatusCentered(true)}
									variant='soft'>
									Open modal
								</Button>
								<Modal
									isOpen={statusCentered}
									setIsOpen={setStatusCentered}
									isCentered>
									<ModalHeader>Modal Title Here</ModalHeader>
									<ModalBody>Modal content here.</ModalBody>
									<ModalFooter>
										<ModalFooterChild>Footer Child 1</ModalFooterChild>
										<ModalFooterChild>
											<Button
												aria-label='Close'
												color='red'
												icon='Cancel01'
												onClick={() => setStatusCentered(false)}>
												Close
											</Button>
											<Button
												aria-label='Save'
												variant='soft'
												icon='FloppyDisk'>
												Save
											</Button>
										</ModalFooterChild>
									</ModalFooter>
								</Modal>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'ScrollVertical',
										color: 'blue',
										size: 'text-3xl',
									}}>
									Scrollable - isScrollable
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>Modal</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>You can add a close button.</div>
							<PreviewComponent mdFile={scrollableMd as RequestInfo} inIFrame={false}>
								<div className='flex flex-wrap gap-4'>
									<Button
										aria-label='Scrollable content'
										onClick={() => setStatusScroll(true)}
										color='emerald'
										variant='soft'>
										Scrollable content
									</Button>
									<Modal
										isOpen={statusScroll}
										setIsOpen={setStatusScroll}
										isScrollable>
										<ModalHeader>Modal Title Here</ModalHeader>
										<ModalBody>
											<div>
												<p>
													Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. Maecenas bibendum, purus
													placerat tempor vestibulum, magna odio porta
													eros, ut aliquet mi erat et erat. Fusce
													facilisis neque eu sapien suscipit posuere et ac
													sapien. Mauris scelerisque nulla a tempor
													tincidunt. Proin molestie orci in turpis cursus
													ornare. Mauris pulvinar cursus lobortis. Class
													aptent taciti sociosqu ad litora torquent per
													conubia nostra, per inceptos himenaeos. Morbi
													sollicitudin lectus ac arcu finibus, hendrerit
													bibendum tortor posuere.
												</p>
												<p>
													Donec vel eros magna. Nullam auctor, augue sit
													amet convallis viverra, purus dolor accumsan
													lacus, id tempor justo ante volutpat turpis.
													Curabitur sapien elit, tincidunt vitae erat id,
													mattis luctus nibh. Nulla imperdiet ipsum non
													libero venenatis ultricies quis non nisl. Nam
													scelerisque fermentum dui. Maecenas condimentum
													ullamcorper urna, quis ultrices ante dapibus eu.
													Integer dignissim massa a justo porta congue.
													Nulla quis orci fermentum, efficitur dui quis,
													blandit augue. Sed sagittis pretium hendrerit.
													Fusce imperdiet, magna vitae auctor feugiat,
													orci mauris ultrices neque, at vestibulum nisl
													augue at lorem. Etiam quis dignissim quam,
													pharetra placerat purus. Quisque ultrices
													convallis finibus. Curabitur id posuere elit,
													sit amet laoreet augue.
												</p>
												<p>
													Suspendisse a turpis vitae est dignissim
													vulputate eget sed sem. Donec enim leo, volutpat
													non elit id, ornare posuere massa. Nullam
													laoreet nulla at malesuada pharetra. Proin a
													velit ac enim fermentum tristique. Vivamus
													ultricies laoreet velit, ac rhoncus sem
													tincidunt non. Donec faucibus tellus vitae justo
													dignissim facilisis. Maecenas in tellus in neque
													congue vestibulum eu maximus mi. Nullam
													molestie, sapien vel efficitur laoreet, justo
													augue imperdiet tellus, ut imperdiet ipsum leo
													congue purus. Nunc sagittis ipsum vel magna
													blandit, nec sagittis arcu auctor. Vivamus
													vulputate feugiat imperdiet.
												</p>
												<p>
													Nulla sed bibendum sapien, eget feugiat purus.
													Vestibulum ante ipsum primis in faucibus orci
													luctus et ultrices posuere cubilia curae;
													Maecenas accumsan, quam vitae suscipit
													sollicitudin, ante orci pulvinar nibh, eu
													consectetur odio nibh non arcu. Aenean iaculis,
													nisi id vestibulum finibus, lorem augue laoreet
													ligula, sed aliquam ligula velit nec erat.
													Vestibulum eu faucibus libero. Proin id mi
													consequat, egestas nibh ac, efficitur tortor.
													Etiam dapibus tincidunt lobortis. Proin
													fermentum condimentum enim, sit amet congue
													lorem ultricies quis. Donec sagittis bibendum
													dolor, nec ornare nulla. In sit amet leo a nulla
													fermentum pellentesque. Aenean nec tempus eros.
													Integer ut magna maximus, fermentum ante vel,
													finibus dolor. Etiam nec ante nibh. Quisque ac
													justo rhoncus nulla mollis semper. Donec tortor
													risus, facilisis nec tempus a, congue eu quam.
												</p>
												<p>
													Integer pretium felis sit amet erat ultrices
													semper. Sed id ipsum odio. Donec quis cursus ex,
													id posuere nunc. Maecenas ut eros ultrices,
													tempus velit sodales, finibus eros. Proin quis
													lacinia dui, ac sagittis neque. Duis condimentum
													viverra tortor ac molestie. Donec congue leo
													ipsum. Vivamus venenatis vestibulum lacus, sit
													amet tincidunt magna porttitor at. Phasellus in
													odio aliquet dui commodo elementum. Quisque
													scelerisque euismod ex at placerat. Proin
													gravida lorem sed interdum dapibus. Fusce a
													aliquam magna, eget ullamcorper urna.
												</p>
												<p>
													Nam facilisis ex a est viverra, sit amet
													ultrices leo rutrum. Ut pretium, nulla quis
													malesuada tincidunt, magna felis suscipit orci,
													eu malesuada erat purus luctus est. Aenean
													malesuada at tortor in varius. Sed ullamcorper
													enim ut metus gravida, a ullamcorper mi maximus.
													Quisque scelerisque vel nisi nec accumsan. Sed
													vitae elit ac magna feugiat pulvinar. Nunc in
													velit ut tellus convallis aliquam nec vitae
													urna. In ac consequat libero. Duis maximus
													bibendum orci et mollis. Vivamus eu enim
													malesuada, elementum diam quis, rhoncus odio.
													Integer quam nibh, blandit eget arcu quis,
													ornare euismod lectus. Nunc pharetra id massa id
													posuere. Nullam ligula eros, sodales eget arcu
													id, convallis volutpat erat. Proin interdum
													ligula at aliquet congue. Proin ut orci nisi.
													Nulla et lectus sed lacus dapibus gravida
													viverra et dolor.
												</p>
												<p>
													Etiam molestie tellus mauris, a hendrerit erat
													fringilla id. Cras viverra erat ornare, laoreet
													velit eu, interdum mi. Etiam pretium
													sollicitudin sem a imperdiet. Cras suscipit
													congue auctor. Maecenas fermentum nunc varius
													metus cursus, quis consectetur risus faucibus.
													Donec porta risus iaculis, scelerisque nisl
													vitae, consequat massa. Etiam mauris magna,
													posuere sed sem et, interdum dapibus elit. Morbi
													et enim ultricies, euismod est sed, imperdiet
													augue. Nunc lectus purus, ultricies ac vehicula
													at, accumsan et est. Ut pretium rutrum turpis,
													nec aliquet diam blandit ac. Suspendisse
													pellentesque finibus ipsum, non gravida sem
													egestas vitae. In vitae velit neque.
												</p>
												<p>
													Morbi vehicula turpis eget tortor consectetur
													tempus. Nunc id cursus nibh. Maecenas commodo mi
													ac nibh mollis, ac egestas nisi sodales.
													Maecenas libero dolor, suscipit vitae libero
													quis, condimentum commodo mi. In mi mauris,
													mollis vel condimentum tristique, finibus id
													urna. Etiam sit amet tempus metus. Praesent id
													ante sed tortor consequat dictum. Proin dictum
													ligula ac convallis laoreet. Nulla condimentum
													lobortis fermentum. Nam lobortis lorem vitae
													augue maximus hendrerit at at ante. Integer
													scelerisque eget tellus vitae rutrum. Donec et
													diam at purus maximus consequat. Ut in fermentum
													ligula.
												</p>
												<p>
													Nunc eget eros ex. Maecenas fringilla dictum
													libero, ac consequat urna ornare non. Nunc
													dapibus felis tortor, non efficitur nulla
													porttitor id. Pellentesque habitant morbi
													tristique senectus et netus et malesuada fames
													ac turpis egestas. Etiam convallis ex quis ante
													fermentum elementum. Suspendisse at efficitur
													lacus. Proin eu vestibulum est. Nunc massa
													libero, placerat interdum vestibulum vitae,
													pretium non ligula. Suspendisse eget ante
													ultricies ante tempus tempor et pellentesque
													leo. Vestibulum accumsan ullamcorper risus, nec
													viverra dolor eleifend ac. Mauris egestas mattis
													lacus, commodo varius nisi volutpat eu. Quisque
													lacinia at lectus et vulputate. In at turpis
													tempor, bibendum purus vitae, auctor ipsum.
													Praesent placerat pellentesque lacus non
													elementum. Morbi mollis at lacus in volutpat.
													Vivamus vel quam ante.
												</p>
											</div>
										</ModalBody>
										<ModalFooter>
											<ModalFooterChild>Footer Child 1</ModalFooterChild>
											<ModalFooterChild>
												<Button
													aria-label='Close'
													color='red'
													icon='Cancel01'
													onClick={() => setStatusScroll(false)}>
													Close
												</Button>
												<Button
													aria-label='Save'
													variant='soft'
													icon='FloppyDisk'>
													Save
												</Button>
											</ModalFooterChild>
										</ModalFooter>
									</Modal>
									<Button
										aria-label='Not scrollable content'
										onClick={() => setStatusScrollNot(true)}
										color='red'
										variant='soft'>
										Not scrollable content
									</Button>
									<Modal isOpen={statusScrollNot} setIsOpen={setStatusScrollNot}>
										<ModalHeader>Modal Title Here</ModalHeader>
										<ModalBody>
											<div>
												<p>
													Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. Maecenas bibendum, purus
													placerat tempor vestibulum, magna odio porta
													eros, ut aliquet mi erat et erat. Fusce
													facilisis neque eu sapien suscipit posuere et ac
													sapien. Mauris scelerisque nulla a tempor
													tincidunt. Proin molestie orci in turpis cursus
													ornare. Mauris pulvinar cursus lobortis. Class
													aptent taciti sociosqu ad litora torquent per
													conubia nostra, per inceptos himenaeos. Morbi
													sollicitudin lectus ac arcu finibus, hendrerit
													bibendum tortor posuere.
												</p>
												<p>
													Donec vel eros magna. Nullam auctor, augue sit
													amet convallis viverra, purus dolor accumsan
													lacus, id tempor justo ante volutpat turpis.
													Curabitur sapien elit, tincidunt vitae erat id,
													mattis luctus nibh. Nulla imperdiet ipsum non
													libero venenatis ultricies quis non nisl. Nam
													scelerisque fermentum dui. Maecenas condimentum
													ullamcorper urna, quis ultrices ante dapibus eu.
													Integer dignissim massa a justo porta congue.
													Nulla quis orci fermentum, efficitur dui quis,
													blandit augue. Sed sagittis pretium hendrerit.
													Fusce imperdiet, magna vitae auctor feugiat,
													orci mauris ultrices neque, at vestibulum nisl
													augue at lorem. Etiam quis dignissim quam,
													pharetra placerat purus. Quisque ultrices
													convallis finibus. Curabitur id posuere elit,
													sit amet laoreet augue.
												</p>
												<p>
													Suspendisse a turpis vitae est dignissim
													vulputate eget sed sem. Donec enim leo, volutpat
													non elit id, ornare posuere massa. Nullam
													laoreet nulla at malesuada pharetra. Proin a
													velit ac enim fermentum tristique. Vivamus
													ultricies laoreet velit, ac rhoncus sem
													tincidunt non. Donec faucibus tellus vitae justo
													dignissim facilisis. Maecenas in tellus in neque
													congue vestibulum eu maximus mi. Nullam
													molestie, sapien vel efficitur laoreet, justo
													augue imperdiet tellus, ut imperdiet ipsum leo
													congue purus. Nunc sagittis ipsum vel magna
													blandit, nec sagittis arcu auctor. Vivamus
													vulputate feugiat imperdiet.
												</p>
												<p>
													Nulla sed bibendum sapien, eget feugiat purus.
													Vestibulum ante ipsum primis in faucibus orci
													luctus et ultrices posuere cubilia curae;
													Maecenas accumsan, quam vitae suscipit
													sollicitudin, ante orci pulvinar nibh, eu
													consectetur odio nibh non arcu. Aenean iaculis,
													nisi id vestibulum finibus, lorem augue laoreet
													ligula, sed aliquam ligula velit nec erat.
													Vestibulum eu faucibus libero. Proin id mi
													consequat, egestas nibh ac, efficitur tortor.
													Etiam dapibus tincidunt lobortis. Proin
													fermentum condimentum enim, sit amet congue
													lorem ultricies quis. Donec sagittis bibendum
													dolor, nec ornare nulla. In sit amet leo a nulla
													fermentum pellentesque. Aenean nec tempus eros.
													Integer ut magna maximus, fermentum ante vel,
													finibus dolor. Etiam nec ante nibh. Quisque ac
													justo rhoncus nulla mollis semper. Donec tortor
													risus, facilisis nec tempus a, congue eu quam.
												</p>
												<p>
													Integer pretium felis sit amet erat ultrices
													semper. Sed id ipsum odio. Donec quis cursus ex,
													id posuere nunc. Maecenas ut eros ultrices,
													tempus velit sodales, finibus eros. Proin quis
													lacinia dui, ac sagittis neque. Duis condimentum
													viverra tortor ac molestie. Donec congue leo
													ipsum. Vivamus venenatis vestibulum lacus, sit
													amet tincidunt magna porttitor at. Phasellus in
													odio aliquet dui commodo elementum. Quisque
													scelerisque euismod ex at placerat. Proin
													gravida lorem sed interdum dapibus. Fusce a
													aliquam magna, eget ullamcorper urna.
												</p>
												<p>
													Nam facilisis ex a est viverra, sit amet
													ultrices leo rutrum. Ut pretium, nulla quis
													malesuada tincidunt, magna felis suscipit orci,
													eu malesuada erat purus luctus est. Aenean
													malesuada at tortor in varius. Sed ullamcorper
													enim ut metus gravida, a ullamcorper mi maximus.
													Quisque scelerisque vel nisi nec accumsan. Sed
													vitae elit ac magna feugiat pulvinar. Nunc in
													velit ut tellus convallis aliquam nec vitae
													urna. In ac consequat libero. Duis maximus
													bibendum orci et mollis. Vivamus eu enim
													malesuada, elementum diam quis, rhoncus odio.
													Integer quam nibh, blandit eget arcu quis,
													ornare euismod lectus. Nunc pharetra id massa id
													posuere. Nullam ligula eros, sodales eget arcu
													id, convallis volutpat erat. Proin interdum
													ligula at aliquet congue. Proin ut orci nisi.
													Nulla et lectus sed lacus dapibus gravida
													viverra et dolor.
												</p>
												<p>
													Etiam molestie tellus mauris, a hendrerit erat
													fringilla id. Cras viverra erat ornare, laoreet
													velit eu, interdum mi. Etiam pretium
													sollicitudin sem a imperdiet. Cras suscipit
													congue auctor. Maecenas fermentum nunc varius
													metus cursus, quis consectetur risus faucibus.
													Donec porta risus iaculis, scelerisque nisl
													vitae, consequat massa. Etiam mauris magna,
													posuere sed sem et, interdum dapibus elit. Morbi
													et enim ultricies, euismod est sed, imperdiet
													augue. Nunc lectus purus, ultricies ac vehicula
													at, accumsan et est. Ut pretium rutrum turpis,
													nec aliquet diam blandit ac. Suspendisse
													pellentesque finibus ipsum, non gravida sem
													egestas vitae. In vitae velit neque.
												</p>
												<p>
													Morbi vehicula turpis eget tortor consectetur
													tempus. Nunc id cursus nibh. Maecenas commodo mi
													ac nibh mollis, ac egestas nisi sodales.
													Maecenas libero dolor, suscipit vitae libero
													quis, condimentum commodo mi. In mi mauris,
													mollis vel condimentum tristique, finibus id
													urna. Etiam sit amet tempus metus. Praesent id
													ante sed tortor consequat dictum. Proin dictum
													ligula ac convallis laoreet. Nulla condimentum
													lobortis fermentum. Nam lobortis lorem vitae
													augue maximus hendrerit at at ante. Integer
													scelerisque eget tellus vitae rutrum. Donec et
													diam at purus maximus consequat. Ut in fermentum
													ligula.
												</p>
												<p>
													Nunc eget eros ex. Maecenas fringilla dictum
													libero, ac consequat urna ornare non. Nunc
													dapibus felis tortor, non efficitur nulla
													porttitor id. Pellentesque habitant morbi
													tristique senectus et netus et malesuada fames
													ac turpis egestas. Etiam convallis ex quis ante
													fermentum elementum. Suspendisse at efficitur
													lacus. Proin eu vestibulum est. Nunc massa
													libero, placerat interdum vestibulum vitae,
													pretium non ligula. Suspendisse eget ante
													ultricies ante tempus tempor et pellentesque
													leo. Vestibulum accumsan ullamcorper risus, nec
													viverra dolor eleifend ac. Mauris egestas mattis
													lacus, commodo varius nisi volutpat eu. Quisque
													lacinia at lectus et vulputate. In at turpis
													tempor, bibendum purus vitae, auctor ipsum.
													Praesent placerat pellentesque lacus non
													elementum. Morbi mollis at lacus in volutpat.
													Vivamus vel quam ante.
												</p>
											</div>
										</ModalBody>
										<ModalFooter>
											<ModalFooterChild>Footer Child 1</ModalFooterChild>
											<ModalFooterChild>
												<Button
													aria-label='Close'
													color='red'
													icon='Cancel01'
													onClick={() => setStatusScrollNot(false)}>
													Close
												</Button>
												<Button
													aria-label='Save'
													variant='soft'
													icon='FloppyDisk'>
													Save
												</Button>
											</ModalFooterChild>
										</ModalFooter>
									</Modal>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Background',
										color: 'red',
										size: 'text-3xl',
									}}>
									Static Backdrop - isStaticBackdrop
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>Modal</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>You can add a close button.</div>
							<PreviewComponent mdFile={staticBackMd as RequestInfo} inIFrame={false}>
								<div className='flex flex-wrap gap-4'>
									<Button
										aria-label='Static backdrop'
										onClick={() => setStatusBackdrop(true)}
										color='emerald'
										variant='soft'>
										Static backdrop
									</Button>
									<Modal
										isOpen={statusBackdrop}
										setIsOpen={setStatusBackdrop}
										isStaticBackdrop>
										<ModalHeader>Modal Title Here</ModalHeader>
										<ModalBody>Modal content here.</ModalBody>
										<ModalFooter>
											<ModalFooterChild>Footer Child 1</ModalFooterChild>
											<ModalFooterChild>
												<Button
													aria-label='Close'
													color='red'
													icon='Cancel01'
													onClick={() => setStatusBackdrop(false)}>
													Close
												</Button>
												<Button
													aria-label='Save'
													variant='soft'
													icon='FloppyDisk'>
													Save
												</Button>
											</ModalFooterChild>
										</ModalFooter>
									</Modal>
									<Button
										aria-label='Not static backdrop'
										onClick={() => setStatusBackdropNot(true)}
										color='red'
										variant='soft'>
										Not static backdrop
									</Button>
									<Modal
										isOpen={statusBackdropNot}
										setIsOpen={setStatusBackdropNot}>
										<ModalHeader>Modal Title Here</ModalHeader>
										<ModalBody>Modal content here.</ModalBody>
										<ModalFooter>
											<ModalFooterChild>Footer Child 1</ModalFooterChild>
											<ModalFooterChild>
												<Button
													aria-label='Close'
													color='red'
													icon='Cancel01'
													onClick={() => setStatusBackdropNot(false)}>
													Close
												</Button>
												<Button
													aria-label='Save'
													variant='soft'
													icon='FloppyDisk'>
													Save
												</Button>
											</ModalFooterChild>
										</ModalFooter>
									</Modal>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Ruler',
										color: 'violet',
										size: 'text-3xl',
									}}>
									Sizes - size
								</CardTitle>
								<CardSubTitle>
									<code>TModalSize</code>
								</CardSubTitle>
								<CardSubTitle>Modal</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>You can add a close button.</div>
							<PreviewComponent mdFile={sizeMd as RequestInfo} inIFrame={false}>
								<div className='flex flex-wrap gap-4'>
									{customModalSizes.map((item) => (
										<Button
											aria-label='Size'
											key={item}
											onClick={() => {
												setSize(item);
												setStatusSize(true);
											}}
											variant='soft'>
											{item}
										</Button>
									))}
									<Modal
										isOpen={statusSize}
										setIsOpen={setStatusSize}
										size={size}>
										<ModalHeader>Modal Title Here</ModalHeader>
										<ModalBody>Modal content here.</ModalBody>
										<ModalFooter>
											<ModalFooterChild>Footer Child 1</ModalFooterChild>
											<ModalFooterChild>
												<Button
													aria-label='Close'
													color='red'
													icon='Cancel01'
													onClick={() => setStatusSize(false)}>
													Close
												</Button>
												<Button
													aria-label='Save'
													variant='soft'
													icon='FloppyDisk'>
													Save
												</Button>
											</ModalFooterChild>
										</ModalFooter>
									</Modal>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'SquareArrowExpand01',
										color: 'amber',
										size: 'text-3xl',
									}}>
									Fullscreen - fullScreen
								</CardTitle>
								<CardSubTitle>
									<code>TScreens | boolean</code>
								</CardSubTitle>
								<CardSubTitle>Modal</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>You can add a close button.</div>
							<PreviewComponent mdFile={fullscreenMd as RequestInfo} inIFrame={false}>
								<div className='flex flex-wrap gap-4'>
									{screens.map((item) => (
										<Button
											aria-label='Screen size'
											key={item.toString()}
											onClick={() => {
												setScreen(item);
												setStatusScreen(true);
											}}
											variant='soft'>
											{item.toString()}
										</Button>
									))}
									<Modal
										isOpen={statusScreen}
										setIsOpen={setStatusScreen}
										fullScreen={screen}>
										<ModalHeader>Modal Title Here</ModalHeader>
										<ModalBody>Modal content here.</ModalBody>
										<ModalFooter>
											<ModalFooterChild>Footer Child 1</ModalFooterChild>
											<ModalFooterChild>
												<Button
													aria-label='Close'
													color='red'
													icon='Cancel01'
													onClick={() => setStatusScreen(false)}>
													Close
												</Button>
												<Button
													aria-label='Save'
													variant='soft'
													icon='FloppyDisk'>
													Save
												</Button>
											</ModalFooterChild>
										</ModalFooter>
									</Modal>
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
							<MdViewer code={extractSnippetUtil(modalSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default ModalPage;
