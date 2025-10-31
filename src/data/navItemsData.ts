import { sectionIds } from "./sectionIds";

export const navItemsData:
    { [key: string]: { link: string; label: string }[] | string } = {
    Home: [
        {
            link: `/#${sectionIds.homeHero}`,
            label: 'Home',
        },
        {
            link: `/#${sectionIds.aboutUsSection}`,
            label: 'About Us',
        },
        {
            link: `/#${sectionIds.weeklyServicesSection}`,
            label: 'Services',
        },
        {
            link: `/#${sectionIds.messageFromPastorSection}`,
            label: 'Message From Pastor',
        },
    ],
    About: [
        {
            link: `/about#${sectionIds.aboutHero}`,
            label: 'About',
        },
        {
            link: `/about#${sectionIds.historySection}`,
            label: 'Church History',
        },
        {
            link: `/about#${sectionIds.valuesSection}`,
            label: 'Our Values',
        },
        {
            link: `/about#${sectionIds.meetPastorSection}`,
            label: 'Meet Our Pastor',
        },
        {
            link: `/about#${sectionIds.pastoralHistory}`,
            label: 'Leadership',
        },
    ],
    Ministries: `/ministries#${sectionIds.ministriesHero}`,
    Events: `/events#${sectionIds.eventsHero}`,
    "Contact Us": `/contact#${sectionIds.contactHero}`,
};