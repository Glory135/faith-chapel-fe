import { sectionIds } from "./sectionIds";

export const navItemsData:
    { [key: string]: { link: string; label: string }[] | string } = {
    Home: [
        {
            link: `/#${sectionIds.homeHero}`,
            label: 'Home',
        },
        {
            link: `/#${sectionIds.jesus}`,
            label: 'About Us',
        },
        {
            link: `/#${sectionIds.values}`,
            label: 'Services',
        },
        {
            link: `/#${sectionIds.acg}`,
            label: 'Message',
        },
    ],
    About: [
        {
            link: `/about#${sectionIds.aboutHero}`,
            label: 'Church History',
        },
        {
            link: `/about#${sectionIds.story}`,
            label: 'Values',
        },
        {
            link: `/about#${sectionIds.values}`,
            label: 'Our Pastor',
        },
        {
            link: `/about#${sectionIds.values}`,
            label: 'Leadership',
        },
    ],
    Ministries: "/ministries",
    Events: "/events",
    "Contact Us": "/contact",
};