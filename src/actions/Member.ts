'use server'

import { Member } from '@/models/relations'
import { revalidatePath } from 'next/cache'

export async function getAllMembers() {
    try {
        const data = await Member.findAll({
            order: [['createdAt', 'DESC']],
            // include: {
            //     model: classModel,
            //     attributes: ['id', 'label']
            // },
        })
        // console.log(JSON.stringify(data))

        return JSON.parse(JSON.stringify(data))

    } catch (error: any) {
        throw new Error(error.message)
    }
}

export async function CreateNewMember(formData: FormData) {
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const middleName = formData.get('middleName')

    try {
        const data = await Member.create({ firstName, lastName, middleName });
        console.log(data);
        revalidatePath('/members')
        return
    } catch (error: any) {
        throw new Error(error.message)
    }
}
