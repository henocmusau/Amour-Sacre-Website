'use client'
import { CATEGORIES } from '@/utils/constants'
import React, { ChangeEvent, useCallback, useState } from 'react'

export default function useMembersFilter(members: TMember[]) {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [query, setQuery] = useState('')

    function handleQueryChange(e: ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value)
    }

    function handleCategoryChange(category?: keyof typeof CATEGORIES) {
        if (!category) return setSelectedCategory('')
        setSelectedCategory(category.toString())
    }

    const filteredMembers = members?.filter((member) => {
        const memberFullname = member?.firstName.toLowerCase() + ' ' + member.lastName.toLowerCase()
        const memberId = member?.id.toString()

        if (selectedCategory == '') {
            return memberFullname.includes(query.toLowerCase())
                || memberId.toLowerCase().includes(query.toLowerCase())
        }
        return memberFullname.includes(query.toLowerCase()) && member?.category == selectedCategory
            || memberId.toLowerCase().includes(query.toLowerCase()) && member?.category == selectedCategory
    })

    return { query, selectedCategory, handleQueryChange, handleCategoryChange, filteredMembers }
}
