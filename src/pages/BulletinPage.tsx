import { useState } from 'react';
import {
	BulletinCard,
	type BulletinCardProps,
} from '../components/BulletinCard';
import { BulletinHero } from '../components/sections/Bulletin-hero-section';
import { FeaturedBulletin } from '../components/sections/Featured-bulletin-section';
import PageWrapper from '../components/wrappers/PageWrapper';
import { usePaginatedBulletins } from '../hooks/useBulletins';
import { PaginationComponent } from '../components/PaginationComponent';
import BulletinDialog from '../components/BulletinDialog';

const LIMIT = 12;
const BulletinPage = () => {
	const [selectedPost, setSelectedPost] = useState<BulletinCardProps | null>(
		null
	);
	const [open, setOpen] = useState(false);
	const [page, setPage] = useState(1);
	const limit = LIMIT;
	const { data, isLoading, error } = usePaginatedBulletins(page, limit);

	const handleOpenPost = (post: BulletinCardProps) => {
		setSelectedPost(post);
		setOpen(true);
	};

	if (isLoading) return <p>Loading…</p>;
	if (error) return <p>Error loading posts</p>;
	return (
		<>
			<PageWrapper>
				<BulletinHero />

				{/* Featured Bulletin */}
				<section className='py-12 md:py-16'>
					<div className='container mx-auto px-4'>
						<FeaturedBulletin {...data[0]} handleOpen={() => handleOpenPost(data[0])} />
					</div>
				</section>
				<section className='py-12 md:py-16 text-start'>
					<div className='container mx-auto px-4'>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
							{data.map((post: BulletinCardProps) => (
								<BulletinCard
									key={post._id}
									handleOpen={() => handleOpenPost(post)}
									{...post}
								/>
							))}
						</div>

						{data.length === 0 && (
							<div className='text-center py-12'>
								<p className='text-gray-600 text-lg'>
									No posts found in this category.
								</p>
							</div>
						)}
					</div>
					{/* Pagination */}
					{data?.length > limit && (
						<PaginationComponent
							page={page}
							totalPages={data?.totalPages ?? 1}
							onPageChange={setPage}
						/>
					)}
				</section>
			</PageWrapper>

			<BulletinDialog
				open={open}
				onOpenChange={setOpen}
				post={selectedPost}
			/>
		</>
	);
};

export default BulletinPage;
