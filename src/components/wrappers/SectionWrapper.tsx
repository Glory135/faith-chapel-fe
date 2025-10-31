import React from 'react';
import { cn } from '../../lib/utils';

const SectionWrapper = ({
	children,
	className,
	styles,
	id,
}: {
	children: React.ReactNode;
	className?: string;
	styles?: React.CSSProperties;
	id?: string;
}) => {
	return (
		<section
			style={styles}
			className={cn(
				'w-full min-h-[50vh] flex items-center justify-center gap-5 px-5 py-20',
				className
			)}
			id={id}>
			{children}
		</section>
	);
};

export default SectionWrapper;
