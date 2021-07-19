import React from 'react'

function PersonList({people = []}) {
  return (
    <div>

      <ul>
        {people.map((person,i) => 
          <li key={i}> {person.firstName} {person.lastName} </li>
        )}
      </ul>

      <h1>This is person list</h1>

    </div>
  )
}

export default PersonList
