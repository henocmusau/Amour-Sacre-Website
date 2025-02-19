'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CATEGORIES } from '@/utils/constants'
import { Search } from 'lucide-react'
import React from 'react'

type Props = {
    query: string | null,
    selectedCategory: string | null,
    handleCategoryChange: (category?: keyof typeof CATEGORIES) => void,
    handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function MembersFilters(props: Props) {
    const { query, selectedCategory, handleCategoryChange, handleQueryChange } = props

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-x-8'>
            <div className='relative w-full my-8 flex items-center'>
                <Input
                    type='text'
                    className="w-full pl-10"
                    name='filterText'
                    value={query ?? ''}
                    placeholder="Entrez le nom du membre que vous recherchez ici..."
                    onChange={handleQueryChange}
                    autoComplete='off'
                />
                <Search className='absolute left-2 text-2xl text-secondary' />
            </div>
            <ul className='flex gap-2 overflow-x-auto'>
                <Button variant={selectedCategory == '' ? 'default' : 'outline'} onClick={() => handleCategoryChange()} asChild>
                    <li>Tous</li>
                </Button>
                {CATEGORIES.map(c => <Button
                    key={c.id}
                    variant={selectedCategory == c.id.toString() ? 'default' : 'outline'}
                    asChild
                    onClick={() => handleCategoryChange(c.id)}>
                    <li>{c.label}</li>
                </Button>)}
            </ul>
        </div>
    )
}
