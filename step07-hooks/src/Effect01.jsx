import React, { useEffect, useState } from 'react';

const Effect01 = () => {
    const [no,setNo] = useState(0);
    const [str,setStr] = useState("처음");
    //mount될 때 ,state변경 될 때 즉 update될때!!
    useEffect(()=>{
        console.log("1. useEffect --Rendering될때")
    });

    useEffect(()=>{
        console.log("2. useEffect -- 최초에 mount될때 만...")
    }, []); //[]는 최초에  딱 한번만 실행하겠다!!

     useEffect(()=>{
        console.log("3. useEffect -- no가 변경될때 만...")
    }, [no]); //[no]는 no가 변경될 때만 실행하겠다!!

    return (
        <div>
            <h3>useEffect 함수 연습</h3>
            <h4>no : {no}</h4>
            <button onClick={()=>setNo(no+1)}>클릭(no)</button>
            <hr/>
            <h4>str : {str}</h4>
            <button onClick={()=>setStr("변경됨")}>클릭(str)</button>

        </div>
    );
};

export default Effect01;