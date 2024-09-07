import { useState } from "react";
const Block = ({item,handleClick,index}) => {
  return <span style={{ width: '30px', height: '30px', display: 'inline-block', textAlign: 'center', lineHeight: '30px', border: '1px solid black', cursor: 'pointer' }} onClick={()=>handleClick(index)} className="block">{item}</span>;
};

const Tictactoe = () => {
  const [turn, setTurn] = useState(false);
  const [items, setItems] = useState(Array(9).fill(null));
  const [win, setWin] = useState(null);
  function winner (){
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ] 
    for(let i=0;i<arr.length;i++){
        const [a,b,c] =arr[i];
        console.log(a,b,c,'a,b,c')
        if(items[a]!==null&& items[a]===items[b] && items[a]===items[c]){
            
            return items[a]
        }
    }
    return null
  }
  function onClick (index) {
    if (items[index] || win) return; 
    const dummy=[...items]
    dummy[index] = turn ?'X':'O'
    
    setItems(dummy)
    const checkWinner = winner()
    if(checkWinner) {setWin(checkWinner)}
    else{setTurn(!turn)}
  }
  return (
    <div style={{ width: '200px', height: '200px', margin: '20px auto' }}>
        {win?<h2>Winner is {win}</h2>:<></>}
      <div className="row">
        <Block handleClick={onClick} index={0} item={items[0]}/>
        <Block  handleClick={onClick} index={1} item={items[1]}/>
        <Block  handleClick={onClick} index={2} item={items[2]}/>
      </div>
      <div className="row">
        <Block handleClick={onClick} index={3} item={items[3]}/>
        <Block handleClick={onClick} index={4} item={items[4]}/>
        <Block handleClick={onClick} index={5} item={items[5]}/>
      </div>
      <div className="row">
        <Block handleClick={onClick} index={6} item={items[6]}/>
        <Block handleClick={onClick} index={7} item={items[7]}/>
        <Block handleClick={onClick} index={8} item={items[8]}/>
      </div>
    </div>
  );
};
export default Tictactoe;
