import Container from '@/components/layout/Container';
import { useFormik } from 'formik';
import { useOutletContext, useSearchParams } from 'react-router';
import { OutletContextType } from '@/pages/apps/sales/_layouts/Sales.layout';
import { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import Subheader, { SubheaderLeft } from '@/components/layout/Subheader';
import Button from '@/components/ui/Button';
import CUSTOMERS, { ICustomer } from '@/mocks/customers.mock';
import Card, {
	CardBody,
	CardFooter,
	CardFooterChild,
	CardHeader,
	CardHeaderChild,
	CardSubTitle,
	CardTitle,
} from '@/components/ui/Card';
import Label from '@/components/form/Label';
import Icon from '@/components/icon/Icon';
import Input from '@/components/form/Input';
import Description from '@/components/form/Description';
import Select from '@/components/form/Select';
import Tooltip from '@/components/ui/Tooltip';
import FieldWrap from '@/components/form/FieldWrap';
import Progress from '@/components/ui/Progress';
import * as Yup from 'yup';
import Validation from '@/components/form/Validation';
import { TColors } from '@/types/colors.type';
import List, { Li } from '@/components/ui/List';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Checkbox from '@/components/form/Checkbox';
import ButtonGroup from '@/components/ui/ButtonGroup';
import EXAMPLE from '@/examples/_index';

const PAGE_TABS = {
	profile: { name: 'Profile' },
	notifications: { name: 'Notifications' },
	integrations: { name: 'Integrations' },
};

const currentCustomer = (id: number): ICustomer | undefined => {
	return CUSTOMERS.find((customer) => customer.id === id);
};

const validationSchema = Yup.object().shape({
	newPassword: Yup.string()
		.required('New password is required')
		.min(8, 'Must be at least 8 characters')
		.matches(/[A-Z]/, 'Must contain at least one uppercase letter')
		.matches(/[a-z]/, 'Must contain at least one lowercase letter')
		.matches(/[\d\s\W]/, 'Must contain at least one number, symbol, or whitespace')
		.test(
			'no-repeating-chars',
			'Password must not contain the same character repeated 3 or more times in a row',
			(value) => !/(.)\1{2,}/.test(value || ''),
		),
	repeatPassword: Yup.string()
		.required('Please confirm your password')
		.oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});

const passwordChecks = (password: string) => ({
	hasMinLength: password.length >= 8,
	hasUppercase: /[A-Z]/.test(password),
	hasLowercase: /[a-z]/.test(password),
	hasNumberOrSymbol: /[\d\s\W]/.test(password),
	hasNoRepeatingChars: password.length >= 3 && !/(.)\1{2,}/.test(password),
});

const CustomerEditPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const customerIdFromUrl = searchParams.get('customerId');
	const tabFromUrl = searchParams.get('tab');

	const [data] = useState<ICustomer | undefined>(currentCustomer(Number(customerIdFromUrl)));

	const { setHeaderLeft } = useOutletContext<OutletContextType>();
	useEffect(() => {
		setHeaderLeft(
			<Breadcrumb
				list={[
					{ ...pages.apps.customer },
					{ ...pages.apps.customer.subPages.edit },
					...(customerIdFromUrl
						? [
								{
									...pages.apps.customer.subPages.edit,
									text: data ? `${data?.firstName} ${data?.lastName}` : 'New',
								},
							]
						: []),
				]}
			/>,
		);
		return () => {
			setHeaderLeft(undefined);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [activeTab, setActiveTab] = useState(
		Object.values(PAGE_TABS).some((p) => p.name === tabFromUrl)
			? tabFromUrl!
			: PAGE_TABS.profile.name,
	);
	useEffect(() => {
		const newParams = new URLSearchParams(searchParams);
		newParams.set('tab', activeTab);
		setSearchParams(newParams);
	}, [activeTab, searchParams, setSearchParams]);

	const [visibility, setVisibility] = useState<Record<string, boolean>>({
		password: false,
		newPassword: false,
		repeatPassword: false,
	});

	const toggleVisibility = (field: string) => {
		setVisibility((prev) => ({
			...prev,
			[field]: !prev[field],
		}));
	};

	const profileFormik = useFormik({
		initialValues: {
			avatar: '',
			name: '',
			username: '',
			email: '',
			location: '',
			urls: [''],
		},
		onSubmit: (values) => {
			console.log('Profile form submitted:', values);
		},
	});

	const passwordFormik = useFormik({
		initialValues: {
			password: '',
			newPassword: '',
			repeatPassword: '',
		},
		validationSchema,
		onSubmit: (values) => {
			console.log('Password form submitted:', values);
		},
	});

	const notificationsFormik = useFormik({
		initialValues: {
			email: {
				dailyDigest: true,
				newDeviceLogin: true,
				whatsNew: false,
				perks: true,
				tipsAndTricks: false,
			},
			disturb: false,
			schedule: false,
			from: '17:00',
			to: '08:00',
			days: {
				mon: false,
				tue: false,
				wed: false,
				thu: false,
				fri: false,
				sat: true,
				sun: true,
			},
		},
		onSubmit: (values) => console.log('Notifications form submitted:', values),
	});

	const checks = passwordChecks(passwordFormik.values.newPassword);
	const passedCount = Object.values(checks).filter(Boolean).length;
	const colorMap: { [key: number]: TColors } = {
		0: 'red',
		1: 'red',
		2: 'amber',
		3: 'amber',
		4: 'blue',
	};
	const passwordStrengthColor: TColors = colorMap[passedCount] ?? 'emerald';

	return (
		<>
			<Subheader>
				<SubheaderLeft>
					{Object.values(PAGE_TABS).map((page) => (
						<Button
							key={page.name}
							aria-label={page.name}
							variant={activeTab === page.name ? 'soft' : 'link'}
							onClick={() => setActiveTab(page.name)}>
							{page.name}
						</Button>
					))}
				</SubheaderLeft>
			</Subheader>
			<Container>
				{activeTab === PAGE_TABS.profile.name && (
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>
									<div>
										<div>Profile</div>
										<CardSubTitle>
											Manage your name, password and account settings.
										</CardSubTitle>
									</div>
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='grid grid-cols-12'>
								<div className='col-span-12 md:col-span-2'>
									<Label htmlFor='avatar'>Avatar</Label>
								</div>
								<div className='col-span-12 flex items-center gap-4 md:col-span-10'>
									<div className='flex size-24 items-center justify-center rounded-full border border-dashed border-zinc-500/50'>
										<Icon icon='Image01' size='text-2xl' color='zinc' />
									</div>
									<div>
										<Input
											name='avatar'
											type='file'
											onChange={(e) =>
												profileFormik.setFieldValue(
													'avatar',
													e.currentTarget.files?.[0],
												)
											}
										/>
										<Description id='input-helper-text' className='mt-2'>
											Pick a photo up to 1MB.
										</Description>
									</div>
								</div>
							</div>
						</CardBody>
						<hr className='mx-4 my-8 border-zinc-500/25' />
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>Personal info</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='flex flex-col gap-8'>
								<div className='grid grid-cols-12'>
									<div className='col-span-12 lg:col-span-3 xl:col-span-2'>
										<Label htmlFor='name'>Name</Label>
									</div>
									<div className='col-span-12 flex flex-col lg:col-span-9 xl:col-span-4'>
										<Input
											id='name'
											name='name'
											placeholder='Enter full name'
											aria-describedby='name-desc'
											value={profileFormik.values.name}
											onChange={profileFormik.handleChange}
										/>
										<Description id='name-desc' className='mt-2'>
											Enter your full name, or a display name you are
											comfortable with.
										</Description>
									</div>
								</div>
								<div className='grid grid-cols-12'>
									<div className='col-span-12 lg:col-span-3 xl:col-span-2'>
										<Label htmlFor='username'>Username</Label>
									</div>
									<div className='col-span-12 flex flex-col lg:col-span-9 xl:col-span-4'>
										<Input
											id='username'
											name='username'
											autoComplete='username'
											placeholder='Enter username'
											aria-describedby='username-desc'
											value={profileFormik.values.username}
											onChange={profileFormik.handleChange}
										/>
										<Description id='username-desc' className='mt-2'>
											Enter your display name.
										</Description>
									</div>
								</div>
								<div className='grid grid-cols-12'>
									<div className='col-span-12 lg:col-span-3 xl:col-span-2'>
										<Label htmlFor='email'>Email</Label>
									</div>
									<div className='col-span-12 flex flex-col lg:col-span-9 xl:col-span-4'>
										<Input
											id='email'
											name='email'
											type='email'
											autoComplete='email'
											placeholder='Enter email address'
											aria-describedby='email-desc'
											value={profileFormik.values.email}
											onChange={profileFormik.handleChange}
										/>
										<Description id='email-desc' className='mt-2'>
											Enter the email address you want to use to log in with
											Boltify.
										</Description>
									</div>
								</div>
								<div className='grid grid-cols-12'>
									<div className='col-span-12 lg:col-span-3 xl:col-span-2'>
										<Label htmlFor='location'>Location</Label>
									</div>
									<div className='col-span-12 flex flex-col lg:col-span-9 xl:col-span-4'>
										<Select
											id='location'
											name='location'
											autoComplete='country'
											placeholder='Select country'
											aria-describedby='country-desc'
											value={profileFormik.values.location}
											onChange={profileFormik.handleChange}>
											<optgroup label='America'>
												<option value='canada'>Canada</option>
												<option value='usa'>
													United States of America
												</option>
											</optgroup>
											<optgroup label='Europe'>
												<option value='germany'>Germany</option>
												<option value='netherlands'>Netherlands</option>
												<option value='spain'>Spain</option>
											</optgroup>
										</Select>
										<Description id='country-desc' className='mt-2'>
											Only certain countries are served.
										</Description>
									</div>
								</div>
							</div>
						</CardBody>
						<hr className='mx-4 my-8 border-zinc-500/25' />
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>Password</CardTitle>
								<CardSubTitle>
									<Tooltip
										text={
											<div>
												<div className='text-xl font-bold'>
													Password requirement
												</div>
												<ul className='list-inside list-disc text-zinc-500'>
													<li>
														Min 8 characters long - the more, the better
													</li>
													<li>At least one big character</li>
													<li>At least one small character</li>
													<li>
														At least one number, symbol, or whitespace
														character
													</li>
												</ul>
											</div>
										}
									/>
								</CardSubTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='flex flex-col gap-8'>
								<div className='grid grid-cols-12'>
									<div className='col-span-12 lg:col-span-3 xl:col-span-2'>
										<Label htmlFor='password'>Current password</Label>
									</div>
									<div className='col-span-12 flex flex-col lg:col-span-9 xl:col-span-4'>
										<FieldWrap
											lastSuffix={
												<Button
													aria-label='View/Hide'
													color='zinc'
													icon={
														visibility.password
															? 'View'
															: 'ViewOffSlash'
													}
													onClick={() => toggleVisibility('password')}
													tabIndex={-1}
												/>
											}>
											<Input
												id='password'
												name='password'
												type={visibility.password ? 'text' : 'password'}
												className='font-mono placeholder-shown:font-sans'
												autoComplete='current-password'
												placeholder='Enter current password'
												value={passwordFormik.values.password}
												onChange={passwordFormik.handleChange}
												onCopy={(e) => e.preventDefault()}
												onCut={(e) => e.preventDefault()}
											/>
										</FieldWrap>
									</div>
								</div>
								<div className='grid grid-cols-12'>
									<div className='col-span-12 lg:col-span-3 xl:col-span-2'>
										<Label htmlFor='newPassword'>New password</Label>
									</div>
									<div className='col-span-12 flex flex-col lg:col-span-9 xl:col-span-4'>
										<Validation
											isValid={passwordFormik.isValid}
											isTouched={passwordFormik.touched.newPassword}
											invalidFeedback={passwordFormik.errors.newPassword}
											validFeedback='Good'>
											<FieldWrap
												lastSuffix={
													<Button
														aria-label='View/Hide'
														color='zinc'
														icon={
															visibility.newPassword
																? 'View'
																: 'ViewOffSlash'
														}
														onClick={() =>
															toggleVisibility('newPassword')
														}
														tabIndex={-1}
													/>
												}>
												<Input
													id='newPassword'
													name='newPassword'
													type={
														visibility.newPassword ? 'text' : 'password'
													}
													className='font-mono select-none placeholder-shown:font-sans'
													autoComplete='new-password'
													placeholder='Enter new password'
													value={passwordFormik.values.newPassword}
													onChange={passwordFormik.handleChange}
													onBlur={passwordFormik.handleBlur}
													onCopy={(e) => e.preventDefault()}
													onCut={(e) => e.preventDefault()}
												/>
											</FieldWrap>
										</Validation>
									</div>
									<div className='col-span-12 mt-4 flex flex-col lg:col-span-9 lg:col-start-4 xl:col-span-4 xl:col-start-3'>
										<Validation
											isValid={passwordFormik.isValid}
											isTouched={passwordFormik.touched.repeatPassword}
											invalidFeedback={passwordFormik.errors.repeatPassword}
											validFeedback='Good'>
											<FieldWrap
												lastSuffix={
													<Button
														aria-label='View/Hide'
														color='zinc'
														icon={
															visibility.repeatPassword
																? 'View'
																: 'ViewOffSlash'
														}
														onClick={() =>
															toggleVisibility('repeatPassword')
														}
														tabIndex={-1}
													/>
												}>
												<Input
													id='repeatPassword'
													name='repeatPassword'
													type={
														visibility.repeatPassword
															? 'text'
															: 'password'
													}
													className='font-mono placeholder-shown:font-sans'
													autoComplete='new-password'
													placeholder='Repeat new password'
													value={passwordFormik.values.repeatPassword}
													onChange={passwordFormik.handleChange}
													onBlur={passwordFormik.handleBlur}
													onCopy={(e) => e.preventDefault()}
													onCut={(e) => e.preventDefault()}
												/>
											</FieldWrap>
										</Validation>
									</div>
									<div className='col-span-12 mt-4 flex flex-col lg:col-span-9 lg:col-start-4 xl:col-span-4 xl:col-start-3'>
										<div className='grid grid-cols-5 gap-2'>
											<Progress
												value={passedCount > 0 ? 100 : 0}
												color={passwordStrengthColor}
											/>
											<Progress
												value={passedCount > 1 ? 100 : 0}
												color={passwordStrengthColor}
											/>
											<Progress
												value={passedCount > 2 ? 100 : 0}
												color={passwordStrengthColor}
											/>
											<Progress
												value={passedCount > 3 ? 100 : 0}
												color={passwordStrengthColor}
											/>
											<Progress
												value={passedCount > 4 ? 100 : 0}
												color={passwordStrengthColor}
											/>
										</div>
									</div>
									<div className='col-span-12 mt-4 flex flex-col lg:col-span-9 lg:col-start-4 xl:col-span-4 xl:col-start-3'>
										<List type='list-none' className='text-zinc-500'>
											<Li
												iconProps={{
													icon: checks.hasMinLength
														? 'Tick02'
														: 'Cancel01',
													color: checks.hasMinLength ? 'emerald' : 'red',
												}}
												className={classNames({
													'text-emerald-500': checks.hasMinLength,
												})}>
												Must be at least 8 characters
											</Li>
											<Li
												iconProps={{
													icon: checks.hasUppercase
														? 'Tick02'
														: 'Cancel01',
													color: checks.hasUppercase ? 'emerald' : 'red',
												}}
												className={classNames({
													'text-emerald-500': checks.hasUppercase,
												})}>
												Must contain at least one uppercase letter
											</Li>
											<Li
												iconProps={{
													icon: checks.hasLowercase
														? 'Tick02'
														: 'Cancel01',
													color: checks.hasLowercase ? 'emerald' : 'red',
												}}
												className={classNames({
													'text-emerald-500!': checks.hasLowercase,
												})}>
												Must contain at least one lowercase letter
											</Li>
											<Li
												iconProps={{
													icon: checks.hasNumberOrSymbol
														? 'Tick02'
														: 'Cancel01',
													color: checks.hasNumberOrSymbol
														? 'emerald'
														: 'red',
												}}
												className={classNames({
													'text-emerald-500!': checks.hasNumberOrSymbol,
												})}>
												Must contain at least one number, symbol, or
												whitespace
											</Li>
											<Li
												iconProps={{
													icon: checks.hasNoRepeatingChars
														? 'Tick02'
														: 'Cancel01',
													color: checks.hasNoRepeatingChars
														? 'emerald'
														: 'red',
												}}
												className={classNames({
													'text-emerald-500!': checks.hasNoRepeatingChars,
												})}>
												Password must not contain the same character
												repeated 3 or more times in a row
											</Li>
										</List>
									</div>
									<div className='col-span-12 mt-8 lg:col-span-9 lg:col-start-4 xl:col-span-4 xl:col-start-3'>
										<div className='flex gap-4'>
											<Button variant='solid' aria-label='Change'>
												Change
											</Button>
											<Button
												variant='default'
												aria-label='I forgot my password'>
												I forgot my password
											</Button>
										</div>
									</div>
								</div>
							</div>
						</CardBody>
						<hr className='mx-4 my-8 border-zinc-500/25' />
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>Social accounts</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='flex flex-col gap-8'>
								<div className='grid grid-cols-12'>
									<div className='col-span-12 lg:col-span-3 xl:col-span-2'>
										<Label htmlFor='url'>URL</Label>
									</div>
									{/* URL item start */}
									{profileFormik.values.urls.map((_, index) => (
										<Fragment key={index}>
											<div className='col-span-12 mb-4 flex lg:col-span-9 lg:col-start-4 xl:col-span-4 xl:col-start-3'>
												<FieldWrap
													lastSuffix={
														<Button
															aria-label='Delete'
															icon='Delete02'
															onClick={() => {
																const urls = [
																	...profileFormik.values.urls,
																];
																urls.splice(index, 1);
																profileFormik.setFieldValue(
																	'urls',
																	urls,
																);
															}}
															isDisable={
																profileFormik.values.urls.length ===
																1
															}
														/>
													}>
													<Input
														id={`url-${index}`}
														name={`urls[${index}]`}
														type='url'
														placeholder='Link to social profile'
														value={profileFormik.values.urls[index]}
														onChange={profileFormik.handleChange}
													/>
												</FieldWrap>
											</div>
										</Fragment>
									))}
									{/* URL item end */}
									<div className='col-span-12 flex flex-col lg:col-span-9 lg:col-start-4 xl:col-span-4 xl:col-start-3'>
										<div className='flex'>
											<Button
												aria-label='Add URL'
												icon='PlusSignCircle'
												className='border-dashed border-zinc-500'
												rounded='rounded-full'
												dimension='sm'
												color='zinc'
												variant='default'
												onClick={() =>
													profileFormik.setFieldValue('urls', [
														...profileFormik.values.urls,
														'',
													])
												}>
												Add url
											</Button>
										</div>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				)}
				{activeTab === PAGE_TABS.notifications.name && (
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>
									<div>
										<div>Notifications</div>
										<CardSubTitle>
											Configure email, desktop and mobile app notifications.
										</CardSubTitle>
									</div>
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<EXAMPLE.PageSections.NotificationSystems.TableFormatListOfCheckbox />
						</CardBody>
						<hr className='mx-4 my-8 border-zinc-500/25' />
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>
									<div>
										<div>Email</div>
										<CardSubTitle>
											Stay in-the-know about all things.
										</CardSubTitle>
									</div>
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='flex flex-col gap-8'>
								<div className='grid grid-cols-12 gap-4'>
									<div className='col-span-12 lg:col-span-6'>
										<Checkbox
											variant='switch'
											label='Daily digest'
											description='Personalized productivity stats plus your tasks due today. Sent every morning.'
											checked={notificationsFormik.values.email.dailyDigest}
											onChange={(e) =>
												notificationsFormik.setFieldValue(
													'email.dailyDigest',
													e.target.checked,
												)
											}
										/>
									</div>
									<div className='col-span-12 lg:col-span-6'>
										<Checkbox
											variant='switch'
											label='New device login'
											description='Notify me when there is a new login.'
											checked={
												notificationsFormik.values.email.newDeviceLogin
											}
											onChange={(e) =>
												notificationsFormik.setFieldValue(
													'email.newDeviceLogin',
													e.target.checked,
												)
											}
										/>
									</div>
									<div className='col-span-12 lg:col-span-6'>
										<Checkbox
											variant='switch'
											label='What’s new'
											description='Exciting features and updates from the Omtanke team. Sent no more than once a month.'
											checked={notificationsFormik.values.email.whatsNew}
											onChange={(e) =>
												notificationsFormik.setFieldValue(
													'email.whatsNew',
													e.target.checked,
												)
											}
										/>
									</div>
									<div className='col-span-12 lg:col-span-6'>
										<Checkbox
											variant='switch'
											label='Perks'
											description='Special discounts, partner offers, invitations to events, and more'
											checked={notificationsFormik.values.email.perks}
											onChange={(e) =>
												notificationsFormik.setFieldValue(
													'email.perks',
													e.target.checked,
												)
											}
										/>
									</div>
									<div className='col-span-12 lg:col-span-6'>
										<Checkbox
											variant='switch'
											label='Tips and tricks'
											description='Powerful productivity advice in your inbox. Sent once a month.'
											checked={notificationsFormik.values.email.tipsAndTricks}
											onChange={(e) =>
												notificationsFormik.setFieldValue(
													'email.tipsAndTricks',
													e.target.checked,
												)
											}
										/>
									</div>
								</div>
							</div>
						</CardBody>{' '}
						<hr className='mx-4 my-8 border-zinc-500/25' />
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>Do no disturb</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='flex flex-col'>
								<div className='grid grid-cols-12 gap-4'>
									<div className='col-span-12 lg:col-span-6'>
										<Button
											aria-label='Notifications'
											variant='outline'
											color='zinc'
											icon={
												notificationsFormik.values.disturb
													? 'NotificationOff01'
													: 'Notification01'
											}
											onClick={() =>
												notificationsFormik.setFieldValue(
													'disturb',
													!notificationsFormik.values.disturb,
												)
											}>
											{notificationsFormik.values.disturb ? 'Pause' : 'Play'}{' '}
											notifications
										</Button>
									</div>
								</div>
							</div>
						</CardBody>
						<div className='mx-4 my-4' />
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>Schedule</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='flex flex-col'>
								<div className='grid grid-cols-12 gap-4'>
									<div className='col-span-12 flex items-center gap-4'>
										<Checkbox
											name='schedule'
											checked={notificationsFormik.values.schedule}
											onChange={notificationsFormik.handleChange}
											label='Do not notify me from:'
										/>
										<div>
											<Input
												name='from'
												value={notificationsFormik.values.from}
												onChange={notificationsFormik.handleChange}
												disabled={!notificationsFormik.values.schedule}
												type='time'
												className='min-w-18'
											/>
										</div>
										<div>to:</div>
										<div>
											<Input
												name='to'
												value={notificationsFormik.values.to}
												onChange={notificationsFormik.handleChange}
												disabled={!notificationsFormik.values.schedule}
												type='time'
												className='min-w-18'
											/>
										</div>
									</div>
								</div>
							</div>
						</CardBody>
						<div className='mx-4 my-4' />
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>Do not disturb me on my days off</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<div className='flex flex-col'>
								<div className='grid grid-cols-12 gap-4'>
									<div className='col-span-12 flex items-center gap-4'>
										<ButtonGroup variant='soft' color='zinc'>
											<Button
												aria-label='Mon'
												isActive={notificationsFormik.values.days.mon}
												onClick={() =>
													notificationsFormik.setFieldValue('days', {
														...notificationsFormik.values.days,
														mon: !notificationsFormik.values.days.mon,
													})
												}>
												Mon
											</Button>
											<Button
												aria-label='Tue'
												isActive={notificationsFormik.values.days.tue}
												onClick={() =>
													notificationsFormik.setFieldValue('days', {
														...notificationsFormik.values.days,
														tue: !notificationsFormik.values.days.tue,
													})
												}>
												Tue
											</Button>
											<Button
												aria-label='Wed'
												isActive={notificationsFormik.values.days.wed}
												onClick={() =>
													notificationsFormik.setFieldValue('days', {
														...notificationsFormik.values.days,
														wed: !notificationsFormik.values.days.wed,
													})
												}>
												Wed
											</Button>
											<Button
												aria-label='Thu'
												isActive={notificationsFormik.values.days.thu}
												onClick={() =>
													notificationsFormik.setFieldValue('days', {
														...notificationsFormik.values.days,
														thu: !notificationsFormik.values.days.thu,
													})
												}>
												Thu
											</Button>
											<Button
												aria-label='Fri'
												isActive={notificationsFormik.values.days.fri}
												onClick={() =>
													notificationsFormik.setFieldValue('days', {
														...notificationsFormik.values.days,
														fri: !notificationsFormik.values.days.fri,
													})
												}>
												Fri
											</Button>
											<Button
												aria-label='Sat'
												isActive={notificationsFormik.values.days.sat}
												onClick={() =>
													notificationsFormik.setFieldValue('days', {
														...notificationsFormik.values.days,
														sat: !notificationsFormik.values.days.sat,
													})
												}>
												Sat
											</Button>
											<Button
												aria-label='Sun'
												isActive={notificationsFormik.values.days.sun}
												onClick={() =>
													notificationsFormik.setFieldValue('days', {
														...notificationsFormik.values.days,
														sun: !notificationsFormik.values.days.sun,
													})
												}>
												Sun
											</Button>
										</ButtonGroup>
									</div>
								</div>
							</div>
						</CardBody>
					</Card>
				)}
				{activeTab === PAGE_TABS.integrations.name && (
					<Card>
						<CardHeader>
							<CardHeaderChild>
								<CardTitle>
									<div>
										<div>Integrations</div>
										<CardSubTitle>
											Connect Boltify to other tools that you use.
										</CardSubTitle>
									</div>
								</CardTitle>
							</CardHeaderChild>
						</CardHeader>
						<CardBody>
							<EXAMPLE.Card.Integrations.Card />
						</CardBody>
					</Card>
				)}
				{[PAGE_TABS.profile.name, PAGE_TABS.notifications.name].includes(activeTab) && (
					<Card className='sticky bottom-4 mt-4'>
						<CardFooter>
							<CardFooterChild>
								<div className='text-zinc-500'>
									Last save;{' '}
									<span className='font-bold'>
										{dayjs(data?.updatedAt).format('MMMM D, YYYY - HH:mm')}
									</span>
								</div>
							</CardFooterChild>
							<CardFooterChild>
								<Button aria-label='Cancel' variant='outline' color='zinc'>
									Cancel
								</Button>
								<Button aria-label='Save' variant='solid' icon='FloppyDisk'>
									Save
								</Button>
							</CardFooterChild>
						</CardFooter>
					</Card>
				)}
			</Container>
		</>
	);
};

export default CustomerEditPage;
