import React, { useContext, useRef } from 'react';
import Child02 from './Child02';
import { GlobalContext } from './Context01';

const Child01 = () => {
    const {setList,list,btnClick02}=useContext(GlobalContext);
    const id = useRef(3);
    return (
        <div style={{border:"1px blue solid", padding:"10px"}}>
            <h3>Child 01입니다.</h3>
            
            <button onClick={btnClick02}>눌러봐</button>
            <button onClick={()=>setList([...list,{id:id.current=id.current+1,name:"용용"}])}>추가</button>
            <hr/>
            <Child02/>
        </div>
    );
};

export default Child01;