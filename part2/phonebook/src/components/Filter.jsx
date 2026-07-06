import Name from './Name'

const Filter = ({ searchTerm, handleFilterChange, contactsToShow }) => {
   return (
      <>
         Filter shown with <input value={searchTerm} onChange={handleFilterChange}/>
         {searchTerm && (
            <div>
               <h3>Search Results</h3>
               {contactsToShow.length === 0 ? (
                  <p>No contacts match your search</p>
               ) : (
                  contactsToShow.map((contact) => (
                     <Name key={`search-${contact.id}`} name={contact} />
                  ))
               )}
            </div>
         )}
      </>
   )
}

export default Filter