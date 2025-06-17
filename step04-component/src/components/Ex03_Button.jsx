import React from 'react';

import './Ex03_Button.css';

const Ex03_Button = ({text , img}) => {

    return (
        <div className='divBtn'>
          <img src={img} />
          <button>{text}</button>
       </div>
    );
 };

export default Ex03_Button;
 