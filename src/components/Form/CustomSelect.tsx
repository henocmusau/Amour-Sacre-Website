import React, { ReactNode } from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Select, SelectContent, SelectTrigger, SelectValue } from '../ui/select'
import { Control } from 'react-hook-form'

type Props = {
    type?: string
    label: string
    name: "lastName" | "category" | "middleName" | "firstName" | "gender"
    control: Control<{
        lastName: string;
        category: string;
        gender: string;
        middleName: string;
        firstName: string;
    }> | undefined
    children: ReactNode
    defaultValue?: string
}

export default function CustomSelect({ label, control, name, children, defaultValue }: Props) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={defaultValue}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder='Choisir une catégorie' />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {children}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
