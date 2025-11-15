export interface Event {
    date: string;
    title: string;
    location?: string;
    description?: string;
}

export interface MonthEvents {
    month: string;
    events: Event[];
}

export const eventsData: MonthEvents[] = [
    {
        month: 'June',
        events: [
            {
                date: '6/14',
                title: 'Juneteenth Celebration',
                location: 'Foundation Park',
            },
            { date: '6/15', title: "Father's Day" },
            { date: '6/19', title: 'Actual Juneteenth Day' },
            {
                date: '6/20 & 6/21',
                title: 'Tawawa School',
                location: 'Mason, Ohio - Great Wolf Lodge',
            },
            {
                date: '6/28',
                title: 'Sunday School Convention',
                location: 'Mansfield',
            },
            {
                date: '6/29',
                title: 'Church Anniversary',
                description:
                    'Presiding Bishop The Right Reverend Stafford J.N. Wicker',
            },
        ],
    },
    {
        month: 'July',
        events: [
            { date: '7/12', title: '3rd Quarter Cluster' },
            {
                date: '7/13',
                title: "Men's Day",
                description: 'Reverend Brandon Davis',
            },
            { date: '7/19', title: 'Faith AME Chicken Wings Fundraiser' },
            {
                date: '7/26',
                title: 'Nehemiah Prayer Breakfast and Golf Outing',
            },
        ],
    },
    {
        month: 'August',
        events: [
            { date: '8/02', title: 'Gala Event' },
            { date: '8/16', title: 'Community Picnic', location: 'Faith AME' },
        ],
    },
    {
        month: 'September',
        events: [
            { date: '9/06', title: 'Gala Event' },
            { date: '9/13', title: 'Faith AME Fish Dinner Fundraiser' },
            { date: '9/16', title: '4th Quarterly Cluster' },
            { date: '9/27', title: 'Cleveland District Report Meeting' },
        ],
    },
    {
        month: 'October',
        events: [
            { date: '10/08', title: 'Annual Conference' },
            { date: '10/08', title: '3rd District Planning Meeting' },
        ],
    },
];

export const serviceData = [
    {
        title: 'Church',
        description:
            'A vibrant Sunday worship service filled with praise, prayer, and a life-changing message to strengthen your walk with God.',
        day: 'Every Sunday',
        time: '11:00 AM - 01:00 PM',
    },
    {
        title: 'Sunday School',
        description:
            'A practical and engaging teaching session designed to deepen your understanding of the Bible and build a strong spiritual foundation.',
        day: 'Every Sunday',
        time: '09:00 AM - 10:30 AM',
    },
    {
        title: 'Bible Study',
        description:
            'An interactive midweek study where we dive deeper into the Scriptures, explore biblical principles, and grow together in faith.',
        day: 'Every Wednesday',
        time: '06:00 PM - 07:00 PM',
    },
];
