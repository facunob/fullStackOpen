import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import Persons from './Persons';
import PersonForm from './PersonForm';
import Message from './Message';
import PhoneService from './PhoneService';


function App() {
  const [persons, setPersons] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [message, setMessage] = useState(undefined);

  useEffect(() => {
    PhoneService
      .getAll()
      .then(res => setPersons(res.data));
  }, []);


  const handleMessage = (message) => {
    setMessage(message);
    setTimeout(setMessage(undefined), 10000);
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={filterValue} onChange={setFilterValue} />

      {message && <Message message={message} /> }

      <PersonForm setPersons={setPersons} persons={persons} handleMessage={handleMessage} />
      
      <h2>Numbers</h2>
      
      <Persons persons={persons} setPersons={setPersons} filterValue={filterValue} />
    
    </div>
  )
}

export default App;
