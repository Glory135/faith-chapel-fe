import Logo from './Logo';
import SectionWrapper from './wrappers/SectionWrapper';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { BiDonateHeart } from 'react-icons/bi';
import { contactDetails, socialMediaDetails } from '../data/contactData';
import { sectionIds } from '../data/sectionIds';

const FooterSection = () => {
	return (
		<SectionWrapper className='bg-[#21131a]  text-white py-16! min-h-0'>
			<div className='max-w-7xl w-full flex flex-wrap justify-between gap-10'>
				<div className='flex flex-col gap-2'>
					<Logo color='white' />
					<div className='flex gap-2 items-center'>
						{socialMediaDetails.map((social, index) => (
							<a
								href={social.link || '#'}
								target='__blank'
								key={index}>
								{social.icon}
							</a>
						))}
					</div>
				</div>
				<div className='flex flex-col gap-5 items-start justify-start'>
					<h3 className='fnt-semibold text-lg'>Contact Us</h3>
					{contactDetails.map((contact, index) => (
						<div
							key={index}
							className='flex gap-2 items-start text-start'>
							{contact.icon}
							{contact?.link && contact?.details?.length === 1 ? (
								<a
									href={contact?.link}
									target='__blank'
									className=''>
									{contact?.details[0]}
								</a>
							) : contact?.link &&
							  contact?.details?.length > 1 ? (
								<div className='space-y-1 flex-col'>
									<a
										href={contact?.link}
										target='__blank'
										className=' '>
										{contact?.details[0]} <br />
										{contact?.details[1]}
									</a>
								</div>
							) : (
								contact?.details?.map((detail, idx) => (
									<p key={idx} className=''>
										{detail}
									</p>
								))
							)}
						</div>
					))}
				</div>
				<div className='flex flex-col gap-2 items-start justify-start '>
					<h3 className='fnt-semibold text-lg'>Quick Links</h3>
					<nav>
						<ul className='flex flex-col gap-5 text-start'>
							<li className=''>
								<Link to={`/#${sectionIds.homeHero}`}>
									Home
								</Link>
							</li>
							<li className=''>
								<Link to={`/about#${sectionIds.aboutHero}`}>
									About Us
								</Link>
							</li>
							<li className=''>
								<Link to={`/events#${sectionIds.eventsHero}`}>
									Events
								</Link>
							</li>
							<li className=''>
								<Link
									to={`/ministries#${sectionIds.ministriesHero}`}>
									Ministries
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				<Button className='mt-5' variant={'ghost'}>
					<BiDonateHeart /> MAKE A LOVE OFFERING{' '}
				</Button>
			</div>
		</SectionWrapper>
	);
};

export default FooterSection;
