import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../lib/ImaeWithFallback';
import { shortenText } from '../lib/utils';

export interface BulletinCardProps {
	_id: string;
	title: string;
	date: string;
	time?: string;
	excerpt: string;
	category: string;
	categoryColor?: string; // now a hex color from Sanity (e.g. "#3B82F6")
	imageUrl: string;
	handleOpen?: () => void;
}

export function BulletinCard({
	title,
	date,
	time,
	excerpt,
	category,
	categoryColor = '#3B82F6', // fallback to primary blue
	imageUrl,
	handleOpen
}: BulletinCardProps) {
	return (
		<div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 group'>
			{/* Image */}
			<div className='relative h-48 overflow-hidden'>
				<ImageWithFallback
					src={imageUrl}
					alt={title}
					className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
				/>

				{/* Category Badge */}
				<div className='absolute top-4 left-4'>
					<span
						className='inline-block px-3 py-1 text-white rounded-full text-sm shadow-lg'
						style={{ backgroundColor: categoryColor }} // <-- IMPORTANT
					>
						{category}
					</span>
				</div>
			</div>

			<div className='p-6'>
				<div className='flex items-center justify-between mb-3'>
					<div className='text-sm text-gray-600'>
						<div className='flex items-center gap-1'>
							<Calendar className='w-4 h-4' />
							<span>{date}</span>
						</div>
					</div>

					{time && (
						<div className='flex items-center gap-1 text-sm text-gray-600'>
							<Clock className='w-4 h-4' />
							<span>{time}</span>
						</div>
					)}
				</div>

				<h3 className='mb-3 group-hover:text-primary transition-colors font-semibold text-lg'>
					{title}
				</h3>

				<p className='text-gray-700 mb-4 line-clamp-3'>{shortenText(excerpt, 100)}</p>

				<button onClick={handleOpen} className='flex items-center gap-2 text-primary group-hover:gap-3 transition-all'>
					<span>Read More</span>
					<ChevronRight className='w-4 h-4' />
				</button>
			</div>
		</div>
	);
}
