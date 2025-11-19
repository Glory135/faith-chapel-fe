import SectionWrapper from '../wrappers/SectionWrapper';
import { cn } from '../../lib/utils';
import type { ClassNameValue } from 'tailwind-merge';
import { sectionIds } from '../../data/sectionIds';
import AnimateOnView from '../animation/AnimateInView';
import AnimateOnRender from '../animation/AnimateOnRender';
import { Users, BookOpen, Heart } from 'lucide-react';

interface DepartmentMember {
	name: string;
	role?: string;
}

interface Department {
	title: string;
	icon: React.ReactNode;
	members: DepartmentMember[];
	color: string;
}

const auxiliaryDepartments: Department[] = [
	{
		title: 'Stewards',
		icon: <Users className='w-6 h-6' />,
		color: 'bg-blue-50',
		members: [
			{ name: 'Vickie Smith' },
			{ name: 'A. Lynn Tucker-Roberts' },
			{ name: 'Ramona Harris' },
			{ name: 'Leroy Henry' },
			{ name: 'Mark Roberts', role: '(Resource)' },
		],
	},
	{
		title: 'Trustees',
		icon: <BookOpen className='w-6 h-6' />,
		color: 'bg-amber-50',
		members: [
			{ name: 'Nancy Tucker' },
			{ name: 'Kim Cousin' },
			{ name: 'Virginia Sanders' },
		],
	},
	{
		title: 'Sunday School Superintendent / CED',
		icon: <Heart className='w-6 h-6' />,
		color: 'bg-pink-50',
		members: [{ name: 'Ramona Harris' }],
	},
	{
		title: "Young People's Department (YPD)",
		icon: <Users className='w-6 h-6' />,
		color: 'bg-green-50',
		members: [{ name: 'Connie Wallace' }],
	},
];

const AuxiliaryMembrsSection = ({
	className,
}: {
	className?: ClassNameValue;
}) => {
	return (
		<SectionWrapper
			className={cn(
				'flex-col gap-10 pt-10 overflow-x-hidden',
				className
			)}
			id={sectionIds.auxiliaryMembersSection}>
			{/* Header */}
			<AnimateOnView className='text-center'>
				<h1 className='font-bold text-primary mb-4'>
					Faith Chapel AME Auxiliary Members
				</h1>
				<div className='w-24 h-1 bg-primary mx-auto mb-6'></div>
				<p className='text-gray-700 max-w-2xl mx-auto text-lg'>
					Our Auxiliary Members are the backbone of our church community,
					supporting and enriching our mission.
				</p>
			</AnimateOnView>

			{/* Departments Grid */}
			<div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
				{auxiliaryDepartments.map((dept, index) => (
					<AnimateOnRender
						key={index}
						className={cn(
							'rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border-l-4 border-primary flex flex-col justify-between h-full',
							dept.color
						)}>
						{/* Department Header */}
						<div className='bg-linear-to-r from-primary/10 to-primary/5 px-6 py-5 border-b border-primary/20'>
							<div className='flex items-center gap-3 mb-2'>
								<div className='p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300'>
									{dept.icon}
								</div>
								<h3 className='text-primary font-bold text-lg'>
									{dept.title}
								</h3>
							</div>
						</div>

						{/* Members List */}
						<div className='px-6 py-5 grow'>
							<ul className='space-y-3'>
								{dept.members.map((member, memberIndex) => (
									<AnimateOnView
										key={memberIndex}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.4,
											delay: memberIndex * 0.1,
										}}
										className='flex items-center gap-3'>
										<div className='w-2 h-2 bg-primary rounded-full'></div>
										<div className='text-start'>
											<p className='font-semibold text-gray-800'>
												{member.name}
											</p>
											{member.role && (
												<p className='text-sm text-gray-600 italic'>
													{member.role}
												</p>
											)}
										</div>
									</AnimateOnView>
								))}
							</ul>
						</div>

						{/* Hover Effect Footer */}
						<div className='h-1 bg-linear-to-r from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
					</AnimateOnRender>
				))}
			</div>

			{/* Bottom Call to Action */}
			<AnimateOnView className='text-center w-full pt-6'>
				<p className='text-gray-600 max-w-2xl mx-auto'>
					Interested in joining our auxiliary ministries? We welcome all
					who feel called to serve our church community.
				</p>
			</AnimateOnView>
		</SectionWrapper>
	);
};

export default AuxiliaryMembrsSection;
