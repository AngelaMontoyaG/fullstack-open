import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = (props) => {
   const [contacts, setContacts] = useState(props.contacts) 
   const [newName, setNewName] = useState('')
   const [newNumber, setNewNumber] = useState('')
   const [searchTerm, setSearchTerm] = useState('')

   const addContact = (event) => {
      event.preventDefault()

      const contactExists = contacts.some(
         (contact) => contact.name.toLowerCase() === newName.toLowerCase()
      )

      if (contactExists) {
         alert(`${newName} is already added to phonebook`)
         return 
      }

      const contactObject = {
         name: newName,
         number: newNumber,
         id: String(contacts.length + 1),
      }

      setContacts(contacts.concat(contactObject))
      setNewName('')
      setNewNumber('')
   }

   const handleNameChange = (event) => {
      setNewName(event.target.value)
   }

   const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
   }

   const handleFilterChange = (event) => {
      setSearchTerm(event.target.value)
   }

   const contactsToShow = contacts.filter(contact => 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
   )

   return (
      <>
         <h1>Phonebook</h1>
         <Filter 
            searchTerm={searchTerm} 
            handleFilterChange={handleFilterChange} 
            contactsToShow={contactsToShow} 
         />
         <br />
         <hr />
         
         <h1>Add a new</h1>
         <PersonForm 
            addContact={addContact}
            newName={newName}
            handleNameChange={handleNameChange}
            newNumber={newNumber}
            handleNumberChange={handleNumberChange}
         />
         
         <h1>Numbers</h1>
         <Persons contacts={contacts} />
      </>
   )
}

export default App