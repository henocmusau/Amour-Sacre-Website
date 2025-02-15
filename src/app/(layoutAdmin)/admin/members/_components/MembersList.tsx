'use client'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import MemberRow from './MemberRow'

type Props = {
    members: TMembersList
}

export default function MembersList(props: Props) {
    const { members } = props
    return (
        <Table className='mt-8'>
            <TableHeader className='font-semibold'>
                <TableRow>
                    <TableCell>Nom complet</TableCell>
                    <TableCell className='text-center'>Catégorie</TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    members.map((member) => (
                        <MemberRow key={member.id} member={member} />
                    ))
                }
            </TableBody>
        </Table>
    )
}
