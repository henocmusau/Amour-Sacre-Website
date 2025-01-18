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
import { Plus } from "lucide-react"
import { MemberDialog } from "./MemberDialog"
import { useState } from "react"

export function NewDialog() {
    const [openMember, setOpenMember] = useState(false)

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button asChild className="w-16 h-16 rounded-full absolute right-16 bottom-16">
                        <Plus className="w-12 h-12" />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Nouveau (Nouvelle) :</DialogTitle>
                        {/* <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription> */}
                    </DialogHeader>
                    <div className="w-full flex flex-col gap-2 mt-8">
                        {/* <Button onClick={() => setOpenMember(true)} variant='secondary' className="w-full">Nouveau membre</Button> */}
                        <MemberDialog open={openMember} onOpenChange={setOpenMember} />
                    </div>
                    {/* <DialogFooter>
                    <Button type="submit">Save changes</Button>
                    </DialogFooter> */}
                </DialogContent>
            </Dialog>
        </>
    )
}
