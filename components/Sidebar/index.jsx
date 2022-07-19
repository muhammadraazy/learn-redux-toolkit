import React from 'react'
import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="p-4 h-screen bg-slate-800">
        <header className="h-40 flex flex-col justify-between">
            <h2 className="text-2xl w-full text-white font-semibold"> @Redux-Toolkit </h2>
            <nav>
               <ul className='text-white'>
                   <Link href="/rtk-basic" passHref>
                      <li className="cursor-pointer">RTK Basic</li> 
                   </Link>
                   <Link href="/rtk-query" passHref>
                      <li className="cursor-pointer">RTK Query</li> 
                   </Link>
                   <Link  href="/rtk-async" passHref>
                      <li className="cursor-pointer">RTK Async</li> 
                   </Link>
               </ul>
            </nav>
        </header>
    </div>
  )
}

export default Sidebar