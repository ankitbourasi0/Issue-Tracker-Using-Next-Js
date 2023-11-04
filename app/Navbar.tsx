"use client"
import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

import {AiFillBug} from "react-icons/ai"
const Navbar = () => {
  const currentPath = usePathname()
  const links = [

    {
      linkName: "Dashboard",
      href: "/dashboard",
    },
    {
      linkName: "Issues",
      href: "/issues/",
    },
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href={"/"}><AiFillBug /></Link>

      <ul className='flex space-x-6 font-semibold'>
      {links.map(item =>

<Link href={item.href} key={item.href} className={classNames({
  "text-zinc-900": item.href === currentPath,
  "text-zinc-500": item.href !== currentPath,
  "hover:text-zinc-800 transition-colors ": true
})}>
  {item.linkName}
</Link>
)}
      </ul>
      
    </nav>
  )
}

export default Navbar