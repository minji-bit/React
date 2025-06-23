

import { useReducer, useRef } from 'react';
import Editor from '../components/Editor'
import Header from '../components/Header'
import List from '../components/List'

import './App.css';

const reducer =(todos,action)=>{
  console.log(todos,action);
  switch(action.type){
    case "CREATE" : return [action.data,...todos];
    case "UPDATE" : return todos.map(todo=> todo.id===action.targetId? {...todo, isDone:!todo.isDone }:todo);
    case "DELETE" : return todos.filter(todo=>todo.id!==action.targetId);
    default :  return todos;
  }
}


function App() {
  const mockData=[
    {id:0, isDone:false , content:"React study", date: new Date().getTime()},
    {id:1, isDone:false , content:"친구만나기", date: new Date().getTime()},
    {id:2, isDone:false , content:"낮잠자기", date: new Date().getTime()}
  ];
  const idRef = useRef(3);
  
    // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer,mockData);
    //추가하기
    const onCreate=(content)=>{
      dispatch({
        type:"CREATE" ,
        data: {id:idRef.current++, isDone:false , content, date: new Date().getTime()}
      });
  
    }

    //수정하기
    const onUpdate=(targetId)=>{
      dispatch({
        type:"UPDATE" ,
        targetId
      });
      

    }

    //삭제하기
    const onDelete=(targetId)=>{
      dispatch({
        type:"DELETE" ,
        targetId
      });

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
