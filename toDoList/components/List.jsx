import React from 'react';
import { useState } from 'react';
import TodoItem from './TodoItem';
import './List.css';

const List = () => {
    const [search,setSearch] = useState("");
    return (
        <div className='List'>
            <h4>Todo List😄</h4>
            <input placeholder='검색어를 입력해주세요.' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            
            <div className='todos_wrapper'>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>


        </div>
    );
};

export default List;