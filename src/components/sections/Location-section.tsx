import { MapPin } from 'lucide-react';

const LocationSection = () => {
	return (
		<div className='bg-[#1A1A1A] py-16 px-6'>
			<div className='max-w-6xl mx-auto text-center'>
				<h1 className='text-white mb-4'>Visit Us</h1>
				<div className='w-24 h-1 bg-primary mx-auto mb-6'></div>
				<p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
					We welcome you to join us for worship and fellowship. Our
					doors are always open, and we'd love to meet you in person.
				</p>

				{/* Placeholder for map - you can add Google Maps embed here */}
				<div className='bg-gray-800 rounded-lg h-96 flex items-center justify-center'>
					<div className='text-center text-gray-400'>
						<MapPin className='w-16 h-16 mx-auto mb-4 opacity-50' />
						<p>Map location coming soon</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LocationSection;
