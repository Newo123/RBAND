import { Advantages } from '../Advantages';
import { Descriptor } from '../Descriptor';
import { RootLayout } from '../Layout/RootLayout';
import { PageWrapper } from '../Layout/pageWrapper';
import { Partners } from '../Partners';
import { Projects } from '../Projects';
import { Faq } from '../shared/Faq';
import { Principles } from '../shared/Principles';
import { Reputation } from '../shared/Reputation';
import ServicesBlock from '../shared/Services';
import { Stages } from '../shared/Stages';

export function Services({ services, domain, localization }) {
	const callback = {
		email: services?.body?.footer?.email[0],
		open: services?.body?.header?.open[0],
		socials_array: services?.body?.header?.socials_array,
		telephone: services?.body?.header?.telephone[0],
		telephoneLink: services?.body?.header?.telephoneLink[0],
		title: services?.body?.main?.offers?.form?.text_contact_title,
		form: services?.body?.main?.offers?.form
	};
	return (
		<RootLayout
			footer={services.body.footer}
			header={services.body.header}
			head={services.head}
			domain={domain}
		>
			{services.body.main.descriptor && (
				<Descriptor
					descriptor={services.body.main.descriptor}
					start={localization.descriptor.prices.start}
					days={localization.descriptor.prices.days}
					price={localization.descriptor.prices.price}
				/>
			)}

			<PageWrapper>
				{services.body.main.logotypes_line &&
					services.body.main.logotypes_line.length > 0 && (
						<Partners partners={services.body.main.logotypes_line} />
					)}
				{services.body.main.offers && (
					<ServicesBlock
						offer={services.body.main.offers}
						localization={localization}
						callback={callback}
					/>
				)}
				{services.body.main.motivations_service && (
					<Advantages advantages={services.body.main.motivations_service} />
				)}
				{services.body.main.portfolio && (
					<Projects
						title={services.body.main.portfolio.title}
						projects={services.body.main.portfolio.portfolio_array}
						more={services.body.main.portfolio.more}
					/>
				)}
				{services.body.main.stages && (
					<Stages
						stages={services.body.main.stages}
						form={services.body.main.form}
					/>
				)}
				{services.body.main.principles && (
					<Principles principles={services.body.main.principles} />
				)}
				{services.body.main.reputation && (
					<Reputation
						reputations={services.body.main.reputation}
						localization={localization}
					/>
				)}

				{services.body.main.faq && <Faq {...services.body.main.faq} />}
			</PageWrapper>
		</RootLayout>
	);
}
