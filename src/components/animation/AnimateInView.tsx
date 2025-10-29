import { motion, useInView, type MotionProps } from 'motion/react';
import { useRef, useEffect, useState, type ReactNode } from 'react';

interface AnimateOnViewProps extends MotionProps {
	children: ReactNode;
	/** Initial motion state (default: { opacity: 0, y: 40 }) */
	initial?: MotionProps['initial'];
	/** Target animation state (default: { opacity: 1, y: 0 }) */
	animate?: MotionProps['animate'];
	/** Transition settings (default: { duration: 0.6, ease: "easeOut" }) */
	transition?: MotionProps['transition'];
	/** Visibility threshold for triggering the animation (0 to 1) */
	threshold?: number;
	/** Optional class names for the wrapper */
	className?: string;
}

/**
 * Reusable animation wrapper that triggers the animation
 * every time the element enters the viewport.
 */
export default function AnimateOnView({
	children,
	initial = { opacity: 0, y: 50 },
	animate = { opacity: 1, y: 0 },
	transition = { duration: 0.6, ease: 'easeOut' },
	threshold = 0.3,
	className,
	...rest
}: AnimateOnViewProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { amount: threshold });
	const [shouldAnimate, setShouldAnimate] = useState(false);

	useEffect(() => {
		if (isInView) {
			setShouldAnimate(true);
		} else {
			setShouldAnimate(false);
		}
	}, [isInView]);

	return (
		<motion.div
			ref={ref}
			initial={initial}
			animate={shouldAnimate ? animate : initial}
			transition={transition}
			className={className}
			{...rest}
			>
			{children}
		</motion.div>
	);
}
