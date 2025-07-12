import { useNavigate } from 'react-router';
import useDarkMode from '@/hooks/useDarkMode';
import Card, { CardBody, CardFooter, CardFooterChild } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import pages from '@/Routes/pages';
import SalesDark1 from '@/assets/ss/sales-dark-1.png';
import SalesLight1 from '@/assets/ss/sales-light-1.png';
import SalesDark2 from '@/assets/ss/sales-dark-2.png';
import SalesLight2 from '@/assets/ss/sales-light-2.png';
import SalesDark3 from '@/assets/ss/sales-dark-3.png';
import SalesLight3 from '@/assets/ss/sales-light-3.png';
import CustomerDark1 from '@/assets/ss/customer-dark-1.png';
import CustomerLight1 from '@/assets/ss/customer-light-1.png';
import CustomerDark2 from '@/assets/ss/customer-dark-2.png';
import CustomerLight2 from '@/assets/ss/customer-light-2.png';
import CustomerDark3 from '@/assets/ss/customer-dark-3.png';
import CustomerLight3 from '@/assets/ss/customer-light-3.png';
import ProductDark1 from '@/assets/ss/product-dark-1.png';
import ProductLight1 from '@/assets/ss/product-light-1.png';
import ProductDark2 from '@/assets/ss/product-dark-2.png';
import ProductLight2 from '@/assets/ss/product-light-2.png';
import ProductDark3 from '@/assets/ss/product-dark-3.png';
import ProductLight3 from '@/assets/ss/product-light-3.png';
import ProjectDark1 from '@/assets/ss/project-dark-1.png';
import ProjectLight1 from '@/assets/ss/project-light-1.png';
import ProjectDark2 from '@/assets/ss/project-dark-2.png';
import ProjectLight2 from '@/assets/ss/project-light-2.png';
import ProjectDark3 from '@/assets/ss/project-dark-3.png';
import ProjectLight3 from '@/assets/ss/project-light-3.png';
import InvoiceDark1 from '@/assets/ss/invoice-dark-1.png';
import InvoiceLight1 from '@/assets/ss/invoice-light-1.png';
import InvoiceDark2 from '@/assets/ss/invoice-dark-2.png';
import InvoiceLight2 from '@/assets/ss/invoice-light-2.png';
import InvoiceDark3 from '@/assets/ss/invoice-dark-3.png';
import InvoiceLight3 from '@/assets/ss/invoice-light-3.png';

