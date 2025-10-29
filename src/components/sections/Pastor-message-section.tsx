import AnimateOnView from '../animation/AnimateInView';
import pastorImg from '../../assets/images/pastor.jpeg';
import SectionWrapper from '../wrappers/SectionWrapper';

const PastorMessageSection = () => {
	return (
		<SectionWrapper className='flex-wrap gap-5'>
			<div className='flex-1 min-w-sm md:max-w-lg text-start flex flex-col gap-3'>
				<AnimateOnView
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2 }}>
					<h1 className='title'>A Message From Our Pastor</h1>
				</AnimateOnView>
				<AnimateOnView
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}>
					<p> Dear Community,</p>
				</AnimateOnView>
				<AnimateOnView
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.4 }}>
					<p>
						I hope this letter finds you well. As a new pastor in
						your community, I am excited to begin our spiritual
						journey together and learn from your strength and faith.
						In uncertain times, let us remember Philippians 4:13 and
						support each other as we become a beacon of hope in our
						community.
					</p>
				</AnimateOnView>
				<AnimateOnView
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}>
					<p>
						Our church is called Zion because it is a place of
						refuge, where we find solace and strength in God's
						presence. I encourage you to engage with our initiatives
						through volunteering, study groups, or offering support
						to others.
					</p>
				</AnimateOnView>
				<AnimateOnView
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}>
					<p>
						Our unity and commitment to Christ's teachings empower
						us. Please reach out with ideas or for assistance. May
						we grow in faith, love, and service, reflecting God's
						grace.
					</p>
				</AnimateOnView>
				<AnimateOnView
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}>
					<p className='font-semibold'>
						In Christ's Love, <br />
						Pastor Knox
					</p>
				</AnimateOnView>
			</div>
			<AnimateOnView
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.2 }}
				className='flex-1 min-w-sm md:max-w-lg text-start flex flex-col gap-3'>
				<img
					alt='pastor'
					src={pastorImg}
					className='w-full h-auto rounded-md'
				/>
			</AnimateOnView>
		</SectionWrapper>
	);
};

export default PastorMessageSection;
