import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const contacts = [
   {
      id: 1,
      name: 'Sean Simpson',
      number: '1510345',
   },
   {
      id: 2,
      name: 'Sylvia Bridges',
      number: '1324522',
   },
   {
      id: 3,
      name: 'Joel Zimmerman',
      number: '1456221',
   }
]

ReactDOM.createRoot(document.getElementById('root')).render(
   <App contacts={contacts} />
)