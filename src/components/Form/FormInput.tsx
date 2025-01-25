'use client'
import React from 'react'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Control } from 'react-hook-form'
import { Input } from '../ui/input'

type Props = {
    label: string
    name: "lastName" | "category" | "middleName" | "firstName" | "gender"
    control: Control<{
        lastName: string;
        category: string;
        gender: string;
        middleName: string;
        firstName: string;
    }> | undefined
    defaultValue?: string
}

export default function CustomInput({ label, control, name }: Props) {
    return (
        <FormField
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem className='my-2'>
                    <FormLabel>{label} </FormLabel>
                    <FormControl>
                        <Input {...field} onChange={field.onChange} defaultValue={field.value} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
