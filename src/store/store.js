import { configureStore } from "@reduxjs/toolkit"
import nameSlice from './reducer'

//configureStore การตั้งค่าให้กับ Store เพียงครั้งเดียว
export default configureStore({
    //กำหนดให้กับ reducer
    reducer: {
        data: nameSlice
    }
})