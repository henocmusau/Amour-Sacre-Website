
type TMember = {
    id: number
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: "1" | "2";
    category: "1" | "2" | "3";
    cityOfBirth?: string;
    dateOfBirth?: string;
    email?: string;
    phone?: string;
    adress: string;
    job?: string;
    adhesionDate: string;
    updatedAt: Date
    createdAt: Date
}

type TMembersList = TMember[]