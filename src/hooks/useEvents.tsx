import { useEffect, useState } from 'react';
import { client, urlFor } from '../lib/sanityClient';
import { allEventsQuery } from '../sanity_queries/events';

export interface EventItem {
	_id?: string;
	StartDate: string;
	EndDate: string;
	StartTime?: string;
	EndTime?: string;
	Title: string;
	Description?: string;
	Location?: string;
	Image?: any;
	ImageURL?: string;
	Link?: string;
}

export const CACHE_KEY = 'church_events_cache';
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

export const useEvents = () => {
	const [events, setEvents] = useState<EventItem[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchEvents = async (force = false) => {
		try {
			// ✅ Step 1: Try using cached data
			const cached = localStorage.getItem(CACHE_KEY);
			if (cached && !force) {
				const { data, timestamp } = JSON.parse(cached);
				const isFresh = Date.now() - timestamp < CACHE_DURATION;

				if (isFresh) {
					setEvents(data);
					setLoading(false);
					return;
				}
			}

			// ✅ Step 2: Fetch fresh data from Sanity
			const data = await client.fetch(allEventsQuery);

			// ✅ Step 3: Safely format image URLs using Sanity CDN
			const formatted = data.map((event: any) => ({
				...event,
				ImageURL: event.Image
					? urlFor(event.Image).width(800).auto('format').url()
					: undefined,
			}));

			setEvents(formatted);

			// ✅ Step 4: Cache result for next visit
			localStorage.setItem(
				CACHE_KEY,
				JSON.stringify({ data: formatted, timestamp: Date.now() })
			);
		} catch (err) {
			console.error('❌ Failed to fetch events from Sanity:', err);
		} finally {
			setLoading(false);
		}
	};

	// ✅ Fetch once on mount
	useEffect(() => {
		fetchEvents();
	}, []);

	// ✅ Force-refresh function for manual updates
	function handleRefresh() {
		localStorage.removeItem(CACHE_KEY);
		fetchEvents(true);
	}

	return { events, loading, handleRefresh };
};
