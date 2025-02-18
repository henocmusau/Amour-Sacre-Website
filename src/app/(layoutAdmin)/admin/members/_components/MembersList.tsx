'use client'
// import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
// import MemberRow from './MemberRow'
import MemberItem from './MemberItem'

type Props = {
    members: TMembersList
}

export default function MembersList(props: Props) {
    const { members } = props
    return (
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {
                members.map((member) => (
                    <MemberItem key={member.id} member={member} />
                ))
            }
        </ul>
    )
}




// export default function MembersList(props: Props) {
//     const { members } = props
//     return (
//         <Table className='mt-8'>
//             <TableHeader className='font-semibold'>
//                 <TableRow>
//                     <TableCell>Nom complet</TableCell>
//                     <TableCell className='text-center'>Catégorie</TableCell>
//                 </TableRow>
//             </TableHeader>
//             <TableBody>
//                 {
//                     members.map((member) => (
//                         <MemberRow key={member.id} member={member} />
//                     ))
//                 }
//             </TableBody>
//         </Table>
//     )
// }