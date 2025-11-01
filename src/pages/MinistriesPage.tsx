import MinistriesHeroSection from '../components/sections/Ministries-hero-section';
import MinistriesInfoSection from '../components/sections/Ministries-info-section';
import { PartnerOrganizations } from '../components/sections/Partners-section';
import PageWrapper from '../components/wrappers/PageWrapper';

export default function MinistriesPage() {
	return (
		<PageWrapper>
			<MinistriesHeroSection />
			<MinistriesInfoSection />
			<PartnerOrganizations />
		</PageWrapper>
	);
}
