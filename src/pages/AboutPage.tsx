import AboutHeroSection from '../components/sections/About-hero-section';
import HistorySection from '../components/sections/History-section';
import MeetPastorSection from '../components/sections/MeetPastor-section';
import { PartnerOrganizations } from '../components/sections/Partners-section';
import { PastorsHistory } from '../components/sections/PastorialHistorySection';
import { BishopsVisited } from '../components/sections/Visited-section';
import { WhatWeBelieveSection } from '../components/sections/What-we-believe-section';
import PageWrapper from '../components/wrappers/PageWrapper';

export default function AboutPage() {
	return (
		<PageWrapper>
			<AboutHeroSection />
			<HistorySection />
			<WhatWeBelieveSection />
			<MeetPastorSection />
			<PastorsHistory />
			<BishopsVisited />
			<PartnerOrganizations />
		</PageWrapper>
	);
}
