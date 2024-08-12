import cn from 'clsx';
import Link from 'next/link';

import { IconComponent } from '../IconComponent';

import classes from './ContactsInfo.module.scss';

export function ContactsInfo({
	address,
	email,
	open,
	socials_array,
	telephone,
	telephoneLink,
	title
}) {
	return (
		<div className={classes.ContactsInfo}>
			{title && (
				<h1
					className={cn('site-title-3', classes.ContactsInfo__title)}
					dangerouslySetInnerHTML={{ __html: title }}
				/>
			)}

			{open && (
				<p className={classes.ContactsInfo__time}>
					<IconComponent icon='tabler:clock' />
					{open}
				</p>
			)}

			<div className={classes.ContactsInfo__contentInfo}>
				<div className={classes.ContactsInfo__contentInfoBox}>
					{telephone && (
						<Link
							target='_blank'
							href={`tel:${telephoneLink}`}
						>
							{telephone}
						</Link>
					)}

					{socials_array.WhatsApp && (
						<Link
							target='_blank'
							href={socials_array.WhatsApp}
						>
							WhatsApp
						</Link>
					)}
					{socials_array.Telegram && (
						<Link
							target='_blank'
							href={socials_array.Telegram}
						>
							Telegram
						</Link>
					)}
				</div>
				<div className={classes.ContactsInfo__contentInfoBox}>
					<Link
						target='_blank'
						href={`mailto:${email}`}
					>
						{email}
					</Link>
					{address && (
						<p className={classes.ContactsInfo__contentInfoAddress}>
							{address}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
