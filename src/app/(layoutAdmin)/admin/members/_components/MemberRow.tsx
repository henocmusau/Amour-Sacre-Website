'use client'
import React from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { CATEGORIES } from '@/utils/constants'

type Props = {
    member: TMember
}
export default function MemberRow(props: Props) {
    const { member } = props

    const memberCategory = CATEGORIES.find(category => category.id.toString() == member.category.toString())
    return (
        <TableRow>
            <TableCell className='uppercase w-full'>
                <Link href={`/admin/members/${member.firstName}-${member.lastName}-${member.id}`} className='w-full'>
                    {member.firstName + ' ' + member.lastName + ' ' + member?.middleName}
                </Link>
            </TableCell>
            <TableCell className='text-center'>{memberCategory?.label}</TableCell>
        </TableRow>
    )
}
