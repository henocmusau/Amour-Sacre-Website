'use client'
// import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table'
import React, { Suspense } from 'react'
// import MemberRow from './MemberRow'
import MemberItem from './MemberItem'
import useMembersFilter from '@/hooks/useMembersFilter'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CATEGORIES } from '@/utils/constants'
import MembersFilters from './MembersFilters'

type Props = {
    members: TMembersList
}

export default function MembersList(props: Props) {
    const { members } = props
    const { query, selectedCategory, handleCategoryChange, handleQueryChange, filteredMembers } = useMembersFilter(members)

    return (
        <>
            <Suspense fallback={<div>Search Suspense</div>}>
                <MembersFilters
                    query={query}
                    selectedCategory={selectedCategory}
                    handleCategoryChange={handleCategoryChange}
                    handleQueryChange={handleQueryChange}
                />
            </Suspense>

            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    filteredMembers.map((member) => (
                        <MemberItem key={member.id} member={member} />
                    ))
                }
            </ul>
        </>
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