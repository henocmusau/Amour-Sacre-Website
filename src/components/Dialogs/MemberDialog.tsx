'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Users } from "lucide-react"
import { NewMember } from "./NewMember"
import { Dispatch, SetStateAction } from "react"
import { FormField } from "../ui/form"
import MultiStepCarousel from "../NewMemberForm"

interface Props {
    open: boolean
    onOpenChange: Dispatch<SetStateAction<boolean>>
}

export function MemberDialog(props: Props) {
    const { onOpenChange, open } = props

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button variant='secondary' className="w-full flex justify-start">
                    <Users className="w-28 h-28" />Membre
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] w-full box-border">
                <DialogTitle className="sr-only">New member carousel</DialogTitle>
                <MultiStepCarousel />
            </DialogContent>
        </Dialog>
    )
}
