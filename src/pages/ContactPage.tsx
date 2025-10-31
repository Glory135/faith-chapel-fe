import ContactForm from '../components/ContactForm';
import PageWrapper from '../components/wrappers/PageWrapper';
import AnimateOnRender from '../components/animation/AnimateOnRender';
import LocationSection from '../components/sections/Location-section';
import WeeklyServicesSection from '../components/sections/Weekly-services-section';
import { contactDetails } from '../data/contactData';

export function ContactPage() {
	return (
		<PageWrapper>
			{/* Hero Header */}
			<div className='bg-primary py-20 px-6'>
				<AnimateOnRender className='max-w-6xl mx-auto text-center'>
					<h1 className='text-white mb-4'>Contact Us</h1>
					<div className='w-24 h-1 bg-white mx-auto mb-6'></div>
					<p className='text-white text-opacity-90 max-w-2xl mx-auto'>
						We'd love to hear from you. Whether you have questions,
						prayer requests, or want to learn more about our church,
						we're here to help.
					</p>
				</AnimateOnRender>
			</div>

			{/* Main Content */}
			<div className='mx-auto px-6 py-16 text-start'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* Contact Information */}
					<div>
						<h2 className='text-primary font-semibold text-xl mb-8'>
							Get In Touch
						</h2>
						<div className='space-y-6'>
							{contactDetails.map((contact, index) => (
								<div
									key={index}
									className='bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary'>
									<div className='flex items-start gap-4'>
										<div className='shrink-0'>
											<div className='w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary-foreground'>
												{contact?.icon}
											</div>
										</div>
										<div className='flex-1'>
											<h3 className='text-gray-800 mb-2'>
												{contact?.title}
											</h3>
											{contact?.link &&
											contact?.details?.length === 1 ? (
												<a
													href={contact?.link}
													className='text-gray-600 hover:text-primary transition-colors duration-200'>
													{contact?.details[0]}
												</a>
											) : contact?.link &&
											  contact?.details?.length > 1 ? (
												<div className='space-y-1'>
													<p className='text-gray-700'>
														{contact?.details[0]}
													</p>
													<a
														href={contact?.link}
														className='text-gray-600 hover:text-primary transition-colors duration-200 block'>
														{contact?.details[1]}
													</a>
												</div>
											) : (
												contact?.details?.map(
													(detail, idx) => (
														<p
															key={idx}
															className='text-gray-600'>
															{detail}
														</p>
													)
												)
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					{/* Contact Form */}
					<ContactForm />
				</div>
			</div>
			<LocationSection />
			<WeeklyServicesSection />
		</PageWrapper>
	);
}
