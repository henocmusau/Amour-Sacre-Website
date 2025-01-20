'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
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
                    <Button asChild className="w-16 h-16 rounded-full absolute right-8 bottom-8 md:right-16 md:bottom-16">
                        <Plus className="w-12 h-12" />
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Selectionner une action</DialogTitle>
                    </DialogHeader>
                    <div className="w-full flex flex-col gap-2 mt-8">
                        {/* <Button onClick={() => setOpenMember(true)} variant='secondary' className="w-full">Nouveau membre</Button> */}
                        <MemberDialog
                            closeMainModal={closeMainDialog}
                            open={openMember}
                            onOpenChange={setOpenMember}
                        />
                    </div>
                    {/* <DialogFooter>
                    <Button type="submit">Save changes</Button>
                    </DialogFooter> */}
                </DialogContent>
            </Dialog>
        </>
    )
}
