
import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { TFieldForm, TFormControl } from '@/types/form'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    control: TFormControl
    name: TFieldForm
}

export default function CustomInput(props: IInputProps) {
    const { name, type, label, placeholder, control } = props

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='mt-4 '>
                    <FormLabel htmlFor={name}>{label}</FormLabel>
                    <FormControl>
                        <Input
                            type={type ?? "text"}
                            placeholder={placeholder ?? label}
                            {...field}
                            // name={name}
                            // id={name}
                            // className="w-full p-3 border rounded mb-4"
                            {...props}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    )
}
