const Contact = ({ contact, deleteContact }) => {
   return (
      <li className="list-contacts">
         {contact.name} {contact.number} {' '}
         <button onClick={deleteContact}>delete</button>
      </li>
   )
}

export default Contact