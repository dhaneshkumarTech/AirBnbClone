import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <Navbar /><div className='filter-div'>
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
      <div className='main-component'>

        <div>
          <Card
            img="/images/image-1.jpg"
            address="Hangzhou, China"
            rating="4.9"
            distance="3.2"
            date="Aug 20 - Aug 25"
            price="120"
          />
          <Card
            img="/images/image-2.jpg"
            address="Mirissa, Sri Lanka"
            rating="4.3"
            distance="2.2"
            date="Nov 28- Dec 12"
            price="320"
          />
          <Card
            img="/images/image-3.jpg"
            address="Hang Dong, Thailand"
            rating="4.3"
            distance="12"
            date="Jan 1 - Jan 8"
            price="190"
          />
          <Card
            img="/images/image-4.jpg"
            address="G-11 Plaza, Pakistan"
            rating="4.3"
            distance="12"
            date="Feb 26 - Mar 5"
            price="120"
          />
          <Card
            img="/images/image-5.jpeg"
            address="Mirissa, Sri Lanka"
            rating="4.3"
            distance="2.2"
            date="Nov 28- Dec 12"
            price="80"
          />
          <Card
            img="/images/image-6.jpg"
            address="G-11 Plaza, Pakistan"
            rating="4.3"
            distance="12"
            date="Feb 26 - Mar 5"
            price="120"
          />
          <Card
            img="/images/image-7.jpg"
            address="Hangzhou, China"
            rating="4.9"
            distance="3.2"
            date="Aug 20 - Aug 25"
            price="143"
          />
          <Card
            img="/images/image-8.jpeg"
            address="Mirissa, Sri Lanka"
            rating="4.3"
            distance="2.2"
            date="Nov 28- Dec 12"
            price="235"
          />
        </div>

      </div>

    </div>
  );
}

export default App;