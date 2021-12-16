import React from 'react'

const EditChampion = () => {
  const [ name, setName ] = useState("");
  const [ champions, setChampions ] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadChampion = async () => {
      const resp = await fetch(`/champions/${id}`)
      const data = await resp.json();
      setChampions(data);
      setName(data.name);
    }
    loadChampion();
  }, [id])

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const body = { name: name }
    const options = {
      method: "PATCH",
      headers,
      body: JSON.stringify(body)
    }
    await fetch(`/champions/${ id }`, options)
    
    navigate(`/champions/${ id }`);
    
    // redirect
  }

  if(loading){ return <h1>Loading...</h1>};

  return (
    <div>
      <h1>Edit { champions.name }</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={ name } onChange={ handleChange } autoFocus={ true } />
        </div>
        <br />
        <input type="submit" value="Update champion" />
      </form>
    </div>
  )
}


export default EditChampion
