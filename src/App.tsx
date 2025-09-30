import Header from './components/Header';
import Hero from './components/Hero';
import VideoGallery from './components/VideoGallery';
import DailyLife from './components/DailyLife';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <VideoGallery />
      <DailyLife />
      <AboutMe />
      
      <Footer />
    </div>
  );
}

export default App;