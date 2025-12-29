import { useQuery } from '@tanstack/react-query';
import { getPaginatedGallery } from '../sanity/getPageinatedGallery';

export function usePaginatedGallery(page: number, limit = 24) {
	return useQuery({
		queryKey: ['GALLERY', page, limit],
		queryFn: () => getPaginatedGallery(page, limit),

		// Caching configs optimized for Sanity free plan
		staleTime: 1000 * 60 * 5, // 5 minutes - prevents refetch spam
		gcTime: 1000 * 60 * 60, // 1 hour in cache
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		retry: 1,
	});
}
