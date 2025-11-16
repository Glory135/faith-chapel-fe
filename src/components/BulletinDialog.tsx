'use client';

import { ImageWithFallback } from '../lib/ImaeWithFallback';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { PortableText } from '@portabletext/react';

type BulletinDialogProps = {
	open: boolean;
	onOpenChange: (v: boolean) => void;
	post: any;
};

export default function BulletinDialog({
	open,
	onOpenChange,
	post,
}: BulletinDialogProps) {
	if (!post) return null;

	const imageUrl = post.imageUrl;
	const formattedDate = new Date(post.date).toLocaleDateString();

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className='max-w-lg md:max-w-2xl p-0 rounded-2xl overflow-hidden!'>
				{/* Header Image */}
				{imageUrl && (
					<div className='w-full h-10 md:h-40 overflow-hidden'>
						<ImageWithFallback
							src={post.imageUrl}
							alt={post.title}
							className='w-full h-full object-cover'
						/>
					</div>
				)}

				<DialogHeader className='border-b p-6'>
					<DialogTitle className='text-xl font-semibold'>
						{post.title}
					</DialogTitle>

					<div className='flex items-center gap-2 mt-2'>
						<span
							className='w-3 h-3 rounded-full'
							style={{
								backgroundColor: post.categoryColor || '#666',
							}}
						/>
						<p className='text-sm font-medium text-muted-foreground'>
							{post.category}
						</p>
					</div>

					<p className='text-xs text-muted-foreground mt-1'>
						{formattedDate} — {post.time}
					</p>
				</DialogHeader>

				<ScrollArea className='p-6 h-[400px] '>
					<DialogDescription className='prose prose-neutral dark:prose-invert max-w-none'>
						<PortableText
							value={post.content}
							components={{
								block: {
									h2: ({ children }) => (
										<h2 className='text-xl font-bold mt-4 mb-2'>
											{children}
										</h2>
									),
									normal: ({ children }) => (
										<p className='leading-relaxed mb-3 text-base'>
											{children}
										</p>
									),
								},
								marks: {
									link: ({ children, value }) => (
										<a
											href={value?.href}
											target='_blank'
											className='text-primary underline'>
											{children}
										</a>
									),
								},
								list: {
									bullet: ({ children }) => (
										<ul className='list-disc pl-6 space-y-1'>
											{children}
										</ul>
									),
								},
								types: {
									image: ({ value }) => (
										<img
											src={value?.asset?.url}
											className='rounded-lg my-4'
											alt='Content image'
										/>
									),
								},
							}}
						/>
					</DialogDescription>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
}
