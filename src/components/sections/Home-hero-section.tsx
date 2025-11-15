import HeroWrapper from '../wrappers/HeroWrapper';
import img from '../../assets/images/all-together.png';
import { Button, buttonVariants } from '../ui/button';
import AnimateOnRender from '../animation/AnimateOnRender';
import { sectionIds } from '../../data/sectionIds';
import { Link } from 'react-router';
import { cn } from '../../lib/utils';

const HomeHeroSection = () => {
	return (
		<HeroWrapper
			backgroundImg={img}
			title='Welcome To Faith Chapel A.M.E Church'
			subtitle='A place of worship, community, and spiritual growth.'
			id={sectionIds.homeHero}>
			<AnimateOnRender
				transition={{ delay: 1 }}
				className='flex flex-wrap justify-center items-center gap-3'>
				<Link
					to={`/about#${sectionIds.historySection}`}
					className={cn(
						buttonVariants({
							variant: 'outline',
							size: 'lg',
						}),
						'rounded-full w-[250px] sm:w-fit py-6 bg-transparent hover:text-secondary-foreground!'
					)}>
					Learn More
				</Link>
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
