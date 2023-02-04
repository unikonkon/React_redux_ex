import { createSlice, current} from '@reduxjs/toolkit'

//ค่าเริ่มต้น สร้าง [ ]
const initialState = {
    food: []
}

//createSlice รับ พามิตเตอร์หลักๆ 3 ตัว 1.ชื่อของStone 2.ค่าเริ่มต้น 3.reducers เอาไว้จัดการ State
const nameSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        // ใน reducers รับ state มา และกำหนด action ให้
        //addfood action ในการเพิ่มข้อมูล
        addfood: (state, action) => {
            state.food = action.payload
            //current การเข้า state ใน redux
            // console.log(current(state))
        }
    }
})

// export addfood ออกไป ให้ nameSlice.actions
export const { addfood } = nameSlice.actions
export default nameSlice.reducer