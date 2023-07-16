import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import OurTeam from './pages/OurTeam';
import Videos from './pages/Videos';
import AboutUs from './pages/AboutUs';
import Podcasts from './pages/Podcasts';
import PodcastDetails from './pages/PodcastDetails';
import Donations from './pages/Donations';
import DonationsComplete from './pages/DonationComplete';
import Merch from './pages/Merch';
import MentalHealthResourceDepression from './pages/MentalHealthResourceDepression';
import MentalHealthResourceLoneliness from './pages/MentalHealthResourceLoneliness';
import MentalHealthResourceTherapy from './pages/MentalHealthResourceTherapy';
import ResourcesMenu from './pages/ResourcesMenu';

function App() {
  return (
    <BrowserRouter basename="/PupSupport-Coding">
      <Header />
      <Routes>
        <Route path='/' exact element={<Home/>} />

        <Route path='/about' element={<AboutUs/>} /> 
        <Route path='/our-team' element={<OurTeam/>} />

        <Route path='/donation' element={<Donations/>} />
        <Route path='/donation-complete' element={<DonationsComplete/>}></Route>
        <Route path='/merch' element={<Merch/>} />

        {/* Resources related routes */}
        <Route path='/resources' element={<Resources/>} />
        <Route path='/ResourcesMenu' element={<ResourcesMenu/>} />
        <Route path='/videos' element={<Videos/>} />
        <Route path='/podcast' element={<Podcasts/>} />
        <Route path='/PodcastDetails' element={<PodcastDetails/>} />
        <Route path='/mental-health-resource-depression' element={<MentalHealthResourceDepression/>} />
        <Route path='/mental-health-resource-loneliness' element={<MentalHealthResourceLoneliness/>} />
        <Route path='/mental-health-resource-therapy' element={<MentalHealthResourceTherapy/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
