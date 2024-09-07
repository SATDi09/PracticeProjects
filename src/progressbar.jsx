import { useState } from "react";

function ProgressBar() {
  const [progress,setProgress] = useState(0);

  function handleClick (){
    let interval;
    interval = setInterval(()=>{
      setProgress(prev=>{
        if(prev<100){
          return prev + 10
        }
      })
    },1000)
  }

  return (
    <div className="App">
      <div className="ProgressWrapper">
        <div className="ProgressBar">
          <div style={{width:`${progress}%`,height:'100%',background:'green'}} className="Progress">
            <span>{progress}%</span>
          </div>
        </div>
      <button onClick={()=>handleClick()}>Start</button>
      </div>
    </div>
  );
}

export default ProgressBar;
