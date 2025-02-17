// import { MdDashboard } from "react-icons/md";
// import { FaUsers } from "react-icons/fa";
// import { BsHousesFill } from "react-icons/bs";
// import { BiTransferAlt } from "react-icons/bi";
// import { RiSettingsFill } from "react-icons/ri";
import { TFieldForm } from "@/types/form";
import { Metadata } from "next";

export const navLinks = [
    {
        label: 'Dashboard',
        link: '/',
        // icon: MdDashboard
    },
    {
        label: 'Membres',
        link: '/members',
        // icon: FaUsers
    },
    {
        label: 'Staff',
        link: '/staff',
        // icon: BsHousesFill
    },
    {
        label: 'Trésorerie',
        link: '/amount',
        // icon: BiTransferAlt
    },
    {
        label: 'Paramètres',
        link: '/settings',
        // icon: RiSettingsFill
    },
]

export const CATEGORIES = [
    {
        id: 1,
        label: 'Fondateur',
    },
    {
        id: 2,
        label: 'Adhérant',
    },
    {
        id: 3,
        label: 'Bienfaiteur',
    }
]

export const GENDERS = [
    {
        id: 1,
        label: 'Homme',
    },
    {
        id: 2,
        label: 'Femme',
    },
]

export type TStep = {
    title: string,
    fields: {
        label: string,
        name: TFieldForm,
        placeholder: string,
        required: boolean,
        isSelect?: boolean,
        type?: string
        data?: Array<Object>
    }[]
}

export const newMemberFormSteps: TStep[] = [
    {
        title: 'Etape 1 : Identité',
        fields: [
            {
                label: 'Prénom',
                name: 'firstName',
                placeholder: 'Ex. John',
                required: true
            },
            {
                label: 'Prénom',
                name: 'firstName',
                placeholder: 'Ex. John',
                required: true
            },
            {
                label: 'Nom',
                name: 'lastName',
                placeholder: 'Ex. Doe',
                required: true
            },
            {
                label: 'Post-nom',
                name: 'middleName',
                placeholder: 'Ex. Cooper',
                required: false
            },
        ]
    },
    {
        title: 'Etape 2 : Informations',
        fields: [
            {
                label: 'Genre',
                name: 'gender',
                placeholder: 'Sélectionner le genre',
                required: true,
                isSelect: true,
                data: GENDERS
            },
            {
                label: 'Lieu de naissance',
                name: 'cityOfBirth',
                placeholder: 'Ex. Kinshasa',
                required: false
            },
            {
                label: 'Date de naissance',
                name: 'dateOfBirth',
                placeholder: 'Ex. 01/01/2000',
                required: false
            },
        ]
    },
    {
        title: 'Etape 3 : Contacts',
        fields: [
            {
                label: 'Adresse',
                name: 'adress',
                placeholder: 'Ex. 10, Main Street, Kinshasa',
                required: false
            },
            {
                label: 'Numéro de téléphone',
                name: 'phone',
                placeholder: 'Ex. 0987654321',
                required: false
            },
            {
                label: 'E-mail',
                name: 'email',
                placeholder: 'Ex. john@doe.com',
                required: true,
                type: 'email'
            },
        ]
    },
    {
        title: 'Etape 4 : Informations d\'adhésion',
        fields: [
            {
                label: 'Date d\'adhésion',
                name: 'adhesionDate',
                placeholder: 'Ex. 01/01/2000',
                required: false
            },
            {
                label: 'Catégorie',
                name: 'category',
                placeholder: 'Sélectionner une catégorie',
                required: true,
                isSelect: true,
                data: CATEGORIES
            },
            {
                label: 'Profession',
                name: 'job',
                placeholder: 'Ex. Fonctionnaire',
                required: true
            },
        ]
    },
]

export const defaultMetadata: Metadata = {
    title: 'Amour Sacré - ASBL pour l\'éveil et le développement !',
    description: 'Une solution complète pour la gestion des officiers, des cas, et des opérations au sein de votre commissariat.',
    keywords: ['gestion, association, ASBL, Amour Sacré, développement, communauté'],
    generator: 'Henoc Musau',
    applicationName: 'Amour Sacré',
    referrer: 'origin-when-cross-origin',
    authors: [{ name: 'Henoc Musau' }],
    // authors: [{ name: 'Henoc Musau' }, { name: 'Josh', url: 'https://nextjs.org' }],
    creator: 'Henoc Musau',
    publisher: 'Henoc Musau',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('http://localhost:3000'),
    alternates: {
        canonical: '/',
        // languages: {
        //   'en-US': '/en-US',
        //   'de-DE': '/de-DE',
        // },
    },
    openGraph: {
        // images: ogImage.src,
        // images: '/og-image.png',
        title: 'Amour Sacré - ASBL pour l\'éveil et le développement !',
        description: 'Une solution complète pour la gestion de, des cas, et des opérations au sein de votre commissariat.',
        url: 'http://localhost:3000',
        siteName: 'Amour Sacré',
        images: [
            {
                url: 'https://nextjs.org/og.png', // Must be an absolute URL
                width: 800,
                height: 600,
            },
            {
                url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
                width: 1800,
                height: 1600,
                alt: 'My custom alt',
            },
        ],
        locale: 'fr_FR',
        type: 'website',
    },
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Amour Sacré - ASBL pour l\'éveil et le développement !',
        description: 'Optimisez les opérations et la gestion des ressources avec notre application dédiée aux professionnels des ASBL.',
        // siteId: '1467726470533754880',
        creator: '@henocmusau',
        creatorId: '1467726470533754880',
        images: ['https://nextjs.org/og.png'], // Must be an absolute URL
    },
    category: 'Management'
}

