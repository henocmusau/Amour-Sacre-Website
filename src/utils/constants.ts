// import { MdDashboard } from "react-icons/md";
// import { FaUsers } from "react-icons/fa";
// import { BsHousesFill } from "react-icons/bs";
// import { BiTransferAlt } from "react-icons/bi";
// import { RiSettingsFill } from "react-icons/ri";
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



export const defaultMetadata: Metadata = {
    title: 'Amour Sacré - ASBL pour l\'éveil et le développement !',
    description: 'Une solution complète pour la gestion des officiers, des cas, et des opérations au sein de votre commissariat.',
    keywords: ['gestion, commissariat, police, officiers, cas, patrouilles, rapports'],
    generator: 'Henoc Musau',
    applicationName: 'PTasker',
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
        description: 'Découvrez comment notre application peut transformer la gestion quotidienne de votre association.',
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

