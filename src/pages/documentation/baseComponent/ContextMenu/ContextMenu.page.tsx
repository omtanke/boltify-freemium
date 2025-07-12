import { useRef } from 'react';
import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import PreviewComponent from '@/components/utils/PreviewComponent';
import ContextMenu from '@/components/ui/ContextMenu';
import Dropdown, {
	DropdownDivider,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '@/components/ui/Dropdown';
import MdViewer from '@/components/utils/MdViewer';
import usageMd from './_md/usage.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import dropdownSource from '@/components/ui/Dropdown.tsx?raw'; // eslint-disable-line import/extensions
import contextMenuSource from '@/components/ui/ContextMenu.tsx?raw'; // eslint-disable-line import/extensions

const ContextMenuPage = () => {
	const targetRef = useRef<HTMLDivElement>(null);
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.contextMenu },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.contextMenu.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.contextMenu.text}
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
									Basic usage
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent mdFile={usageMd as RequestInfo} inIFrame={false}>
								<div
									ref={targetRef}
									className='flex h-56 w-96 items-center justify-center gap-2 rounded-xl border-2 border-dashed border-blue-500 text-2xl'>
									<Icon icon='MouseRightClick01' size='text-4xl' />
									<span>Right click</span>
								</div>
								<ContextMenu ref={targetRef}>
									<DropdownMenu isOpen>
										<DropdownItem icon='MailReply02'>Reply</DropdownItem>
										<DropdownItem icon='MailReplyAll02'>Reply all</DropdownItem>
										<DropdownItem icon='LinkForward'>Forward</DropdownItem>
										<DropdownItem icon='MailSend02'>Resend</DropdownItem>
										<DropdownDivider />
										<Dropdown>
											<DropdownToggle>
												<DropdownItem icon='MoreHorizontal'>
													More
												</DropdownItem>
											</DropdownToggle>
											<DropdownMenu placement='right-start'>
												<DropdownItem>Item 3.3.1</DropdownItem>
												<DropdownItem>Item 3.3.2</DropdownItem>
											</DropdownMenu>
										</Dropdown>
										<DropdownDivider />
										<DropdownItem icon='Mail02'>Mark as unread</DropdownItem>
										<DropdownItem icon='MailOpen02'>Mark as read</DropdownItem>
										<DropdownItem icon='DeliveryBox02'>Archive</DropdownItem>
										<DropdownItem icon='Delete02' color='red'>
											Delete
										</DropdownItem>
										<DropdownDivider />
										<DropdownItem icon='InformationCircle' color='amber'>
											Report spam
										</DropdownItem>
									</DropdownMenu>
								</ContextMenu>
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
							<MdViewer
								code={`${extractSnippetUtil(
									contextMenuSource,
									'interface',
								)}\n\n${extractSnippetUtil(dropdownSource, 'interface')}`}
							/>
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default ContextMenuPage;
