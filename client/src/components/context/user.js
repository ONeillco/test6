import React, { useState, useEffect } from "react"

const UserContext = React.createContext()

function UseProvider({ children }) {
const [user, setUser] = useState({})
const [loggedIn, setLoggedIn] = useState(false)
const [champions, setChampions] = useState([])


useEffect(() => {
  fetch('/me')
  .then(res => res.json())
  .then(data => {
    setUser(data)
    if (data.error) {
      setLoggedIn(false)
    } else {
      setLoggedIn(true)
      fetchchampions()
    }
  })
}, [])

const fetchchampions = () => {
  fetch('/champions')
  .then(res => res.json())
  .then(data => {
    console.log(data)
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

const deleteChampion = (id) => {
  fetch(`/champions/${id}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(data => {
    // setChampions([...champions, data] )
    console.log(data)
  })
}


const login = () => {
  setUser(user)
  fetchchampions()
  setLoggedIn(true)
}

const logout = () => {
  setUser({})
  setChampions([])
  setLoggedIn(false)
}

const signup = () => {
  setUser(user)
  fetchchampions()
  setLoggedIn(true)
}


  return (
    <UserContext.Provider value={{user, login, logout, signup, loggedIn, champions, addChampion, deleteChampion}}>
    { children }
  </UserContext.Provider>
  )
}

export { UserContext, UseProvider }