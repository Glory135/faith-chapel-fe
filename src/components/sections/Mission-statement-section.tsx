import SectionWrapper from '../wrappers/SectionWrapper';
import backgroundImg from '../../assets/images/img1.jpg';
import img from '../../assets/images/cross.jpg';
import AnimateOnView from '../animation/AnimateInView';

const MissionStatementSection = () => {
	return (
		<SectionWrapper
			styles={{
				backgroundImage: `linear-gradient(to right, rgba(99, 0, 49, 0.912), rgba(0, 0, 0, 0.89)), url(${backgroundImg})`,
			}}
			className='backgroundImg-section mt-[20vh] px-5 py-0 text-white'>
			<AnimateOnView>
				<div className='flex flex-wrap  items-center w-full min-h-[50vh]  max-w-7xl relative gap-10'>
					<img
						src={img}
						className='w-[30%] min-w-[250px] absolute -top-20 aspect-square object-cover object-center'
					/>

					<div className='w-[30%] min-w-[250px] min-h-32 md:aspect-square invisible' />
					<div className='flex-1 sm:min-w-sm  text-start flex flex-col gap-3 my-10'>
						<AnimateOnView
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.2 }}>
							<p className='font-semibold '>Our Mission </p>
							<h1 className='title text-4xl!'>What We Believe</h1>
						</AnimateOnView>
						<AnimateOnView
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4 }}>
							<p>
								Faith Chapel A.M.E Church was founded with a
								vision to create a welcoming community where
								people from all walks of life can grow in their
								faith journey.
							</p>
						</AnimateOnView>
						<AnimateOnView
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}>
							<h4 className='font-semibold italic!'>
								The name of the Lord is a strong tower; the
								righteous run into it and are safe.
							</h4>
						</AnimateOnView>
					</div>
				</div>
			</AnimateOnView>
		</SectionWrapper>
	);
};

export default MissionStatementSection;
