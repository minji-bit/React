
import { useDispatch,useSelector } from 'react-redux'
import './App.css'
import { down, incrementByAmount, up } from './store';
import Cart from './Cart';
import Order from './Order';

function App() {
  const no = useSelector((state)=>state.count.no); //configureStore 에서 reducer 등록한 이름이 count );
  const dispatch = useDispatch();
  const minusFn = ()=>{
    dispatch(down());
  }
  const plusFn = ()=>{
    dispatch(up());
  }


  return (
    <>
      <h1>React-Redux TEST</h1> 
 
      {/* 카운트 UI 영역 */} 
      <div className="Count"> 
        {/* 버튼 클릭 시 각각 액션을 디스패치 */} 
        <button onClick={minusFn}>빼기</button> 
 
        {/* 현재 Redux store에 저장된 상태 값 표시 */} 
        <span> {no} </span> 
 
        <button onClick={plusFn}>더하기</button> 
        {/* 5만큼 증가시키는 커스텀 액션 실행 */} 
        <button onClick={()=>dispatch(incrementByAmount(5))}>5씩 증가</button> 
      </div>
      <hr/>
      <Cart/>
      <hr/>
      <Order/>
    </>
  )
}

export default App
