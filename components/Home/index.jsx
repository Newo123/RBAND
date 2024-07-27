import { Advantages } from '../Advantages';
import { Descriptor } from '../Descriptor';
import { RootLayout } from '../Layout/RootLayout';
import { PageWrapper } from '../Layout/pageWrapper';
import { Partners } from '../Partners';
import { Projects } from '../Projects';
import { Useful } from '../Useful';
import { About } from '../about/About';
import { Motivations } from '../about/Motivations';

export default function Home({ home, localization }) {
	const aboutInfo = [
		{
			texts: [...home?.body?.main?.reputation?.first_description],
			button: {
				text: localization?.home?.reputation?.aboutButtonText,
				href: home.body.main.reputation.about_link,
				type: 'link'
			}
		},
		{
			texts: [...home.body.main.reputation.second_description],
			button: {
				text: localization?.home?.reputation?.reviewsButtonText,
				href: home.body.main.reputation.about_link
			}
		}
	];

	return (
		<RootLayout
			footer={home.body.footer}
			header={home.body.header}
			head={home.head}
		>
			<Descriptor
				descriptor={home.body.main.descriptor}
				start={localization.descriptor.prices.start}
				days={localization.descriptor.prices.days}
				price={localization.descriptor.prices.price}
			/>
			<PageWrapper>
				{home.body.main.logotypes_line && (
					<Partners partners={home.body.main.logotypes_line} />
				)}
				{home.body.main.services_navigation && (
					<Advantages advantages={home.body.main.services_navigation} />
				)}
				<Projects
					title={home.body.main.projects.text_home_projects_title}
					projects_array={home.body.main.projects.projects_array}
				/>

				<About
					images={home.body.main.reputation.text_principles_svg}
					textImages={home.body.main.reputation.text_principles}
					reputations={home.body.main.reputation.motivations}
					video={home.body.main.reputation.video}
					projects={home.body.main.reputation.logotypes}
					info={aboutInfo}
					mobileTitleStart={
						localization.home?.reputation.partners.mobileBottomTitleStart
					}
					mobileTitleEnd={
						localization.home?.reputation.partners.mobileBottomTitleEnd
					}
					mobileDescription={
						localization.home?.reputation.partners.mobileBottomDescription
					}
					mobileButton={
						localization.home?.reputation.partners.mobileBottomButton
					}
					buttonCard={localization.home?.reputation.partners.textCard}
				/>

				<Useful
					useful={home.body.main.guides}
					staticContent={localization.home?.useful}
				/>
				<Motivations
					motivation_array={home.body.main.motivations_bottom.motivation_array}
					title={home.body.main.motivations_bottom.text_home_motivation_title}
					titleSvg={home.body.main.motivations_bottom.text_home_motivation_svg}
				/>
			</PageWrapper>
		</RootLayout>
	);
}
