import { Link } from 'react-router';
import { cn } from '../lib/utils';

function Logo({ color }: { color: 'white' | 'black' }) {
	return (
		<Link to={'/'}>
			{/* <img src={color === "white" ? whiteLogo : blackLogo} alt="logo" className="h-16" /> */}
			<h3
				className={cn(
					'font-bold text-xl text-white text-nowrap',
					color === 'white' ? 'text-white' : 'text-black'
				)}>
				FAITH CHAPEL A.M.E
			</h3>
		</Link>
	);
}

export default Logo;
