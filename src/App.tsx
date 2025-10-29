import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import ScrollToTop from './components/ScrollTotop';
import ScrollToHashElement from './components/ScrollToHash';
import TopBar from './components/TopBar';
import HomePage from './pages/HomePage';
import FooterSection from './components/Footer';
import AboutPage from './pages/AboutPage';
import MinistriesPage from './pages/MinistriesPage';

function App() {
	return (
		<main className='w-full min-h-screen h-auto flex flex-col items-center'>
			<BrowserRouter>
				<ScrollToHashElement />
				<ScrollToTop />
				<TopBar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/ministries' element={<MinistriesPage />} />
				</Routes>
				<FooterSection />
			</BrowserRouter>
		</main>
	);
}

export default App;
