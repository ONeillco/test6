import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'


const EditChampion = () => {
  const [name, setName] = useState("")
  const [origin, setOrigin] = useState("")
  const [category, setCategory] = useState("")
  const { editChampion } = useContext(UserContext)
  const [champion, setChampion] = useState(null)
  
  

  const handleSubmit = (e) => {
    e.preventDefault()
    editChampion({
      champion: champion
      // name: name,
      // origin: origin,
      // category: category,
    })
  }

  return (
       <div>
         <h3>Edit Your Champion</h3>
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

export default EditChampion


// import React, { useState, useContext, useEffect } from 'react'
// import { useNavigate, useParams } from "react-router-dom"
// import { UserContext } from './context/user'


// const EditChampion = () => {
//   const { loggedIn, champions, setChampions } = useContext(UserContext)
//   const [ name, setName ] = useState("");
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(async () => {
//     const resp = await fetch(`/champions/edit`)
//     const data = await resp.json();
//     setChampions(data);
//     setName(data.name);
//   }, [])

//   const handleChange = e => {
//     setName(e.target.value)
//   }

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const headers = {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//     const body = { name: name }
//     const options = {
//       method: "PATCH",
//       headers,
//       body: JSON.stringify(body)
//     }
//     await fetch(`/champions/edit`, options)
    
//     navigate(`/championsedit`);
    
    
//   }

  

//   return (
//     <div>
//       <h1>Edit { champions.name }</h1>
//       <form onSubmit={ handleSubmit }>
//         <div>
//           <label htmlFor="name">Name: </label>
//           <input type="text" id="name" value={ name } onChange={ handleChange } autoFocus={ true } />
//         </div>
//         <br />
//         <input type="submit" value="Update champion" />
//       </form>
//     </div>
//   )
// }


// export default EditChampion
