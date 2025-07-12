import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';

const BaseComponentPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb list={[{ ...pages.documentation.baseComponent }]} />
					<div className='flex items-center gap-4 py-8'>
						<Icon icon={pages.documentation.baseComponent.icon} size='text-4xl' />
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-4'>
					<div className='text-2xl text-zinc-500'>
						Browse and customize beautiful Tailwind CSS buttons in various styles,
						states, and sizes. Find active, disabled, pill, icon, and other free button
						examples.
					</div>
				</div>
			</Container>
		</>
	);
};

export default BaseComponentPage;
