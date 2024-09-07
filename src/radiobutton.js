import { useState } from "react"

const days=['Mon','Tues','Wed']
const games=['Cricket','Volleyball','Football']
const RadioButton = () => {
    const [game,setGame] =useState('')
    const [day,setDay] =useState('')

    return <>
        <h3>Selected game is {game} on day {day}</h3>
        <div>
        <h5>Select Game</h5>
        {games.map((item,i)=><div>
        <label htmlFor={item} key={i}>{item}</label>
        <input checked={item === game} value={item} key={i} type="radio" onChange={(e)=>setGame(e.target.value)}/>
        </div>)}
        </div>

        <div>
        <h5>Select Day</h5>
        {days.map((item,i)=><div>
        <label htmlFor={item} key={i}>{item}</label>
        <input checked={item===day} value={item} key={i} type="radio" onChange={(e)=>setDay(e.target.value)}/>
        </div>)}
        </div>
    </>
}
export default RadioButton