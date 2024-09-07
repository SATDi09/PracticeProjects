import { useEffect, useState } from "react"

const Apipagechange = () => {
    const [page, setPage] = useState([])
    const [id, setId] = useState(1)
    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData () {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json();
        setPage(data)
    }
    function handleClick () {
        fetchData()
    }
    function handleChange (e) {
        setId(e.target.value)
    }

    return <>
        <input onChange={(e)=>handleChange(e)} value={id} title="Input" type="text" placeholder="Enter the ID"/>
        <button onClick={()=>handleClick()}>Submit</button>
        <div>{page.body}</div>
    </>
}

export default Apipagechange