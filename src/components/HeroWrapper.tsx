import type React from 'react';
import AnimateOnRender from './animation/AnimateOnRender';

const HeroWrapper = ({
	children,
	id,
	backgroundImg,
	title,
	subtitle,
}: {
	children: React.ReactNode;
	id: string;
	backgroundImg: string;
	title: string;
	subtitle?: string;
}) => {
	return (
		<section
			style={{
				backgroundImage: `linear-gradient(to right, rgba(99, 0, 49, 0.541), rgba(0, 0, 0, 0.571)), url(${backgroundImg})`,
			}}
			id={id}
			className='hero-section w-full h-auto md:h-screen flex items-center justify-center p-5'>
			<div className='flex flex-col gap-5 lg:text-center lg:items-center text-white my-[20vh] md:m-0'>
				<AnimateOnRender>
					{' '}
					<h1 className='font-bold text-5xl lg:text-7xl text-wrap'>
						{title}
					</h1>
				</AnimateOnRender>

				{subtitle && (
					<AnimateOnRender
						transition={{
							duration: 0.6,
							ease: 'easeOut',
							delay: 0.5,
						}}>
						<p className='text-2xl'>{subtitle}</p>
					</AnimateOnRender>
				)}
				{children}
			</div>
		</section>
	);
};

export default HeroWrapper;
