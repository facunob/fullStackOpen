import React,{useState} from 'react';
import PhoneService from './PhoneService';

const PersonForm = ({setPersons, persons, handleMessage}) => {
    const [newName, setNewName] = useState({name: '', phone: ''});

    const handleSubmit = e => {
        e.preventDefault();
        if(persons.some(x => x.name === newName)) {
          alert(`Name: ${newName} is already added`);
        } else {
          PhoneService
            .create(newName)
            .then(res => {
                setPersons(persons.concat(res.data));
                handleMessage({ value: "Created", class: "success" });
            });
            setNewName({name: '', phone: ''});
        }
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div>
            name: <input type="text" value={newName.name} onChange={e => setNewName({...newName, name: e.target.value})} />
            phone: <input type="text" value={newName.phone} onChange={e => setNewName({...newName, phone: e.target.value})} />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    );
}

export default PersonForm;