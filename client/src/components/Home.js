import React, {useContext} from 'react'
import { UserContext } from './context/user'

const Home = () => {
  const { user, loggedIn } = useContext(UserContext)

 
    if (loggedIn) {
     return (<h3>Please Login or Signup</h3>) 
        } else {
         return (
       <div>
         <h3>{user.username} Home</h3>
       </div>

      )
  }
}

export default Home
