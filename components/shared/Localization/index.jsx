import cn from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

import classes from './styles.module.scss';

const Region = ({ region, isTitle = false }) => {
	const pathname = usePathname();
	return isTitle ? (
		<Link
			className={classes.localization__localesItemCountry}
			href={pathname}
		>
			{region?.city_name}
		</Link>
	) : (
		<Link
			href={pathname}
			className={classes.localization__localesItemCity}
		>
			{region?.city_name}
		</Link>
	);
};

export function Localization({ regions, country }) {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<div className={classes.localization}>
			<div className={classes.localization__container}>
				{regions && (
					<>
						<div className={classes.localization__label}>
							{regions?.change_city_title}
						</div>
						<div className={classes.localization__locales}>
							{regions?.cities_array?.length &&
								regions?.cities_array.map((locale, index) => {
									if (regions?.cities_array?.length > 1) {
										return (
											<div
												className={classes.localization__localesItem}
												key={index}
											>
												{locale?.length > 0 &&
													locale?.map((item, i) => (
														<Region
															region={item}
															key={i}
															{...(i < 1 ? { isTitle: true } : null)}
														/>
													))}
											</div>
										);
									} else {
										return (
											locale?.length > 0 &&
											locale?.map((item, i) => (
												<Region
													region={item}
													key={i}
												/>
											))
										);
									}
								})}
						</div>
						<Link
							href={pathname}
							className={classes.localization__anotherCity}
							dangerouslySetInnerHTML={{
								__html: regions?.other_city_item?.city_name
							}}
						/>
					</>
				)}

				{country && country.length > 0 && (
					<div
						className={cn(
							classes.localization__locales,
							classes.localization__locales_centered
						)}
					>
						{country.map(count => (
							<div
								className={classes.localization__localesItem}
								key={count?.name}
							>
								<Link
									href={pathname}
									className={cn(
										classes.localization__localesItemState,
										router.locale ===
											(count?.href === '/'
												? 'ru'
												: count?.href.split('/')[1]) &&
											classes.localization__localesItemState_active
									)}
									locale={
										count?.href === '/' ? 'ru' : count?.href.split('/')[1]
									}
								>
									{count?.name}
								</Link>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
