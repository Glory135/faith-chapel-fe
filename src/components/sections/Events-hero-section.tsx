import HeroWrapper from '../wrappers/HeroWrapper';
import img from '../../assets/images/img4.png';

const EventsHeroSection = () => {
	return (
		<HeroWrapper
			backgroundImg={img}
			title='Upcoming Events'
			subtitle='Join us in fellowship and worship throughout the year. All are welcome to participate in these special events and celebrations.'
			id='about-hero'
			className='md:py-32! min-h-0 h-auto'>
			<div className=''></div>
		</HeroWrapper>
	);
};

export default EventsHeroSection;
