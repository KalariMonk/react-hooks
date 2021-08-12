// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName = ''}) { // if undefined the default '' kicks in if missing then React throws an warning.

  const [name , setName] = React.useState(initialName)

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    event.preventDefault()
    setName(event.target.value)
  }

  //-----------Main--------------------

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value = {name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName = 'Kody'/> 
}

export default App
