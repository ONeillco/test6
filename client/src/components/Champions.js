import React, { useState, useContext } from 'react'
import { Route, useParams } from "react-router-dom"
import { UserContext } from './context/user'
import ChampionForm from './ChampionForm'


const Champions = () => {
  const {champions, loggedIn, deleteChampion} = useContext(UserContext)
  const [formFlag, setFormFlag] = useState(false)
  const params = useParams()

  const addChampionFlag = () => {
    setFormFlag(false)
  }

  const handleDelete = (id) => {
    const champ = champions.find( d => d.id !== id)
    deleteChampion(champ)
  }


  if (loggedIn) {
    const championsList = champions.map(c => <ul>Name: {c.name} <br />Origin: {c.origin} <br /> Category: {c.category} <button onClick={ () => handleDelete( c.id )}>delete</button> </ul>)
    // const deleteOneChampion = champions.filter(d => d.id !== id)
    
    return (
      <div>
        <h3>Champions</h3>
        <br />
        {championsList} 
        <br />
        {formFlag ? <ChampionForm addChampionFlag={addChampionFlag}/> :
         <button onClick={() => setFormFlag(true)}>Add Champion</button> }
        
      </div>
    )
  }
 else {
    return (
      <h3>Access Denied - Please Signup or Login</h3>
    )
  }
}

export default Champions