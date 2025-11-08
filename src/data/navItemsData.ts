import { sectionIds } from "./sectionIds";

export const navItemsData:
    { [key: string]: { link: string; label: string, showOnMobile?: boolean }[] | string } = {
    Home: [
        {
            link: `/#${sectionIds.homeHero}`,
            label: 'Home',
            showOnMobile: true,
        },
        {
            link: `/#${sectionIds.aboutUsSection}`,
            label: 'About Us',
        },
        {
            link: `/#${sectionIds.weeklyServicesSection}`,
            label: 'Services',
            showOnMobile: true,
        },
        {
            link: `/#${sectionIds.valuesSection}`,
            label: 'Our Values',
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
            showOnMobile: true,
        },
        {
            link: `/about#${sectionIds.historySection}`,
            label: 'Church History',
        },
        {
            link: `/about#${sectionIds.whatWeBelieveSection}`,
            label: 'What We Believe',
        },
        {
            link: `/about#${sectionIds.meetPastorSection}`,
            label: 'Meet Our Pastor',
            showOnMobile: true,
        },
        {
            link: `/about#${sectionIds.pastoralHistory}`,
            label: 'Leadership',
        },
        {
            link: `/about#${sectionIds.partners}`,
            label: 'Our Partners',
            showOnMobile: true,
        },
    ],
    Ministries: `/ministries#${sectionIds.ministriesHero}`,
    Events: `/events#${sectionIds.eventsHero}`,
    "Contact Us": `/contact#${sectionIds.contactHero}`,
};