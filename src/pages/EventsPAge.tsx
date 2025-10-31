import PageWrapper from '../components/wrappers/PageWrapper';
import EventsHeroSection from '../components/sections/Events-hero-section';
import EventsTimelineSection from '../components/sections/Events-timeline-section';

export function EventsPage() {
	return (
		<PageWrapper>
			{/* Header Section */}
			<EventsHeroSection />
            <EventsTimelineSection />

		</PageWrapper>
	);
}
