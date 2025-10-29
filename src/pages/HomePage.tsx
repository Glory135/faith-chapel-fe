import PageWrapper from '../components/PageWrapper';
import AboutSection from '../components/sections/About-section';
import HomeHeroSection from '../components/sections/Home-hero-section';
import PastorMessageSection from '../components/sections/Pastor-message-section';
import WeeklyServicesSection from '../components/sections/Weekly-services-section';

export default function HomePage() {
	return (
		<PageWrapper>
			<HomeHeroSection />
			<AboutSection />
			<WeeklyServicesSection />
			<PastorMessageSection />
		</PageWrapper>
	);
}
