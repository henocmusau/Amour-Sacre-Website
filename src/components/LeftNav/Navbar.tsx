import React from 'react'
import NavLink from './Navlink'
import { navLinks } from '@/utils/constants'

export default function Navbar() {
    return (
        <nav className=' basis-1/5 border-r border-slate-800 flex flex-col p-4'>
            <h2 className='uppercase font-semibold text-3xl my-8 ml-4'>Logo</h2>

            <ul className=' divide-y divide-primary/30'>
                {
                    navLinks.map((navlink) => (
                        <li key={navlink.link}>
                            <NavLink label={navlink.label} link={navlink.link} />
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
