import { useEffect, useRef, useState } from "react";

const AnimationBox = () => {
  const [list, setList] = useState(
    Array.from({ length: 3 }, () => new Array(3).fill(false))
  );
  const queue = useRef([]);
  const handleClick = (ri, ci, f) => {
    if (list[ri][ci] && f) return;
    setList((prev) => {
      const abc = prev.map((row) => [...row]);
      abc[ri][ci] = f;
      if (f) {
        queue.current.push([ri, ci]);
      }
      return abc;
    });
  };
  useEffect(() => {
    if (queue.current.length === 9) {
      queue.current.forEach(([ri, ci], i) => {
        setTimeout(() => {
          handleClick(ri, ci, false);
        }, 1000 * (i + 1));
      });
      queue.current = [];
    }
  }, [list]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        width: "16rem",
        gap: "5px",
      }}
    >
      {list.map((item, ri) => {
        return item.map((item1, ci) => {
          return (
            <div
              onClick={() => handleClick(ri, ci, true)}
              key={`${ri}-${ci}`}
              style={
                item1
                  ? {
                      border: "1px solid black",
                      width: "5rem",
                      height: "5rem",
                      backgroundColor: "blueviolet",
                    }
                  : { border: "1px solid black", width: "5rem", height: "5rem" }
              }
            ></div>
          );
        });
      })}
    </div>
  );
};
export default AnimationBox;
