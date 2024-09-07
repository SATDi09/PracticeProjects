import { useCallback, useState } from "react";

const SearchBar =()=>{
    const [data, setData] = useState([]);
    function debounce (fun){
        return function (...args){
            let timeout;
            if(timeout) clearTimeout(timeout)
            timeout= setTimeout(()=>{
                fun.apply(this,args)
            },500)
        }
    }
    async function handleChange(e) {
        console.log('e.target',e.target)
        const {value} = e.target
        const res = await fetch(`https://demo.dataverse.org/api/search?q=${value}`)
        const result =await res.json()
        setData(result.data.items)
    }
    console.log(data,'console.log(res)')
    const searchMethod = useCallback(()=>debounce(handleChange),[])
    return <>
    <div>
        <input onChange={searchMethod} name="search" type="text"/>
        <div>{data.length && data?.map((item,i)=>(<span key={i}>{item.description}</span>))}</div>
    </div>
    </>
}
export default SearchBar;