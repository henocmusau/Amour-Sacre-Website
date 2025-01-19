'use client'

import { AlertDialog, AlertDialogHeader, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogFooter, AlertDialogCancel, AlertDialogDescription } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { SelectItem } from "@/components/ui/select"
import { CATEGORIES, GENDERS } from "@/utils/constants"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import CustomInput from "@/components/Form/FormInput"
import CustomSelect from "@/components/Form/CustomSelect"

const FormSchema = z.object({
    category: z.string({ required_error: 'Veuillez sélectionner la catégorie' }),
    gender: z.string({ required_error: 'Veuillez sélectionner la catégorie' }),
    lastName: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }).trim(),
    middleName: z.string().trim(),
    firstName: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }).trim(),
})

export default function NewMember() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema)
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
        console.log('COOOOOL')
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button onClick={() => { }}>Nouveau</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Enregistrer nouveau membre</AlertDialogTitle>
                </AlertDialogHeader>

                <Form {...form}>

                    <form onSubmit={form.handleSubmit(() => console.log('EXEC'))} className="w-full">

                        <CustomInput control={form.control} name="lastName" label="Nom" />
                        <CustomInput control={form.control} name="middleName" label="Post-nom" />
                        <CustomInput control={form.control} name="firstName" label="Prénom" />

                        {/* <CustomSelect defaultValue={GENDERS[0].id.toString()} control={form.control} label="Genre" name="gender">
                            {GENDERS.map((gender) => (
                                <SelectItem
                                    value={gender.id.toString()}
                                    key={gender.id}>
                                    {gender.label}
                                </SelectItem>
                            ))}
                        </CustomSelect> */}

                        <AlertDialogFooter className="mt-4">
                            <Button type="submit">Enregistrer</Button>
                            <AlertDialogCancel asChild>
                                <Button variant='outline'>Fermer</Button>
                            </AlertDialogCancel>
                        </AlertDialogFooter>

                    </form>

                </Form>
                <AlertDialogDescription className="hidden">Formulaire d'enregistrement des membres</AlertDialogDescription>
            </AlertDialogContent>
        </AlertDialog>
    )
}