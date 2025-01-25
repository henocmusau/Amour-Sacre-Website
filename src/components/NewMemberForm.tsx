'use client'
import React, { useState } from "react";

import CustomInput from "./Form/CustomInput";
import { Button } from "./ui/button";
import SelectWrapper from "./Form/CustomSelect";
import { SelectItem } from "./ui/select";
import { z } from "zod";
import { AsyncDefaultValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import { toast } from "sonner";
import { formSchema } from "./Form/FormSchema";
import { CreateNewMember } from "@/actions/Member";
import EmblaCarousel from "./Carousels/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'

interface IProps {
    action: () => unknown
}

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function MultiStepCarousel(props: IProps) {
    const { action } = props
    const [step, setStep] = useState(1);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultFormValues as any
    })

    const { handleSubmit, control } = form
    const nextStep = () => {
        if (step < 4) return setStep(step + 1);
        action()
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    async function onSubmit(data: z.infer<typeof formSchema>) {

        const member = await CreateNewMember(data)

        toast.success("Membre enregistré", {
            // description: "Sunday, December 03, 2023 at 9:00 AM",
            description: (
                // <pre className="mt-2 w-80 rounded-md p-4">
                //     <code>{JSON.stringify(data, null, 2)} </code>
                // </pre>
                <p className="">{member.id + ' - ' + member.firstName + ' ' + member.lastName}</p>
            ),
            action: {
                label: "Cancel",
                onClick: () => console.log("Undo"),
            },
        })
        console.log(JSON.stringify(member, null, 2))
    }

    return (
        // <Form {...form}>
        //     <form onSubmit={handleSubmit(onSubmit)} className="relative w-full max-w-lg mx-auto overflow-hidden rounded-lg">
        //         {/* Conteneur des étapes */}
        //         <div
        //             className={`progressBar mt-4 after:w-[${Math.ceil(step * 100 / 4)}%] `}
        //             style={{ '--progress': `${Math.ceil(step * 100 / 4)}%` } as React.CSSProperties}
        //         />
        //         <div
        //             className="flex transition-transform duration-500 ease-in-out"
        //             style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
        //         >
        //             {/* Étape 1 */}
        //             <div className="w-full flex-shrink-0 py-6">
        //                 {/* <h2 className="text-xl font-bold mb-4">Étape 1: Informations personnelles</h2> */}
        //                 <CustomInput control={control} label="Prénom" name="firstName" placeholder="Ex. John" />
        //                 <CustomInput control={control} label="Nom" name="lastName" placeholder="Ex. Doe" />
        //                 <CustomInput control={control} label="Post-nom" name="middleName" placeholder="Ex. Cooper" />
        //             </div>

        //             {/* Étape 2 */}
        //             <div className="w-full flex-shrink-0 py-6">
        //                 {/* <CustomInput label="Genre" name="gender" placeholder="Homme ou Femme" /> */}
        //                 <SelectWrapper label="Genre" control={form.control} name="gender" placeholder="Sélectionner le genre">
        //                     <SelectItem value="1">Homme</SelectItem>
        //                     <SelectItem value="2">Femme</SelectItem>
        //                 </SelectWrapper>
        //                 <CustomInput control={form.control} label="Lieu de naissance" name="cityOfBirth" placeholder="Ex. Kinshasa" />
        //                 <CustomInput control={form.control} label="Date de naissance" name="dateOfBirth" placeholder="Ex. 01/01/2001" />
        //                 {/* <h2 className="text-xl font-bold mb-4">Étape 2: Coordonnées</h2> */}
        //             </div>

        //             <div className="w-full flex-shrink-0 py-6">
        //                 <CustomInput control={form.control} label="Date d'adhésion" name="adhesionDate" placeholder="Ex. 01/01/2001" />
        //                 <SelectWrapper label="Catégorie" control={form.control} name="category" placeholder="Sélectionner une catégorie">
        //                     <SelectItem value="1">Adhérant</SelectItem>
        //                     <SelectItem value="2">Fondateur</SelectItem>
        //                     <SelectItem value="3">Bienfaiteur</SelectItem>
        //                 </SelectWrapper>
        //                 <CustomInput control={form.control} label="Profession" name="job" placeholder="Ex. Fonctionnaire" />
        //             </div>

        //             {/* Étape 3 */}
        //             <div className="w-full flex-shrink-0 py-6">
        //                 <CustomInput control={form.control} label="Adresse" name="adress" placeholder="Ex. 10, des Oliviers, Gombe" />
        //                 <CustomInput control={form.control} label="Numéro de téléphone" name="phone" placeholder="Ex. 09XXXXXXXX" />
        //                 <CustomInput control={form.control} label="E-mail" name="email" type="email" placeholder="Ex. johndoe@example.com" />
        //             </div>
        //         </div>

        //         {/* Boutons de navigation */}
        //         <div className="flex items-center justify-between">
        //             <Button
        //                 onClick={prevStep}
        //                 disabled={step === 1}
        //             // className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-600"
        //             >
        //                 Précédent
        //             </Button>

        //             {step === 4 ?
        //                 <Button
        //                     // className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-600"
        //                     type='submit'
        //                 >
        //                     Enregistrer
        //                 </Button>
        //                 :
        //                 <Button
        //                     onClick={nextStep}
        //                 // type={step === 4 ? 'submit' : undefined}
        //                 // className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-600"
        //                 >
        //                     Suivant
        //                 </Button>
        //             }
        //         </div>
        //     </form>
        // </Form>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    );
};

const defaultFormValues = {
    firstName: '',
    lastName: '',
    middleName: '',
    gender: '1',
    cityOfBirth: '',
    dateOfBirth: '',
    adhesionDate: '',
    category: '1',
    job: '',
    adress: '',
    phone: '',
    email: ''
}

type TDefaultValues = AsyncDefaultValues<{
    firstName: string;
    lastName: string;
    gender: "1" | "2";
    adhesionDate: string;
    category: "1" | "2" | "3";
    adress: string;
    middleName?: string;
    cityOfBirth?: string;
    dateOfBirth?: string;
    job?: string;
    phone?: string;
    email?: string;
}>