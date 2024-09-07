import { useState } from "react";

const Checkboxdelete = () =>{
    const [list,setList] = useState(['Play Cricket','Play Hockey','Play Football'].map(item=>{return{item:item,checked:false}}))
    function handleChange(e,i){
        const abc= [...list]
        abc[i].checked=e.target.value
        setList(abc)
    }
    console.log(list)
    return<>
    <div>
        {list.map((item,i)=><div key={i}>
        <input checked={item.checked} onChange={(e)=>handleChange(e,i)} type="checkbox"/>
        {item.item}
        {item.checked && <button onClick={()=>{
            const abc= [...list]
            abc.splice(i,1)
            setList(abc)
        }}>Delete</button>}
        </div>)}
    </div>
    </>
}
export default Checkboxdelete;