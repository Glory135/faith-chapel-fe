import { Users, Radio, Bus, Music, Wrench } from 'lucide-react';

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
		image: 'https://images.unsplash.com/photo-1624500055301-c62a900632f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjB5b3V0aCUyMGNodXJjaCUyMHxlbnwxfHx8fDE3NjIzODMwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
	},
	{
		title: 'Media Ministry',
		goal: "Development of a Media Ministry to expand the outreach of God's word.",
		description:
			'Plan to work with the youth in the development of this system to continue the mission of outreach and evangelism.',
		icon: <Radio className='w-6 h-6' />,
		image: 'https://images.unsplash.com/photo-1758788505918-0c3957dba531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpYSUyMGJyb2FkY2FzdGluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjE5MDcxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
	},
	{
		title: 'Bus Ministry',
		goal: '15-seater passenger van has been donated to the church but needs some upgrades.',
		description:
			'Providing transportation to bring members and visitors to worship services and church events.',
		icon: <Bus className='w-6 h-6' />,
		image: 'https://images.unsplash.com/photo-1754470277734-304a51715d8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB0cmFuc3BvcnRhdGlvbiUyMGJ1c3xlbnwxfHx8fDE3NjE5MDcxODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
	},
	{
		title: 'Youth Development – Music Ministry',
		goal: 'Providing Lessons to three youth to learn to play piano/organ and drums for one year.',
		description:
			'Nurturing the next generation of worship leaders through music education and training.',
		icon: <Music className='w-6 h-6' />,
		image: 'https://images.unsplash.com/photo-1611770391544-6ad63e91aa63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHlvdXRoJTIwcGlhbm8lMjBsZXNzb25zfGVufDF8fHx8MTc2MjM4MzA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
	},
	{
		title: 'Infrastructure',
		goal: 'Upgrades to the church infrastructure.',
		description:
			'Maintaining and improving our facilities to better serve our congregation and community.',
		icon: <Wrench className='w-6 h-6' />,
		image: 'https://images.unsplash.com/photo-1760561149408-e9cacadd84fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBidWlsZGluZyUyMHJlbm92YXRpb258ZW58MXx8fHwxNzYxOTA3MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
	},
];
