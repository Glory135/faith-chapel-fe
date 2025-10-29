import React from 'react';
import { cn } from '../lib/utils';

const SectionWrapper = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<section
			className={cn(
				'w-full min-h-[50vh] flex items-center justify-center gap-5 px-5 py-20',
				className
			)}>
			{children}
		</section>
	);
};

export default SectionWrapper;
