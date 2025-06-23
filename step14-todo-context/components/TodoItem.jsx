import React, { memo } from 'react';

import './TodoItem.css';
import { useContext } from 'react';
import { TodoContext } from '../src/App';

const TodoItem = ({id, isDone, content, date}) => {
    const { onUpdate, onDelete} = useContext(TodoContext);

    console.log("TodoItem call...");
    const onChangeCheckbox=()=>{
        //수정하기(checkbox 상태변경)
        onUpdate(id);

    }
    return (
        <div className='TodoItem'>
            <input type='checkbox'checked={isDone} onChange={onChangeCheckbox}/>
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleString()}</div>
            <button onClick={()=>{onDelete(id)}}>삭제</button>
            
        </div>
    );
};

export default memo(TodoItem);
