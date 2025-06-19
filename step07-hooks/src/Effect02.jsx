import React, { useState } from 'react';
import Timer from './Timer';

const Effect02 = () => {
    const [showTimer,setShowTimer] = useState(false);

    return (
        <div>
            <h3>Effect - 자원 정리하기</h3>
            {showTimer && <Timer/>}
            <button onClick={()=>setShowTimer(!showTimer)}>Toggle btn</button>
        </div>
    );
};

export default Effect02;