// Redux Toolkit에서 store를 설정하는 configureStore와 slice를 생성하는 createSlice를 import
import { configureStore, createSlice } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice';
/*
createSlice() : reducer + action을 한번에 생성
configureStore() : Redux store를 생성하며 여러 slice를 통합
state.count.no : 컴포넌트에서 이 값으로 상태 접근 가능
dispatch(up()) : 액션을 실행하는 방법
*/

// createSlice 함수는 Redux의 action + reducer를 하나의 객체로 간단하게 정의할 수 있게 해줌
const countSlice = createSlice({
    // slice의 이름. 이 이름은 액션 타입에 prefix로 사용됨 (예: count/up)
    name: "count",
    // 초기 상태 정의 (기본 상태 값)
    initialState: { no: 0 },
    // reducers 객체 안에 상태를 변경하는 로직과 해당 액션을 정의
    reducers: {
        // 'up' 액션: 상태의 no 값을 1 증가
        up(state) {
            state.no = state.no + 1;
        },
        // 'down' 액션: 상태의 no 값을 1 감소
        down(state) {
            state.no = state.no - 1;
        },
        // 'incrementByAmount' 액션: 전달된 payload만큼 상태의 no 값을 증가
        incrementByAmount(state, action) {
            // action.payload는 dispatch 시 전달된 값
            state.no = state.no + action.payload;
        }
    }
});

// 위 reducers에 정의된 액션 생성자(action creator)를 추출하여 export
// 나중에 dispatch(up()), dispatch(down()) 등으로 사용할 수 있음
export const { up, down, incrementByAmount } = countSlice.actions;



// configureStore를 사용하여 Redux 스토어 생성
// 여러 slice를 reducer에 등록할 수 있으며, 여기서는 count 하나만 사용
export default configureStore({
    reducer: {
        count: countSlice.reducer, // state.count로 접근 가능     
         cart : cartSlice.reducer  
    }
});
