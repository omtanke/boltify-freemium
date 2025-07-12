import Header, { HeaderLeft } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Icon from '@/components/icon/Icon';
import Container from '@/components/layout/Container';
import PreviewComponent from '@/components/utils/PreviewComponent';
import Button from '@/components/ui/Button';

const TypographyPage = () => {
	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.content },
							{ ...pages.documentation.content.subPages.typography },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.content.subPages.typography.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.content.subPages.typography.text}
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

					<h1>Font Family</h1>
					<div>
						Use utilities like font-sans and font-mono to set the font family of an
						element:
					</div>
					<PreviewComponent>
						<div className='flex flex-col gap-8'>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400'>
									font-sans
								</span>
								<p className='font-sans text-lg font-medium text-zinc-900 dark:text-zinc-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400'>
									font-serif
								</span>
								<p className='font-serif text-lg font-medium text-zinc-900 dark:text-zinc-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400'>
									font-mono
								</span>
								<p className='font-mono text-lg font-medium text-zinc-900 dark:text-zinc-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
						</div>
					</PreviewComponent>
					<div>
						<Button
							aria-label='Read more'
							variant='soft'
							rightIcon='ArrowRight01'
							onClick={() =>
								window.open('https://tailwindcss.com/docs/font-family', '_blank')
							}>
							Read more
						</Button>
					</div>

					<div className='my-8'></div>
					<h1>Font Size</h1>
					<div>
						Use utilities like text-sm and text-lg to set the font size of an element:
					</div>
					<PreviewComponent>
						<div className='flex flex-col gap-8'>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-zinc-500 dark:text-zinc-400'>
									text-xs
								</span>
								<code></code>
								<p className='text-xs font-medium text-zinc-900 dark:text-zinc-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									text-sm
								</span>
								<p className='text-sm font-medium text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									text-base
								</span>
								<p className='text-base font-medium text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									text-lg
								</span>
								<p className='text-lg font-medium text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									text-xl
								</span>
								<p className='text-xl font-medium text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									text-2xl
								</span>
								<p className='text-2xl font-medium text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									text-3xl
								</span>
								<p className='text-3xl font-medium text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									text-4xl
								</span>
								<p className='text-4xl font-medium text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									text-5xl
								</span>
								<p className='text-5xl font-medium text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									text-6xl
								</span>
								<p className='text-6xl font-medium text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									text-7xl
								</span>
								<p className='text-7xl font-medium text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									text-8xl
								</span>
								<p className='text-8xl font-medium text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									text-9xl
								</span>
								<p className='text-9xl font-medium text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
						</div>
					</PreviewComponent>
					<div>
						<Button
							aria-label='Read more'
							variant='soft'
							rightIcon='ArrowRight01'
							onClick={() =>
								window.open('https://tailwindcss.com/docs/font-size', '_blank')
							}>
							Read more
						</Button>
					</div>

					<div className='my-8'></div>
					<h1>Font Weight</h1>
					<div>
						Use utilities like font-thin and font-bold to set the font weight of an
						element:
					</div>
					<PreviewComponent>
						<div className='flex flex-col gap-8'>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									font-thin
									<span className='ps-4 text-pink-500'>font-weight: 100;</span>
								</span>
								<p className='text-lg font-thin text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									font-extralight
									<span className='ps-4 text-pink-500'>font-weight: 200;</span>
								</span>
								<p className='text-lg font-extralight text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									font-light
									<span className='ps-4 text-pink-500'>font-weight: 300;</span>
								</span>
								<p className='text-lg font-light text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									font-normal
									<span className='ps-4 text-pink-500'>font-weight: 400;</span>
								</span>
								<p className='text-lg font-normal text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									font-medium
									<span className='ps-4 text-pink-500'>font-weight: 500;</span>
								</span>
								<p className='text-lg font-medium text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									font-semibold
									<span className='ps-4 text-pink-500'>font-weight: 600;</span>
								</span>
								<p className='text-lg font-semibold text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									font-bold
									<span className='ps-4 text-pink-500'>font-weight: 700;</span>
								</span>
								<p className='text-lg font-bold text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									font-extrabold
									<span className='ps-4 text-pink-500'>font-weight: 800;</span>
								</span>
								<p className='text-lg font-extrabold text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
							<div>
								<span className='mb-3 font-mono text-xs font-medium text-gray-500 dark:text-gray-400'>
									font-black
									<span className='ps-4 text-pink-500'>font-weight: 900;</span>
								</span>
								<p className='text-lg font-black text-gray-900 dark:text-gray-200'>
									The quick brown fox jumps over the lazy dog.
								</p>
							</div>
						</div>
					</PreviewComponent>
					<div>
						<Button
							aria-label='Read more'
							variant='soft'
							rightIcon='ArrowRight01'
							onClick={() =>
								window.open('https://tailwindcss.com/docs/font-weight', '_blank')
							}>
							Read more
						</Button>
					</div>
				</div>
			</Container>
		</>
	);
};

export default TypographyPage;
