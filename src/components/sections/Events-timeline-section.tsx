import { Calendar, MapPin } from 'lucide-react';
import { eventsData } from '../../data/eventsData';
import AnimateOnView from '../animation/AnimateInView';
import { cn } from '../../lib/utils';
import { buttonVariants } from '../ui/button';

const EventsTimelineSection = () => {
	return (
		<>
			{/* Events Timeline */}
			<div className='max-w-6xl mx-auto px-6 py-16'>
				<div className='space-y-12'>
					{eventsData.map((monthData, monthIndex) => (
						<div key={monthIndex} className='relative'>
							{/* Month Header */}
							<AnimateOnView
								initial={{
									opacity: 0,
									scaleX: 0.5,
									x: 100,
								}}
								animate={{
									opacity: 1,
									scaleX: 1,
									x: 0,
								}}
								transition={{
									duration: 0.3,
								}}
								className='flex items-center gap-4 mb-6'>
								<div className='bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-md'>
									<h2 className='text-primary-foreground'>
										{monthData.month}
									</h2>
								</div>
								<div className='flex-1 h-0.5 bg-primary bg-opacity-20'></div>
							</AnimateOnView>

							{/* Events Grid */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-8'>
								{monthData.events.map((event, eventIndex) => (
									<AnimateOnView
										transition={{
											duration: 0.4,
											delay: eventIndex * 0.2,
											ease: 'linear',
										}}
										key={eventIndex}
										className='bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary group hover:border-l-8'>
										{/* Date Badge */}
										<div className='flex items-start gap-4'>
											<div className='shrink-0'>
												<div className='bg-primary bg-opacity-10 rounded-lg p-3 group-hover:bg-opacity-20 transition-all duration-300'>
													<Calendar className='w-6 h-6 text-primary-foreground' />
												</div>
											</div>

											<div className='flex-1 min-w-0 text-start'>
												<div className='text-primary mb-2'>
													{event.date}
												</div>
												<h3 className='text-gray-800 font-semibold mb-2'>
													{event.title}
												</h3>

												{event.location && (
													<div className='flex items-start gap-2 text-gray-600 mb-2'>
														<MapPin className='w-4 h-4 mt-0.5 shrink-0' />
														<span className='wrap-break-words'>
															{event.location}
														</span>
													</div>
												)}

												{event.description && (
													<p className='text-gray-600 mt-2 italic'>
														{event.description}
													</p>
												)}
											</div>
										</div>
									</AnimateOnView>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Call to Action Footer */}
			<div className='bg-[#1A1A1A] py-12 px-6'>
				<div className='max-w-4xl mx-auto text-center'>
					<h1 className='text-white mb-4'>Stay Connected</h1>
					<p className='text-gray-300 mb-6'>
						For more information about any of these events, please
						contact the church office or speak with one of our
						ministry leaders.
					</p>
					<div className='flex flex-wrap justify-center gap-4'>
						<a
							href='tel:+1234567890'
							className={cn(buttonVariants({
                                size: "lg"
                            }), "text-primary-foreground!")}>
							Contact Us
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default EventsTimelineSection;
