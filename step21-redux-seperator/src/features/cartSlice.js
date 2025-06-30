import { createSlice } from '@reduxjs/toolkit';


let cartSlice = createSlice({
    name : 'cart',
    initialState : [
      {id : 1, name : '토마토', count : 2},
      {id : 2, name : '수박', count : 1}
    ],
    reducers : {
        addCount(state, action){
          console.log("---action------")
          console.log(state)
          console.log(action)
         console.log("---action end------")
           let num = state.findIndex((item)=>{ return item.id === action.payload })          
           console.log(num);
           state[num].count++;
        },
        addItem(state, action){
            state.push(action.payload)
        },
        
        sortName(state) {
          state.sort((a, b) => 
            a.name > b.name ? 1 : -1,
          );
       }      
    }
  })

export const { addCount, addItem,  sortName } = cartSlice.actions
export default cartSlice;