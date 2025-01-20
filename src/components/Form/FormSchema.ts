import { z } from "zod";

export const formSchema = z.object({
    lastName: z.string({
        required_error: 'Ce champ est obligatoire'
    })
        .min(2, { message: "Le nom doit contenir au moins deux caractères" })
        .max(50, { message: "Le nom ne peut excéder 50 lettres" })
        .trim().toLowerCase(),
    firstName: z.string({
        required_error: 'Ce champ est obligatoire'
    })
        .min(2, { message: "Le prénom doit contenir au moins deux caractères" })
        .max(50, { message: "Le prénom ne peut excéder 50 lettres" })
        .trim().toLowerCase(),
    middleName: z.optional(
        z.string()
            .min(2, { message: "Le post-nom doit contenir au moins deux caractères" })
            .max(50, { message: "Le post-nom ne peut excéder 50 lettres" })
            .trim().toLowerCase()),
    gender: z.enum(['1', '2'], { required_error: 'Vous devez sélectionner un genre' }),
    cityOfBirth: z.optional(z.string({
        required_error: 'Veuillez entrer une ville'
    })
        .min(2, { message: "Le nom de la ville doit contenir au moins deux caractères" })
        .max(50, { message: "Le nom de la ville ne peut excéder 50 lettres" })
        .trim().toLowerCase()),
    dateOfBirth: z.optional(z.string()),
    adhesionDate: z.string(),
    category: z.enum(['1', '2', '3'], { required_error: 'Vous devez sélectionner une catégorie' }),
    job: z.optional(z.string().min(3, { message: 'La profession doit contenir au moins trois caractères' }).trim().toLowerCase()),
    adress: z.string(),
    phone: z.optional(z.string()),
    email: z.optional(z.string().email('Vous devez entrer une adresse e-mail'))
})