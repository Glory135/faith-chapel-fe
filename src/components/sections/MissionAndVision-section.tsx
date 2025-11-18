import SectionWrapper from '../wrappers/SectionWrapper';
import backgroundImg from '../../assets/images/img2.jpg';
import img from '../../assets/images/hands-out.jpg';
import AnimateOnView from '../animation/AnimateInView';
import { CgCross } from 'react-icons/cg';
import { sectionIds } from '../../data/sectionIds';

const MissionAndVisionStatementSection = () => {
	return (
		<SectionWrapper
			id={sectionIds.valuesSection}
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
								The mission of Faith Chapel AME Church is to
								minister to the social, spiritual, and physical
								needs of the unchurched in Fostoria, Ohio to
								usher in the kingdom of God on earth as it is in
								heaven.
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
								Faith building LEADERS of tomorrow through
								SPIRITUAL and VOCATIONAL means by providing a
								safe space, with the offering of spiritual
								growth in the word of GOD and helping them be
								more self-reliant in becoming productive members
								of society by empowering them and giving them
								the TOOLS for life! Working on self-esteem
								building, learning social etiquette, problem-
								solving skills and bringing to the children and
								their families a range of school and vocational
								options, including raising money/FINDING FUNDING
								to help children go to college and
								vocational-technical schools to help them become
								their full spiritual and social selves, in
								pursuit of them becoming healthy, God-loving,
								God- serving adults.
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
								Offering a solid foundation of spiritual growth
								and development to the families and the
								community at large by being open and accepting
								of all people in their journey with/towards
								Christ. Valuing the power of prayer, learning
								what “Thus, sayeth the Lord”.
							</p>
						</AnimateOnView>
					</div>
				</div>
			</AnimateOnView>
		</SectionWrapper>
	);
};

export default MissionAndVisionStatementSection;
