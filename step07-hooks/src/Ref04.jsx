import React, { useEffect, useRef, useState } from 'react';

const Ref04 = () => {
    const [count , setCount] = useState(0);
    const countRef = useRef(0);
    
    useEffect(()=>{
      console.log("useEffect  call..");

    //   setCount(count+1);//state변경은 useEffect안에서 하면 무한루프돈다. 

      countRef.current =  countRef.current + 1; //ref로 변경
      
    });

    return (
        <div>
            <h3>리 랜더링 횟수 Test</h3>
            <p>count : {count}  / countRef.current = {countRef.current} </p>
            <button onClick={()=> setCount(count+1)}> Up</button>
        </div>
    );
};

export default Ref04;