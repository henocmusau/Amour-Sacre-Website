
import React from 'react'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export default function CustomInput(props: IInputProps) {
    const { name, type, label } = props

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type={type ?? "text"}
                placeholder={label}
                name={name}
                id={name}
                className="w-full p-3 border border-gray-300 rounded mb-4"
                {...props}
            />
        </>
    )
}
