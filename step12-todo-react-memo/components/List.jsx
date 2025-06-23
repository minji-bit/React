import React from 'react';
import { useState } from 'react';
import TodoItem from './TodoItem';
import './List.css';
import { useMemo } from 'react';

const List = ({todos,onUpdate,onDelete}) => {
    const [search,setSearch] = useState("");

    const getFilterData =()=>{
        if(search==="") return todos;
       return todos.filter(todo => todo.content.toLowerCase().includes(search.toLowerCase()));
        
    }
    const filterTodos = getFilterData(); // List 컴포넌트가 리랜더링 될때마다 호출됨.(search state 변경될 때...)
    
    //연산작업하기
   /* const getAnalyzedData = ()=>{
        console.log("getAnalyzedData call...");
        const totalCount = todos.length;
        const doneCount = todos.filter(todo=>(todo.isDone)).length;
        const notDoneCount = totalCount-doneCount;

        return {totalCount,doneCount,notDoneCount};
    }

    const {totalCount,doneCount,notDoneCount} =getAnalyzedData(); //구조분해할당!
*/
/////////////////////////////////////
//위 getAnalyzedData 코드를 useMemo를 이용해보자.
    const {totalCount,doneCount,notDoneCount} =useMemo(()=>{
        console.log("useMemo call...");
        const totalCount = todos.length;
        const doneCount = todos.filter(todo=>(todo.isDone)).length;
        const notDoneCount = totalCount-doneCount;

        return {totalCount,doneCount,notDoneCount};
    } , [todos]);

    return (
        <div className='List'>
            <h4>Todo List😄</h4>
            <div>
                <div>total : {totalCount} </div>
                <div>doneCount : {doneCount}</div>
                <div>notDoneCount : {notDoneCount}</div>
            </div>

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