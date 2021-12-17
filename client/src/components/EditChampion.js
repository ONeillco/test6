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
      // champion: champion,
      name: name,
      origin: origin,
      category: category,
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
        <input type="submit" value="Update Author"/>
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
//     debugger
//     const resp = await fetch(`/champions/${champion.id}`)
//     const data = await resp.json();
//     console.log(data)
//         setChampions( data )
//         setName( data.name )
//         setOrigin( data.origin )
//         setCategory( data.category )
//   }, [])
  
  
//   const editChampion = async e => {
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
//     await fetch(`/champions`, options)

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


// useEffect(async () => {
//   debugger
//   const resp = await fetch(`/champions/${champion.id}`)
//   const data = await resp.json();
//   console.log(data)
//       setChampions( data )
//       setName( data.name )
//       setOrigin( data.origin )
//       setCategory( data.category )
// }, [])


// const editChampion = async e => {
//   e.preventDefault();
//   const headers = {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   }
//   const body = { name: name }
//   const options = {
//     method: "PATCH",
//     headers,
//     body: JSON.stringify(body)
//   }
//   await fetch(`/champions`, options)
  
  // history.push(`/authors/${ id }`);
  
  
// }


 // const editChampion = (champion) => {
  //   debugger
  //   fetch(`/champions/${champion.id}`, {
  //     method: 'PATCH',
  //     headers: { 'Content-Type': 'application/json'},
  //     body: JSON.stringify(),
  //     name :name,
  //     origin :origin,
  //     category :category,
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     // setChampions( data )
  //     setName( data.name )
  //     setOrigin( data.origin )
  //     setCategory( data.category )
  //   })
  // }