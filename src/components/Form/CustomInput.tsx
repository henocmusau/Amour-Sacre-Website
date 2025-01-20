
import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export default function CustomInput(props: IInputProps) {
    const { name, type, label, placeholder } = props

    return (
        <div className='mt-4 '>
            <Label htmlFor={name}>{label}</Label>
            <Input
                type={type ?? "text"}
                placeholder={placeholder ?? label}
                name={name}
                id={name}
                // className="w-full p-3 border rounded mb-4"
                {...props}
            />
        </div>
    )
}
