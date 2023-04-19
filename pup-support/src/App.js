import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Resources from './pages/Resources';
import OurTeam from './pages/OurTeam';
import Videos from './pages/Videos';
import AboutUs from './pages/AboutUs';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Merch from './pages/Merch';
// import Donation from './pages/Donation';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/about' element={<AboutUs/>} /> 
        <Route path='/our-team' element={<OurTeam/>} />

        {/* Resources related routes */}
        <Route path='/resources' element={<Resources/>} />
        <Route path='/videos' element={<Videos/>} />

        <Route path='/' exact element={<Home/>} />

        {/* <Route path='/merch' element={<Merch/>} />

        <Route path='donation' element={<Donation/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
