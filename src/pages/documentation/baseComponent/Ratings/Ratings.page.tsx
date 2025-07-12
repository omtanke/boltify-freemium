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
import Ratings, { RatingValues } from '@/components/ui/Ratings';
import MdViewer from '@/components/utils/MdViewer';
import basicUsageMd from './_md/basicUsage.md';
import typeMd from './_md/type.md';
import disableMd from './_md/disable.md';
import ratingsSource from '@/components/ui/Ratings.tsx?raw'; // eslint-disable-line import/extensions
import extractSnippetUtil from '@/utils/extractSnippet.util';

const RatingsPage = () => {
	const [state, setState] = useState<RatingValues>(4);

	return (
		<>
			<Header>
				<HeaderLeft className='flex-col items-start!'>
					<Breadcrumb
						list={[
							{ ...pages.documentation.baseComponent },
							{ ...pages.documentation.baseComponent.subPages.ratings },
						]}
					/>
					<div className='flex items-center gap-4 py-8'>
						<Icon
							icon={pages.documentation.baseComponent.subPages.ratings.icon}
							size='text-4xl'
						/>
						<span className='text-4xl font-bold'>
							{pages.documentation.baseComponent.subPages.ratings.text}
						</span>
					</div>
				</HeaderLeft>
			</Header>
			<Container>
				<div className='flex flex-col gap-8'>
					<div className='text-2xl text-zinc-500'>
						The Boltify Ratings widget displays ratings or reviews using star or heart
						symbols. Perfect for reviews, testimonials, and feedback forms.
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
							<div className='text-zinc-500'>Input example with star shapes.</div>
							<PreviewComponent mdFile={basicUsageMd as RequestInfo} inIFrame={false}>
								<Ratings
									id='star'
									selectedRating={state}
									setSelectedRating={setState}
									type='star'
								/>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Favourite',
										color: 'red',
										size: 'text-3xl',
									}}>
									Type - type
								</CardTitle>
								<CardSubTitle>
									<code>'star' | 'heart'</code>
								</CardSubTitle>
								<CardSubTitle>Ratings</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								Can use <code>star</code> or <code>heart</code>
							</div>
							<PreviewComponent mdFile={typeMd as RequestInfo} inIFrame={false}>
								<div className='flex flex-col flex-wrap gap-4'>
									<Ratings
										id='star2'
										selectedRating={state}
										setSelectedRating={setState}
										type='star'
									/>
									<Ratings
										id='heart2'
										selectedRating={state}
										setSelectedRating={setState}
										type='heart'
									/>
								</div>
							</PreviewComponent>
						</CardBody>
					</Card>

					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle
									iconProps={{
										icon: 'Anchor',
										color: 'blue',
										size: 'text-3xl',
									}}>
									Static - isDisable
								</CardTitle>
								<CardSubTitle>
									<code>boolean</code>
								</CardSubTitle>
								<CardSubTitle>Ratings</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='text-zinc-500'>
								<code>isDisable</code> prop can be used for static view.
							</div>
							<PreviewComponent mdFile={disableMd as RequestInfo} inIFrame={false}>
								<div className='flex flex-col gap-4'>
									<Ratings
										id='star3'
										selectedRating={state}
										setSelectedRating={setState}
										type='star'
										isDisable
									/>
									<Ratings
										id='heart3'
										selectedRating={state}
										setSelectedRating={setState}
										type='heart'
										isDisable
									/>
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
							<MdViewer code={extractSnippetUtil(ratingsSource, 'interface')} />
						</CardBody>
					</Card>
				</div>
			</Container>
		</>
	);
};

export default RatingsPage;
