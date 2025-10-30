import SectionWrapper from '../wrappers/SectionWrapper';
import backgroundImg from '../../assets/images/img2.jpg';
import img from '../../assets/images/together-img.avif';
import AnimateOnView from '../animation/AnimateInView';
import { CgCross } from 'react-icons/cg';

const MissionAndVisionStatementSection = () => {
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
							<p className='font-semibold '>Our Values </p>
							<h1 className='title text-4xl!'>What We Believe</h1>
						</AnimateOnView>
						<AnimateOnView
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4 }}>
							<h3 className='font-semibold text-lg uppercase relative w-fit'>
                                <CgCross className='absolute top-0 -right-5' />
								Our Mission
							</h3>
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
							transition={{ duration: 0.4 }}>
							<h3 className='font-semibold text-lg uppercase relative w-fit'>
                                <CgCross className='absolute top-0 -right-5' />
								Our Vision
							</h3>
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
							transition={{ duration: 0.4 }}>
							<h3 className='font-semibold text-lg uppercase relative w-fit'>
                                <CgCross className='absolute top-0 -right-5' />
								Value Statement
							</h3>
							<p>
								Faith Chapel A.M.E Church was founded with a
								vision to create a welcoming community where
								people from all walks of life can grow in their
								faith journey.
							</p>
						</AnimateOnView>
					</div>
				</div>
			</AnimateOnView>
		</SectionWrapper>
	);
};

export default MissionAndVisionStatementSection;
