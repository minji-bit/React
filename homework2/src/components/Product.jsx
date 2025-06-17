import React from 'react';
import Item from './Item';

import 수박1 from '../assets/수박1.jpg';
import 수박2 from '../assets/수박2.png';
import 수박3 from '../assets/수박3.jpg';
import 수박4 from '../assets/수박4.jpg';


import '../Product.css';

const Product = () => {
    return (
        <div id="product">
            <h3>오늘의 상품</h3>
            <p>새로운 상품을 만나보세요</p>
            <Item imgName={수박1} text="당도선별 11brix" price="25,000원"/>
            <Item imgName={수박2} text="국내산 프리미엄" price="35,000원"/>
            <Item imgName={수박3} text="13brix 100%국내산" price="28,000원"/>
            <Item imgName={수박4} text="고당도 참박수박" price="20,000원"/>
        </div>
    );
};

export default Product;