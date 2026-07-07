import { useState, useEffect } from 'react'
import countryService from './services/countries'
import SearchResults from './components/SearchResults'


const Button = ({ handleClick, text }) => {
   return (
      <button onClick={handleClick}>
         {text}
      </button>
   )
}

const App = (props) => {
   const [searchTerm, setSearchTerm] = useState('')
   const [countries, setCountries] = useState([])
   const [filteredCountries, setFilteredCountries] = useState([])


   /* Process: Initial Data Fetching*/
   useEffect(() => {
      countryService
         .getAll()
         .then(initialCountries => {
         setCountries(initialCountries)
         })
         .catch(error => {
         console.error('Error loading countries:', error)
         })
      }, [])

   // Synchronous filtering handler: Updates the search input state 
   // and recalculates matching countries simultaneously using the fresh 'query' value
   const handleSearchChange = (event) => {
      const query = event.target.value
      setSearchTerm(query)
      const matches = countries.filter(country =>
         country.name.common.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredCountries(matches)
   }

   // Interaction handler: Forces the list of filtered countries to contain 
   // just the selected country, triggering the single-country detailed view
   const handleShowCountry = (country) => {
      setFilteredCountries([country])
   }

   
   
   return (
      <>
         <div>
         Find countries <input value={searchTerm} onChange={handleSearchChange} />
         </div>
         
         <SearchResults 
            searchTerm={searchTerm}
            filteredCountries={filteredCountries}
            handleShowCountry={handleShowCountry}
            Button={Button}
         />
      </>
   )
}

export default App