import type React from 'react';
import AnimateOnRender from '../animation/AnimateOnRender';
import { cn } from '../../lib/utils';

const HeroWrapper = ({
	children,
	id,
	backgroundImg,
	title,
	subtitle,
	className,
}: {
	children: React.ReactNode;
	id: string;
	backgroundImg: string;
	title: string;
	subtitle?: string;
	className?: string;
}) => {
	return (
		<section
			style={{
				backgroundImage: `linear-gradient(to right, rgba(99, 0, 49, 0.541), rgba(0, 0, 0, 0.571)), url(${backgroundImg})`,
			}}
			id={id}
			className={cn(
				'hero-section w-full h-auto md:py-[30vh] flex items-center justify-center px-5 lg:text-center',
				className
			)}>
			<div className='flex flex-col gap-5 lg:items-center text-white my-[20vh] md:m-0'>
				<AnimateOnRender>
					{' '}
					<h1 className='font-bold text-4xl! sm:text-5xl! lg:text-66xl! text-wrap'>
						{title}
					</h1>
					<div className='w-24 h-1 bg-white mx-auto mt-3'></div>
				</AnimateOnRender>
				{subtitle && (
					<AnimateOnRender
						transition={{
							duration: 0.6,
							ease: 'easeOut',
							delay: 0.5,
						}}>
						<p className='text-lg max-w-4xl'>{subtitle}</p>
					</AnimateOnRender>
				)}
				{children}
			</div>
		</section>
	);
};

export default HeroWrapper;
