import React from 'react';
import Child03 from './Child03';

const Child02 = () => {
    return (
        <div style={{border:"1px green solid", padding:"10px"}}>
            <h3>Child 02입니다.</h3>
            <Child03/>
          
        </div>
    );
};

export default Child02;