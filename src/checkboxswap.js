import { useState } from "react";

const CheckBoxSwap = () => {
    const [list1, setList1] = useState([
        {title:'Abc',checked:false},
        {title:'Def',checked:false},
        {title:'Ghi',checked:false}
    ])
    const [list2, setList2] = useState([
        {title:'123',checked:false},
        {title:'456',checked:false},
        {title:'789',checked:false}
    ])
    function handleCheck (i){
        const dummyList1 =[...list1];
        dummyList1[i].checked = !dummyList1[i].checked
        setList1(dummyList1)
    }
    function handleSwap (i){
        const dummyList1 =[...list1];
        const dummyList2 =[...list2];
        dummyList1.forEach((item,i)=>{
            if(item.checked===true){
                const temp = dummyList1[i].title;
                dummyList1[i].title = dummyList2[i].title
                dummyList2[i].title =  temp
            }
            dummyList1[i].checked=false
        })
        setList1(dummyList1)
        setList2(dummyList2)
    }

    return<>
        <h3>List1</h3>
        <ul>
        {list1.map((item,i)=>{
            return <li key={i}>
                <input type="checkbox" checked={item.checked} onClick={()=>handleCheck(i)}></input>
                {item.title}
            </li>
        })}
        </ul>
        <h3>List2</h3>
        <ul>
        {list2.map((item,i)=>{
            return <li key={i}>
                {item.title}
            </li>
        })}
        </ul>
        <button onClick={()=>handleSwap()}>Swap</button>
    </>
}
export default CheckBoxSwap;