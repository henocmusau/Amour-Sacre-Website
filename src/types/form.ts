import { Control } from "react-hook-form";

export type TFormControl = Control<{
    firstName: string;
    lastName: string;
    middleName?: string | undefined;
    gender: '1' | '2';
    cityOfBirth?: string
    dateOfBirth?: string
    adhesionDate: string
    category: '1' | '2' | '3';
    job?: string
    adress: string
    phone?: string
    email?: string
}, unknown>

export type TFieldForm = "lastName" | "firstName" | "middleName" | "gender" | "cityOfBirth"
    | "dateOfBirth" | "adhesionDate" | "category" | "job" | "adress" | "phone" | "email"