import { Link } from 'react-router';
import logoimg from '../assets/logo/logo.webp';
import { cn } from '../lib/utils';

function Logo({
	color,
	responsive = false,
}: {
	color?: 'white' | 'black';
	responsive?: boolean;
}) {
	return (
		<Link
			to={'/'}
			className='flex w-full flex-wrap items-center justify-center gap-2'>
			<img src={logoimg} alt='logo' className='h-12' />
			<h3
				className={cn(
					'font-bold text-xl text-white text-nowrap text-start ',
					responsive ? 'md:hidden lg:block' : '',
					color === 'white' ? 'text-white' : 'text-black'
				)}>
				FAITH CHAPEL
				<br /> A.M.E Church
			</h3>
		</Link>
	);
}

export default Logo;
