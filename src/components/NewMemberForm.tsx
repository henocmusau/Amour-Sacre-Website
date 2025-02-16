'use client'
import React, { BaseSyntheticEvent, FormEvent, MouseEventHandler, useState } from "react";

import CustomInput from "./Form/CustomInput";
import { Button } from "./ui/button";
import SelectWrapper from "./Form/CustomSelect";
import { SelectItem } from "./ui/select";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import { formSchema } from "./Form/FormSchema";
import FormStepTitle from "./FormStepTitle";

import { CreatePluginType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoHeight from 'embla-carousel-auto-height'
import { usePrevNextButtons } from "./Carousels/UseCarouselNavigation";
import { toast } from "sonner";
import { CreateNewMember } from "@/actions/Member";
import { CATEGORIES } from "@/utils/constants";


interface IProps {
    action: () => unknown
}

const OPTIONS: EmblaOptionsType = { loop: false }
const SLIDE_COUNT = 5

export default function MultiStepCarousel(props: IProps) {
    // const { action } = props
    // const [step, setStep] = useState(1);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultFormValues as Object
    })
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS as any, [AutoHeight()])
    const emblaApiNew = emblaApi as CreatePluginType<LoosePluginType, {}>

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApiNew)

    const { handleSubmit, control } = form
    // const nextStep = () => {
    //     if (step < 4) return setStep(step + 1);
    //     action()
    // };

    // const prevStep = () => {
    //     if (step > 1) setStep(step - 1);
    // };

    async function onSubmit(data: z.infer<typeof formSchema>, e?: BaseSyntheticEvent<object, any, any>) {
        // if (!e) return

        const member = await CreateNewMember(data)

        toast.success("Membre enregistré", {
            // description: "Sunday, December 03, 2023 at 9:00 AM",
            description: (
                // <pre className="mt-2 w-80 rounded-md p-4">
                //     <code>{JSON.stringify(data, null, 2)} </code>
                // </pre>
                <p className="uppercase">{member.id + ' - ' + member.firstName + ' ' + member.lastName}</p>
            ),
            action: {
                label: "Cancel",
                onClick: () => console.log("Undo"),
            },
        })
        console.log(JSON.stringify(member, null, 2))
    }

    const prevStep = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        onPrevButtonClick()
    }

    const nextStep = (e: FormEvent<HTMLButtonElement>) => {
        if (!nextBtnDisabled) e.preventDefault()

        onNextButtonClick()
    }

    return (

        <Form {...form}>
            <div>
                {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} emblaRef={emblaRef}> */}
                <form onSubmit={handleSubmit(onSubmit)} className="embla w-full">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="flex gap-1 ">
                            {/* Étape 1 */}
                            <div className="embla__slide">
                                {/* <FormStepTitle title="Étape 1 : Identité" /> */}
                                {/* <h2 className="text-xl font-bold mb-4">Étape 1 : Identité</h2> */}
                                <CustomInput control={control} label="Prénom" name="firstName" placeholder="Ex. John" />
                                <CustomInput control={control} label="Nom" name="lastName" placeholder="Ex. Doe" />
                                <CustomInput control={control} label="Post-nom" name="middleName" placeholder="Ex. Cooper" />
                            </div>

                            {/* Étape 2 */}
                            <div className="embla__slide">
                                {/* <FormStepTitle title="Étape 2 : Informations" /> */}
                                {/* <h2 className="text-xl font-bold mb-4">Étape 2 : Informations</h2> */}
                                <SelectWrapper label="Genre" control={form.control} name="gender" placeholder="Sélectionner le genre">
                                    <SelectItem value="1">Homme</SelectItem>
                                    <SelectItem value="2">Femme</SelectItem>
                                </SelectWrapper>
                                <CustomInput control={form.control} label="Lieu de naissance" name="cityOfBirth" placeholder="Ex. Kinshasa" />
                                <CustomInput control={form.control} label="Date de naissance" name="dateOfBirth" placeholder="Ex. 01/01/2001" />
                            </div>

                            <div className="embla__slide">
                                {/* <FormStepTitle title="Etape 3 : Contacts" /> */}
                                <CustomInput control={form.control} label="Adresse" name="adress" placeholder="Ex. 10, des Oliviers, Gombe" />
                                <CustomInput control={form.control} label="Numéro de téléphone" name="phone" placeholder="Ex. 09XXXXXXXX" />
                                <CustomInput control={form.control} label="E-mail" name="email" type="email" placeholder="Ex. johndoe@example.com" />
                            </div>

                            <div className="embla__slide">
                                {/* <FormStepTitle title="Étape 4 : Informations d'adhésion" /> */}
                                <CustomInput control={form.control} label="Date d'adhésion" name="adhesionDate" placeholder="Ex. 01/01/2001" />
                                <SelectWrapper label="Catégorie" control={form.control} name="category" placeholder="Sélectionner une catégorie">
                                    {
                                        CATEGORIES.map(c => (
                                            <SelectItem key={c.id} value={c.id.toString()}>{c.label}</SelectItem>
                                        ))
                                    }
                                </SelectWrapper>
                                <CustomInput control={form.control} label="Profession" name="job" placeholder="Ex. Fonctionnaire" />
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full justify-between gap-4 px-1 mt-4">
                        <Button
                            onClick={prevStep}
                            className='basis-1/2'
                            disabled={prevBtnDisabled}>
                            Prev
                        </Button>
                        <Button
                            onClick={nextStep}
                            className='basis-1/2'
                        // disabled={nextBtnDisabled}
                        >
                            {nextBtnDisabled ? 'Save' : 'Next'}
                        </Button>
                        {/* <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} /> */}
                        {/* <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /> */}
                    </div>
                </form>
                {/* </EmblaCarousel> */}
            </div>
        </Form >
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

