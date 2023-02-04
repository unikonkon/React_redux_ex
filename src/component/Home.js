import React,{useState,useEffect} from 'react'
//useDispatch เอาไว้อัพเดตค่า redux Stone 
// useSelector เอาไว้เข้าถึงค่าใน redux Stone  
import { useDispatch, useSelector } from 'react-redux'
import { addfood } from '../store/reducer'



export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    UsersGet()
  }, [])
  

  const UsersGet = () => {
    //ดึงapi
    fetch("https://www.melivecode.com/api/users")
    .then(res => res.json())
    .then(
      (result) => {
        //ใช้ dispatch เพื่อsetค่า ให้ addfood ที่รับค่ามาจาก result
      dispatch(addfood(result));
      },
    
      (error) => {
        console.log(error);
      }
    )
  }
  //name มาจาก store ที่ไปดึงมา
  const {data} = useSelector((state) => state.data)
  console.log(data);
  return (
    <div>
      HomeHomeHome
      <div className="">
         { data && data.map((data) =>(
          <div>
             {data.fname}
          </div>
        ))}
      </div>
    </div>
  )
}
