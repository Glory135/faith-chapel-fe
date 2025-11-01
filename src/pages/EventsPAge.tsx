import PageWrapper from '../components/wrappers/PageWrapper';
import EventsHeroSection from '../components/sections/Events-hero-section';
// import EventsTimelineSection from '../components/sections/Events-timeline-section';
import WeeklyServicesSection from '../components/sections/Weekly-services-section';
import EventsCalendarSection from '../components/sections/Events-calendar-section';

export function EventsPage() {
	return (
		<PageWrapper>
			<EventsHeroSection />
			{/* <EventsTimelineSection /> */}
			<EventsCalendarSection />
			<WeeklyServicesSection withAction={false} />
		</PageWrapper>
	);
}
