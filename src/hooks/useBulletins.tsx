import { useQuery } from '@tanstack/react-query';
import { getPaginatedBulletins } from '../sanity/getPaginatedBulletins';

export function usePaginatedBulletins(page:number, limit = 10) {
	return useQuery({
		queryKey: ['BULLETINS', page, limit],
		queryFn: () => getPaginatedBulletins(page, limit),

		// Caching configs optimized for Sanity free plan
		staleTime: 1000 * 60 * 5, // 5 minutes - prevents refetch spam
		gcTime: 1000 * 60 * 60, // 1 hour in cache
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		retry: 1,
	});
}
