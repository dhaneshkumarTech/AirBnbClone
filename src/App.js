import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Filter from './components/Filter';
import filterData from './Data/filterData';
import cardData from './Data/cardData';


function App() {
  const filters = filterData.map(filters => <Filter {...filters} />)

  const cards = cardData.map(card => <Card{...card} />)

  return (
    <div className="App">
      <Navbar />
      <div className='filter-div'>
        {filters}
      </div>
      <div className='main-component'>

        <div>
          {cards}
        </div>

      </div>
    </div>
  );
}

export default App;