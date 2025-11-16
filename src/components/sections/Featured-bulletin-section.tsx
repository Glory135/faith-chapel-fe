import { Calendar, Clock } from 'lucide-react';
import { ImageWithFallback } from '../../lib/ImaeWithFallback';
import type { BulletinCardProps } from '../BulletinCard';

export function FeaturedBulletin({
	title,
	date,
	time,
	excerpt,
	category,
	categoryColor = '#F5F1EB', // fallback if missing
	imageUrl,
	handleOpen,
}: BulletinCardProps & { handleOpen?: () => void }) {
	return (
		<div className='bg-primary text-[#F5F1EB] rounded-3xl overflow-hidden shadow-xl'>
			<div className='grid md:grid-cols-2 gap-0'>
				{/* Image Section */}
				<div className='relative h-64 md:h-full lg:max-h-[70vh] xl:max-h-[60vh]'>
					<ImageWithFallback
						src={imageUrl}
						alt={title}
						className='w-full h-full object-cover'
					/>
					<div className='absolute inset-0 bg-linear-to-r from-primary/50 to-transparent' />
				</div>

				{/* Content Section */}
				<div className='p-8 md:p-12 relative overflow-hidden text-start'>
					{/* Decorative circles */}
					<div className='absolute top-0 right-0 w-64 h-64 opacity-5'>
						<div className='absolute inset-0 border-40 border-[#F5F1EB] rounded-full transform translate-x-32 -translate-y-32' />
					</div>
					<div className='absolute bottom-0 left-0 w-48 h-48 opacity-5'>
						<div className='absolute inset-0 border-30 border-[#F5F1EB] rounded-full transform -translate-x-24 translate-y-24' />
					</div>

					<div className='relative z-10'>
						{/* Category Badge (now dynamic color) */}
						<div
							className='inline-block px-4 py-1 text-primary rounded-full mb-6'
							style={{ backgroundColor: categoryColor }}>
							{category}
						</div>

						<h2 className='mb-6 text-[#F5F1EB] text-3xl font-semibold'>
							{title}
						</h2>

						<div className='flex flex-wrap gap-6 mb-6 text-[#F5F1EB] opacity-90'>
							<div className='flex items-center gap-2'>
								<Calendar className='w-5 h-5' />
								<span>{date}</span>
							</div>

							{time && (
								<div className='flex items-center gap-2'>
									<Clock className='w-5 h-5' />
									<span>{time}</span>
								</div>
							)}
						</div>

						<p className='text-lg mb-8 opacity-90'>{excerpt}</p>

						<button
							onClick={handleOpen}
							className='px-8 py-3 bg-[#F5F1EB] text-primary rounded-full hover:opacity-90 transition-opacity'>
							Read Full Bulletin
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
