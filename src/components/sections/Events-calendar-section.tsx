import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale/en-US';
import { CACHE_KEY, useEvents, type EventItem } from '../../hooks/useEvents';
import SectionWrapper from '../wrappers/SectionWrapper';
import { Button } from '../ui/button';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CustomCalendarToolbar } from '../CustomCalendarToolbar';
import { EventDialog } from '../EventDialog';
import { RefreshCw } from 'lucide-react';

const locales = { 'en-US': enUS };
const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});

export default function EventsCalendarSection() {
	const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
	const [dialogOpen, setDialogOpen] = useState(false);
	const { events, loading } = useEvents();

	const handleSelectEvent = (event: any) => {
		setSelectedEvent(event.original || event);
		setDialogOpen(true);
	};

	const calendarEvents = events.map((e: EventItem) => ({
		title: e.Title,
		start: new Date(e.StartDate),
		end: e.EndDate ? new Date(e.EndDate) : new Date(e.StartDate),
		desc: e.Description,
		allDay: !e.StartTime && !e.EndTime,
		original: e,
	}));

	if (loading) return <p>Loading events...</p>;

	return (
		<SectionWrapper className='w-full flex-col py-10!'>
			<h1>Our Events Calendar</h1>
			<div className='w-full justify-start items-center'>
				<Button
					variant={'secondary'}
					onClick={() => localStorage.removeItem(CACHE_KEY)}>
					<RefreshCw
						className={`h-4 w-4 mr-2 ${
							loading ? 'animate-spin' : ''
						}`}
					/>
					{loading ? 'Refreshing...' : 'Refresh Events'}
				</Button>
			</div>
			<div className='rbc-calendar-container '>
				<Calendar
					localizer={localizer}
					events={calendarEvents}
					startAccessor='start'
					endAccessor='end'
					defaultView='month'
					defaultDate={new Date()}
					style={{ minHeight: 700, width: '100%', minWidth: 700 }}
					onSelectEvent={handleSelectEvent}
					components={{
						// @ts-expect-error just do
						toolbar: CustomCalendarToolbar,
					}}
				/>
			</div>
			<EventDialog
				open={dialogOpen}
				onClose={() => setDialogOpen(false)}
				event={selectedEvent}
			/>
		</SectionWrapper>
	);
}
