'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Users } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
import MultiStepCarousel from "../NewMemberForm"

interface Props {
    open: boolean
    onOpenChange: Dispatch<SetStateAction<boolean>>
    closeMainModal: () => void
}

export function MemberDialog(props: Props) {
    const { onOpenChange, open, closeMainModal } = props

    const register = () => {
        //Execute save action, then closeMainModal
        onOpenChange(false)
        closeMainModal()
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button variant='secondary' className="w-full flex justify-start">
                    <Users className="w-28 h-28" />Enregistrer membre
                </Button>
            </DialogTrigger>
            <DialogDescription className="sr-only">Boite de dialogue d'enregistrement des membres'</DialogDescription>

            <DialogContent className="sm:max-w-[425px] w-full box-border">
                <DialogTitle className="sr-only">New member carousel</DialogTitle>
                <MultiStepCarousel action={register} />
            </DialogContent>
        </Dialog>
    )
}
