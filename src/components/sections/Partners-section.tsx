import { Phone, Mail, MapPin, Globe, ExternalLink } from 'lucide-react';
import SectionWrapper from '../wrappers/SectionWrapper';
import { Link } from 'react-router';
import { sectionIds } from '../../data/sectionIds';
import { organizations } from '../../data/partnersData';

const getContactIcon = (type: string) => {
	switch (type) {
		case 'phone':
			return <Phone className='w-4 h-4' />;
		case 'email':
			return <Mail className='w-4 h-4' />;
		case 'address':
			return <MapPin className='w-4 h-4' />;
		case 'website':
			return <Globe className='w-4 h-4' />;
		default:
			return null;
	}
};

export function PartnerOrganizations() {
	// Group organizations by category
	const categories = Array.from(
		new Set(organizations.map((org) => org.category))
	);

	return (
		<SectionWrapper id={sectionIds.partners}>
			<div className='max-w-7xl mx-auto'>
				{/* Header Section */}
				<div className='text-center mb-16'>
					<h1 className='text-[#1A1A1A] mb-4'>
						Partner Organizations
					</h1>
					<div className='w-24 h-1 bg-primary mx-auto mb-6'></div>
					<p className='text-gray-700 max-w-3xl mx-auto'>
						We are blessed to work alongside these organizations in
						our mission to serve the community and spread God's
						love. Here you'll find contact information for our
						valued partners.
					</p>
				</div>

				{/* Organizations by Category */}
				<div className='space-y-12'>
					{categories.map((category, categoryIndex) => (
						<div key={categoryIndex}>
							{/* Category Header */}
							<div className='flex items-center gap-4 mb-6'>
								<h3 className='text-primary'>{category}</h3>
								<div className='flex-1 h-px bg-primary bg-opacity-20'></div>
							</div>

							{/* Organizations Grid */}
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
								{organizations
									.filter((org) => org.category === category)
									.map((org, orgIndex) => (
										<div
											key={orgIndex}
											className='bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border-t-4 border-primary'>
											{/* Organization Header */}
											<div className='p-6 pb-4'>
												<h4 className='text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300'>
													{org.name}
												</h4>
												{org.description && (
													<p className='text-gray-600 mb-4'>
														{org.description}
													</p>
												)}
											</div>

											{/* Contact Information */}
											<div className='px-6 pb-6 space-y-3'>
												{org.contacts.map(
													(contact, contactIndex) => (
														<div
															key={contactIndex}
															className='flex items-start gap-3'>
															<div className='shrink-0 w-8 h-8 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary-foreground'>
																{getContactIcon(
																	contact.type
																)}
															</div>
															<div className='flex-1 min-w-0'>
																{contact.link ? (
																	<a
																		href={
																			contact.link
																		}
																		className='text-gray-700 hover:text-primary transition-colors duration-200 wrap-break-words flex items-center gap-1 group/link'
																		target={
																			contact.type ===
																			'website'
																				? '_blank'
																				: undefined
																		}
																		rel={
																			contact.type ===
																			'website'
																				? 'noopener noreferrer'
																				: undefined
																		}>
																		<span className='break-all'>
																			{
																				contact.value
																			}
																		</span>
																		{contact.type ===
																			'website' && (
																			<ExternalLink className='w-3 h-3 shrink-0 opacity-0 group-hover/link:opacity-100 transition-opacity' />
																		)}
																	</a>
																) : (
																	<span className='text-gray-700 wrap-break-words block'>
																		{
																			contact.value
																		}
																	</span>
																)}
															</div>
														</div>
													)
												)}
											</div>

											{/* Bottom Accent */}
											<div className='h-1 bg-linear-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
										</div>
									))}
							</div>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className='mt-16 bg-primary rounded-lg p-8 text-center'>
					<h1 className='text-white mb-4'>
						Interested in Partnering With Us?
					</h1>
					<p className='text-white text-opacity-90 mb-6 max-w-2xl mx-auto'>
						If your organization would like to collaborate with
						Faith AME Church in serving our community, we'd love to
						hear from you.
					</p>
					<Link
						to={`/contact/#${sectionIds.contactForm}`}
						className='inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300'>
						Contact Us
					</Link>
				</div>
			</div>
		</SectionWrapper>
	);
}
