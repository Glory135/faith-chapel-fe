import { sectionIds } from '../../data/sectionIds';

export function BulletinHero() {
	return (
		<div
			id={sectionIds.bulletinHero}
			className='relative bg-primary text-primary-foreground py-24'>
			<div className='absolute inset-0 opacity-10'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(245, 241, 235, 0.1) 10px,
            rgba(245, 241, 235, 0.1) 20px
          )`,
					}}
				/>
			</div>

			<div className='container mx-auto px-4 relative z-10'>
				<div className='max-w-3xl mx-auto text-center'>
					<div className='mb-6'>
						<div className='inline-block px-6 py-2 border-2 border-[#F5F1EB] rounded-full mb-4'>
							Weekly Updates
						</div>
					</div>
					<h1 className='mb-4'>Church Bulletin</h1>
					<p className='text-xl opacity-90'>
						Stay connected with the latest news, announcements, and
						updates from our Faith AME Church family
					</p>
				</div>
			</div>
		</div>
	);
}
