import React, { useContext } from 'react';
import { GlobalContext } from './Context01';

const Child03 = () => {
    const {btnClick01}=useContext(GlobalContext);
    return (
        <div style={{border:"1px orange solid", padding:"10px"}}>
            <h3>Child 03입니다.</h3>
            <button onClick={btnClick01}>클릭!</button>
        </div>
    );
};

export default Child03;