import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const ChampionForm = ({addChampionFlag}) => {
  const [name, setName] = useState("")
  const [origin, setOrigin] = useState("")
  const [category, setCategory] = useState("")
  const { addChampion, editChampion } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addChampion({
      name: name,
      origin: origin,
      category: category
    })
    
    editChampion({
      name: name,
      origin: origin,
      category: category
    })
    addChampionFlag()
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   addChampion({
  //     name: name,
  //     origin: origin,
  //     category: category
  //   })
  //   addChampionFlag()
  // }

  return (
       <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        /> <br/>
        <label>Origin</label>
        <input
        type="text"
        id="origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        /> <br/>
        <label>Category </label>
        <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        /> <br/>
        <input type="submit"/>
     </form>
    </div>
  )
}

export default ChampionForm