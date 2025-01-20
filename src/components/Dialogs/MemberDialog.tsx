'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Users } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
import MultiStepCarousel from "../NewMemberForm"
import { toast } from "sonner"

interface Props {
    open: boolean
    onOpenChange: Dispatch<SetStateAction<boolean>>
    closeMainModal: () => void
}

export function MemberDialog(props: Props) {
    const { onOpenChange, open, closeMainModal } = props

    const register = () => {
        //Execute save action, then closeMainModal
        // onOpenChange(false)
        // closeMainModal()

        toast.success("Membre enregistré", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
                label: "Cancel",
                onClick: () => console.log("Undo"),
            },
        })
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button variant='secondary' className="w-full flex justify-start">
                    <Users className="w-28 h-28" />Membre
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] w-full box-border">
                <DialogTitle className="sr-only">New member carousel</DialogTitle>
                <MultiStepCarousel action={register} />
            </DialogContent>
        </Dialog>
    )
}
