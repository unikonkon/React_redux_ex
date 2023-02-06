import React,{useState,useEffect} from 'react'
//useDispatch เอาไว้อัพเดตค่า redux Stone 
// useSelector เอาไว้เข้าถึงค่าใน redux Stone  
import { useDispatch, useSelector } from 'react-redux'
import { addfood } from '../store/reducer'

import axios from "axios";


function Home() {

  const dispatch = useDispatch();

  // const APIKey = "aafcf985";
  // axios.create({
  //   baseURL: "https://www.omdbapi.com/"
  // });
  const [search, setSearch] = useState("");
  useEffect(() => {
    UsersGet()
  },[search])
  

  const UsersGet = () => {
    // event.preventDefault();
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
      const searchKey = search ? search : "batman";
      const resp = await  axios.create({
        baseURL: "https://www.omdbapi.com/"
      }).get(`?apikey=aafcf985&s=${searchKey}&type=movie`)
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
      <div className="text-5xl py-5">
      movies
      </div>
      
      <div className="">
        <div className="flex w-full justify-center">
        <div className="pt-1 pr-3 text-xl">Name : </div>
        <div className="">
          <input
           onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="price"
          id="price"
          className=" h-10 rounded-md bg-slate-700  border-gray-500 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Search..."
        />
      </div>
        </div>
       
         
         { data && data.map((data) =>(
          <div key={data.imdbID} >
            <div className="grid justify-items-center py-5 ">
              <div className="rounded-full">
              <img src={data.Poster} alt="" className="rounded-lg w-32" />
              </div>
              <div className="">
            {data.Title}
            </div>
            <div className="">
            Year : {data.Year}
            </div>
           
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home