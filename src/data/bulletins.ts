
export interface BulletinPost {
	id: number;
	title: string;
	date: string;
	time?: string;
	excerpt: string;
	category: string;
	categoryColor?: string;
	imageUrl: string;
}

export const bulletinPosts: BulletinPost[] = [
	{
		id: 1,
		title: 'Thanksgiving Service & Community Dinner',
		date: 'Nov 24, 2024',
		time: '5:00 PM',
		excerpt:
			"Join us for our annual Thanksgiving Service followed by a community dinner. All are welcome to celebrate God's blessings and share a meal together as one family.",
		category: 'Events',
		categoryColor: 'bg-amber-600',
		imageUrl:
			'https://images.unsplash.com/photo-1670899460364-ebc917bac09a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFua3NnaXZpbmclMjBkaW5uZXIlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzYzMjkwNjgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
	},
	{
		id: 2,
		title: 'Youth Choir Rehearsal Schedule Update',
		date: 'Nov 15, 2024',
		time: '6:30 PM',
		excerpt:
			'Please note the updated rehearsal schedule for our Youth Choir. Rehearsals will now be held every Wednesday evening in the main sanctuary.',
		category: 'Announcements',
		categoryColor: 'bg-blue-600',
		imageUrl:
			'https://images.unsplash.com/photo-1745852738233-bbd0df06c279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjaG9pciUyMHNpbmdpbmd8ZW58MXx8fHwxNzYzMjkwODU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
	},
	{
		id: 3,
		title: 'Prayer Vigil for Our Community',
		date: 'Nov 20, 2024',
		time: '7:00 PM',
		excerpt:
			'We invite you to join us for a special prayer vigil as we lift up our community, nation, and world in prayer. Let us come together in faith and unity.',
		category: 'Prayer Requests',
		categoryColor: 'bg-purple-600',
		imageUrl:
			'https://images.unsplash.com/photo-1616428882609-7443facdbe81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBjYW5kbGVzJTIwY2h1cmNofGVufDF8fHx8MTc2MzI5MDg1NXww&ixlib=rb-4.1.0&q=80&w=1080',
	},
	{
		id: 4,
		title: 'Sunday School Classes Resume',
		date: 'Nov 17, 2024',
		time: '9:00 AM',
		excerpt:
			"All Sunday School classes for children and adults will resume this Sunday. New members are always welcome to join us as we study God's Word together.",
		category: 'Sunday Service',
		categoryColor: 'bg-[#6B1C3E]',
		imageUrl:
			'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzYzMjkwNDczfDA&ixlib=rb-4.1.0&q=80&w=1080',
	},
	{
		id: 5,
		title: 'Community Food Drive Success',
		date: 'Nov 12, 2024',
		excerpt:
			'Thank you to everyone who contributed to our food drive! We collected over 500 items to support local families in need. Your generosity embodies the love of Christ.',
		category: 'Community',
		categoryColor: 'bg-green-600',
		imageUrl:
			'https://images.unsplash.com/photo-1593113630400-ea4288922497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZG9uYXRpb24lMjBjaGFyaXR5fGVufDF8fHx8MTc2MzIxODU3OHww&ixlib=rb-4.1.0&q=80&w=1080',
	},
	{
		id: 6,
		title: 'Advent Season Preparation',
		date: 'Nov 28, 2024',
		excerpt:
			'As we prepare our hearts for the Advent season, join us for special services and activities throughout December. More details coming soon.',
		category: 'Announcements',
		categoryColor: 'bg-blue-600',
		imageUrl:
			'https://images.unsplash.com/photo-1578145892763-d392d001f393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnQlMjB3cmVhdGglMjBjaHJpc3RtYXN8ZW58MXx8fHwxNzYzMjkwODU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
	},
];
