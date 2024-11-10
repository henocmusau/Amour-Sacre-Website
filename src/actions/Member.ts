'use server'

import { Member } from '@/models/relations'

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