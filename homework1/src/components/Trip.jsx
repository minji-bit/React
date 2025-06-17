import React from 'react';

import hawaii from "../assets/Hawaii.jpg";

import '../TripTest.css';

const Trip = () => {
     console.log(hawaii);
    return (
        <>
            
            <img className="imgStyle" src={hawaii} alt=""/>
        </>

    );
};

export default Trip;