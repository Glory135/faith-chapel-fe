import { Clock } from 'lucide-react';
import AnimateOnView from '../animation/AnimateInView';
import SectionWrapper from '../wrappers/SectionWrapper';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/card';
import { CgCross } from 'react-icons/cg';
import { Button } from '../ui/button';

const serviceData = [
	{
		title: 'Sunday Service',
		description:
			'Join us for worship, prayer, and an inspiring message that will uplift your spirit and strengthen your faith.',
		day: 'Every Sunday',
		time: '10:00 AM - 12:00 PM',
	},
	{
		title: 'Sunday School',
		description:
			'Join us for worship, prayer, and an inspiring message that will uplift your spirit and strengthen your faith.',
		day: 'Every Sunday',
		time: '7:00 AM - 9:00 AM',
	},
	{
		title: 'Bible Study',
		description:
			'Join us for worship, prayer, and an inspiring message that will uplift your spirit and strengthen your faith.',
		day: 'Every Tuesday and Thursday ',
		time: '7:00 PM - 8:30 PM',
	},
	{
		title: 'Sunday Service',
		description:
			'Join us for worship, prayer, and an inspiring message that will uplift your spirit and strengthen your faith.',
		day: 'Every Sunday',
		time: '10:00 AM - 12:00 PM',
	},
	{
		title: 'Sunday School',
		description:
			'Join us for worship, prayer, and an inspiring message that will uplift your spirit and strengthen your faith.',
		day: 'Every Sunday',
		time: '7:00 AM - 9:00 AM',
	},
	{
		title: 'Bible Study',
		description:
			'Join us for worship, prayer, and an inspiring message that will uplift your spirit and strengthen your faith.',
		day: 'Every Tuesday and Thursday ',
		time: '7:00 PM - 8:30 PM',
	},
];

const WeeklyServicesSection = () => {
	return (
		<SectionWrapper className='bg-primary/5 flex-col gap-10'>
			<AnimateOnView className='text-center'>
				<h1 className='mb-5'>Join Us for Worship</h1>
				<p className='max-w-xl'>
					Experience the warmth, love, and community of Faith Chapel
					A.M.E Church through our diverse weekly services.
				</p>
			</AnimateOnView>
			<div className='w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-start gap-5'>
				{serviceData.map((service, index) => (
					<AnimateOnView
						key={index}
						transition={{
							duration: 0.6,
							delay: index * 0.2,
							ease: 'linear',
						}}>
						<Card className='w-full min-h-[150px]'>
							<CardHeader>
								<CardTitle className='relative'>
									<CgCross className='absolute -top-3 right-0' />{' '}
									{service.title}
								</CardTitle>
								<CardDescription>
									{service.description}
								</CardDescription>
								{/* <CardAction>
							<Button variant='link'>Sign Up</Button>
						</CardAction> */}
								<CardContent>
									<p className=''>{service.day}</p>
									{service.time && (
										<p className='flex items-center gap-2'>
											<Clock size={16} /> {service.time}
										</p>
									)}
								</CardContent>
							</CardHeader>
						</Card>
					</AnimateOnView>
				))}
			</div>
			<Button
				size={'lg'}
				className='rounded-full min-w-[250px] sm:w-fit py-6 text-lg'>
				View All Events{' '}
			</Button>
		</SectionWrapper>
	);
};

export default WeeklyServicesSection;
