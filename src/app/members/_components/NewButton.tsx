'use client'

import { CreateNewMember } from "@/actions/Member"
import FormInput from "@/components/Form/FormInput"
import { AlertDialog, AlertDialogHeader, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogFooter, AlertDialogCancel } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function NewMember() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button onClick={() => { }}>Nouveau</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Enregistrer nouveau membre</AlertDialogTitle>
                </AlertDialogHeader>
                <form action={CreateNewMember} className="w-full">
                    <FormInput name="lastName" label="Nom" />
                    <FormInput name="middleName" label="Post-nom" />
                    <FormInput name="firstName" label="Prénom" />
                    <AlertDialogFooter>
                        <Button type="submit">Enregistrer</Button>
                        <AlertDialogCancel asChild>
                            <Button variant='outline'>Fermer</Button>
                        </AlertDialogCancel>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    )
}