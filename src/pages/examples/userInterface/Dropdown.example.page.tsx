import Container from '@/components/layout/Container';
import EXAMPLE from '@/examples/_index';
import Header, { HeaderLeft, HeaderRight } from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import pages from '@/Routes/pages';
import ChangeDarkModeTemplate from '@/templates/header/ChangeDarkMode.template';
import ChangeLanguageTemplate from '@/templates/header/ChangeLanguage.template';

const DropdownExamplePage = () => {
	return (
		<>
			<Header>
				<HeaderLeft>
					<Breadcrumb
						list={[
							{ ...pages.examples.exampleMain },
							{ ...pages.examples.exampleMain.subPages.userInterface },
							{
								...pages.examples.exampleMain.subPages.userInterface.subPages
									.dropdown,
							},
						]}
					/>
				</HeaderLeft>
				<HeaderRight>
					<ChangeDarkModeTemplate />
					<ChangeLanguageTemplate />
					<EXAMPLE.Ui.Dropdown.Notifications />
				</HeaderRight>
			</Header>
			<Container>
				<div className='grid grid-cols-12 gap-4'>
					<div className='col-span-12 flex flex-col items-center justify-center gap-8 py-32'>
						<div className='text-6xl'>Dropdowns</div>
						<div className='text max-w-5xl text-center text-2xl text-zinc-500'>
							Collapsible admin dropdown options with selectable filters, switchable
							views - the dropdowns that adapt to you.
						</div>
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Range Select</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.Range />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Datepicker Select</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.Datepicker />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Download options</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.Download />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Others options</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.Others />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Notifications</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.Notifications />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Account Workspace</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.AccountWorkspace />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Company Details</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.CompanyDetails />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Change Status</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.ChangeStatus />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Assign</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.Assign />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Move To</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.MoveTo />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Snooze</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.Snooze />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Edit Tag</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.EditTag />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Button Group</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.ButtonGroup />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>
						Formatting Button Group
					</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.FormattingButtonGroup />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Login</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.Login />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Shop Account</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.ShopAccount />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Favorites</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.Favorites />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Quick Look</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.QuickLook />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Invite User</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.InviteUser />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Group List Color</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.GroupListColor />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Tag</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.Tag />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Avatar Group</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.AvatarGroup />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Project</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.Project />
					</div>

					<div className='col-span-12 mt-12 text-2xl font-bold'>Account</div>
					<div className='col-span-12 mb-16'>
						<EXAMPLE.Ui.Dropdown.Account />
					</div>
				</div>
			</Container>
		</>
	);
};

export default DropdownExamplePage;
