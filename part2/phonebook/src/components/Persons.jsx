import Name from './Name'

const Persons = ({ contacts }) => {
   return (
      <>
         {contacts.map((contact) => (
            <Name key={contact.id} name={contact} />
         ))}
      </>
   )
}

export default Persons