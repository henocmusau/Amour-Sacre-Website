import React, { ReactNode } from 'react'

type Props = {
    title: string
    newBtn?: ReactNode
}

export default function PageTitle({ title, newBtn }: Props) {
    return (
        <div className='flex justify-between'>
            <h1 className='text-4xl'>{title}</h1>
            {newBtn ? newBtn : null}
        </div>
    )
}
