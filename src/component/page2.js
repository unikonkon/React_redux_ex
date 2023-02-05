// import React from 'react'
// import { useSelector } from 'react-redux'
// export default function page2() {
//      //name มาจาก store ที่ไปดึงมา
//   const {name} = useSelector((state) => state.name)
//   console.log(name);
//   return (
//     <div>page2</div>
//   )
// }

import React from 'react'
import { useSelector } from 'react-redux'

const Page2 = () => {
  const { name } = useSelector((state) => state.name)
  console.log(name)

  return (
    <div>page2</div>
  )
}

export default Page2
