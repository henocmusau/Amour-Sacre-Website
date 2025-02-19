import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "motion/react"
import { CATEGORIES } from '@/utils/constants'

type Props = {
    member: TMember
}
export default function MemberItem({ member }: Props) {
    const memberCategory = CATEGORIES.find(category => category.id.toString() == member.category.toString())

    return (
        <motion.li layout layoutId={member.id.toString()} className='bg-secondary/10 hover:bg-secondary/30 duration-200 shadow-md dark:shadow-inner p-4 rounded-3xl flex gap-4'>
            <Link href={`/admin/members/${member.firstName}-${member.lastName}-${member.id}`} className=''>
                <Avatar className='h-16 w-16'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{member.firstName.charAt(0).toUpperCase() + member.lastName.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
            </Link>
            <div className='flex flex-col h-full'>
                <Link href={`/admin/members/${member.firstName}-${member.lastName}-${member.id}`} className='flex gap-4'>
                    <p className='capitalize text-lg font-semibold hover:text-indigo-800 duration-300'>{member.firstName + ' ' + member.lastName}</p>
                </Link>
                <p className='capitalize text-sm text-indigo-600'>{member.job}</p>
                <p className='capitalize mt-4 text-base flex-1 flex items-end'>{'Member ' + memberCategory?.label}</p>
            </div>
        </motion.li>
    )
}