const SectionTemplateLanding = () => {
	const navigate = useNavigate();
	const { isDarkTheme } = useDarkMode();

	return (
		<div
			id='templates'
			className='container mx-auto flex scroll-mt-24 flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
			<div className='mx-auto mb-8 max-w-3xl lg:mb-14'>
				<h2 className='text-3xl font-bold text-zinc-800 lg:text-4xl dark:text-neutral-200'>
					<div className='flex flex-wrap items-center justify-center gap-4'>
						Ready Templates
					</div>
				</h2>
				<p className='mt-3 text-center text-zinc-800 dark:text-neutral-200'>
					Boltify offers free, ready-to-use templates so you can build your projects at
					lightning speed—perfect for saving time and moving fast.
				</p>
			</div>

			<div className='grid grid-cols-12 gap-4'>
				<div className='col-span-12'>
					<Card>
						<CardBody>
							<div className='grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-12'>
								<div className='col-span-3 flex flex-col justify-center gap-2'>
									<div className='text-2xl'>Sales</div>
									<div className='text-zinc-500'>
										Designed to help you present, sell, and scale your web
										projects with ease — whether you’re a freelancer, startup,
										or growing team.
									</div>
									<div>
										<Button
											aria-label='Preview'
											color='primary'
											variant='soft'
											onClick={() => navigate(pages.apps.sales.to)}>
											Preview
										</Button>
									</div>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() => navigate(pages.apps.sales.to)}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div
												className='col-span-3 h-48 overflow-hidden bg-cover'
												style={{
													backgroundImage: `url(${isDarkTheme ? SalesDark1 : SalesLight1}`,
												}}></div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>Dashboard</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() => navigate(pages.apps.sales.subPages.list.to)}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div
												className='col-span-3 h-48 overflow-hidden bg-cover'
												style={{
													backgroundImage: `url(${isDarkTheme ? SalesDark2 : SalesLight2}`,
												}}></div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>List</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() => navigate(pages.apps.sales.subPages.view.to)}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div className='col-span-3 h-48 overflow-hidden'>
												<div
													className='col-span-3 h-48 overflow-hidden bg-cover'
													style={{
														backgroundImage: `url(${isDarkTheme ? SalesDark3 : SalesLight3}`,
													}}></div>
											</div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>Edit</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
			<div className='grid grid-cols-12 gap-4'>
				<div className='col-span-12'>
					<Card>
						<CardBody>
							<div className='grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-12'>
								<div className='col-span-3 flex flex-col justify-center gap-2'>
									<div className='text-2xl'>Customer</div>
									<div className='text-zinc-500'>
										Designed to help you present, sell, and scale your web
										projects with ease — whether you’re a freelancer, startup,
										or growing team.
									</div>
									<div>
										<Button
											aria-label='Preview'
											variant='soft'
											color='primary'
											onClick={() => navigate(pages.apps.customer.to)}>
											Preview
										</Button>
									</div>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() => navigate(pages.apps.customer.to)}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div
												className='col-span-3 h-48 overflow-hidden bg-cover'
												style={{
													backgroundImage: `url(${isDarkTheme ? CustomerDark1 : CustomerLight1}`,
												}}></div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>Dashboard</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() =>
											navigate(pages.apps.customer.subPages.view.to)
										}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div
												className='col-span-3 h-48 overflow-hidden bg-cover'
												style={{
													backgroundImage: `url(${isDarkTheme ? CustomerDark2 : CustomerLight2}`,
												}}></div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>View</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() =>
											navigate(pages.apps.customer.subPages.edit.to)
										}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div
												className='col-span-3 h-48 overflow-hidden bg-cover'
												style={{
													backgroundImage: `url(${isDarkTheme ? CustomerDark3 : CustomerLight3}`,
												}}></div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>Edit</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
			<div className='grid grid-cols-12 gap-4'>
				<div className='col-span-12'>
					<Card>
						<CardBody>
							<div className='grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-12'>
								<div className='col-span-3 flex flex-col justify-center gap-2'>
									<div className='text-2xl'>Products</div>
									<div className='text-zinc-500'>
										Designed to help you present, sell, and scale your web
										projects with ease — whether you’re a freelancer, startup,
										or growing team.
									</div>
									<div>
										<Button
											aria-label='Preview'
											variant='soft'
											color='primary'
											onClick={() => navigate(pages.apps.products.to)}>
											Preview
										</Button>
									</div>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() => navigate(pages.apps.products.to)}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div
												className='col-span-3 h-48 overflow-hidden bg-cover'
												style={{
													backgroundImage: `url(${isDarkTheme ? ProductDark1 : ProductLight1}`,
												}}></div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>Dashboard</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() =>
											navigate(pages.apps.products.subPages.list.to)
										}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div
												className='col-span-3 h-48 overflow-hidden bg-cover'
												style={{
													backgroundImage: `url(${isDarkTheme ? ProductDark2 : ProductLight2}`,
												}}></div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>List</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() =>
											navigate(pages.apps.products.subPages.edit.to)
										}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div
												className='col-span-3 h-48 overflow-hidden bg-cover'
												style={{
													backgroundImage: `url(${isDarkTheme ? ProductDark3 : ProductLight3}`,
												}}></div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>Edit</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
			<div className='grid grid-cols-12 gap-4'>
				<div className='col-span-12'>
					<Card>
						<CardBody>
							<div className='grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-12'>
								<div className='col-span-3 flex flex-col justify-center gap-2'>
									<div className='text-2xl'>Projects</div>
									<div className='text-zinc-500'>
										Designed to help you present, sell, and scale your web
										projects with ease — whether you’re a freelancer, startup,
										or growing team.
									</div>
									<div>
										<Button
											aria-label='Preview'
											variant='soft'
											color='primary'
											onClick={() => navigate(pages.apps.projects.to)}>
											Preview
										</Button>
									</div>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() => navigate(pages.apps.projects.to)}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div
												className='col-span-3 h-48 overflow-hidden bg-cover'
												style={{
													backgroundImage: `url(${isDarkTheme ? ProjectDark1 : ProjectLight1}`,
												}}></div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>Dashboard</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() =>
											navigate(pages.apps.projects.subPages.board.to)
										}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div
												className='col-span-3 h-48 overflow-hidden bg-cover'
												style={{
													backgroundImage: `url(${isDarkTheme ? ProjectDark2 : ProjectLight2}`,
												}}></div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>Board</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() =>
											navigate(pages.apps.projects.subPages.grid.to)
										}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div
												className='col-span-3 h-48 overflow-hidden bg-cover'
												style={{
													backgroundImage: `url(${isDarkTheme ? ProjectDark3 : ProjectLight3}`,
												}}></div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>Grid</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
			<div className='grid grid-cols-12 gap-4'>
				<div className='col-span-12'>
					<Card>
						<CardBody>
							<div className='grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-12'>
								<div className='col-span-3 flex flex-col justify-center gap-2'>
									<div className='text-2xl'>Invoices</div>
									<div className='text-zinc-500'>
										Designed to help you present, sell, and scale your web
										projects with ease — whether you’re a freelancer, startup,
										or growing team.
									</div>
									<div>
										<Button
											aria-label='Preview'
											variant='soft'
											color='primary'
											onClick={() => navigate(pages.apps.invoices.to)}>
											Preview
										</Button>
									</div>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() => navigate(pages.apps.invoices.to)}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div
												className='col-span-3 h-48 overflow-hidden bg-cover'
												style={{
													backgroundImage: `url(${isDarkTheme ? InvoiceDark1 : InvoiceLight1}`,
												}}></div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>Dashboard</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() =>
											navigate(pages.apps.invoices.subPages.list.to)
										}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div
												className='col-span-3 h-48 overflow-hidden bg-cover'
												style={{
													backgroundImage: `url(${isDarkTheme ? InvoiceDark2 : InvoiceLight2}`,
												}}></div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>List</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
								<div className='col-span-3'>
									<Card
										rounded='rounded-md'
										onClick={() =>
											navigate(pages.apps.invoices.subPages.view.to)
										}
										className='cursor-pointer outline-2 outline-offset-2 outline-transparent transition-all duration-300 ease-in-out hover:outline-blue-500'>
										<CardBody className='p-0!'>
											<div
												className='col-span-3 h-48 overflow-hidden bg-cover'
												style={{
													backgroundImage: `url(${isDarkTheme ? InvoiceDark3 : InvoiceLight3}`,
												}}></div>
										</CardBody>
										<CardFooter className='border-t border-inherit pt-4'>
											<CardFooterChild>View</CardFooterChild>
										</CardFooter>
									</Card>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
			<div className='mx-auto mb-8 max-w-3xl lg:mb-14'>
				<p className='mt-3 text-center'>
					<Button
						aria-label='View all pages'
						color='primary'
						variant='solid'
						onClick={() => navigate(pages.apps.sales.to)}>
						View all pages
					</Button>
				</p>
			</div>
		</div>
	);
};

export default SectionTemplateLanding;
