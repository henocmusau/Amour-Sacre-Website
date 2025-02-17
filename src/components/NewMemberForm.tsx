'use client'
import React, { BaseSyntheticEvent, FormEvent } from "react";

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
import { newMemberFormSteps } from "@/utils/constants";
import { wait } from "@/lib/functions";


interface IProps {
    action: () => void
}

const OPTIONS: EmblaOptionsType = { loop: false }

export default function MultiStepCarousel(props: IProps) {
    const { action } = props
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultFormValues as Object
    })
    type LoosePluginType = any
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS as any, [AutoHeight() as any])
    const emblaApiNew = emblaApi as CreatePluginType<LoosePluginType, {}>

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApiNew)

    const { handleSubmit, control, formState: { isSubmitting } } = form

    async function onSubmit(data: z.infer<typeof formSchema>, e?: BaseSyntheticEvent<object, any, any>) {
        const member = await CreateNewMember(data)
        action()

        toast.success("Membre enregistré", {
            description: (
                <p className="uppercase">{member.id + ' - ' + member.firstName + ' ' + member.lastName}</p>
            ),
            action: {
                label: "Cancel",
                onClick: () => console.log("Undo"),
            },
        })
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
                <form onSubmit={handleSubmit(onSubmit)} className="embla w-full">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="flex gap-1 embla__container">
                            {/* Form Steps */}
                            {
                                newMemberFormSteps.map((step, i) => {
                                    return (
                                        <>
                                            {/* <FormStepTitle title={step.title} /> */}
                                            <div className="embla__slide" key={i}>
                                                {step.fields.map((field, k: number) => {
                                                    if (!field.isSelect) return <CustomInput
                                                        key={k} control={control}
                                                        label={field.label}
                                                        name={field.name}
                                                        placeholder={field.placeholder} />

                                                    return <SelectWrapper key={k} label={field.label} control={control} name={field.name} placeholder={field.placeholder}>
                                                        {
                                                            field?.data?.map((d: any) => (
                                                                <SelectItem key={d.id} value={d.id.toString()}>{d.label}</SelectItem>
                                                            ))
                                                        }
                                                    </SelectWrapper>
                                                })}
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="flex w-full justify-between gap-4 px-1 mt-4">
                        <Button
                            onClick={prevStep}
                            className='basis-1/2'
                            disabled={prevBtnDisabled || isSubmitting}>
                            Prev
                        </Button>
                        <Button
                            onClick={nextStep}
                            className='basis-1/2'
                            disabled={isSubmitting}
                        >
                            {nextBtnDisabled ? 'Save' : 'Next'}
                        </Button>
                    </div>
                </form>
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

