'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Plus } from "lucide-react"
import { MemberDialog } from "./MemberDialog"
import { useState } from "react"


export function NewDialog() {
    const [openMember, setOpenMember] = useState(false)
    const [openMainDialog, setOpenMainDialog] = useState(false)

    const closeMainDialog = () => setOpenMainDialog(false)

    return (
        <>
            <Dialog open={openMainDialog} onOpenChange={setOpenMainDialog}>
                <DialogTrigger asChild>
                    <Button asChild className="w-16 h-16 cursor-pointer rounded-full absolute right-8 bottom-8 md:right-16 md:bottom-16">
                        <Plus className="w-12 h-12" />
                    </Button>
                </DialogTrigger>
                <DialogDescription className="sr-only">Boite de dialogue de selection des actions</DialogDescription>

                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Selectionner une action</DialogTitle>
                    </DialogHeader>
                    <div className="w-full flex flex-col gap-2 mt-8">
                        <MemberDialog
                            closeMainModal={closeMainDialog}
                            open={openMember}
                            onOpenChange={setOpenMember}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
