import Logo from './Logo';
import SectionWrapper from './wrappers/SectionWrapper';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router';
import { Button } from './ui/button';
import { BiDonateHeart } from 'react-icons/bi';

const FooterSection = () => {
	return (
		<SectionWrapper className='bg-[#21131a]  text-white py-16! min-h-0'>
			<div className='max-w-7xl w-full flex flex-wrap justify-between gap-10'>
				<div className='flex flex-col gap-2'>
					<Logo color='white' />
					<div className='flex gap-2 items-center'>
						<FaFacebook size={25} />
						<FaInstagram size={25} />
						<FaYoutube size={25} />
					</div>
				</div>
				<div className='flex flex-col gap-2 items-start justify-start min-w-xs'>
					<h3 className='fnt-semibold text-lg'>Quick Links</h3>
					<nav>
						<ul className='flex flex-col gap-5 text-start'>
							<li className=''>
								<Link to={'/home'}>Hone</Link>
							</li>
							<li className=''>
								<Link to={'/home'}>About Us</Link>
							</li>
							<li className=''>
								<Link to={'/home'}>Services</Link>
							</li>
							<li className=''>
								<Link to={'/home'}>Message From Pastor</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className='flex flex-col gap-2 items-start justify-start'>
					<h3 className='fnt-semibold text-lg'>Contact Us</h3>
					<div className='flex gap-2 items-center'>
						<MdOutlineLocationOn size={25} />{' '}
						<p>123 Faith Street, City, State 12345</p>
					</div>
					<div className='flex gap-2 items-center'>
						<FiPhone size={25} /> <p>(123) 456-7890</p>
					</div>
					<div className='flex gap-2 items-center'>
						<MdOutlineEmail size={25} />{' '}
						<p>faithchurch@email.com</p>
					</div>
					<Button className='mt-5' variant={'ghost'}>
						<BiDonateHeart /> MAKE A LOVE OFFERING{' '}
					</Button>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default FooterSection;
