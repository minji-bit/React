import React, { useRef, useState } from 'react';

const Ref02 = () => {
    console.log("Ref02 component call.....");

    const [count, setCount] = useState(0); //값이 변경되면 re-rendering
    const countRef = useRef(0); //값이 변경되어도 리랜더링되지 않는다.
    return (
        <div>
            <h3> Ref 와 state  비교 </h3>
            <p>state : {count} 
            <button onClick={()=>setCount(count+1)}>stateUp</button>
            </p>

            <p>ref : {countRef.current}
            <button onClick={()=>countRef.current = countRef.current +1}>refUp</button>
            </p>
        </div>
    );
};

export default Ref02;