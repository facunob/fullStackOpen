import axios from 'axios';
import {useState} from 'react';
import SearchContries from './SearchContries';

function App() {
  const [countries, setContries] = useState([]);

  const onSearch = (value) => {
    axios
    .get(`https://restcountries.com/v3.1/name/${value}`)
    .then(res => setContries(res.data));
  }

  console.log(countries);

  return (
    <div>
     <SearchContries onSearch={onSearch} />
     {countries.length === 0 && <p>No countries found</p>}
     {countries.length === 1 && (
            <div>
              <p>name: {countries[0].name.common}</p>
              <p>capital: {countries[0].capital[0]}</p>
              <p>population: {countries[0].population}</p>
              <img src={countries[0].flag.jpg} alt="flag" />
            </div>
          )
     }
     {countries.length > 10 ? <>Too many matches!</> : countries.map(countrie => <p key={countrie.name.common}>{countrie.name.common}</p>)}
    </div>
  );
}

export default App;
