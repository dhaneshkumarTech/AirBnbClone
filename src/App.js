import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main-component'>
        <div>
          <Filter
            logo="/images/design.png"
            name="Design"
          />
          <Filter
            logo="/images/island.png"
            name="Island"
          />
          <Filter
            logo="/images/sharedhome.png"
            name="Home"
          />
          <Filter
            logo="/images/artic.png"
            name="Artic"
          />
          <Filter
            logo="/images/windmall.png"
            name="Wind"
          />
          <Filter
            logo="/images/palace.png"
            name="Palace"
          />
          <Filter
            logo="/images/design.png"
            name="Design"
          />
          <Filter
            logo="/images/island.png"
            name="Island"
          />
          <Filter
            logo="/images/design.png"
            name="Design"
          />
          <Filter
            logo="/images/island.png"
            name="Island"
          />
          <Filter
            logo="/images/artic.png"
            name="Artic"
          />
          <Filter
            logo="/images/windmall.png"
            name="Wind"
          />
          <Filter
            logo="/images/palace.png"
            name="Palace"
          />
        </div>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>

    </div>
  );
}

export default App;