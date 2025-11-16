import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationPrevious,
	PaginationNext,
} from './ui/pagination';

interface PaginationProps {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export function PaginationComponent({
	page,
	totalPages,
	onPageChange,
}: PaginationProps) {
	const prevDisabled = page <= 1;
	const nextDisabled = page >= totalPages;

	return (
		<Pagination>
			<PaginationContent>
				{/* Previous */}
				<PaginationItem>
					<PaginationPrevious
						className={
							prevDisabled ? 'pointer-events-none opacity-50' : ''
						}
						onClick={() => !prevDisabled && onPageChange(page - 1)}
					/>
				</PaginationItem>

				{/* Page numbers */}
				{Array.from({ length: totalPages }, (_, i) => i + 1).map(
					(num) => (
						<PaginationItem key={num}>
							<PaginationLink
								isActive={num === page}
								onClick={() => onPageChange(num)}>
								{num}
							</PaginationLink>
						</PaginationItem>
					)
				)}

				{/* Next */}
				<PaginationItem>
					<PaginationNext
						className={
							nextDisabled ? 'pointer-events-none opacity-50' : ''
						}
						onClick={() => !nextDisabled && onPageChange(page + 1)}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
