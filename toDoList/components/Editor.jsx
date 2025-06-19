import React from 'react';
import TodoItem from './TodoItem';
import { useState } from 'react';

import './Editor.css';

const Editor = () => {
    const [content, setContent] =useState("");
    return (
        <div className='Editor'>
            <input type='text' placeholder='새로운 todo' value={content} onChange={(e)=>setContent(e.target.value)}/>
            <button>추가</button>
        </div>
    );
};

export default Editor;