import { pastors } from '../../data/pastorsData';
import { sectionIds } from '../../data/sectionIds';
import AnimateOnView from '../animation/AnimateInView';
import SectionWrapper from '../wrappers/SectionWrapper';


export function PastorsHistory() {
	return (
		<SectionWrapper id={sectionIds.pastoralHistory} className='py-20 px-6'>
			<div className='max-w-5xl mx-auto'>
				{/* Section Header */}
				<AnimateOnView className='text-center mb-16'>
					<h1 className='text-primary font-semibold text-lg mb-4'>
						Our Pastoral Legacy
					</h1>
					<div className='w-24 h-1 bg-primary mx-auto mb-6'></div>
					<p className='text-gray-700 max-w-2xl mx-auto'>
						Honoring the faithful shepherds who have led Faith AME
						Church throughout the decades
					</p>
				</AnimateOnView>

				{/* Timeline */}
				<div className='relative'>
					{/* Center line */}
					<div className='absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary opacity-20 hidden md:block'></div>

					<div className='space-y-8'>
						{pastors.map((pastor, index) => (
							<div
								key={index}
								className={`flex flex-col md:flex-row items-center gap-8 ${
									index % 2 === 0
										? 'md:flex-row'
										: 'md:flex-row-reverse'
								}`}>
								{/* Content */}
								<div
									className={`flex-1 ${
										index % 2 === 0
											? 'md:text-right'
											: 'md:text-left'
									} text-center`}>
									<AnimateOnView
										initial={{
											opacity: 0,
											x: index % 2 === 0 ? 50 : -50,
										}}
										animate={{
											opacity: 1,
											x: 0,
										}}
										className='bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 inline-block w-full md:w-auto'>
										<div className='text-primary mb-2 tracking-wide'>
											{pastor.years}
										</div>
										<div className='text-gray-800'>
											{pastor.name}
										</div>
									</AnimateOnView>
								</div>

								{/* Center dot */}
								<div className='hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-[#F5F1EB] z-10 shrink-0'></div>

								{/* Spacer for alternating layout */}
								<div className='flex-1 hidden md:block'></div>
							</div>
						))}
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}
