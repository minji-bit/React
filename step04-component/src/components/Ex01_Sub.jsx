import React from 'react';
let name = "minji";
let num = 100;

const Ex01_Sub = () => { //컴포넌트
    return (
        <>
          sub 입니다. <br/> 
          num : {num} <br/> 
          name : {name} <br/> 
        </>
    );
};

export default Ex01_Sub;
export {name, num};