import { motion, type MotionProps } from 'motion/react';
import { type ReactNode } from 'react';

interface AnimateOnRenderProps extends MotionProps {
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
export default function AnimateOnRender({
	children,
	initial = { opacity: 0, y: 50 },
	animate = { opacity: 1, y: 0 },
	transition = { duration: 0.6, ease: 'easeOut' },
	threshold = 0.3,
	className,
	...rest
}: AnimateOnRenderProps) {
	return (
		<motion.div
			initial={initial}
			animate={animate}
			transition={transition}
			className={className}
			{...rest}>
			{children}
		</motion.div>
	);
}
