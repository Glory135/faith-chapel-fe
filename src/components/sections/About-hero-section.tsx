import HeroWrapper from '../wrappers/HeroWrapper';
import img from '../../assets/images/worship-img1.jpg';

const AboutHeroSection = () => {
	return (
		<HeroWrapper
			backgroundImg={img}
			title='About Faith Chapel A.M.E Church'
			subtitle='As we share God’s Word, root in you, and you become exactly what the Lord wants you to be. The Holy Spirit gets a hold of your life, and His vision becomes real to you and in your life.'
			id='about-hero'>
			<div className=''></div>
		</HeroWrapper>
	);
};

export default AboutHeroSection;
