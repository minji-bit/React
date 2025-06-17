import React from 'react';
import Sub1, { name, num } from './components/Ex01_Sub';
import Ex01_Sub2, { Ex01_Sub3 } from './components/Ex01_Sub2';

const Ex01_Export = () => {
    return (
        <>
            <Sub1/>
            <Ex01_Sub2/>
            <Ex01_Sub3/>
            <hr/>
            num : {num} <br/>
            name : {name} <br/>
        </>
    );
};

export default Ex01_Export;