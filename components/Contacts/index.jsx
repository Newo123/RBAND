import cn from 'clsx';

import { Callback } from '../shared/Callback';
import { ContactsInfo } from '../shared/ContactsInfo';
import { Container } from '../shared/Container';

import classes from './Contacts.module.scss';

export function Contacts({ theme = 'light', callback }) {
	return (
		<section className={cn(classes.contacts, theme === 'dark' && 'dark')}>
			<Container
				variant='xl'
				className={classes.contacts__container}
			>
				<ContactsInfo
					address={callback?.address}
					email={callback?.email}
					open={callback?.open}
					socials_array={callback?.socials_array}
					telephone={callback?.telephone}
					telephoneLink={callback?.telephoneLink}
					title={callback?.title}
				/>
				<Callback
					form_description={callback.form.form_description}
					form_items={callback.form.form_items}
					form_title={callback.form.form_title}
					id_prefix={callback.form.id_prefix}
					privacy={callback.form.privacy}
					submit_button={callback.form.submit_button}
				/>
			</Container>
		</section>
	);
}
