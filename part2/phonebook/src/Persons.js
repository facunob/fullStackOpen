import React from 'react';
import PhoneService from './PhoneService';

const Person = ({ person, handleDelete }) => {
    
    return (
        <>
            <p>{person.name}: {person.phone}</p> 
            <button onClick={() => handleDelete(person.id)}>DELETE</button>
        </>
    );
}


const Persons = ({persons, filterValue, setPersons}) => {
    const handleDelete = id => {
        PhoneService
            .deleteOne(id)
            .then(res => setPersons(persons.filter(x => x.id !== id)));
    }

    
    return (
        <>
            {
                filterValue !== '' ? 
                 persons.filter(x => x.name.includes(filterValue)).map(person => <Person handleDelete={handleDelete} key={`${person.name}/${person.phone}`} person={person} />) :
                 persons.map(person => <Person key={`${person.name}/${person.phone}`} handleDelete={handleDelete} person={person} />)
            }
        </>
    );
}

export default Persons;