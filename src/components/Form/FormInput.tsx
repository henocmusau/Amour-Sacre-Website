import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

type Props = {
    type?: string
    label: string
    name: string
}

export default function ({ type, label, name }: Props) {
    return (
        <div className='grid w-full gap-1.5 items-center my-2 last:mb-0'>
            <Label htmlFor={name}>{label}</Label>
            <Input
                type={type || 'text'}
                // placeholder={label}
                name={name}
                id={name}
            />
        </div>
    )
}
