import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  // WE CAN USE THE BELOW INLINE FUNCTION BECAUSE , REACT RE-RENDERS 
  // THE WHOLE COMPONENT WHEN ANY STATE VALUE CHANGES : CHEERS :)
  const filteredPersons = persons.filter((person)=>
    person.name.toLowerCase().includes(filterValue.toLowerCase())      
  )
  
  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilterValue(event.target.value)
  }
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }
  const resetValues = () => {
    setPersons([
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
  }

  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }
    if(persons.some(element => element.name === newPerson.name)){
      alert(`${newPerson.name} is already present `)
    }
    else{
    setPersons(persons.concat(newPerson))
  
    setNewName('')
    setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>Filter Values by : <input value={filterValue}
                              onChange={handleFilterChange} /></div>
      <div></div>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}/>
        </div>
        <div>
          number: <input
                    value={newNumber}
                    onChange={handleNumberChange}/>

        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {filteredPersons.map(person =>
            <li key={person.id}>{person.name} : {person.number}</li>
          )}
        </ul>
      </div>
      <div>
        <button onClick={resetValues}>Reset Values</button>
      </div>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App