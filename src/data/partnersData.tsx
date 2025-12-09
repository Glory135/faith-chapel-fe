interface ContactInfo {
	type: 'phone' | 'email' | 'address' | 'website';
	value: string;
	link?: string;
}

interface Organization {
	name: string;
	category: string;
	description?: string;
	contacts: ContactInfo[];
}

// Sample data - replace with actual organizations
export const organizations: Organization[] = [
	{
		name: 'Third Episcopal District of the AME Church',
		category: 'Partner Organizations',
		// description: 'Cleveland District Administrative Office',
		contacts: [
			{
				type: 'phone',
				value: '614 227 5812',
				link: 'tel:+16142275812',
			},
			{
				type: 'email',
				value: 'info@3rddistrictame.com',
				link: 'mailto:info@3rddistrictame.com',
			},
			{
				type: 'address',
				value: '515 Executive Campus Dr. Suite 120 Westerville, Ohio 43082',
			},
			{
				type: 'website',
				value: 'https://3rddistrictame.com',
				link: 'https://https://3rddistrictame.com',
			},
		],
	},
	// {
	// 	name: 'Community Food Bank',
	// 	category: 'Community Partners',
	// 	description: 'Local food assistance program',
	// 	contacts: [
	// 		{
	// 			type: 'phone',
	// 			value: '(123) 555-0100',
	// 			link: 'tel:+11235550100',
	// 		},
	// 		{
	// 			type: 'email',
	// 			value: 'info@communityfoodbank.org',
	// 			link: 'mailto:info@communityfoodbank.org',
	// 		},
	// 		{ type: 'address', value: '456 Community Blvd, City, State 12345' },
	// 	],
	// },
	// {
	// 	name: 'Youth Mentorship Program',
	// 	category: 'Youth Services',
	// 	description: 'Supporting young people in our community',
	// 	contacts: [
	// 		{
	// 			type: 'phone',
	// 			value: '(123) 555-0200',
	// 			link: 'tel:+11235550200',
	// 		},
	// 		{
	// 			type: 'email',
	// 			value: 'mentors@youthprogram.org',
	// 			link: 'mailto:mentors@youthprogram.org',
	// 		},
	// 		{
	// 			type: 'website',
	// 			value: 'www.youthmentorship.org',
	// 			link: 'https://www.youthmentorship.org',
	// 		},
	// 	],
	// },
	// {
	// 	name: 'Nehemiah Foundation',
	// 	category: 'Community Development',
	// 	description: 'Building stronger communities through faith',
	// 	contacts: [
	// 		{
	// 			type: 'phone',
	// 			value: '(123) 555-0300',
	// 			link: 'tel:+11235550300',
	// 		},
	// 		{
	// 			type: 'email',
	// 			value: 'contact@nehemiahfoundation.org',
	// 			link: 'mailto:contact@nehemiahfoundation.org',
	// 		},
	// 		{
	// 			type: 'address',
	// 			value: '789 Foundation Lane, City, State 12345',
	// 		},
	// 		{
	// 			type: 'website',
	// 			value: 'www.nehemiahfoundation.org',
	// 			link: 'https://www.nehemiahfoundation.org',
	// 		},
	// 	],
	// },
	// {
	// 	name: 'Sunday School Convention',
	// 	category: 'Educational Partners',
	// 	description: 'Regional Christian education and training',
	// 	contacts: [
	// 		{
	// 			type: 'phone',
	// 			value: '(123) 555-0400',
	// 			link: 'tel:+11235550400',
	// 		},
	// 		{
	// 			type: 'email',
	// 			value: 'info@sundayschoolconvention.org',
	// 			link: 'mailto:info@sundayschoolconvention.org',
	// 		},
	// 		{
	// 			type: 'website',
	// 			value: 'www.sundayschoolconvention.org',
	// 			link: 'https://www.sundayschoolconvention.org',
	// 		},
	// 	],
	// },
	// {
	// 	name: 'Local Homeless Shelter',
	// 	category: 'Community Partners',
	// 	description: 'Providing shelter and support to those in need',
	// 	contacts: [
	// 		{
	// 			type: 'phone',
	// 			value: '(123) 555-0500',
	// 			link: 'tel:+11235550500',
	// 		},
	// 		{
	// 			type: 'email',
	// 			value: 'help@homelessshelter.org',
	// 			link: 'mailto:help@homelessshelter.org',
	// 		},
	// 		{ type: 'address', value: '321 Hope Street, City, State 12345' },
	// 	],
	// },
];
