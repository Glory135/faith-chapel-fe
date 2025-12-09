import HeroWrapper from '../wrappers/HeroWrapper';
import img from '../../assets/images/new/Young_Peoples_Ministery2.jpg';
import { sectionIds } from '../../data/sectionIds';

const MinistriesHeroSection = () => {
	return (
		<HeroWrapper
			backgroundImg={img}
			title='Our Ministries'
			subtitle="Faith AME Church is committed to serving our community through various ministries. Each ministry has been designed to fulfill our mission of spreading God's word and serving His people."
			id={sectionIds.ministriesHero}
			className='py-10! md:py-32! min-h-0 h-auto'>
			<div className=''></div>
		</HeroWrapper>
	);
};

export default MinistriesHeroSection;
