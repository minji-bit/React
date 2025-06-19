import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const Ref01 = () => {
    console.log("Ref01 컴포넌트  cal...");
    const inputRef = useRef(); //초기값이 없으면 보통, Dom 요소 접근 
    const [no, setNo] = useState(0);

    //inputRef.current.focus(); //커서놓기 - XX

   //마운트 , update 될때 
  /* useEffect(()=>{
     console.log("useEffect 랜더링....");
     console.log(inputRef );
     console.log(inputRef.current );

     inputRef.current.focus(); //커서놓기
   });*/

   //마운트 될때만 하고 싶다.
    useEffect(()=>{
        console.log("useEffect 랜더링....");
        console.log(inputRef.current );

        inputRef.current.focus(); //커서놓기
    },[]);

   const login =()=>{
    setNo(no+1);// state의 값이 변경되고  화면을 다시 랜더링한다.
     alert(`${inputRef.current.value}님 로그인 중입니다`);
     inputRef.current.value="";
     inputRef.current.focus();
     
   }

    return (
        <div>
            no: {no} <br/>
            <input type="text" ref={inputRef}/>
            <button onClick={login}>로그인하기 </button>
        </div>
    );
};

export default Ref01;