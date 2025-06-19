import React, { useMemo, useState } from 'react';

const Memo01 = () => {

    const [list,setList] =useState([1,2,3,4,5,6,7,8,9,10]);
    const [str,setStr] = useState("합계");

    // list 의 값을 모두 더한다.
    /*const getAddResult = ()=>{
        console.log("getAddResult call...");
        let sum=0;
        list.forEach((no)=>{sum+=no});
        return sum;
    }*/

    /////////////////////////////////////////////////
    //useMemo를 이용해서 합계를 계산하자.
   const memoization= useMemo(()=>{
         console.log("useMemo call...");
        let sum=0;
        list.forEach((no)=>{sum+=no});
        return sum;
    },[list]);

    return (
        <div>
            <h3>useMemo 사용하기</h3>
            {list.map((no,idx)=>
                <h6 key={idx}>{no}</h6>
            )} 

            {/* <h3>{str}: {getAddResult()}</h3> */}
            <h3>{str}: {memoization}</h3>
            <button onClick={()=>setList([...list,10])}>추가</button>
            <button onClick={()=>setStr("총합")}>text변경</button>
        </div>
    );
};

export default Memo01;