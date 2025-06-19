import React, { useRef, useState } from 'react';
let countLet = 0;
const Ref03 = () => {
    console.log("Ref03 component call.....");
    const countRef = useRef(0); //값이 변경되어도 리랜더링되지 않는다. 값은 유지된다.
    // let countLet = 0;  //리랜더링 시 초기화 된다!

    const [render, setRender] =useState(0);

    const letCheck = ()=>{
        countLet++;
        console.log("countLet = " + countLet);
    }

    const refCheck=()=>{
        countRef.current = countRef.current +1;
        console.log("countRef.current = " + countRef.current);
    }
    return (
        <div>
            <h3> Ref 와 let  비교 </h3>
            <p>let : {countLet} 
            <button onClick={letCheck}>letUp</button>
            </p>

            <p>ref : {countRef.current}
            <button onClick={refCheck}>refUp</button>
            </p>
            <button onClick={()=>setRender(render+1)}>리랜더링</button>
        </div>
    );
};

export default Ref03;