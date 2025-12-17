import { Users, Radio, Bus, Music, Wrench } from 'lucide-react';
import ypmImg from '../assets/images/new/Young_Peoples_Ministery1.jpg';
import mediaMinistryImg from '../assets/images/new/media_ministry_02.png';
import busMinistryImg from '../assets/images/new/bus_ministry.png';
import infraMinistryImg from '../assets/images/new/Infrastructure_Ministry_05.jpeg';
import musicMinistryImg from '../assets/images/music_ministry.jpg';

export interface Ministry {
	title: string;
	goal: string;
	description: string;
	icon: React.ReactNode;
	image: string;
}

export const ministriesData: Ministry[] = [
	{
		title: 'Young Peoples Department (YPD) Ministry',
		goal: 'Training and instructing the young people in the Christian experience and evangelization in their community.',
		description:
			'Conducting worship service, leadership development, public speaking',
		icon: <Users className='w-6 h-6' />,
		image: ypmImg,
	},
	{
		title: 'Media Ministry',
		goal: "Development of a Media Ministry to expand the outreach of God's word.",
		description:
			'Plan to work with the youth in the development of this system to continue the mission of outreach and evangelism.',
		icon: <Radio className='w-6 h-6' />,
		image: mediaMinistryImg,
	},
	{
		title: 'Bus Ministry',
		goal: '15-seater passenger van has been donated to the church but needs some upgrades.',
		description:
			'Providing transportation to bring members and visitors to worship services and church events.',
		icon: <Bus className='w-6 h-6' />,
		image: busMinistryImg,
	},
	{
		title: 'Youth Development – Music Ministry',
		goal: 'Providing Lessons to three youth to learn to play piano/organ and drums for one year.',
		description:
			'Nurturing the next generation of worship leaders through music education and training.',
		icon: <Music className='w-6 h-6' />,
		image: musicMinistryImg,
	},
	{
		title: 'Infrastructure',
		goal: 'Upgrades to the church infrastructure.',
		description:
			'Maintaining and improving our facilities to better serve our congregation and community.',
		icon: <Wrench className='w-6 h-6' />,
		image: infraMinistryImg,
	},
];
