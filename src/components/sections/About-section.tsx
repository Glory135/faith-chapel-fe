import SectionWrapper from '../wrappers/SectionWrapper';
import AnimateOnView from '../animation/AnimateInView';
import img from '../../assets/images/leadership.jpg';
import { Button } from '../ui/button';

const AboutSection = () => {
	return (
		<SectionWrapper className='gap-10 flex-wrap py-32'>
			<div className='relative  h-full flex-1 min-w-xs sm:min-w-sm md:max-w-lg '>
				<div className='absolute -top-10 -left-[50px] -z-10 w-[25%] aspect-square rounded-lg bg-primary/50'></div>
				<div className='absolute -bottom-[70px] -right-[30px] -z-10 w-[50%] aspect-square rounded-lg bg-primary/20'></div>
				<AnimateOnView
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2 }}
					className=' text-start flex flex-col'>
					<img
						alt='worship'
						src={img}
						className='w-full h-auto rounded-md'
					/>
				</AnimateOnView>
			</div>

			<div className='flex-1 min-w-xs sm:min-w-sm md:max-w-lg text-start flex flex-col gap-3'>
				<AnimateOnView
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2 }}>
					<p className='font-semibold text-primary'>About Us</p>
					<h1 className='title text-4xl!'>
						We Are Changing The World Through Faith
					</h1>
				</AnimateOnView>
				<AnimateOnView
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}>
					<p>
						Faith Chapel A.M.E Church was founded with a vision to
						create a welcoming community where people from all walks
						of life can grow in their faith journey.
					</p>
				</AnimateOnView>
				<AnimateOnView
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}>
					<h4 className='font-semibold italic!'>
						The name of the Lord is a strong tower; the righteous
						run into it and are safe.
					</h4>
				</AnimateOnView>
				<AnimateOnView
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}>
					<p>
						Church Full Name:{' '}
						<span className='font-semibold'>
							Faith Chapel A.M.E Church
						</span>
					</p>
					<p className=''>
						Pastor's Name:{' '}
						<span className='font-semibold'>Pastor Knox</span>
					</p>
				</AnimateOnView>
				<Button
					className='rounded-full min-w-[200px] sm:w-fit py-6'
					size={'lg'}>
					Learn More{' '}
				</Button>
			</div>
		</SectionWrapper>
	);
};

export default AboutSection;
