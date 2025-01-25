'use server'

import { Category, Member } from '@/models/relations'
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

type TData = { [key: string]: string | undefined }

export async function CreateNewMember({ firstName, lastName, middleName, gender,
    cityOfBirth,
    dateOfBirth,
    adhesionDate,
    category,
    job,
    adress,
    phone,
    email }: TData) {
    // export async function CreateNewMember(formData: FormData) {
    // const firstName = formData.get('firstName')
    // const lastName = formData.get('lastName')
    // const middleName = formData.get('middleName')

    // console.log(formData)
    // return

    try {
        const data = await Member.create({ firstName, lastName, middleName, gender, category, cityOfBirth, dateOfBirth, email, phone, adress, job, adhesionDate });
        console.log(data);
        revalidatePath('/members')
        return data.dataValues
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function CreateCategory(label: string) {
    try {
        const data = await Category.create({ label });

        return console.log(data);
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export async function getAllCategories() {
    try {
        const data = await Category.findAll()
        console.log(JSON.parse(JSON.stringify(data)))

        return JSON.parse(JSON.stringify(data))
    } catch (error: any) {
        throw new Error(error.message)
    }
}