import cn from 'clsx';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/Button';

import classes from './About.module.scss';

export function AboutSticky({ info }) {
	const pathname = usePathname();
	return (
		<div className={classes.about__info}>
			{info.length > 0 &&
				info.map(
					(about, index) =>
						about.texts.length > 0 && (
							<div
								key={index}
								className={classes.about__block}
							>
								{about.texts.map((text, i) => (
									<p
										key={i}
										className={cn(
											classes.about__blockText,
											pathname === '/about' && 'text-center sm:text-left'
										)}
									>
										{text}
									</p>
								))}
								<Button
									className={cn(
										classes.about__blockButton,
										pathname === '/about' && 'mx-auto lg:mx-0',
										pathname === '/' && 'hidden lg:block'
									)}
									type={about.button.type}
									href={about.button.href}
									target={
										about.button.type && !about.button.target ? '_blank' : null
									}
									// {target: about.button.type && !about.button.target ? '_blank' : ''}
									// {about.button.type && !about.button.target ? (target: '_blank' : ''}
									//  {...target{{
									//   about.button.type && !about.button.target ? '_blank' : ''
									// }}}
								>
									{about.button.text}
								</Button>
							</div>
						)
				)}
		</div>
	);
}
