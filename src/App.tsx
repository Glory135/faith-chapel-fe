import { HashRouter, Route, Routes } from 'react-router';
import './App.css';
import ScrollToTop from './components/ScrollTotop';
import ScrollToHashElement from './components/ScrollToHash';
import TopBar from './components/TopBar';
import HomePage from './pages/HomePage';
import FooterSection from './components/Footer';
import AboutPage from './pages/AboutPage';
import MinistriesPage from './pages/MinistriesPage';
import { EventsPage } from './pages/EventsPAge';
import { ContactPage } from './pages/ContactPage';

function App() {
	return (
		<main className='w-full min-h-screen h-auto flex flex-col items-center'>
			<HashRouter>
				<ScrollToHashElement />
				<ScrollToTop />
				<TopBar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/ministries' element={<MinistriesPage />} />
					<Route path='/events' element={<EventsPage />} />
					<Route path='/contact' element={<ContactPage />} />
				</Routes>
				<FooterSection />
			</HashRouter>
		</main>
	);
}

export default App;
