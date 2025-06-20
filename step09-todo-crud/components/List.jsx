import React from 'react';
import { useState } from 'react';
import TodoItem from './TodoItem';
import './List.css';

const List = ({todos,onUpdate,onDelete}) => {
    const [search,setSearch] = useState("");

    const getFilterData =()=>{
        if(search==="") return todos;
       return todos.filter(todo => todo.content.toLowerCase().includes(search.toLowerCase()));
        
    }
    const filterTodos = getFilterData(); // List 컴포넌트가 리랜더링 될때마다 호출됨.(search state 변경될 때...)

    return (
        <div className='List'>
            <h4>Todo List😄</h4>
            <input placeholder='검색어를 입력해주세요.' value={search} 
            onChange={(e)=>setSearch(e.target.value)}/>
            
            <div className='todos_wrapper'>
                {
                    // todos.map(todo=>(
                        filterTodos.map(todo=>(
                         <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>))
                }
            </div>


        </div>
    );
};

export default List;