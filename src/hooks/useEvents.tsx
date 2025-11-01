import { useEffect, useState } from 'react';

export interface EventItem {
	StartDate: string;
	EndDate: string;
	StartTime?: string;
	EndTime?: string;
	Title: string;
	Description?: string;
	Location?: string;
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
			// Try reading cache first
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

			const res = await fetch('https://sheetdb.io/api/v1/38veiv93s7zjz');
			const data = await res.json();

			setEvents(data);
			localStorage.setItem(
				CACHE_KEY,
				JSON.stringify({ data, timestamp: Date.now() })
			);
		} catch (err) {
			console.error('❌ Failed to fetch events', err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchEvents();
	}, []);

	function handleRefresh() {
		localStorage.removeItem('eventsCache');
		fetchEvents(true); // Force a new fetch
	}

	return { events, loading, handleRefresh };
};
