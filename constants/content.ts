import {
    Layers,
    Network,
    Lightbulb,
    Activity,
    ShieldCheck,
    Globe,
} from "lucide-react";

export const NAV_LINKS = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services", hasDropdown: true },
    { label: "Products", href: "#products", hasDropdown: true },
];

export const PILLARS = [
    {
        id: 1,
        title: "Holistic Infrastructure",
        desc: "High-performance connectivity.",
        icon: "fi fi-rr-layers", // Class UIcons
    },
    {
        id: 2,
        title: "Systemic Integration",
        desc: "End-to-end technical architecture.",
        icon: "fi fi-rr-physics", // Class UIcons
    },
    {
        id: 3,
        title: "Agile Virtualization",
        desc: "Digital-first workspace solutions.",
        icon: "fi fi-rr-bulb",
    },
    {
        id: 4,
        title: "Operational Oversight",
        desc: "Real-time IP-based monitoring.",
        icon: "fi fi-rr-stats",
    },
    {
        id: 5,
        title: "Data Governance",
        desc: "Secure institutional repositories.",
        icon: "fi fi-rr-shield-check",
    },
    {
        id: 6,
        title: "Strategic Ecosystems",
        desc: "Centralized web-based platforms.",
        icon: "fi fi-rr-globe",
    },
];

export const PARTNERS = [
    { name: "BCA", logo: "/logos/partners/BCAlogo.svg" },
    { name: "BERCA", logo: "/logos/partners/BERCAlogo.svg" },
    { name: "Bank Jakarta", logo: "/logos/partners/BankJAKARTAlogo.svg" },
    { name: "HUAWEI", logo: "/logos/partners/HUAWEIlogo.svg" },
    { name: "ISS", logo: "/logos/partners/ISSlogo.svg" },
    { name: "KPI", logo: "/logos/partners/KPIlogo.svg" },
    { name: "Kemenkes", logo: "/logos/partners/Kemenkeslogo.svg" },
    { name: "SDM POLRI", logo: "/logos/partners/SDM POLRIlogo.svg" },
    { name: "Unilever", logo: "/logos/partners/Unileverlogo.svg" },
    { name: "WIKA", logo: "/logos/partners/WIKAlogo.svg" },
    { name: "Powernet Partner", logo: "/logos/partners/Defaultlogo.svg" },
];
