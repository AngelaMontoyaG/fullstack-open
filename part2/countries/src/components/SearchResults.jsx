import Weather from './Weather'

const SearchResults = ({ search, filteredCountries, handleShowCountry, Button }) => {
   if (search === '') return null
   
   // Condition 1: Too many matches
   if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>
   }
   
   // Condition 2: Exactly one match (Detailed view)
   if (filteredCountries.length === 1) {
      const country = filteredCountries[0]

      const capitalCity = country.capital ? country.capital[0] : ''
      return (
         <div>
         <h2>{country.name.common}</h2>
         <p>capital {capitalCity || 'N/A'}</p>
         <p>area {country.area}</p>
         
         <h3>languages:</h3>
         <ul>
            {/* Convert languages object values into an array to map them safely */}
            {Object.values(country.languages || {}).map(lang => (
               <li key={lang}>{lang}</li>
            ))}
         </ul>
         
         <img 
            src={country.flags.png} 
            alt={`Flag of ${country.name.common}`} 
            style={{ width: '150px', marginTop: '10px' }} 
         />

         {capitalCity && <Weather city={capitalCity} />}
         </div>
      )
   }

   // Condition 3: Between 2 and 10 matches (List view)
   return (
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
         {filteredCountries.map(country => (
         <li key={country.cca3}>
            {country.name.common}{' '}
            <Button handleClick={() => handleShowCountry(country)} text="show" />
         </li>
         ))}
      </ul>
   )
}

export default SearchResults