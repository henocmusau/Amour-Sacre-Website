import React from 'react'
type Props = {
    title: string
}

export default function FormStepTitle({ title }: Props) {
    return (
        <h2 className="text-xl font-bold mb-4">{title}</h2>
    )
}
