import { useState, useEffect } from 'react'
import Filter from './components/Filter'
// import Button from './components/Button'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import db from './services/db'
import axios from 'axios'

// Every Object has an ID equivalent so that we can select this object
const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [filtered, setFilter] = useState([])
  const [counter, setCounter] = useState(5)



  const nameChange = (event) => {
    setNewName(event.target.value)
  }
  const numChange = (event) => {
    setNewNumber(event.target.value)
  }

  const delete = (event) => {
    db.delete()

  }


  // This hook basically gets the data from the URL then sets the state of Persons to that of which it fetched

    
  const hook = () => {
    console.log("effect")
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log(response)
      console.log("data from server received")
      setPersons(response.data)
    })
  }
  useEffect(hook, [])


  // RUNS FOR EVERY RENDER 
  // Careful when changing the state of this, can cause a state loop
  // Hooks into the lifecycle
  // function runs everytime there is a re render
  // useEffect(hook, [])

  // applies state to a component, in which it will

  // BUG : filtered variable saves previous filtered "history" 
  // when entering and erasing search
  // It will batch states so that it needs to finish waiting before rehandling, batched by default
  const filterPeople = (event) => {
    // State changes are asynchronous meaning that this search may not be sent the active values and the set filter will have
    // Values that are not concurrent with the event.target.value
    // This is incorrect as we're always resetting the filtered to person everytime
    // Why isn't this being updated to persons?
    const newArr = persons.filter((person) => {
      return person.name.toLowerCase().includes(search)
    })
    setFilter(newArr)

  }
  



  // Seems like it needs every part of state used
  useEffect(filterPeople, [search, persons])



  const changeSearch = (event) => {
    setSearch(event.target.value)
  }

  // const clicked = (event) => {
  //   // NEVER DO THIS, you shouldn't affect state directly
  //   filtered.push(persons[0])
  //   setFiltered(filtered)
  //   console.log(filtered)
  // }
 

  const addPerson = (event) => {
    event.preventDefault()
    const names = persons.filter((person) => {
      return person.name === newName
    })
    if (names.length > 0) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const newObj = {
        name: newName,
        number: newNumber,
        id: counter
      }
      setCounter(counter + 1)
      db.create(newObj)
      const newPersonArr = persons.concat(newObj)
      console.log(db.create(newObj))
      setPersons(newPersonArr)
    }

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} changeSearch={changeSearch} />

      <h2>Add a New Number</h2>
      <PersonForm newName={newName} newNumber={newNumber} addPerson={addPerson} nameChange={nameChange} numChange={numChange} />

      <h2>Numbers</h2>
      <Persons persons={persons} filtered={filtered} search={search} />
      {/* <Button clicked={clicked}/> */}

    </div>
  )
}

export default App


