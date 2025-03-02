import './App.scss';

import AppHeader from './components/sections/Header';
import Hero from './components/sections/Hero';
import Offers from './components/sections/Offers';
import Info from './components/sections/Info';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="application">
      <AppHeader />
      <Hero />
      <Offers />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
