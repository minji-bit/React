// Redux store와 연결된 React 훅 import
import { useDispatch, useSelector } from 'react-redux'

// 스타일 파일 import (선택 사항)
import './App.css'

// store에서 정의한 액션 생성자(import한 slice 액션들)
import { down, incrementByAmount, up } from './store';
import Cart from './Cart';
import Order from './Order';

function App() {
  // useSelector: Redux store에서 상태 값 가져오기
  // state.count.no → store에서 설정한 slice 이름(count)의 상태 객체 중 no 속성
  const no = useSelector((state) => state.count.no);

  // useDispatch: 액션을 디스패치(발송)하는 함수 반환
  const dispatch = useDispatch();

  // '빼기' 버튼 클릭 시 down 액션을 디스패치 (no - 1)
  const minusFn = () => {
    dispatch(down());
  };

  // '더하기' 버튼 클릭 시 up 액션을 디스패치 (no + 1)
  const plusFn = () => {
    dispatch(up());
  };

  return (
    <>
      <h1>React-Redux TEST2</h1>

      {/* 카운트 UI 영역 */}
      <div className="Count">
        {/* 버튼 클릭 시 각각 액션을 디스패치 */}
        <button onClick={minusFn}>빼기</button>

        {/* 현재 Redux store에 저장된 상태 값 표시 */}
        <span> {no} </span>

        <button onClick={plusFn}>더하기</button>
        {/* 5만큼 증가시키는 커스텀 액션 실행 */}
        <button onClick={() => dispatch(incrementByAmount(5))}>5씩 증가</button>
      </div>

      <hr/>
      <Cart/>

        <hr/>
       <Order/>

    </>
  )
}

export default App
