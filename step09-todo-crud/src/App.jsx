

import { useRef, useState } from 'react';
import Editor from '../components/Editor'
import Header from '../components/Header'
import List from '../components/List'

import './App.css';


function App() {
  const mockData=[
    {id:0, isDone:false , content:"React study", date: new Date().getTime()},
    {id:1, isDone:false , content:"친구만나기", date: new Date().getTime()},
    {id:2, isDone:false , content:"낮잠자기", date: new Date().getTime()}
  ];
  const idRef = useRef(3);
  
    const [todos, setTodos] = useState(mockData);

    //추가하기
    const onCreate=(content)=>{
      console.log("부모 onCreate call...",content);
      const newTodo={id:idRef.current++, isDone:false , content, date: new Date().getTime()};
      setTodos([newTodo,...todos]);
      
    }

    //수정하기
    const onUpdate=(targetId)=>{
      setTodos(todos.map(todo=> todo.id===targetId? {...todo, isDone:!todo.isDone }:todo));

    }

    //삭제하기
    const onDelete=(targetId)=>{
      setTodos(todos.filter(todo=>todo.id!==targetId));
    }
  

  return (
    <div className='App'>

      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>

    </div>
  )
}

export default App
