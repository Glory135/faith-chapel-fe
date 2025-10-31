import PageWrapper from '../components/wrappers/PageWrapper';
import EventsHeroSection from '../components/sections/Events-hero-section';
import EventsTimelineSection from '../components/sections/Events-timeline-section';
import WeeklyServicesSection from '../components/sections/Weekly-services-section';

export function EventsPage() {
	return (
		<PageWrapper>
			<EventsHeroSection />
			<EventsTimelineSection />
			<WeeklyServicesSection withAction={false} />
		</PageWrapper>
	);
}
