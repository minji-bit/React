// Redux Toolkit에서 store를 설정하는 configureStore와 slice를 생성하는 createSlice를 import 
import { configureStore, createSlice } from '@reduxjs/toolkit' 

//작은 단위의 store정의(slice)
const countSlice=createSlice({
    name : "count" ,
    initialState: {no:0},
    reducers:{
        up(state){
            console.log("count up ---")
            console.log(state);
            console.log("count end ---")
            state.no = state.no+1;
        },
        down(state){
             state.no = state.no-1;
        },
        incrementByAmount(state,action){ //첫번째는 상태정보, 두번쨰는 type과 payload
            console.log("incrementByAmount ---")
            console.log(state);
            console.log(action);
            console.log("incrementByAmount end ---")

            state.no = state.no+action.payload;
        }


    }
});
//위의 reducers 에 정의된 action을 외부에서 사용할 수 있도록 export 한다.
//사용하는 컴포넌트에서 dispatch(up()) / dispatch(incrementByAmount(5))
export const {up,down,incrementByAmount} = countSlice.actions;
/////////////Cart 정보////////////////////////////////////////////////
let cartSlice = createSlice({ 
    name : 'cart',  //type
    initialState : [ 
      {id : 1, name : '토마토', count : 2}, 
      {id : 2, name : '수박', count : 1} 
    ], 
    reducers : {  //action 을 넣는다.
        addCount(state, action){ 
           let num = state.findIndex((item)=>{ return item.id === action.payload })           
           console.log(num); 
           state[num].count++; 
        }, 
        addItem(state, action){ 
            console.log(action);
            state.push(action.payload) 
        }, 
         
        sortName(state) { 
          state.sort((a, b) =>  
            a.name > b.name ? 1 : -1, 
          ); 
       }       
    } 
  }) 
 
export let { addCount, addItem,  sortName } = cartSlice.actions
//configureStore를 사용하여 Redux 스토어를 생성한다.
//여러 slice를 reducer에 등록한다.
export default configureStore({
    reducer : {
        count : countSlice.reducer,
        cart : cartSlice.reducer
    }
})