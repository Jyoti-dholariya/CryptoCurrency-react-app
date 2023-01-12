import './App.css';
import{ useEffect, useState } from  'react'
import Coin from './component/Coin';
import Axios from 'axios';  

function App() {

  const[listOfCoins, setListOfCoins]= useState([]);
  const[searchWord, setSearchWord] = useState("");

useEffect(() => {
  Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((response) => {
   setListOfCoins(response.data.coins)
  });
},[]);

const filteredCoins = listOfCoins.filter((coin) => {
  return coin.name.toLowerCase().includes(searchWord.toLowerCase())
})

  return (
    <div className="App">
     
      <div className="cryptoHeader">
      <input type='text' placeholder='Bitcoin....' onChange={(e) => {
          setSearchWord(e.target.value);
        }}></input>
      </div>


      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
        return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol}/>;
      }) }
      </div>
    </div>
  );
}

export default App;

