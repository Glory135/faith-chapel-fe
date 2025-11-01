import {
	ChevronLeft,
	ChevronRight,
	Calendar as CalendarIcon,
} from 'lucide-react';
import { Button } from './ui/button';

// Define a custom type for the views
type CalendarViewType = 'month' | 'week' | 'day' | 'agenda';

interface ToolbarProps {
	label: string;
	view: CalendarViewType;
	views: CalendarViewType[];
	onNavigate: (action: 'PREV' | 'NEXT' | 'TODAY') => void;
	onView: (view: CalendarViewType) => void;
}

export function CustomCalendarToolbar({
	label,
	view,
	views,
	onNavigate,
	onView,
}: ToolbarProps) {
	return (
		<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4'>
			<div className='flex items-center gap-2'>
				<Button
					variant='outline'
					size='icon'
					onClick={() => onNavigate('PREV')}>
					<ChevronLeft className='h-4 w-4' />
				</Button>
				<Button
					variant='outline'
					size='icon'
					onClick={() => onNavigate('NEXT')}>
					<ChevronRight className='h-4 w-4' />
				</Button>
				<Button variant='secondary' onClick={() => onNavigate('TODAY')}>
					Today
				</Button>
			</div>

			<h2 className='text-lg font-semibold flex items-center gap-2'>
				<CalendarIcon className='h-5 w-5' /> {label}
			</h2>

			<div className='flex gap-2 flex-wrap'>
				{views.map((v) => (
					<Button
						key={v}
						variant={view === v ? 'default' : 'outline'}
						onClick={() => onView(v)}>
						{v.charAt(0).toUpperCase() + v.slice(1)}
					</Button>
				))}
			</div>
		</div>
	);
}
