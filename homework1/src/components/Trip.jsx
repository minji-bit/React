import React from 'react';

import hawaii from "../assets/Hawaii.jpg";



const Trip = () => {
     console.log(hawaii);
    return (
        <>
            
            <img className="imgStyle" src={hawaii} alt=""/>
        </>

    );
};

export default Trip;