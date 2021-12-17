import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const UserContext = React.createContext()

function UseProvider({ children }) {
const [user, setUser] = useState({})
const [loggedIn, setLoggedIn] = useState(false)
const [champions, setChampions] = useState([])
const navigate = useNavigate()
const [name, setName] = useState("")
  const [origin, setOrigin] = useState("")
  const [category, setCategory] = useState("")


useEffect(() => {
  fetch('/me')
  .then(res => res.json())
  .then(data => {
    setUser(data)
    if (data.error) {
      setLoggedIn(false)
    } else {
      setLoggedIn(true)
      fetchChampions()
    }
  })
}, [])

const fetchChampions = () => {
  fetch('/champions')
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    setChampions(data)
  })
}

const addChampion = (champion) => {
  fetch('/champions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(champion)
  })
  .then(res => res.json())
  .then(data => {
    setChampions([...champions, data])
  })
}


const editChampion = (champion) => {
  debugger
  fetch(`/champions/${champion.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(),
    name: name,
      origin: origin,
      category: category,
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    // setChampions([...champions, data] )
  })
}


const deleteChampion = (champion) => {
  fetch(`/champions/${champion.id}`, {
    method: 'DELETE'
  })
  .then(res => {
    // navigate('/champions')
    if(res.ok){
    } else {
      res.json().then(console.log)
    }
  })
}



const login = () => {
  setUser(user)
  fetchChampions()
  setLoggedIn(true)
}

const logout = () => {
  setUser({})
  setChampions([])
  setLoggedIn(false)
}

const signup = () => {
  setUser(user)
  fetchChampions()
  setLoggedIn(true)
}


  return (
    <UserContext.Provider value={{user, login, logout, signup, loggedIn, champions, setChampions, addChampion, deleteChampion, editChampion, fetchChampions}}>
    { children }
  </UserContext.Provider>
  )
}

export { UserContext, UseProvider }


