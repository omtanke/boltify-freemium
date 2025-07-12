import Aside, { AsideBody } from '@/components/layout/Aside';
import AsideHeaderPart from '@/templates/asides/_parts/AsideHeader.part';
import AsideFooterPart from '@/templates/asides/_parts/AsideFooter.part';
import Nav, {
	NavButton,
	NavCollapse,
	NavItem,
	NavSeparator,
	NavTitle,
} from '@/components/layout/Navigation/Nav';
import Badge from '@/components/ui/Badge';
import Collapse from '@/components/ui/Collapse';
import { useEffect, useState } from 'react';
import pages from '@/Routes/pages';
import { useSearchParams, SetURLSearchParams } from 'react-router';
import { MAIL_LABELS } from '@/mocks/mail.mock';

const toggleTag = (color: string, setSearchParams: SetURLSearchParams) => {
	setSearchParams((prev: URLSearchParams) => {
		const params = new URLSearchParams(prev);
		const currentTags = params.getAll('tags');
		let newTags;
		if (currentTags.includes(color)) {
			newTags = currentTags.filter((tag) => tag !== color);
		} else {
			newTags = [...currentTags, color];
		}
		params.delete('tags');
		newTags.forEach((tag) => params.append('tags', tag));
		return params;
	});
};

const toggleActiveBox = (box: string, setSearchParams: SetURLSearchParams) => {
	setSearchParams((prev: URLSearchParams) => {
		const params = new URLSearchParams(prev);
		params.set('activeBox', box);
		return params;
	});
};

const MailAsideTemplate = () => {
	const [collapseStatus, setCollapseStatus] = useState<boolean>(false);
	const [collapseTagsStatus, setCollapseTagsStatus] = useState<boolean>(true);

	const [searchParams, setSearchParams] = useSearchParams();
	const activeBox = searchParams.get('activeBox');
	const tags = searchParams.getAll('tags');

	useEffect(() => {
		toggleActiveBox('inbox', setSearchParams);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Aside>
			<AsideHeaderPart />
			<AsideBody>
				<Nav>
					<NavTitle>Mailboxes</NavTitle>
					<NavItem
						text='Important'
						icon='LabelImportant'
						onClick={() => toggleActiveBox('important', setSearchParams)}
						isActiveOverwrite={activeBox === 'important'}
					/>
					<NavItem
						text='Inbox'
						icon='Inbox'
						onClick={() => toggleActiveBox('inbox', setSearchParams)}
						isActiveOverwrite={activeBox === 'inbox'}>
						<Badge variant='soft' color='emerald'>
							8
						</Badge>
					</NavItem>
					<NavItem
						text='Draft'
						icon='LicenseDraft'
						onClick={() => toggleActiveBox('draft', setSearchParams)}
						isActiveOverwrite={activeBox === 'draft'}
					/>
					<NavItem
						text='Sent'
						icon='Sent02'
						onClick={() => toggleActiveBox('sent', setSearchParams)}
						isActiveOverwrite={activeBox === 'sent'}
					/>

					<Collapse isOpen={collapseStatus}>
						<NavItem
							text='Spam'
							icon='MailBlock01'
							onClick={() => toggleActiveBox('spam', setSearchParams)}
							isActiveOverwrite={activeBox === 'spam'}
						/>
						<NavItem
							text='Trash'
							icon='Delete02'
							onClick={() => toggleActiveBox('trash', setSearchParams)}
							isActiveOverwrite={activeBox === 'trash'}
						/>
						<NavItem
							text='Archive'
							icon='Archive02'
							onClick={() => toggleActiveBox('archive', setSearchParams)}
							isActiveOverwrite={activeBox === 'archive'}
						/>
					</Collapse>
					<NavItem
						text={`Show ${collapseStatus ? 'less' : 'more'}`}
						icon={collapseStatus ? 'ArrowUp01' : 'ArrowDown01'}
						onClick={() => setCollapseStatus(!collapseStatus)}
					/>
					<NavSeparator />
					<NavCollapse text='Smart Box' icon='AiBeautify' to='?smartBox'>
						<NavItem text='Today' icon='AiBeautify' />
						<NavItem text='Support' icon='AiBeautify' />
					</NavCollapse>
					<NavSeparator />
					<NavItem
						text='Tags'
						icon='Tags'
						isActiveOverwrite={collapseTagsStatus}
						onClick={() => setCollapseTagsStatus(!collapseTagsStatus)}>
						<NavButton icon='PlusSignCircle' title='New Tag' />
						<NavButton
							icon={collapseTagsStatus ? 'ArrowUp01' : 'ArrowDown01'}
							title='Tags visible'
							onClick={() => setCollapseTagsStatus(!collapseTagsStatus)}
						/>
					</NavItem>
					<Collapse isOpen={collapseTagsStatus}>
						{MAIL_LABELS.map((label) => (
							<NavItem
								key={label.id}
								text={label.name}
								icon={label.icon}
								iconColor={label.color}
								onClick={() => toggleTag(label.name, setSearchParams)}
								isActiveOverwrite={tags.includes(label.name)}
							/>
						))}
					</Collapse>
					<NavSeparator />
					<NavItem text='Back Dashboard' icon='ArrowLeft01' to={pages.apps.sales.to} />
				</Nav>
			</AsideBody>
			<AsideFooterPart />
		</Aside>
	);
};

export default MailAsideTemplate;
