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
import BulletinPage from './pages/BulletinPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
	const queryClient = new QueryClient();
	return (
		<main className='w-full min-h-screen h-auto flex flex-col items-center'>
			<QueryClientProvider client={queryClient}>
				<HashRouter>
					<ScrollToHashElement />
					<ScrollToTop />
					<TopBar />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/about' element={<AboutPage />} />
						<Route
							path='/ministries'
							element={<MinistriesPage />}
						/>
						<Route path='/events' element={<EventsPage />} />
						<Route path='/contact' element={<ContactPage />} />
						<Route path='/bulletin' element={<BulletinPage />} />
					</Routes>
					<FooterSection />
				</HashRouter>
			</QueryClientProvider>
		</main>
	);
}

export default App;
