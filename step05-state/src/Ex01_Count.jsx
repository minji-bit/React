import React, { useState } from 'react';

import './Ex01_Count.css';
let i=0; //useState 를 써서 컴포넌트가 리랜더링 되면서 같이 그려지는 것 뿐이고 useState를 안 썼으면 변화가 실시간으로 보이지 않는다.
const Ex01_Count = () => {
    // let i=0;
    const [no,setNo]=useState(0);
    const minusFn =()=>{
        i--;
        setNo(no-1);
        console.log(i);
    }
    const plusFn =()=>{
        i++;
        setNo(no+1);
        console.log(i);
    }


    return (
        <div className='Ex01_Count'>
            <button onClick={minusFn}>빼기</button>
            <span>i={i} / {no}</span>
            <button onClick={plusFn}>더하기</button>
        </div>
    );
};

export default Ex01_Count;