import React from 'react'
import QueryList from './QueryList'
import QueryProfile from './QueryProfile'

export default function Queries() {
 return (
   <div className="grid absolute top-[60px] w-[84%] mr-3 -right-[0px] grid-cols-3  gap-3">
     <div className="col-span-2 mt-3">
       <QueryList />
     </div>

     <div className="w-full flex flex-col mt-3">
       <QueryProfile />
     </div>
   </div>
 );
}
