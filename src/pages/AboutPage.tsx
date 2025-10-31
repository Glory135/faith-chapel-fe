import AboutHeroSection from '../components/sections/About-hero-section';
import HistorySection from '../components/sections/History-section';
import MeetPastorSection from '../components/sections/MeetPastor-section';
import MissionAndVisionStatementSection from '../components/sections/MissionAndVision-section';
import { PastorsHistory } from '../components/sections/PastorialHistorySection';
import { BishopsVisited } from '../components/sections/Visited-section';
import { WhatWeBelieveSection } from '../components/sections/What-we-believe-section';
import PageWrapper from '../components/wrappers/PageWrapper';

export default function AboutPage() {
	return (
		<PageWrapper>
			<AboutHeroSection />
			<HistorySection />
			{/* <MissionAndVisionStatementSection /> */}
			<WhatWeBelieveSection />
			<MeetPastorSection />
			<PastorsHistory />
			<BishopsVisited />
		</PageWrapper>
	);
}
