import { useNavigate } from 'react-router';
import Card, { CardBody, CardFooter, CardFooterChild } from '@/components/ui/Card';
import pages from '@/Routes/pages';
import ScaledWrapper from '@/pages/examples/_partial/ScaledWrapper.partial';
import EXAMPLE from '@/examples/_index';
import { GeneralOrderActivityExamplePreview } from '@/examples/overlays/general/GeneralOrderActivity.example';

const SectionExamplesLanding = () => {
	const navigate = useNavigate();
	return (
		<div
			id='examples'
			className='container mx-auto scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
			<div className='mx-auto mb-8 max-w-[64rem] lg:mb-14'>
				<h2 className='text-3xl font-bold text-zinc-800 lg:text-4xl dark:text-neutral-200'>
					<div className='flex flex-wrap items-center justify-center gap-x-2 gap-y-4'>
						<div className='inline-flex'>Examples Built with</div>
						<svg
							className='relative -top-0.5 inline-flex h-10 shrink-0 lg:h-12'
							viewBox='0 0 1370 397'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<rect width='397' height='397' rx='60' fill='#66FF4C' />
							<path
								d='M113.039 233.449C102.948 233.449 97.3513 221.729 103.676 213.843L227.437 59.555C235.475 49.5343 251.479 57.4188 248.484 69.9237L211.527 224.212C210.23 229.629 205.399 233.449 199.843 233.449H113.039Z'
								fill='#222222'
							/>
							<path
								d='M283.961 163.551C294.052 163.551 299.649 175.271 293.324 183.157L169.564 337.445C161.526 347.466 145.522 339.581 148.517 327.076L185.473 172.788C186.771 167.37 191.602 163.551 197.157 163.551H283.961Z'
								fill='#222222'
							/>
							<path
								d='M467 316.84V92.84H550.36C562.413 92.84 573.347 95.3467 583.16 100.36C592.973 105.267 600.707 112.307 606.36 121.48C612.12 130.653 615 141.427 615 153.8C615 158.813 614.307 163.987 612.92 169.32C611.64 174.653 609.4 179.56 606.2 184.04C603.107 188.52 598.84 191.933 593.4 194.28C600.44 195.987 606.093 199.187 610.36 203.88C614.627 208.467 617.88 213.8 620.12 219.88C622.36 225.853 623.853 231.987 624.6 238.28C625.347 244.573 625.72 250.28 625.72 255.4C625.72 266.92 622.733 277.32 616.76 286.6C610.787 295.88 602.733 303.24 592.6 308.68C582.573 314.12 571.48 316.84 559.32 316.84H467ZM511.16 279.24H554.68C560.547 279.24 565.88 277.853 570.68 275.08C575.48 272.2 579.32 268.307 582.2 263.4C585.08 258.387 586.52 252.733 586.52 246.44C586.52 241.107 585.08 236.04 582.2 231.24C579.32 226.44 575.48 222.547 570.68 219.56C565.88 216.467 560.547 214.92 554.68 214.92H511.16V279.24ZM511.16 178.12H545.24C552.28 178.12 558.307 175.827 563.32 171.24C568.333 166.653 570.84 160.733 570.84 153.48C570.84 146.013 568.333 140.36 563.32 136.52C558.307 132.573 552.28 130.6 545.24 130.6H511.16V178.12Z'
								fill='currentColor'
							/>
							<path
								d='M718.963 321C704.243 321 690.803 317.213 678.643 309.64C666.589 302.067 656.936 291.933 649.683 279.24C642.536 266.44 638.963 252.307 638.963 236.84C638.963 225.107 641.043 214.173 645.203 204.04C649.363 193.8 655.069 184.84 662.323 177.16C669.683 169.373 678.216 163.293 687.923 158.92C697.629 154.547 707.976 152.36 718.963 152.36C733.683 152.36 747.069 156.147 759.123 163.72C771.283 171.293 780.936 181.48 788.083 194.28C795.336 207.08 798.963 221.267 798.963 236.84C798.963 248.467 796.883 259.347 792.723 269.48C788.563 279.613 782.803 288.573 775.443 296.36C768.189 304.04 759.709 310.067 750.003 314.44C740.403 318.813 730.056 321 718.963 321ZM718.963 276.84C725.789 276.84 731.923 275.027 737.363 271.4C742.803 267.667 747.069 262.76 750.163 256.68C753.256 250.6 754.803 243.987 754.803 236.84C754.803 229.48 753.149 222.76 749.843 216.68C746.643 210.493 742.323 205.587 736.883 201.96C731.443 198.333 725.469 196.52 718.963 196.52C712.243 196.52 706.163 198.387 700.723 202.12C695.283 205.853 690.963 210.76 687.763 216.84C684.669 222.92 683.123 229.587 683.123 236.84C683.123 244.413 684.723 251.24 687.923 257.32C691.229 263.293 695.603 268.04 701.043 271.56C706.483 275.08 712.456 276.84 718.963 276.84Z'
								fill='currentColor'
							/>
							<path
								d='M820.438 316.84V76.84H864.598V316.84H820.438Z'
								fill='currentColor'
							/>
							<path
								d='M989.978 201H961.178V316.84H917.018V201H894.938V156.84H917.018V106.6H961.178V156.84H989.978V201Z'
								fill='currentColor'
							/>
							<path
								d='M1015.75 156.84H1059.91V316.84H1015.75V156.84ZM1038.15 138.44C1031.75 138.44 1026.36 136.307 1021.99 132.04C1017.62 127.773 1015.43 122.493 1015.43 116.2C1015.43 109.907 1017.62 104.627 1021.99 100.36C1026.36 96.0933 1031.7 93.96 1037.99 93.96C1044.28 93.96 1049.56 96.0933 1053.83 100.36C1058.2 104.627 1060.39 109.907 1060.39 116.2C1060.39 122.493 1058.26 127.773 1053.99 132.04C1049.83 136.307 1044.55 138.44 1038.15 138.44Z'
								fill='currentColor'
							/>
							<path
								d='M1147.21 125.8V156.84H1189.61V201H1147.21V316.84H1103.05V201H1087.05V156.84H1103.05V125.8C1103.05 116.093 1105.45 107.293 1110.25 99.4C1115.05 91.4 1121.45 85 1129.45 80.2C1137.56 75.4 1146.46 73 1156.17 73C1163.32 73 1170.36 74.4933 1177.29 77.48C1184.22 80.36 1190.41 84.8933 1195.85 91.08L1164.17 122.28C1163.42 120.573 1162.3 119.293 1160.81 118.44C1159.32 117.587 1157.77 117.16 1156.17 117.16C1153.72 117.16 1151.58 118.013 1149.77 119.72C1148.06 121.32 1147.21 123.347 1147.21 125.8Z'
								fill='currentColor'
							/>
							<path
								d='M1322.39 156.84H1369.43L1281.75 396.84H1235.03L1263.83 316.84L1206.23 156.84H1254.55L1285.91 256.52L1322.39 156.84Z'
								fill='currentColor'
							/>
						</svg>
						<div className='inline-flex'>and</div>
						<svg viewBox='0 0 167 21' fill='none' className='inline-flex h-7 lg:h-8'>
							<path
								className='fill-sky-400'
								d='M17.183 0C12.6 0 9.737 2.291 8.59 6.873c1.719-2.29 3.723-3.15 6.014-2.577 1.307.326 2.242 1.274 3.275 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.291 8.591-6.872-1.718 2.29-3.723 3.15-6.013 2.576-1.308-.326-2.243-1.274-3.276-2.324C23.39 1.98 21.44 0 17.183 0ZM8.59 10.309C4.01 10.309 1.145 12.6 0 17.182c1.718-2.291 3.723-3.15 6.013-2.577 1.308.326 2.243 1.274 3.276 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.29 8.59-6.872-1.718 2.29-3.722 3.15-6.013 2.577-1.307-.327-2.242-1.276-3.276-2.325-1.684-1.71-3.634-3.689-7.893-3.689Z'></path>
							<path
								fill='currentColor'
								d='M51.547 8.688h-3v5.803c0 1.548 1.016 1.524 3 1.427v2.346c-4.015.483-5.611-.629-5.611-3.773V8.688H43.71V6.172h2.225V2.925l2.612-.774v4.021h2.998v2.516Zm11.43-2.516h2.61v12.092h-2.61v-1.741c-.92 1.28-2.346 2.055-4.233 2.055-3.288 0-6.021-2.78-6.021-6.36 0-3.603 2.733-6.36 6.021-6.36 1.886 0 3.313.774 4.233 2.032V6.172Zm-3.821 9.915c2.176 0 3.82-1.62 3.82-3.87 0-2.248-1.644-3.868-3.82-3.868-2.177 0-3.821 1.62-3.821 3.869s1.644 3.87 3.82 3.87ZM69.94 4.36a1.687 1.687 0 0 1-1.668-1.669c.002-.443.179-.868.491-1.18a1.662 1.662 0 0 1 2.354 0c.312.312.49.737.491 1.18 0 .895-.75 1.669-1.668 1.669Zm-1.306 13.905V6.172h2.612v12.092h-2.612Zm5.635 0V.609h2.611v17.654H74.27ZM93.834 6.172h2.757l-3.797 12.092h-2.563l-2.516-8.15-2.539 8.15h-2.563L78.816 6.172h2.757l2.346 8.343 2.54-8.343h2.49l2.514 8.343 2.37-8.343ZM99.83 4.36c-.92 0-1.669-.774-1.669-1.669.002-.443.18-.868.492-1.18a1.661 1.661 0 0 1 2.354 0c.313.312.49.737.492 1.18 0 .895-.75 1.669-1.669 1.669Zm-1.306 13.905V6.172h2.612v12.092h-2.612ZM110.52 5.858c2.708 0 4.643 1.838 4.643 4.982v7.423h-2.612v-7.158c0-1.838-1.064-2.804-2.708-2.804-1.717 0-3.071 1.015-3.071 3.482v6.48h-2.612V6.174h2.612V7.72c.798-1.257 2.103-1.862 3.748-1.862Zm17.024-4.522h2.612v16.927h-2.612v-1.741c-.918 1.282-2.345 2.055-4.231 2.055-3.289 0-6.022-2.78-6.022-6.36 0-3.603 2.733-6.36 6.022-6.36 1.886 0 3.313.774 4.231 2.032V1.336Zm-3.821 14.751c2.177 0 3.821-1.62 3.821-3.87 0-2.248-1.644-3.868-3.821-3.868-2.176 0-3.82 1.62-3.82 3.869s1.644 3.87 3.82 3.87Zm15.187 2.49c-3.651 0-6.384-2.78-6.384-6.36 0-3.602 2.733-6.359 6.384-6.359 2.37 0 4.426 1.233 5.393 3.12l-2.249 1.306c-.532-1.137-1.717-1.863-3.168-1.863-2.128 0-3.748 1.62-3.748 3.797 0 2.176 1.62 3.797 3.748 3.797 1.451 0 2.636-.75 3.216-1.863l2.249 1.282c-1.015 1.91-3.071 3.144-5.441 3.144Zm9.746-9.068c0 2.201 6.505.87 6.505 5.345 0 2.419-2.104 3.724-4.716 3.724-2.418 0-4.159-1.089-4.933-2.83l2.249-1.305c.387 1.088 1.355 1.74 2.684 1.74 1.161 0 2.056-.386 2.056-1.354 0-2.151-6.505-.942-6.505-5.27 0-2.274 1.959-3.701 4.425-3.701 1.983 0 3.628.92 4.474 2.515l-2.2 1.233c-.436-.943-1.283-1.378-2.274-1.378-.943 0-1.765.41-1.765 1.281Zm11.148 0c0 2.201 6.505.87 6.505 5.345 0 2.419-2.104 3.724-4.716 3.724-2.418 0-4.158-1.089-4.933-2.83l2.249-1.305c.387 1.088 1.354 1.74 2.684 1.74 1.161 0 2.056-.386 2.056-1.354 0-2.151-6.505-.942-6.505-5.27 0-2.274 1.959-3.701 4.426-3.701 1.982 0 3.627.92 4.473 2.515l-2.2 1.233c-.435-.943-1.282-1.378-2.273-1.378-.944 0-1.766.41-1.766 1.281Z'></path>
						</svg>
						<div className='inline-flex'>4</div>
					</div>
				</h2>
				<p className='mt-3 text-center text-zinc-800 dark:text-neutral-200'>
					Powered by Tailwind CSS utility classes, Boltify’s extensive library of prebuilt
					components empowers you to effortlessly design and customize stunning, fully
					responsive, mobile-first websites in record time.
				</p>
			</div>

			<div className='grid grid-cols-12 gap-4'>
				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() =>
							navigate(pages.examples.exampleMain.subPages.dataVisualization.to)
						}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.3}>
									<EXAMPLE.DataVisualization.ChartAndGraph.LineChartDatepicker />
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>Data Visualization</div>
									<div className='text-zinc-500'>6 Categories, 20+ Examples</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>
				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() => navigate(pages.examples.exampleMain.subPages.cards.to)}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.4}>
									<div className='mx-auto w-2/3 pt-12'>
										<EXAMPLE.Card.CardNavs.SoftColor />
									</div>
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>Card</div>
									<div className='text-zinc-500'>13 Categories, 50+ Examples</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>
				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() => navigate(pages.examples.exampleMain.subPages.overlays.to)}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.4}>
									<div className='mx-auto w-2/3 pt-12'>
										<GeneralOrderActivityExamplePreview />
									</div>
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>Overlays</div>
									<div className='text-zinc-500'>15 Categories, 50+ Examples</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>
				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() => navigate(pages.examples.exampleMain.subPages.tables.to)}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.3}>
									<EXAMPLE.Table.Projects.ImageAndComponents />
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>Tables</div>
									<div className='text-zinc-500'>6 Categories, 20+ Examples</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>

				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() => navigate(pages.examples.exampleMain.subPages.forms.to)}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.5}>
									<div className='mx-auto w-2/3 pt-12'>
										<EXAMPLE.Forms.Filters.Payments />
									</div>
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>Forms</div>
									<div className='text-zinc-500'>13 Categories, 20+ Examples</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>
				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() =>
							navigate(
								pages.examples.exampleMain.subPages.searchAndCommandPalettes.to,
							)
						}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.4}>
									<div className='mx-auto w-2/3 pt-12'>
										<EXAMPLE.Card.Contacts.UserConnect />
									</div>
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>Search & Command Palettes</div>
									<div className='text-zinc-500'>3 Categories, 10+ Examples</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>
				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() =>
							navigate(pages.examples.exampleMain.subPages.pageSections.to)
						}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.5}>
									<EXAMPLE.PageSections.UserProfile.HeaderWithTabs />
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>Page Sections</div>
									<div className='text-zinc-500'>9 Categories, 30+ Examples</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>
				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() =>
							navigate(pages.examples.exampleMain.subPages.userInterface.to)
						}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={1}>
									<div className='mx-auto flex items-center justify-center pt-12'>
										<EXAMPLE.Ui.Dropdown.Assign />
									</div>
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>User Interface</div>
									<div className='text-zinc-500'>9 Categories, 50+ Examples</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>
			</div>

			<div className='mx-auto my-8 max-w-[64rem] lg:my-14'>
				<h2 className='text-3xl font-bold text-zinc-800 lg:text-2xl dark:text-neutral-200'>
					<div className='flex flex-wrap items-center justify-center gap-x-2 gap-y-4'>
						<div className='inline-flex'>or, Landing/Public page examples</div>
					</div>
				</h2>
			</div>

			<div className='grid grid-cols-12 gap-4'>
				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() =>
							navigate(pages.examples.exampleMain.subPages.navigations.to)
						}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.3}>
									<div className='pt-36'>
										<EXAMPLE.Navigations.Navbars.CenterAligned />
									</div>
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>Navigations</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>
				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() =>
							navigate(
								pages.examples.exampleMain.subPages.pageSections.subPages
									.heroSections.to,
							)
						}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.3}>
									<EXAMPLE.PageSections.HeroSections.WithImageAndText />
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>Hero Sections</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>
				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() =>
							navigate(
								pages.examples.exampleMain.subPages.pageSections.subPages
									.iconSection.to,
							)
						}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.3}>
									<EXAMPLE.PageSections.IconSections.IconGrayBackgroundOnHover />
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>Icon Sections</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>
				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() =>
							navigate(
								pages.examples.exampleMain.subPages.pageSections.subPages
									.pricingSections.to,
							)
						}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.3}>
									<EXAMPLE.PageSections.PricingSections.Card />
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>Pricing Sections</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>

				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() =>
							navigate(
								pages.examples.exampleMain.subPages.pageSections.subPages
									.faqSections.to,
							)
						}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.3}>
									<EXAMPLE.PageSections.FaqSections.RightAlignedWithBorderBottom />
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>FAQ Sections</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>
				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() =>
							navigate(
								pages.examples.exampleMain.subPages.contactAndFooters.subPages
									.contact.to,
							)
						}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.3}>
									<EXAMPLE.ContactAndFooter.Contact.InfoWithForm />
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>Contact Sections</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>
				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() =>
							navigate(
								pages.examples.exampleMain.subPages.contactAndFooters.subPages
									.footer.to,
							)
						}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.3}>
									<div className='pt-24'>
										<EXAMPLE.ContactAndFooter.Footer.FiveColsWithLanguageDropdown />
									</div>
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>Footer Sections</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>
				<div className='col-span-12 lg:col-span-6 xl:col-span-3'>
					<Card
						className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'
						onClick={() => navigate(pages.examples.exampleMain.subPages.cards.to)}>
						<CardBody className='pb-0!'>
							<div className='col-span-3 h-48'>
								<ScaledWrapper scale={0.3}>
									<div className='mx-auto w-2/3 pt-24'>
										<EXAMPLE.Card.InlineCards.ListView />
									</div>
								</ScaledWrapper>
							</div>
						</CardBody>
						<CardFooter className='border-t border-inherit bg-zinc-500/10 pt-4'>
							<CardFooterChild>
								<div>
									<div className='font-bold'>Cards</div>
								</div>
							</CardFooterChild>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default SectionExamplesLanding;
