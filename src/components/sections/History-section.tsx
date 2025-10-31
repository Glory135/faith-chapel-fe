import SectionWrapper from '../wrappers/SectionWrapper';
import AnimateOnView from '../animation/AnimateInView';
import founderImg from '../../assets/images/founder.png';
import { sectionIds } from '../../data/sectionIds';

const HistorySection = () => {
	return (
		<SectionWrapper
			id={sectionIds.historySection}
			className='gap-20 flex-col-reverse sm:flex-row-reverse flex-wrap pt-10 overflow-x-hidden'>
			<div className='relative  h-full flex-1 min-w-xs sm:min-w-sm md:max-w-lg '>
				<div className='absolute -top-10 -left-[50px] -z-10 w-[25%] aspect-square rounded-lg bg-primary/50'></div>
				<div className='absolute -bottom-[70px] -right-[30px] -z-10 w-[50%] aspect-square rounded-lg bg-primary/20'></div>
				<AnimateOnView
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2 }}
					className=' text-start w-fit flex flex-col items-center'>
					<img
						alt='Rev. Willie B. James Spratt'
						title='picture of Rev. Willie B. James Spratt'
						src={founderImg}
						className='w-full h-auto rounded-md max-w-xs sm:max-w-[300px]'
					/>
					<h3 className='font-semibold text-lg'>
						Rev. Willie B. James Spratt
					</h3>
				</AnimateOnView>
			</div>

			<div className='flex-1 min-w-xs sm:min-w-sm md:max-w-lg text-start flex flex-col gap-3'>
				<AnimateOnView
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2 }}>
					<p className='font-semibold text-primary'>Our History</p>
					<h1 className='title text-4xl!'>
						Faith Chapel AME Church History
					</h1>
				</AnimateOnView>
				<AnimateOnView
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}>
					<p>
						Faith Chapel AME Church was founded by the late Rev.
						Willie B. James Spratt, affectionately known as Sis.
						James, on June 12, 1952.
					</p>
				</AnimateOnView>
				<AnimateOnView
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}>
					<p className='!'>
						The first church meeting was held on Wednesday evening,
						June 13, 1952, at the home of Mrs. Ella Fant, located at
						214 Findlay Street, Fostoria, Ohio. A total of nine
						people attended that inaugural meeting, marking the
						humble beginnings of what would become a lasting
						ministry.
					</p>
				</AnimateOnView>
				<AnimateOnView
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}>
					<p className='!'>
						The vacant lot on which part of the church now stands
						was purchased for $700.00 from Mrs. Blaine Lee of
						Lorain, Ohio. A down payment of $25.00 was made toward
						the purchase. The first church building was constructed
						in 1954 at 220 Sycamore Street, providing a permanent
						home for the growing congregation.
					</p>
				</AnimateOnView>
				<AnimateOnView
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}>
					<p className='!'>
						Faith Chapel AME Church was officially incorporated in
						1972, solidifying its standing as a place of worship and
						community.
					</p>
				</AnimateOnView>
				<AnimateOnView
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}>
					<h4 className='font-semibold italic!'>
						At that time, the bishop was Bishop A. J. Allen, and the
						presiding elder was Rev. J. H. Mack.{' '}
					</h4>
				</AnimateOnView>
			</div>
		</SectionWrapper>
	);
};

export default HistorySection;
