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
import Dropdown, {
	DropdownContent,
	DropdownDivider,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '@/components/ui/Dropdown';
import Button from '@/components/ui/Button';
import { arrColors } from '@/types/colors.type';
import { Image } from '@/assets/images';
import MdViewer from '@/components/utils/MdViewer';
import basicUsageMd from './_md/basicUsage.md';
import withoutIconMd from './_md/withoutIcon.md';
import closeAfterLeaveMd from './_md/closeAfterLeave.md';
import placementMd from './_md/placement.md';
import textColorMd from './_md/textColor.md';
import customContentMd from './_md/customContent.md';
import multipleMd from './_md/multiple.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import dropdownSource from '@/components/ui/Dropdown.tsx?raw'; // eslint-disable-line import/extensions

const DropdownPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.dropdown },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.dropdown.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.dropdown.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Boltify's Tailwind CSS Collapse component represents toggle buttons, to show
						and hide or collapse and expand content or navigation items, managing its
						visibility.
					</div>
					<div className='text-3xl font-bold'>Props</div>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Svg3DView',
										color: 'blue',
										size: 'text-3xl',
									}}>
									Basic usage
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent mdFile={basicUsageMd as RequestInfo} inIFrame={false}>
								<Dropdown>
									<DropdownToggle>
										<Button variant='soft' color='blue' aria-label='Dropdown'>
											Dropdown
										</Button>
									</DropdownToggle>
									<DropdownMenu>
										<DropdownContent className='font-bold text-zinc-500'>
											TITLE
										</DropdownContent>
										<DropdownItem icon='View'>View</DropdownItem>
										<DropdownItem icon='Edit02'>Edit</DropdownItem>
										<DropdownDivider />
										<DropdownItem icon='Delete02' color='red'>
											Delete
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'StarOff',
										color: 'red',
										size: 'text-3xl',
									}}>
									Without icon - hasIcon
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>DropdownToggle</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent
								mdFile={withoutIconMd as RequestInfo}
								inIFrame={false}>
								<Dropdown>
									<DropdownToggle hasIcon={false}>
										<Button variant='soft' color='blue' aria-label='Dropdown'>
											Dropdown
										</Button>
									</DropdownToggle>
									<DropdownMenu>
										<DropdownContent className='font-bold text-zinc-500'>
											TITLE
										</DropdownContent>
										<DropdownItem icon='View'>View</DropdownItem>
										<DropdownItem icon='Edit02'>Edit</DropdownItem>
										<DropdownDivider />
										<DropdownItem icon='Delete02' color='red'>
											Delete
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'CursorRectangleSelection01',
										color: 'amber',
										size: 'text-3xl',
									}}>
									Closing after leaving the menu - isCloseAfterLeave
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>DropdownMenu</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent
								mdFile={closeAfterLeaveMd as RequestInfo}
								inIFrame={false}>
								<Dropdown>
									<DropdownToggle>
										<Button variant='soft' color='blue' aria-label='Dropdown'>
											Dropdown
										</Button>
									</DropdownToggle>
									<DropdownMenu isCloseAfterLeave={false}>
										<DropdownContent className='font-bold text-zinc-500'>
											TITLE
										</DropdownContent>
										<DropdownItem icon='View'>View</DropdownItem>
										<DropdownItem icon='Edit02'>Edit</DropdownItem>
										<DropdownDivider />
										<DropdownItem icon='Delete02' color='red'>
											Delete
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Navigation01',
										color: 'violet',
										size: 'text-3xl',
									}}>
									placement
								</CardTitle>
								<CardSubTitle>
									<code>Placement</code>
								</CardSubTitle>
								<CardSubTitle>DropdownMenu</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent mdFile={placementMd as RequestInfo} inIFrame={false}>
								<div className='flex flex-wrap gap-4'>
									{[
										'auto',
										'auto-start',
										'auto-end',
										'top',
										'bottom',
										'right',
										'left',
										'top-start',
										'top-end',
										'bottom-start',
										'bottom-end',
										'right-start',
										'right-end',
										'left-start',
										'left-end',
									].map((item) => (
										<Dropdown key={item}>
											<DropdownToggle>
												<Button
													variant='soft'
													color='blue'
													aria-label='Dropdown'>
													{item}
												</Button>
											</DropdownToggle>
											<DropdownMenu
												// @ts-ignore
												placement={item}>
												<DropdownContent className='font-bold text-zinc-500'>
													TITLE
												</DropdownContent>
												<DropdownItem icon='View'>View</DropdownItem>
												<DropdownItem icon='Edit02'>Edit</DropdownItem>
												<DropdownDivider />
												<DropdownItem icon='Delete02' color='red'>
													Delete
												</DropdownItem>
											</DropdownMenu>
										</Dropdown>
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
										icon: 'TextColor',
										color: 'blue',
										size: 'text-3xl',
									}}>
									Text color - color
								</CardTitle>
								<CardSubTitle>
									<code>TColors</code>
								</CardSubTitle>
								<CardSubTitle>DropdownItem</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent mdFile={textColorMd as RequestInfo} inIFrame={false}>
								<Dropdown>
									<DropdownToggle>
										<Button variant='soft' color='blue' aria-label='Dropdown'>
											Dropdown
										</Button>
									</DropdownToggle>
									<DropdownMenu>
										{arrColors.map((item) => (
											<DropdownItem key={item} color={item} icon='TextColor'>
												<span className='capitalize'>{item}</span>
											</DropdownItem>
										))}
									</DropdownMenu>
								</Dropdown>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Svg3DView',
										color: 'emerald',
										size: 'text-3xl',
									}}>
									Custom content - children
								</CardTitle>
								<CardSubTitle>
									<code>ReactNode</code>
								</CardSubTitle>
								<CardSubTitle>DropdownContent</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent
								mdFile={customContentMd as RequestInfo}
								inIFrame={false}>
								<div className='flex flex-wrap gap-4'>
									<Dropdown>
										<DropdownToggle>
											<Button
												variant='soft'
												color='blue'
												aria-label='Dropdown'>
												Dropdown
											</Button>
										</DropdownToggle>
										<DropdownMenu>
											<DropdownContent className='font-bold text-zinc-500'>
												<div className='flex flex-col'>
													<div>Signed in as</div>
													<div className='text-zinc-800 dark:text-zinc-200'>
														john@omtnake.com
													</div>
												</div>
											</DropdownContent>
											<DropdownDivider />
											<DropdownItem icon='User'>Profile</DropdownItem>
											<DropdownItem icon='Home05'>Address</DropdownItem>
											<DropdownDivider />
											<DropdownItem icon='Logout03'>Sign out</DropdownItem>
										</DropdownMenu>
									</Dropdown>
									<Dropdown>
										<DropdownToggle>
											<Button
												variant='soft'
												color='blue'
												aria-label='Dropdown'>
												Mega menu
											</Button>
										</DropdownToggle>
										<DropdownMenu isCloseAfterLeave={false}>
											<div className='grid grid-cols-12'>
												<div className='col-span-4'>
													<img
														src={Image}
														className='-my-2 -ms-2 h-44 w-56 rounded-s-md object-cover'
														alt=''
													/>
												</div>
												<div className='col-span-4'>
													<DropdownContent className='font-bold text-zinc-500'>
														Title 1
													</DropdownContent>
													<DropdownItem>Item 1.1</DropdownItem>
													<DropdownItem>Item 1.2</DropdownItem>
													<DropdownItem>Item 1.3</DropdownItem>
												</div>
												<div className='col-span-4'>
													<DropdownContent className='font-bold text-zinc-500'>
														Title 2
													</DropdownContent>
													<DropdownItem>Item 2.1</DropdownItem>
													<DropdownItem>Item 2.2</DropdownItem>
													<DropdownItem>Item 2.3</DropdownItem>
												</div>
											</div>
										</DropdownMenu>
									</Dropdown>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'KeyframesMultiple',
										color: 'amber',
										size: 'text-3xl',
									}}>
									Multiple dropdown
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent mdFile={multipleMd as RequestInfo} inIFrame={false}>
								<Dropdown>
									<DropdownToggle>
										<Button
											variant='soft'
											icon='KeyframesMultiple'
											aria-label='Dropdown'>
											Click
										</Button>
									</DropdownToggle>
									<DropdownMenu isCloseAfterLeave={false}>
										<DropdownItem>Item 1</DropdownItem>
										<DropdownItem>Item 2</DropdownItem>
										<Dropdown>
											<DropdownToggle>
												<DropdownItem>Item 3</DropdownItem>
											</DropdownToggle>
											<DropdownMenu
												isCloseAfterLeave={false}
												placement='right-end'>
												<DropdownItem>Item 3.1</DropdownItem>
												<DropdownItem>Item 3.2</DropdownItem>
												<Dropdown>
													<DropdownToggle>
														<DropdownItem>Item 3.3</DropdownItem>
													</DropdownToggle>
													<DropdownMenu placement='right-start'>
														<DropdownItem>Item 3.3.1</DropdownItem>
														<DropdownItem>Item 3.3.2</DropdownItem>
													</DropdownMenu>
												</Dropdown>
											</DropdownMenu>
										</Dropdown>
									</DropdownMenu>
								</Dropdown>
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
							<MdViewer code={extractSnippetUtil(dropdownSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default DropdownPage;
