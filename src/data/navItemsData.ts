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
        },
        {
            link: `/about#${sectionIds.pastoralHistory}`,
            label: 'Leadership',
        },
    ],
    Ministries: [
        {
            link: `/ministries#${sectionIds.ministriesHero}`,
            label: 'Ministry Programs',
        },
        {
            link: `/ministries#${sectionIds.partners}`,
            label: 'Our Partners',
        },
    ],
    Events: `/events#${sectionIds.eventsHero}`,
    "Contact Us": `/contact#${sectionIds.contactHero}`,
};