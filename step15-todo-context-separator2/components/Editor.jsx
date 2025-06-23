import React, { useEffect, useRef } from 'react';

import { useState } from 'react';

import './Editor.css';
import { useContext } from 'react';
import {  TodoDispatchContext } from '../src/App';

const Editor = () => {
    const [content, setContent] =useState("");
    const contentRef = useRef();
    
    const {onCreate} = useContext(TodoDispatchContext);

    //mount 될 때 커서 놓기
    useEffect(()=>{
        contentRef.current.focus();
    },[])
    

    //추가하기 기능
    const onSubmit=()=>{
        if(content===""){
            console.log(111);
            contentRef.current.focus();
            return;
        }
        //부모쪽(App.jsx)에 있는 onCreate함수를 호출한다.
        onCreate(content);
        setContent("");
        contentRef.current.focus();
    }
    //키보드를 눌럿을 때 enter 이면 onSubmit 호출!!
    const onKeyDown=(e)=>{
        if(e.keyCode===13)
            onSubmit();
    }

    return (
        <div className='Editor'>
            <input type='text' placeholder='새로운 todo' value={content} 
            onChange={(e)=>setContent(e.target.value)} ref={contentRef} onKeyDown={onKeyDown}/>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;