import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import { Avatar1, Avatar2, Avatar3 } from '@/assets/images';
import Card, {
	CardBody,
	CardHeader,
	CardHeaderChild,
	CardSubTitle,
	CardTitle,
} from '@/components/ui/Card';
import PreviewComponent from '@/components/utils/PreviewComponent';
import Avatar from '@/components/ui/Avatar';
import AvatarGroup from '@/components/ui/AvatarGroup';
import MdViewer from '@/components/utils/MdViewer';
import sample1Md from './_md/sample1.md';
import sample2Md from './_md/sample2.md';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import avatarGroupSource from '@/components/ui/AvatarGroup.tsx?raw'; // eslint-disable-line import/extensions

const AvatarGroupPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.avatarGroup },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.avatarGroup.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.avatarGroup.text}
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
						<CardBody>
							<div className='text-zinc-500'>
								As a child, you can only use the Avatar component.
							</div>
							<PreviewComponent inIFrame={false} mdFile={sample1Md}>
								<AvatarGroup>
									<Avatar src={Avatar1} name='John Doe' />
									<Avatar src={Avatar2} name='John Doe' />
									<Avatar src={Avatar3} name='John Doe' />
									<Avatar name='+ 3' />
								</AvatarGroup>
							</PreviewComponent>
							<PreviewComponent inIFrame={false} mdFile={sample2Md}>
								<AvatarGroup size='w-16' color='secondary'>
									<Avatar src={Avatar1} name='John Doe' />
									<Avatar src={Avatar2} name='John Doe' />
									<Avatar src={Avatar3} name='John Doe' />
									<Avatar name='+ 3' color='emerald' />
								</AvatarGroup>
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
							<MdViewer code={extractSnippetUtil(avatarGroupSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default AvatarGroupPage;
