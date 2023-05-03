import React from 'react'

export default function Data() {
    const savedInput =JSON.parse(localStorage.getItem)
  return (
    <div>
        <p>This is the Data page</p>
        <p>{savedInput}</p>

    </div>
  )
}

