import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Resources from './pages/Resources';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/resources' component={Resources} />
        {/* <Route path='/about' component={About} />
        <Route path='/merch' component={Merch} />
        <Route path='donation' component={Donation} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
