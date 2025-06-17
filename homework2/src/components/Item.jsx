import React from 'react';

import '../Item.css';

const Item = ({imgName,text,price}) => {
    return (
        <div className='box'>
            <img src={imgName} alt=""/>
            <h5>{text}</h5>
            <span>{price}</span>
            
        </div>
    );
};

export default Item;