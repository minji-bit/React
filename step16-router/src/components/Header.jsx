import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const nav =useNavigate();
    const btnClick01 = ()=>{
        //이벤트처리 ex)유효성체크

        //페이지 랜더링
        // nav("/user");
        nav("/user/minji");
    }
    const btnClick02 = ()=>{
        //페이지 랜더링
        nav("/admin");
        
    }
    const btnClick03 = ()=>{
        //페이지 랜더링
        nav("/");
        
    }
    const btnClick04 = ()=>{
        nav(-1); //뒤로가기
    }


    return (
        <div style={{backgroundColor:"yellow"}}>
            여기는 Header영역입니다. <br/>
            <Link to={"/"}>HOME</Link> &nbsp; &nbsp;
            <Link to={"/user"}>User</Link> &nbsp; &nbsp;
            <Link to={"/admin"}>Admin</Link> &nbsp; &nbsp;

            <hr/>
            <a href="/">HOME</a>&nbsp; &nbsp;
            <a href="/user">User</a>&nbsp; &nbsp;
            <a href="/admin">Admin</a>&nbsp; &nbsp;
            <hr/>
            <button onClick={btnClick01}>user이동</button>
            <button onClick={btnClick02}>admin이동</button>
            <button onClick={btnClick03}>home이동</button>
            <button onClick={btnClick04}>뒤로가기</button>
        </div>
    );
};

export default Header;