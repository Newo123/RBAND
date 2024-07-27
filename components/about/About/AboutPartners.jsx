import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '@/components/ui/Button';

import classes from './About.module.scss';

export function AboutPartners({
	projects,
	reviews,
	mobileButton,
	mobileTitleStart,
	mobileTitleEnd,
	mobileDescription,
	buttonCard
}) {
	const router = useRouter();

	return (
		<div className={classes.about__contentProjects}>
			<div
				className={cn(
					classes.about__contentProjectsMobile,
					router.pathname === '/about' &&
						classes.about__contentProjectsMobile_centered
				)}
			>
				{projects && (
					<>
						<h6 className={classes.about__contentProjectsMobileTitle}>
							{mobileTitleStart} {projects.length} {mobileTitleEnd}
						</h6>
						<p className={classes.about__contentProjectsMobileText}>
							{mobileDescription}
						</p>
						<Button
							className={classes.about__contentProjectsButton}
							type='link'
							href='/reviews'
						>
							{/* <span onClick={() => router.push('/reviews')}></span> */}
							{mobileButton}
						</Button>
					</>
				)}
			</div>

			{projects &&
				projects.length > 0 &&
				projects.map((project, index) => (
					<div
						key={index}
						className={classes.about__contentProjectsItem}
					>
						<div className={classes.about__contentProjectsItemLogo}>
							<Image
								src={project.href}
								alt={project.description.title}
								width={260}
								height={130}
							/>
						</div>
						<div className={classes.about__contentProjectsItemContent}>
							<h6 className={classes.about__contentProjectsItemTitle}>
								{project.description.title}
							</h6>
							<p className={classes.about__contentProjectsItemText}>
								{project.description.description_title}
							</p>
							<span className={classes.about__contentProjectsItemMore}>
								{project.description.title_href}
							</span>
						</div>
						<Link
							href={project.description.href}
							className={classes.about__contentProjectsItemLink}
							target='_blank'
						></Link>
					</div>
				))}
		</div>
	);
}
