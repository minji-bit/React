import React from 'react';
import Ex03_Button from './components/Ex03_Button';
// 이미지 import 하기
import mail from "./assets/mail.png";
import location from "./assets/location.png";
import search from "./assets/search.png";
import './Ex03_ButtonTest.css';

const Ex03_ButtonTest = () => {
    return (
        <div className="divButton">
        <Ex03_Button text={"메일"}   img={mail}/>
        <Ex03_Button text={"위치"}   img={location}/>
        <Ex03_Button text={"검색"}   img={search}/>
        <img src="emotion2.png" alt=""/>
        {/* <img src="./assets/emotion3.png" alt=""/> */}
        </div>
    );
};

export default Ex03_ButtonTest;