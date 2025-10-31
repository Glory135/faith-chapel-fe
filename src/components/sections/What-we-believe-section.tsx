import React from 'react';
import { BookOpen, Sparkles, Heart, Church, Users, Wind } from 'lucide-react';
import SectionWrapper from '../wrappers/SectionWrapper';
import { sectionIds } from '../../data/sectionIds';

interface Belief {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const beliefs: Belief[] = [
	{
		icon: <BookOpen className='w-8 h-8' />,
		title: 'The Bible',
		description:
			"We believe the Bible is God's Word, inspired by the Holy Spirit and the ultimate authority for our faith and practice.",
	},
	{
		icon: <Sparkles className='w-8 h-8' />,
		title: 'God',
		description:
			'We believe in one God who exists eternally in three persons: Father, Son, and Holy Spirit, equal in power and glory.',
	},
	{
		icon: <Heart className='w-8 h-8' />,
		title: 'Salvation',
		description:
			'We believe salvation is a gift from God received through faith in Jesus Christ, whose death and resurrection provide forgiveness and eternal life.',
	},
	{
		icon: <Church className='w-8 h-8' />,
		title: 'The Church',
		description:
			'We believe the church is the body of Christ, a community of believers called to worship, fellowship, and service.',
	},
	{
		icon: <Users className='w-8 h-8' />,
		title: 'Mission',
		description:
			"We believe in sharing God's love through word and deed, serving our community, and making disciples of all nations.",
	},
	{
		icon: <Wind className='w-8 h-8' />,
		title: 'Holy Spirit',
		description:
			'We believe in the present ministry of the Holy Spirit, who empowers believers to live godly lives and serve effectively.',
	},
];

export function WhatWeBelieveSection() {
	return (
		<SectionWrapper id={sectionIds.whatWeBelieveSection} className='bg-primary/10 py-20 px-6'>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<div className='text-center mb-16'>
					<h1 className='text-[#] mb-4'>What We Believe</h1>
					<div className='w-24 h-1 bg-primary mx-auto mb-6'></div>
					<p className='max-w-3xl mx-auto'>
						Our faith is centered on the teachings of Jesus Christ
						and the Bible as God's inspired word.
					</p>
				</div>

				{/* Beliefs Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
					{beliefs.map((belief, index) => (
						<div
							key={index}
							className='flex flex-col items-center text-center group'>
							{/* Diamond Icon Container */}
							<div className='relative mb-6'>
								<div className='w-24 h-24 bg-white border-2 border-primary rounded-lg transform rotate-45 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110'>
									<div className='absolute inset-0 flex items-center justify-center transform -rotate-45 text-primary'>
										{belief.icon}
									</div>
								</div>
							</div>

							{/* Title */}
							<h3 className='text-[#1A1A1A] font-semibold text-lg mb-4'>
								{belief.title}
							</h3>

							{/* Description */}
							<p className='text-gray-700 leading-relaxed max-w-sm'>
								{belief.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}
