'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface Props {
    label: string;
    link: string;
    textVisible?: boolean
}

export default function NavLink({ label, link, textVisible }: Props) {
    const path = usePathname()
    const isActive = path === link

    const style = 'md:w-full duration-300 overflow-x-hidden'

    const textStyle = isActive ? style + ' text-slate-100' : style

    return (
        <Link
            href={link}
            className={'navLink group '}
        >
            {/* <Icon className={`md:pr-2 h-6 w-6 md:h-8 md:w-8 group-hover:text-third duration-300 ${isActive ? 'text-slate-100 group-hover:text-slate-100 duration-300 ' : ''}`} /> */}
            <span className={textStyle + (textVisible ? ' w-full pl-2 md:pl-0 duration-300 ' : ' duration-300  w-0')}>{label}</span>
        </Link>
    )
}
