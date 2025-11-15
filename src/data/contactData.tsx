import React from 'react';
import { Phone, Mail, MapPin, User } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

interface ContactInfo {
	icon: React.ReactNode;
	title: string;
	details: string[];
	link?: string;
}

interface SocialInfo {
	icon: React.ReactNode;
	title: string;
	link?: string;
}

export const contactDetails: ContactInfo[] = [
	{
		icon: <Phone className='w-6 h-6' />,
		title: 'Phone',
		details: ['(123) 456-7890'],
		link: 'tel:+11234567890',
	},
	{
		icon: <Mail className='w-6 h-6' />,
		title: 'Email',
		details: ['fostoriafaithchapelame@gmail.com'],
		link: 'mailto:fostoriafaithchapelame@gmail.com',
	},
	{
		icon: <MapPin className='w-6 h-6' />,
		title: 'Address',
		details: ['220 Sycamore Street', 'Fostoria, Ohio 44830'],
		link: 'https://maps.app.goo.gl/UNJwhrPFY19JW65AA',
	},
	{
		icon: <User className='w-6 h-6' />,
		title: 'Pastor',
		details: ['Rev. Calvin Montgomery', ''],
		// link: 'mailto:pastor@faithamechurch.org',
	},
];

export const socialMediaDetails: SocialInfo[] = [
	{
		icon: <FaFacebook size={25} />,
		title: 'Facebook',
		link: 'https://www.facebook.com/faith.chapel.ame.church.2023',
	},
	// {
	// 	icon: <FaInstagram size={25} />,
	// 	title: 'Instagram',
	// 	link: 'mailto:fostoriafaithchapelame@gmail.com',
	// },
	// {
	// 	icon: <FaYoutube size={25} />,
	// 	title: 'Youtube',
	// 	link: 'dsdsld',
	// },
];
