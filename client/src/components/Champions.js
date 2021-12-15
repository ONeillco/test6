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

  if (loggedIn) {
    const championsList = champions.map(c => <li>{c.name}<button onClick={deleteChampion}>Delete</button></li>)
    
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