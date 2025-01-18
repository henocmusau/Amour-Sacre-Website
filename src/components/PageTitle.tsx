import React, { ReactNode } from 'react'

type Props = {
    title: string
    newBtn?: ReactNode
    description?: string
}

export default function PageTitle({ title, description, newBtn }: Props) {
    return (
        <div className='flex justify-between'>
            <div>
                <h1 className="text-3xl font-bold">{title}</h1>

                {!description ? null : <p className="text-muted-foreground">
                    {description}
                </p>}
            </div>
            {newBtn ? newBtn : null}
        </div>
    )
}
