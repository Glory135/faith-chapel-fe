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
				<div className='bg-gray-800 rounded-lg h-96 flex items-center justify-center '>
					<div className='w-full h-[400px]'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.3463740662437!2d-83.41978192407453!3d41.14879267133118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883be3340e28e797%3A0xc6d8d190b2fdafd6!2s220%20Sycamore%20St%2C%20Fostoria%2C%20OH%2044830%2C%20USA!5e0!3m2!1sen!2sng!4v1763206703653!5m2!1sen!2sng'
							allowFullScreen={true}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							className='border-0 w-full h-full'></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LocationSection;
