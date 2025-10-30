import { Crown } from 'lucide-react';

const bishops: string[] = [
	'BISHOP VINTON R. ANDERSON',
	'BISHOP RICHARD ALLEN HILDEBRAND',
	'BISHOP McKINLEY YOUNG',
	'BISHOP E. EARL McCLOUD JR',
	'BISHOP STAFFORD J. N. WICKER',
];

export function BishopsVisited() {
	return (
		<div className='bg-[#1A1A1A] py-20 px-6'>
			<div className='max-w-5xl mx-auto'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<h1 className='text-white mb-4'>Distinguished Visitors</h1>
					<div className='w-24 h-1 bg-[#6B1C3E] mx-auto mb-6'></div>
					<p className='text-gray-300 max-w-2xl mx-auto'>
						Bishops who have graced Faith Chapel with their presence
						and spiritual leadership
					</p>
				</div>

				{/* Bishops Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{bishops.map((bishop, index) => (
						<div
							key={index}
							className='bg-[#2A2A2A] rounded-lg p-6 hover:bg-[#333333] transition-all duration-300 group border border-[#3A3A3A] text-start'>
							<div className='flex items-start gap-4'>
								<div className='shrink-0'>
									<div className='w-12 h-12 rounded-full bg-[#6B1C3E] bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300'>
										<Crown className='w-6 h-6 text-primary-foreground' />
									</div>
								</div>
								<div className='flex-1 pt-2'>
									<p className='text-white leading-relaxed'>
										{bishop}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
