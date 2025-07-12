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
import ChatBubbles, { ChatBubblesItem, ChatBubblesSeparate } from '@/components/ui/ChatBubbles';
import user from '@/mocks/users.mock';
import MdViewer from '@/components/utils/MdViewer';
import childrenMd from './_md/children.md';
import isMyContentMd from './_md/isMyContent.md';
import isAvatarMd from './_md/isAvatar.md';
import imageMd from './_md/image.md';
import footerMd from './_md/footer.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import chatBubblesSource from '@/components/ui/ChatBubbles.tsx?raw'; // eslint-disable-line import/extensions

const ChatBubblesPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.chatBubbles },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.chatBubbles.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.chatBubbles.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						Ready-to-use Tailwind CSS Chat Bubble UI component. Perfect for organising
						conversations in chats, messaging apps, social media platforms, and more.
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
								<CardSubTitle>ChatBubblesItem</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent mdFile={childrenMd} inIFrame={false}>
								<ChatBubbles>
									<ChatBubblesItem username={user.aulisTiainen.username}>
										This is children
									</ChatBubblesItem>
									<ChatBubblesItem username={user.aulisTiainen.username}>
										This is children #2
									</ChatBubblesItem>
								</ChatBubbles>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Svg3DView',
										color: 'blue',
										size: 'text-3xl',
									}}>
									isMyContent
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>ChatBubblesItem</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent mdFile={isMyContentMd} inIFrame={false}>
								<ChatBubbles>
									<ChatBubblesItem username={user.aulisTiainen.username}>
										This is children
									</ChatBubblesItem>
									<ChatBubblesItem
										username={user.aulisTiainen.username}
										isMyContent>
										This is isMyContent's children
									</ChatBubblesItem>
									<ChatBubblesItem username={user.aulisTiainen.username}>
										This is children
									</ChatBubblesItem>
									<ChatBubblesItem
										username={user.aulisTiainen.username}
										isMyContent>
										This is isMyContent's children
									</ChatBubblesItem>
								</ChatBubbles>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Svg3DView',
										color: 'blue',
										size: 'text-3xl',
									}}>
									isAvatar
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>ChatBubbles</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent mdFile={isAvatarMd} inIFrame={false}>
								<ChatBubbles isAvatar>
									<ChatBubblesItem username={user.aulisTiainen.username}>
										This is children
									</ChatBubblesItem>
									<ChatBubblesItem username={user.johndoe.username} isMyContent>
										This is isMyContent's children
									</ChatBubblesItem>
									<ChatBubblesItem username={user.aulisTiainen.username}>
										This is children
									</ChatBubblesItem>
									<ChatBubblesItem username={user.johndoe.username} isMyContent>
										This is isMyContent's children
									</ChatBubblesItem>
								</ChatBubbles>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Svg3DView',
										color: 'blue',
										size: 'text-3xl',
									}}>
									image
								</CardTitle>
								<CardSubTitle>
									<code>string</code>
								</CardSubTitle>
								<CardSubTitle>ChatBubblesItem</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent mdFile={imageMd} inIFrame={false}>
								<ChatBubbles isAvatar>
									<ChatBubblesItem
										username={user.aulisTiainen.username}
										image={user.aulisTiainen.image.org}>
										This is children
									</ChatBubblesItem>
									<ChatBubblesItem
										username={user.johndoe.username}
										image={user.johndoe.image.org}
										isMyContent>
										This is isMyContent's children
									</ChatBubblesItem>
									<ChatBubblesItem
										username={user.aulisTiainen.username}
										image={user.aulisTiainen.image.org}>
										This is children
									</ChatBubblesItem>
									<ChatBubblesItem
										username={user.johndoe.username}
										image={user.johndoe.image.org}
										isMyContent>
										This is isMyContent's children
									</ChatBubblesItem>
								</ChatBubbles>
							</PreviewComponent>
						</CardBody>
					</Card>
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Svg3DView',
										color: 'blue',
										size: 'text-3xl',
									}}>
									footer
								</CardTitle>

								<CardSubTitle>
									<code>ReactNode</code>
								</CardSubTitle>
								<CardSubTitle>ChatBubblesItem</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								A basic card containing a title, content and an extra corner
								content.
							</div>
							<PreviewComponent mdFile={footerMd} inIFrame={false}>
								<ChatBubbles isAvatar>
									<ChatBubblesSeparate>Today 09:00</ChatBubblesSeparate>
									<ChatBubblesItem
										image={user.aulisTiainen.image.org}
										username={user.aulisTiainen.username}
										footer={
											<div className='flex items-center gap-2'>
												<Icon icon='AlertCircle' />
												Edited: 09:08
											</div>
										}>
										Hello Scott, are you ready for the client meeting?
									</ChatBubblesItem>
									<ChatBubblesItem
										image={user.johndoe.image.org}
										username={user.johndoe.username}
										isMyContent
										footer={
											<div className='flex items-center gap-2 text-blue-500'>
												<Icon icon='TickDouble02' />
												Read: 09:16
											</div>
										}>
										Hello! Yes, I'm ready. I've reviewed our presentation one
										last time and I'm prepared for any questions.
									</ChatBubblesItem>
									<ChatBubblesItem
										image={user.aulisTiainen.image.org}
										username={user.aulisTiainen.username}>
										Great! Remember to focus on the advantages of our product to
										grab the clients' attention.
									</ChatBubblesItem>
									<ChatBubblesItem
										image={user.johndoe.image.org}
										username={user.johndoe.username}
										isMyContent
										footer={
											<div className='flex items-center gap-2'>
												<Icon icon='Tick02' />
												Sent: 09:32
											</div>
										}>
										Understood, I'll emphasize the features of our product and
										demonstrate how we can provide solutions to their needs.
									</ChatBubblesItem>
									<ChatBubblesItem
										image={user.johndoe.image.org}
										username={user.johndoe.username}
										isMyContent
										footer={
											<div className='flex items-center gap-2 text-red-500'>
												<Icon icon='Alert01' />
												Not Sent
											</div>
										}>
										??
									</ChatBubblesItem>
								</ChatBubbles>
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
							<MdViewer code={extractSnippetUtil(chatBubblesSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default ChatBubblesPage;
