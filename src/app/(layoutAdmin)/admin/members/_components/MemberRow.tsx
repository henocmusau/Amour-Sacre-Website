'use client'
import React from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'

type Props = {
    member: TMember
}
export default function MemberRow(props: Props) {
    const { member } = props
    return (
        <TableRow>
            <TableCell className='uppercase w-full'>
                <Link href={`/admin/members/${member.firstName}-${member.lastName}-${member.id}`} className='w-full'>
                    {member.firstName + ' ' + member.lastName + ' ' + member?.middleName}
                </Link>
            </TableCell>
            <TableCell className='text-center'>{member.category}</TableCell>
        </TableRow>
    )
}
