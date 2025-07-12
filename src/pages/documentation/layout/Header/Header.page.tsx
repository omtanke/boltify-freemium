import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import Card, { CardBody, CardHeader, CardHeaderChild, CardTitle } from '@/components/ui/Card';
import MdViewer from '@/components/utils/MdViewer';
import extractSnippetUtil from '@/utils/extractSnippet.util';
import headerSource from '@/components/layout/Header.tsx?raw'; // eslint-disable-line import/extensions

const HeaderPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.layout },
							{ ...pages.documentation.layout.subPages.header },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.layout.subPages.header.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.layout.subPages.header.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-4'>
					<div className='text-2xl text-zinc-500'>
						If you are going to use the same one on more than one page, you can use it
						in the layout you defined. If there is data related to the page, you are
						free to use it in the page. If you wish, you can also work with common data
						with context.
					</div>

					<div className='flex gap-4'>
						<div className='flex h-[50rem] w-[18rem] flex-col gap-2 rounded-2xl border-2 border-dashed border-zinc-500/50 p-2'>
							Aside
							<div className='flex items-center justify-between rounded-xl border-2 border-dashed border-amber-500/50 p-2'>
								AsideHead
							</div>
							<div className='no-scrollbar flex h-full flex-col gap-2 overflow-x-scroll rounded-xl border-2 border-dashed border-amber-500/50 p-2'>
								AsideBody
								<div className='rounded-lg border-2 border-dashed border-emerald-500/50 p-2'>
									Search
								</div>
								<div className='rounded-lg border-2 border-dashed border-emerald-500/50 p-2'>
									AsideQuickContainer
									<div className='rounded-md border-2 border-dashed border-blue-500/50 p-2'>
										AsideQuickNav
									</div>
								</div>
								<div className='flex flex-col gap-2 rounded-lg border-2 border-dashed border-emerald-500/50 p-2'>
									Nav
									<div className='rounded-md border-2 border-dashed border-blue-500/50 p-2'>
										NavTitle
									</div>
									<div className='rounded-md border-2 border-dashed border-blue-500/50 p-2'>
										NavItem
									</div>
									<div className='rounded-md border-2 border-dashed border-blue-500/50 p-2'>
										NavCollapse
									</div>
								</div>
							</div>
							<div className='rounded-xl border-2 border-dashed border-amber-500/50 p-2'>
								AsideFooter
							</div>
						</div>
						<div className='flex h-[50rem] w-full flex-col gap-2 rounded-2xl border-2 border-dashed border-zinc-500/50 p-2'>
							Wrapper
							<div className='flex animate-pulse flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2'>
								<div>Header</div>
								<div className='flex justify-between gap-4'>
									<div className='flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2'>
										HeaderLeft
									</div>
									<div className='flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2'>
										HeaderRight
									</div>
								</div>
							</div>
							<div className='flex flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2'>
								<div>Subheader</div>
								<div className='flex justify-between gap-4'>
									<div className='flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2'>
										SubheaderLeft
									</div>
									<div className='flex items-center justify-between rounded-lg border-2 border-dashed border-emerald-500/50 p-2'>
										SubheaderRight
									</div>
								</div>
							</div>
							<div className='flex h-full flex-col rounded-xl border-2 border-dashed border-amber-500/50 p-2'>
								<div>Container</div>
							</div>
						</div>
					</div>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>API</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<MdViewer code={extractSnippetUtil(headerSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default HeaderPage;
