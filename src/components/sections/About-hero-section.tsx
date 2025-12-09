import HeroWrapper from '../wrappers/HeroWrapper';
import img from '../../assets/images/new/church_family.jpg';
import { sectionIds } from '../../data/sectionIds';

const AboutHeroSection = () => {
	return (
		<HeroWrapper
			backgroundImg={img}
			title='About Faith Chapel A.M.E Church'
			subtitle='As we share God’s Word, root in you, and you become exactly what the Lord wants you to be. The Holy Spirit gets a hold of your life, and His vision becomes real to you and in your life.'
			id={sectionIds.aboutHero}
			className='md:py-40!'
			>
			<div className=''></div>
		</HeroWrapper>
	);
};

export default AboutHeroSection;
