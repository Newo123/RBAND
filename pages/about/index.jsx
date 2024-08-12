import { RootLayout } from '@/components/Layout/RootLayout';
import { About } from '@/components/about/About';
import { HeroAbout } from '@/components/about/HeroAbout';
import { HorizontalSection } from '@/components/about/HorizontalSection';
import { Motivations } from '@/components/about/Motivations';
import { ProjectsMap } from '@/components/about/ProjectsMap';

import { dataService } from '@/services/data.service';

export const getServerSideProps = async ({ req, res, locale, resolvedUrl }) => {
	const props = await dataService.getAllData(req, res, locale, resolvedUrl);

	if (!props?.body?.main) {
		return {
			notFound: true
		};
	}

	const domain = `${req?.headers['x-forwarded-proto']}://${req?.headers['x-forwarded-host']}`;

	return {
		props: {
			about: props,
			domain,
			pageTitle: 'About',
			localization: (await import(`../../locales/${locale}.json`)).default
		}
	};
};

export default function Page({ about, domain, pageTitle, localization }) {
	const aboutInfo = [
		{
			texts: [...about.body.main.reputation.first_description],
			button: {
				text: localization.about.reputation.aboutButtonText,
				href: about.body.main.reputation.presentation,
				type: 'link'
			}
		}
	];
	return (
		<RootLayout
			pageContent={about}
			footer={about.body.footer}
			header={about.body.header}
			head={about.head}
			domain={domain}
			pageTitle={pageTitle}
		>
			<HeroAbout
				images={about.body.main.descriptor.description_images}
				texts={about.body.main.descriptor.description_list}
				videos={about.body.main.descriptor.description_videos}
				text={about.body.main.descriptor.second_descriotion}
				title={about.body.main.descriptor.title_page}
			/>
			<About
				info={aboutInfo}
				projects={about.body.main.reputation.logotypes}
				reputations={about.body.main.reputation.motivations_top}
				video={about.body.main.reputation.video}
				mobileButton={localization.home.reputation.partners.mobileBottomButton}
				mobileTitleStart={
					localization.home.reputation.partners.mobileBottomTitleStart
				}
				mobileTitleEnd={
					localization.home.reputation.partners.mobileBottomTitleEnd
				}
				mobileDescription={
					localization.home.reputation.partners.mobileBottomDescription
				}
			/>
			<HorizontalSection specialists={about.body.main.specialists} />
			<ProjectsMap
				text_about_map_text={about.body.main.map.text_about_map_text}
				text_about_map_title={about.body.main.map.text_about_map_title}
			/>
			<Motivations
				motivation_array={about.body.main.motivations_bottom.motivation_array}
				title={about.body.main.motivations_bottom.text_principles}
				titleSvg={about.body.main.motivations_bottom.text_principles_svg}
			/>
		</RootLayout>
	);
}
