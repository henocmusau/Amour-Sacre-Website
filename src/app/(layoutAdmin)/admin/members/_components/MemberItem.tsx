import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "motion/react"
import { CATEGORIES } from '@/utils/constants'


import {
    Cloud,
    CreditCard,
    EllipsisVertical,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


type Props = {
    member: TMember
}
export default function MemberItem({ member }: Props) {
    const memberCategory = CATEGORIES.find(category => category.id.toString() == member.category.toString())

    return (
        <motion.li layout layoutId={member.id.toString()} className='bg-secondary/10 hover:bg-secondary/30 duration-200 shadow dark:shadow-inner p-4 rounded-3xl flex gap-4'>
            <Link href={`/admin/members/${member.firstName}-${member.lastName}-${member.id}`} className=''>
                <Avatar className='h-16 w-16'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{member.firstName.charAt(0).toUpperCase() + member.lastName.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
            </Link>

            <div className='flex flex-col h-full w-full'>
                <Link href={`/admin/members/${member.firstName}-${member.lastName}-${member.id}`} className='flex gap-4 justify-between'>
                    <p className='capitalize font-semibold hover:text-indigo-800 duration-300 flex-1'>
                        {member.firstName + ' ' + member.lastName}
                        <br /> <span className='capitalize text-sm text-indigo-600'>{member.job}</span>
                    </p>
                    <MenuAction />
                </Link>
                <p className='capitalize mt-4 text-sm text-slate-400 flex-1 flex items-end'>{'Member ' + memberCategory?.label}</p>
            </div>
        </motion.li>
    )
}


export function MenuAction() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className='px-0 hover:bg-inherit text-indigo-800 duration-200'>
                    <EllipsisVertical />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator /> */}
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CreditCard />
                        <span>Billing</span>
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings />
                        <span>Settings</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Keyboard />
                        <span>Keyboard shortcuts</span>
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Users />
                        <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <UserPlus />
                            <span>Invite users</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    <Mail />
                                    <span>Email</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <MessageSquare />
                                    <span>Message</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <PlusCircle />
                                    <span>More...</span>
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        <Plus />
                        <span>New Team</span>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
