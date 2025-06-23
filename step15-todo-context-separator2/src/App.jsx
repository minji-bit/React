

import { useCallback, useReducer, useRef } from 'react';
import Editor from '../components/Editor'
import Header from '../components/Header'
import List from '../components/List'

import './App.css';
import { createContext } from 'react';


const reducer =(todos,action)=>{
  console.log(todos,action);
  switch(action.type){
    case "CREATE" : return [action.data,...todos];
    case "UPDATE" : return todos.map(todo=> todo.id===action.targetId? {...todo, isDone:!todo.isDone }:todo);
    case "DELETE" : return todos.filter(todo=>todo.id!==action.targetId);
    default :  return todos;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

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
    const onCreate=useCallback((content)=>{
      dispatch({
        type:"CREATE" ,
        data: {id:idRef.current++, isDone:false , content, date: new Date().getTime()}
      });
    } ,[]);// 딱 한번만 만들어서 동일한 것을 계속 쓴다!!!

    //수정하기
    const onUpdate=useCallback((targetId)=>{
      dispatch({
        type:"UPDATE" ,
        targetId
      });
    },[]);
    /*const onUpdate=(targetId)=>{
      dispatch({
        type:"UPDATE" ,
        targetId
      });
    };*/

    //삭제하기
    const onDelete=useCallback((targetId)=>{
      dispatch({
        type:"DELETE" ,
        targetId
      });
    },[]);
  
    // const memoizedDispatch = useMemo(()=> ({onCreate,onUpdate,onDelete}),[]);

  return (
    <div className='App'>
      
      <Header/>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{onCreate,onUpdate,onDelete}}>
          <Editor/> 
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
