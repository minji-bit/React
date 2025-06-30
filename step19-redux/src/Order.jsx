import React, { useRef } from 'react'; 
import {useDispatch} from 'react-redux' 
import {addItem} from './store.js' 
const Order = () => { 
    // dispatch는  store.js 로 요청보내주는 함수 
  let dispatch = useDispatch();  //함수만 호출할거니까 useSelecotr 가 필요 없다.
  let idRef = useRef(3); 
    return ( 
        <div> 
            <h4>주문하기 페이지</h4> 
             <button  onClick={()=>{ 
                         dispatch(addItem({id : idRef.current++, name : '오렌지', count : 15})) 
                    }}>오렌지 주문하기</button> 
        </div> 
    ); 
}; 
 
export default Order; 