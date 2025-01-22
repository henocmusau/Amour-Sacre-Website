'use client'
import React, { ReactNode } from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue } from '../ui/select'
import { Control } from 'react-hook-form'
import { TFieldForm, TFormControl } from '@/types/form'

type Props = {
    label: string
    name: TFieldForm
    control?: TFormControl
    children: ReactNode
    defaultValue?: string
    placeholder?: string
}

export default function SelectWrapper({ label, control, name, children, defaultValue, placeholder }: Props) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={placeholder ?? label} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectGroup>
                                {children}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
