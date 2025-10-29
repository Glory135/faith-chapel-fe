import HeroWrapper from '../wrappers/HeroWrapper';
import img from '../../assets/images/worship-img7.jpg';
import { Button } from '../ui/button';
import AnimateOnRender from '../animation/AnimateOnRender';

const HomeHeroSection = () => {
	return (
		<HeroWrapper
			backgroundImg={img}
			title='Welcome To Faith Chapel A.M.E Church'
			subtitle='A place of worship, community, and spiritual growth.'
			id='home-hero'>
			<AnimateOnRender
				transition={{ delay: 1 }}
				className='flex flex-wrap justify-center items-center gap-3'>
				<Button
					size={'lg'}
					variant={'outline'}
					className='rounded-full w-[250px] sm:w-fit py-6 bg-transparent'>
					Learn More
				</Button>
				<Button
					size={'lg'}
					variant={'secondary'}
					className='rounded-full w-[250px] sm:w-fit py-6'>
					MAKE A LOVE OFFERING
				</Button>
			</AnimateOnRender>
		</HeroWrapper>
	);
};

export default HomeHeroSection;
