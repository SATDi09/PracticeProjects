import { useState } from "react";

function Rating() {
  let limit = 5;
  const [rating, setRating] = useState(2)
  function handleClick (i){
    setRating(i+1)
  }

  return (
    <div className="App">
      <>{[...Array(Math.ceil(limit))].map((_,i)=>(<span style={rating>i?{color:'orange',fontSize:'25px'}:{fontSize:'25px'}}  key={i} onClick={()=>handleClick(i)}>{rating>i?"★":"☆"}</span>))}</>
    </div>
  );
}

export default Rating;

//{rating<i+1?"★":"☆"}