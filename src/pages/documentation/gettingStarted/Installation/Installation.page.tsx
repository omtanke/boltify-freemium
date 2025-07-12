import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import MdViewer from '@/components/utils/MdViewer';

const InstallationPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.gettingStarted },
							{ ...pages.documentation.gettingStarted.subPages.installation },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.gettingStarted.subPages.installation.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.gettingStarted.subPages.installation.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-4'>
					<div className='text-2xl text-zinc-500'>
						This page contains information on how to run your project.
					</div>
					<div>
						<div>
							While explaining these documents, it is assumed that you have a basic
							knowledge of JS, HTML, CSS and ReactJS. You can learn more about ReactJS
							at{' '}
							<a href='https://reactjs.org/' className='text-blue-500 underline'>
								https://reactjs.org/
							</a>
							.
						</div>
						<div>
							If you do not have nodejs installed on your computer, you can download
							versions 18 and above from{' '}
							<a href='https://nodejs.org/' className='text-blue-500 underline'>
								https://nodejs.org/
							</a>
							. When you install node js, npm is also installed with it.
						</div>
						<div>
							If you want to use Yarn you can follow the instructions here{' '}
							<a
								href='https://classic.yarnpkg.com/en/docs/install/'
								className='text-blue-500 underline'>
								https://classic.yarnpkg.com/en/docs/install/
							</a>
							.
						</div>
					</div>
					<div className='mt-4 text-xl'>Minimum requirement</div>
					<ul className='list-inside list-disc'>
						<li>Node.js 18+</li>
						<li>
							<code>npm</code> or <code>yarn</code>
						</li>
					</ul>
					<div className='mt-4 text-xl'>1. Step - Install</div>
					<div>
						First, go to the root folder of the project with the terminal. You can use
						npm or yarn to download the required dependencies.
					</div>
					<div className='rounded-xl border-2 border-dashed border-zinc-500/25 p-4'>
						<MdViewer code='npm i' format='bash' />
					</div>
					or
					<div className='rounded-xl border-2 border-dashed border-zinc-500/25 p-4'>
						<MdViewer code='yarn' format='bash' />
					</div>
					<div className='mt-4 text-xl'>2. Step - Run</div>
					<div className='rounded-xl border-2 border-dashed border-zinc-500/25 p-4'>
						<MdViewer code='npm run dev' format='bash' />
					</div>
					or
					<div className='rounded-xl border-2 border-dashed border-zinc-500/25 p-4'>
						<MdViewer code='yarn dev' format='bash' />
					</div>
				</div>
			</Container>
		</>
	);
};

export default InstallationPage;
