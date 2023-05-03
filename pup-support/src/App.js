import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import OurTeam from './pages/OurTeam';
import Videos from './pages/Videos';
import AboutUs from './pages/AboutUs';
import Podcast from './pages/Podcast';
import PodcastDetails from './pages/PodcastDetails';
import Donations from './pages/Donations';


// import Merch from './pages/Merch';
// import Donation from './pages/Donation';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/about' element={<AboutUs/>} /> 
        <Route path='/our-team' element={<OurTeam/>} />
        <Route path='/donation' element={<Donations/>} />

        {/* Resources related routes */}
        <Route path='/resources' element={<Resources/>} />
        <Route path='/videos' element={<Videos/>} />
        <Route path='/podcast' element={<Podcast/>} />
        <Route path='/PodcastDetails' element={<PodcastDetails/>} />

        <Route path='/' exact element={<Home/>} />

        {/* <Route path='/merch' element={<Merch/>} />

        <Route path='donation' element={<Donation/>} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
