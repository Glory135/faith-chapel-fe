import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from './ui/dialog';
import { Separator } from './ui/separator';
import { MapPin, Calendar, Clock, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import type { EventItem } from '../hooks/useEvents'; // now coming from Sanity

interface EventDialogProps {
	open: boolean;
	onClose: () => void;
	event?: EventItem | null;
}

export function EventDialog({ open, onClose, event }: EventDialogProps) {
	if (!event) return null;

	const formatDate = (date: string) => {
		try {
			return new Date(date).toLocaleDateString(undefined, {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			});
		} catch {
			return date;
		}
	};

	const timeRange =
		event.StartTime && event.EndTime
			? `${event.StartTime} - ${event.EndTime}`
			: event.StartTime || '';

	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className='sm:max-w-lg'>
				<DialogHeader>
					<DialogTitle className='text-xl font-semibold'>
						{event.Title}
					</DialogTitle>
					<DialogDescription>
						{event.Description || 'No description available'}
					</DialogDescription>
				</DialogHeader>

				<Separator className='my-2' />

				<div className='space-y-3'>
					<div className='flex items-center gap-2 text-sm text-muted-foreground'>
						<Calendar className='h-4 w-4' />
						<span>
							{formatDate(event.StartDate)}
							{event.EndDate && event.EndDate !== event.StartDate
								? ` - ${formatDate(event.EndDate)}`
								: ''}
						</span>
					</div>

					{timeRange && (
						<div className='flex items-center gap-2 text-sm text-muted-foreground'>
							<Clock className='h-4 w-4' />
							<span>{timeRange}</span>
						</div>
					)}

					{event.Location && (
						<div className='flex items-center gap-2 text-sm text-muted-foreground'>
							<MapPin className='h-4 w-4' />
							<span>{event.Location}</span>
						</div>
					)}

					{event.ImageURL && (
						<img
							src={event.ImageURL}
							alt={event.Title}
							className='w-full rounded-md mt-2'
						/>
					)}

					{event.Link && (
						<Button asChild className='w-full mt-3'>
							<a
								href={event.Link}
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center justify-center gap-2'>
								View More <ExternalLink className='h-4 w-4' />
							</a>
						</Button>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}
