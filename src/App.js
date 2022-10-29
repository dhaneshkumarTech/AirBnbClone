import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Filter from './components/Filter';
import filterData from './Data/filterData';
import cardData from './Data/cardData';


function App() {
  const filters = filterData.map(props =>
    <Filter
      filterLogo={props.filterLogo}
      filterName={props.filterName}
    />
  )

  const cards = cardData.map(props => 
    <Card
    img = {props.img}
    address = {props.address}
    rating = {props.rating}
    distance = {props.distance}
    date = {props.date}
    price = {props.price}
    />
    )

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