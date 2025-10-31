import { ministriesData } from '../../data/ministriesData';
import { Target } from 'lucide-react';
import { cn } from '../../lib/utils';
import { buttonVariants } from '../ui/button';
import AnimateOnView from '../animation/AnimateInView';
import AnimateOnRender from '../animation/AnimateOnRender';

const MinistriesInfoSection = () => {
	return (
		<>
			<div className='max-w-7xl mx-auto px-6 py-16 text-start'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{ministriesData.map((ministry, index) => (
						<AnimateOnRender
							key={index}
							className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group'>
							{/* Image Section */}
							<div className='relative h-64 overflow-hidden'>
								<img
									src={ministry.image}
									alt={ministry.title}
									className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
								/>
								<div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent'></div>

								{/* Icon Badge */}
								<AnimateOnView
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ duration: 0.1 }}
									className='absolute top-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg'>
									{ministry.icon}
								</AnimateOnView>
							</div>

							{/* Content Section */}
							<div className='p-6'>
								<h3 className='text-primary mb-4'>
									{ministry.title}
								</h3>

								{/* Goal Section */}
								<AnimateOnView className='mb-4'>
									<div className='flex items-start gap-2 mb-2'>
										<Target className='w-5 h-5 text-primary mt-0.5 shrink-0' />
										<span className='text-primary'>
											Goal:
										</span>
									</div>
									<p className='text-gray-700 ml-7'>
										{ministry.goal}
									</p>
								</AnimateOnView>

								{/* Description */}
								<AnimateOnView
									transition={{ delay: 0.5 }}
									className='pl-7 border-l-2 border-primary border-opacity-20 ml-2'>
									<p className='text-gray-600 italic'>
										{ministry.description}
									</p>
								</AnimateOnView>
							</div>

							{/* Hover Footer */}
							<div className='bg-[#F5F1EB] px-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<p className='text-gray-600 text-center'>
									Learn more about how you can get involved
								</p>
							</div>
						</AnimateOnRender>
					))}
				</div>
			</div>

			<div className='bg-[#1A1A1A] py-16 px-6'>
				<div className='max-w-4xl mx-auto text-center'>
					<h1 className='text-white mb-4'>Join Us in Ministry</h1>
					<div className='w-24 h-1 bg-primary mx-auto mb-6'></div>
					<p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
						We welcome anyone who feels called to serve. Whether
						you're interested in working with youth, technology,
						music, or facility improvements, there's a place for you
						in our ministries.
					</p>
					<div className='flex flex-wrap justify-center gap-4'>
						<a
							href='#contact'
							className={cn(
								buttonVariants({ size: 'lg' }),
								'text-primary-foreground!'
							)}>
							Get Involved
						</a>
						<a
							href='#support'
							className={cn(
								buttonVariants({
									size: 'lg',
									variant: 'outline',
								}),
								''
							)}>
							Support Our Ministries
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default MinistriesInfoSection;
