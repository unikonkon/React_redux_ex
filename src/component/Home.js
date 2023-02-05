import React,{useState,useEffect} from 'react'
//useDispatch เอาไว้อัพเดตค่า redux Stone 
// useSelector เอาไว้เข้าถึงค่าใน redux Stone  
import { useDispatch, useSelector } from 'react-redux'
import { addfood } from '../store/reducer'

import axios from "axios";


function Home() {

  const dispatch = useDispatch();

  const APIKey = "aafcf985";
  // axios.create({
  //   baseURL: "https://www.omdbapi.com/"
  // });

  useEffect(() => {
    UsersGet()
  }, [])
  

  const UsersGet = () => {
    // //ดึงapi
    // fetch("https://www.melivecode.com/api/users")
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     //ใช้ dispatch เพื่อsetค่า ให้ addfood ที่รับค่ามาจาก result
    //   dispatch(addfood(result));
    //   },
    
    //   (error) => {
    //     console.log(error);
    //   }
    // )

    const fetchMovies = async () => {
      // const searchKey = search ? search : "Thor";
      const resp = await  axios.create({
        baseURL: "https://www.omdbapi.com/"
      }).get(`?apikey=aafcf985&s=batman&type=movie`)
                                 .catch((error) => {
                                      console.log(error)
                                 })
      setTimeout(() => {
          dispatch(addfood(resp.data.Search))
      }, 500)
  }   
  
  fetchMovies();
  }
  //name มาจาก store ที่ไปดึงมา
  const { data } = useSelector((state) => state.data);
  console.log(data);

  return (
    <div>
      HomeHomeHome
      <div className="">
         { data && data.map((data) =>(
          <div key={data.imdbID}>
            <div>
            <img src={data.Poster} alt=""/>
            {data.Title}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home