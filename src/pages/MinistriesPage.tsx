import MinistriesHeroSection from '../components/sections/Ministries-hero-section';
import PageWrapper from '../components/wrappers/PageWrapper';

export default function MinistriesPage() {
	return (
		<PageWrapper>
			<MinistriesHeroSection />
			<div className="h-screen"></div>
		</PageWrapper>
	);
}
