import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [,
    {
        title: "Full stack Developer",
        company_name: "Freelance",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "March 2023 - Present",
        points: [
            "Successfully designed and developed custom WordPress/React websites for diverse clients, ensuring optimal functionality and user experience.",
            "Collaborated closely with clients to understand their business needs, resulting in tailored solutions that enhance online presence.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: '3D T-shirt Customisation',
        description: 'The SaaS-based T-Shirt Customization Project, built on the MERN stack, allows users to personalize T-shirts on a 3D model. With an intuitive interface, users can easily customize colors and upload their logos or designs.',
        link: 'https://threejs-3d-ux-ui.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Travel Website',
        description: ' It offers a dynamic and seamless user experience, leveraging React for efficient component-based architecture, Tailwind CSS for flexible styling, and Next.js 14 for server-side rendering and improved performance.',
        link: 'https://travel-app-project.vercel.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Anime Vault',
        description: 'A modern next js 14 server side app with server actions, react intersection observer (for infinite scrolling) and framer motion animations with a pinch of anime style to it.',
        link: 'https://next14-server-side-app.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'MetaVerse UI/UX',
        description: 'The Metaverse UI/UX project, powered by MERN stack (MongoDB, Express.js, React, Node.js), blends cutting-edge technology seamlessly. With captivating design and fluid animations, it delivers an immersive and visually striking user experience.',
        link: 'https://metaversus-01.vercel.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Picroute36',
        description: 'PicRoute36 is a captivating online platform designed for a cutting-edge photography and videography company. Tailored to showcase their visual artistry and share insights through engaging blogs, this website is a digital gallery and knowledge hub rolled into one.',
        link: 'https://picroute36.com/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Amigo Designs',
        description: 'AmigoDesigns is a bespoke online platform meticulously crafted for a dynamic graphic design company specializing in creating impactful designs for corporates.',
        link: 'https://amigodesigns.in/',
    }
];