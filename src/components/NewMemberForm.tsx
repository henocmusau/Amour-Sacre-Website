'use client'

'use client'
import React, { useState } from "react";
import CustomInput from "./Form/CustomInput";
import { Button } from "./ui/button";

export default function MultiStepCarousel() {
    const [step, setStep] = useState(1);
    // Fonction pour passer à l'étape suivante
    const nextStep = () => {
        if (step < 3) return setStep(step + 1);
        alert('Formulaire soumis !')
    };

    // Fonction pour revenir à l'étape précédente
    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto mt-10 overflow-hidden rounded-lg">
            {/* Conteneur des étapes */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
            >
                {/* Étape 1 */}
                <div className="w-full flex-shrink-0 p-6">
                    <h2 className="text-xl font-bold mb-4">Étape 1: Informations personnelles</h2>
                    <CustomInput label="Nom" name="name" />
                    <CustomInput label="Prénom" name="firstName" />
                </div>

                {/* Étape 2 */}
                <div className="w-full flex-shrink-0 p-6">
                    <h2 className="text-xl font-bold mb-4">Étape 2: Coordonnées</h2>
                    <CustomInput label="Adresse email" name="email" type="email" />
                    <CustomInput label="Numéro de téléphone" name="phone" />
                </div>

                {/* Étape 3 */}
                <div className="w-full flex-shrink-0 p-6">
                    <h2 className="text-xl font-bold mb-4">Étape 3: Mot de passe</h2>
                    <CustomInput label="Mot de passe" name="password" type="password" />
                    <CustomInput label="Confirmer le mot de passe" name="confirmPassword" type="password" />
                </div>
            </div>

            {/* Boutons de navigation */}
            <div className="flex items-center justify-between p-6">
                <Button
                    onClick={prevStep}
                    disabled={step === 1}
                    className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-600"
                >
                    Précédent
                </Button>
                <p>Étape {step} sur 3</p>
                <Button
                    onClick={nextStep}
                    // disabled={step === 3}
                    // className={`px-4 py-2 text-white rounded ${step === 3 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
                    className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-600"
                >
                    {step < 3 ? 'Suivant' : "Enregistrer"}
                </Button>
            </div>
        </div>
    );
};

