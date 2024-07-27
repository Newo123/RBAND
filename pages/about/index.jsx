import { RootLayout } from '@/components/Layout/RootLayout';
import { About } from '@/components/about/About';
import { HeroAbout } from '@/components/about/HeroAbout';
import { HorizontalSection } from '@/components/about/HorizontalSection';
import { Motivations } from '@/components/about/Motivations';
import { ProjectsMap } from '@/components/about/ProjectsMap';

import { getAll } from '@/services/data.service';

export const getServerSideProps = async ({ req, res, locale, resolvedUrl }) => {
	const props = await getAll(req, res, locale, resolvedUrl);

	if (!props.body.main) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			about: props,
			localization: (await import(`../../locales/${locale}.json`)).default
		}
	};
};

export default function Page({ about, localization }) {
	const aboutInfo = [
		{
			texts: [about.body.main.reputation.first_description],
			button: {
				text: localization.about.reputation.aboutButtonText,
				href: about.body.main.reputation.presentation,
				type: 'link'
			}
		}
	];
	return (
		<RootLayout
			footer={about.body.footer}
			header={about.body.header}
			head={about.head}
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
				// 	textImages={home.body.main.reputation.text_principles}

				// 	buttonCard={localization.home.reputation.partners.textCard}
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
