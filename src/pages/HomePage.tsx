import PageWrapper from '../components/wrappers/PageWrapper';
import AboutSection from '../components/sections/About-section';
import HomeHeroSection from '../components/sections/Home-hero-section';
import PastorMessageSection from '../components/sections/Pastor-message-section';
import WeeklyServicesSection from '../components/sections/Weekly-services-section';
// import MissionStatementSection from '../components/sections/Mission-statement-section';
import MissionAndVisionStatementSection from '../components/sections/MissionAndVision-section';

export default function HomePage() {
	return (
		<PageWrapper>
			<HomeHeroSection />
			<AboutSection />
			<WeeklyServicesSection />
			{/* <MissionStatementSection /> */}
			<MissionAndVisionStatementSection />
			<PastorMessageSection />
		</PageWrapper>
	);
}
