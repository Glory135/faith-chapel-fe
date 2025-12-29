import { PhotoProvider, PhotoView } from 'react-photo-view';
import PageWrapper from '../components/wrappers/PageWrapper';
import { ImageWithFallback } from '../lib/ImaeWithFallback';
import { usePaginatedGallery } from '../hooks/useGallery';
import { useState } from 'react';
import { PaginationComponent } from '../components/PaginationComponent';
import { InboxIcon } from 'lucide-react';
import 'react-photo-view/dist/react-photo-view.css';
import GalleryHeroSection from '../components/sections/GalleryHeroSection';


interface IGallery {
	_id: string;
	imageUrl: string;
}

const LIMIT = 24;
export default function GelleryPage() {
	const [page, setPage] = useState(1);
	const { data, isLoading, error } = usePaginatedGallery(page, LIMIT);

	if (isLoading) return <GallerySkeleton />;
	if (error)
		return (
			<div className='border border-greek border-dashed flex items-center justify-center p-8 flex-col gap-y-5 bg-muted text-primary w-full h-[50vh] rounded-lg'>
				<InboxIcon />
				<p className='text-primary text-base font-medium'>
					No gallery image found!{' '}
				</p>
			</div>
		);
	return (
		<PageWrapper>
            <GalleryHeroSection />
			<PhotoProvider
				speed={() => 800}
				easing={(type) =>
					type === 2
						? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
						: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
				}>
				<div className='w-full grid grid-cols-4 gap-2 my-5'>
					{data.map((gal: IGallery, index: number) => {
						// const imageUrl = look?.imageLarge?.url || look?.image?.url;
						return (
							<PhotoView key={index} src={gal.imageUrl || ''}>
								<div
									key={gal._id}
									className='relative aspect-square w-full min-h-[350px]'>
									<ImageWithFallback
										alt={'gallery image'}
										src={gal.imageUrl || ''}
										className='object-cover object-top w-full h-full'
									/>
								</div>
							</PhotoView>
						);
					})}
				</div>
			</PhotoProvider>
			{/* Pagination */}
			{data?.length > LIMIT && (
				<PaginationComponent
					page={page}
					totalPages={data?.totalPages ?? 1}
					onPageChange={setPage}
				/>
			)}
		</PageWrapper>
	);
}

const GallerySkeleton = () => {
	return (
		<div className='w-full'>
			{/* Grid of skeleton images */}
			<div className='w-full grid grid-cols-4 gap-2'>
				{Array.from({ length: 16 }).map((_, index) => (
					<div
						key={index}
						className='relative aspect-square w-full min-h-[350px] bg-gray-200 animate-pulse rounded-md'
					/>
				))}
			</div>
		</div>
	);
};
