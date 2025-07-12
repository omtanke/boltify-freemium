import { useEffect, useState } from 'react';
import { useAuth } from '@/context/authContext';
import useDarkMode from '@/hooks/useDarkMode';
import { LogoDark, LogoLight } from '@/assets/images';
import { Link, useNavigate } from 'react-router';
import { useFormik } from 'formik';
import Input from '@/components/form/Input';
import Button from '@/components/ui/Button';
import FieldWrap from '@/components/form/FieldWrap';
import USERS from '@/mocks/users.mock';
import Card, { CardBody } from '@/components/ui/Card';
import pages from '@/Routes/pages';
import Label from '@/components/form/Label';
import Validation from '@/components/form/Validation';
import Progress from '@/components/ui/Progress';
import List, { Li } from '@/components/ui/List';
import classNames from 'classnames';
import { TColors } from '@/types/colors.type';
import * as Yup from 'yup';

interface IFormValues {
	username: string;
	password: string;
	rememberMe: boolean;
}
interface IRegisterFormValues {
	registerEmail: string;
	newPassword: string;
	repeatPassword: string;
}

const passwordChecks = (password: string) => ({
	hasMinLength: password.length >= 8,
	hasUppercase: /[A-Z]/.test(password),
	hasLowercase: /[a-z]/.test(password),
	hasNumberOrSymbol: /[\d\s\W]/.test(password),
	hasNoRepeatingChars: password.length >= 3 && !/(.)\1{2,}/.test(password),
});

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

const RegisterPage = () => {
	const { isDarkTheme } = useDarkMode();
	const navigate = useNavigate();
	const { onLogin, onLogout } = useAuth();

	useEffect(() => {
		onLogout(false).then();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleLogin = (username: string, password: string, rememberMe: boolean) => {
		onLogin(username, password, rememberMe).then(
			() => {
				console.log('Login success.');
			},
			(error) => {
				console.log('Login error.', error);
			},
		);
	};
	const formik = useFormik<IFormValues>({
		initialValues: {
			username: USERS.danielaPetrova.username,
			password: USERS.danielaPetrova.password,
			rememberMe: true,
		},
		onSubmit: (values) => {
			handleLogin(values.username, values.password, values.rememberMe);
		},
	});

	const formikRegister = useFormik<IRegisterFormValues>({
		initialValues: {
			registerEmail: '',
			newPassword: '',
			repeatPassword: '',
		},
		validationSchema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	const [visibility, setVisibility] = useState<Record<string, boolean>>({});
	const toggleVisibility = (field: string) => {
		setVisibility((prev) => ({
			...prev,
			[field]: !prev[field],
		}));
	};

	const checks = passwordChecks(formikRegister.values.newPassword);
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
		<div className='flex h-full items-center justify-center'>
			<div className='mx-auto w-full max-w-md p-6'>
				<Card className='dark:bg-zinc-900!'>
					<CardBody className='p-8!'>
						<button
							className='mb-8 flex w-full items-center justify-center'
							onClick={() => navigate('/')}>
							<img
								src={isDarkTheme ? LogoDark : LogoLight}
								className='h-16 cursor-pointer'
								alt='Boltify'
							/>
						</button>

						<div className='text-center'>
							<h1 className='block text-2xl font-bold text-zinc-800 dark:text-white'>
								Sign up
							</h1>
							<p className='mt-2 inline-flex gap-2 text-sm text-zinc-600 dark:text-zinc-400'>
								<span>Already have an account?</span>
								<Link to={pages.pagesExamples.login.to}>Sign in here</Link>
							</p>
						</div>

						<div className='mt-5'>
							<button
								type='button'
								onClick={formik.submitForm}
								className='inline-flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-800 shadow-xs hover:bg-zinc-50 focus:bg-zinc-50 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 dark:focus:bg-zinc-800'>
								<svg
									className='h-auto w-4'
									width='46'
									height='47'
									viewBox='0 0 46 47'
									fill='none'>
									<path
										d='M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z'
										fill='#4285F4'
									/>
									<path
										d='M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z'
										fill='#34A853'
									/>
									<path
										d='M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z'
										fill='#FBBC05'
									/>
									<path
										d='M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z'
										fill='#EB4335'
									/>
								</svg>
								Sign in with Google
							</button>

							<div className='flex items-center py-3 text-xs text-zinc-400 uppercase before:me-6 before:flex-1 before:border-t before:border-zinc-200 after:ms-6 after:flex-1 after:border-t after:border-zinc-200 dark:text-zinc-500 dark:before:border-zinc-600 dark:after:border-zinc-600'>
								Or
							</div>

							<div>
								<div className='grid gap-y-4'>
									<div>
										<Label htmlFor='registerEmail' className='w-auto!'>
											Email address
										</Label>
										<Input
											className='bg-transparent!'
											id='registerEmail'
											name='registerEmail'
											autoComplete='section-register email'
											type='email'
											value={formikRegister.values.registerEmail}
											onChange={formikRegister.handleChange}
											placeholder='Enter email address'
										/>
									</div>

									<div className='flex flex-col gap-4'>
										<div>
											<Label htmlFor='newPassword'>Password</Label>
											<Validation
												isValid={formikRegister.isValid}
												isTouched={formikRegister.touched.newPassword}
												invalidFeedback={formikRegister.errors.newPassword}
												validFeedback='Good'>
												<FieldWrap
													lastSuffix={
														<Button
															aria-label='Show/Hide'
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
															visibility.newPassword
																? 'text'
																: 'password'
														}
														className='font-mono select-none placeholder-shown:font-sans'
														autoComplete='section-register new-password'
														placeholder='Enter password'
														value={formikRegister.values.newPassword}
														onChange={formikRegister.handleChange}
														onBlur={formikRegister.handleBlur}
														onCopy={(e) => e.preventDefault()}
														onCut={(e) => e.preventDefault()}
													/>
												</FieldWrap>
											</Validation>
										</div>
										<div>
											<Validation
												isValid={formikRegister.isValid}
												isTouched={formikRegister.touched.repeatPassword}
												invalidFeedback={
													formikRegister.errors.repeatPassword
												}
												validFeedback='Good'>
												<FieldWrap
													lastSuffix={
														<Button
															aria-label='Show/Hide'
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
														autoComplete='section-register new-password'
														placeholder='Repeat password'
														value={formikRegister.values.repeatPassword}
														onChange={formikRegister.handleChange}
														onBlur={formikRegister.handleBlur}
														onCopy={(e) => e.preventDefault()}
														onCut={(e) => e.preventDefault()}
													/>
												</FieldWrap>
											</Validation>
										</div>
										<div className='flex flex-col'>
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
										<div className='flex flex-col'>
											<List type='list-none' className='text-zinc-500'>
												<Li
													iconProps={{
														icon: checks.hasMinLength
															? 'Tick02'
															: 'Cancel01',
														color: checks.hasMinLength
															? 'emerald'
															: 'red',
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
														color: checks.hasUppercase
															? 'emerald'
															: 'red',
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
														color: checks.hasLowercase
															? 'emerald'
															: 'red',
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
														'text-emerald-500!':
															checks.hasNumberOrSymbol,
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
														'text-emerald-500!':
															checks.hasNoRepeatingChars,
													})}>
													Password must not contain the same character
													repeated 3 or more times in a row
												</Li>
											</List>
										</div>
									</div>

									<Button
										aria-label='Sign up'
										variant='solid'
										className='py-2.5! font-bold'
										isDisable={passedCount < 4}
										// For demo
										onClick={formik.submitForm}>
										Sign up
									</Button>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};

export default RegisterPage;
