import { Link, useLocation } from 'react-router';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'motion/react';
import Logo from './Logo';
import useScrollPosition from '../hooks/useScrollPosition';
import { Button } from './ui/button';
import { BiDonateHeart } from 'react-icons/bi';
import { navItemsData } from '../data/navItemsData';
import { cn } from '../lib/utils';

const TopBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const scrollPosition = useScrollPosition();
	const { pathname } = useLocation();

	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	return (
		<>
			<section
				className={`w-full h-20 fixed top-0 left-0 z-50 backdrop-blur-md transition-all ease-in-out  ${
					scrollPosition > 100 && !menuOpen
						? 'bg-primary/70 shadow-md'
						: 'bg-transparent'
				}`}>
				<div className='max-w-[1440px] h-full mx-auto flex justify-between items-center gap-5  px-5'>
					<Logo color='white' />

					{/* Desktop nav */}
					<NavigationMenu viewport={false} className='hidden md:flex'>
						<NavigationMenuList>
							{Object.entries(navItemsData).map(
								([section, navItem]) => {
									return typeof navItem === 'string' ? (
										<NavigationMenuItem>
											<NavigationMenuLink
												asChild
												className={cn(
													navigationMenuTriggerStyle(),
													'bg-transparent text-white'
												)}>
												<Link
													className=''
													to={navItem as string}>
													{section}
												</Link>
											</NavigationMenuLink>
										</NavigationMenuItem>
									) : (
										<NavigationMenuItem key={section}>
											<NavigationMenuTrigger className='bg-transparent text-white'>
												{section}
											</NavigationMenuTrigger>
											<NavigationMenuContent className=''>
												<ul className='grid min-w-[200px] gap-4'>
													<li>
														{navItem.map(
															(itm, index) => (
																<NavigationMenuLink
																	key={index}
																	asChild
																	className='hover:bg-primary hover:text-primary-foreground!'>
																	<Link
																		to={
																			itm.link
																		}>
																		{
																			itm.label
																		}
																	</Link>
																</NavigationMenuLink>
															)
														)}
													</li>
												</ul>
											</NavigationMenuContent>
										</NavigationMenuItem>
									);
								}
							)}
						</NavigationMenuList>
					</NavigationMenu>

					<Button className='hidden md:flex items-center capitalize'>
						<BiDonateHeart /> 
						<span className='hidden lg:flex'>MAKE A LOVE OFFERING</span> 
						<span className='flex lg:hidden'>Donate</span> 
					</Button>

					{menuOpen ? (
						<IoMdClose
							size={25}
							className='md:hidden text-white'
							onClick={() => setMenuOpen(false)}
						/>
					) : (
						<MenuIcon
							className='md:hidden text-white'
							onClick={() => setMenuOpen(true)}
						/>
					)}
				</div>
				{menuOpen && (
					<motion.div
						initial={{ height: 0, y: '-100%', opacity: 0.5 }}
						animate={{ height: 'auto', y: 0, opacity: 1 }}
						transition={{ ease: 'easeOut', duration: 0.05 }}
						className='md:hidden absolute top-full z-30 left-0 right-0 w-full bg-background min-h-[400px] h-auto p-5 shadow-lg'>
						<ul className='w-full h-fit flex flex-col justify-center items-center'>
							{Object.entries(navItemsData).map(
								([section, navItem]) => {
									return (
										<li
											key={section}
											className='w-[90%] p-5 border-b flex justify-center items-center'>
											<Link
												to={
													typeof navItem === 'string'
														? (navItem as string)
														: (navItem[0]
																.link as string)
												}>
												{section}
											</Link>
										</li>
									);
								}
							)}
							<Button
								size={'lg'}
								className='w-full mt-5 capitalize'>
								<BiDonateHeart /> MAKE A LOVE OFFERING
							</Button>
						</ul>
					</motion.div>
				)}
			</section>
		</>
	);
};

export default TopBar;
