import './App.scss';

import AppHeader from './components/sections/Header';
import Hero from './components/sections/Hero';
import Offers from './components/sections/Offers';
import Info from './components/sections/Info';

function App() {
  return (
    <div className="main-application">
      <AppHeader />
      <Hero />
      <Offers />
      <Info />
    </div>
  );
}

export default App;
