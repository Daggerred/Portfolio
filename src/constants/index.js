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
    AWS,
    azure,
    cplus,
    dart,
    excel,
    golang,
    mysql,
    python,
    selenium,
    tensorflow,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    spark,
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl:spark,
        name:"Apache Spark",
        type:"analytics"
    },
    {
        imageUrl:AWS,
        name:"Amazon Webservice",
        type:"analytics"
    },
    {
        imageUrl:azure,
        name:"Microsoft Azure",
        type:"analytics"
    },
    {
        imageUrl:cplus,
        name:"C++",
        type:"languages"
    },
    {
        imageUrl:dart,
        name:"Dart",
        type:"languages"
    },
    {
        imageUrl:excel,
        name:"Microsoft Excel",
        type:"analytics"
    },
    {
        imageUrl:golang,
        name:"Golang",
        type:"languages"
    },
    {
        imageUrl:mysql,
        name:"My SQL",
        type:"analytics"
    },
    {
        imageUrl:python,
        name:"Python",
        type:"Languages"
    },
    {
        imageUrl:selenium,
        name:"Selenium",
        type:"Testing"
    },
    {
        imageUrl:tensorflow,
        name:"Tensorflow",
        type:"Testing"
    },


];

export const experiences = [
    {
        title: "MCA - Master's In Computer Application",
        company_name: "Thakur Institute (TIMSCDR) Mumbai",
        icon: shopify,
        iconBg: "#accbe1",
        date: "Aug 2022 - Aug 2024",
        points: [
            "Mastered Big Data Analytics and Visualization: Developed expertise in analyzing and presenting large datasets.",
            "Specialized in Distributed Systems and Cloud Computing: Learned to design scalable, reliable cloud solutions.",
            "Gained Hands-On Experience in Advanced Technologies: Acquired practical skills in Mobile Computing, Blockchain, Deep Learning, Game Development, and Ethical Hacking, making me a versatile and innovative software engineer.Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers as mentors and students.",
            "Strengthened Software Development Practices: Applied best practices for building robust, maintainable, and scalable software.",
            "Mastered Game Development and 3D Graphics: Gained proficiency in creating interactive simulations with complex algorithms and 3D graphics",
            "Improved Problem-Solving Abilities: Tackled and solved complex technical challenges, showcasing my innovative approach.",



        ],
    },
    {
        title: "Machine Learning Internship",
        company_name: "Kyrion Technologies",
        icon: tesla,
        iconBg: "#b7e4c7",
        date: "Jan 2021 - Feb 2021",
        points: [
            "Developed image classification models using Python and TensorFlow, demonstrating strong analytical and pro- gramming skills",
            "Processed and analyzed large datasets using Pandas and NumPy to derive actionable insights.",
            "Deployed machine learning models on Azure Machine Learning and used Azure Synapse Analytics for data management",
            "Collaborated with cross-functional teams to ensure on-time and accurate delivery of analytical projects.",
        ],
    },{
        title: "Ethical Hacking Internship",
        company_name: "Kyrion Technologies",
        icon: tesla,
        iconBg: "#b7e4c7",
        date: "Dec 2020 - Jan 2021",
        points: [
            "Reverse Engineering Expertise: Successfully executed a project on software cracking using reverse engineering, showcasing proficiency in identifying and exploiting software vulnerabilities.",
            "Technical Proficiency: Demonstrated strong technical skills in ethical hacking through practical application of courseware, proving capability in real-world scenarios.",
            "Team Collaboration: Actively collaborated with team members, displaying excellent teamwork and communication skills, and contributing to a seamless team environment.",
            "Diligent and Results-Oriented: Recognized for being sincere, hardworking, and results-driven, consistently delivering high-quality work within project timelines.",
        ],
    },

    {
        title: " ",
        company_name: "Bachelor's in Computer Science",
        icon: tesla,
        iconBg: "#a2d2ff",
        date: "June 2017 - Sept 2020",
        points: [
            "Comprehensive Java Development: Gained in-depth knowledge of Java programming, mastering both fundamental concepts and advanced techniques, which enhanced my ability to develop robust and efficient software solutions.",
            "Spring Boot Mastery: Developed expertise in Spring Boot, enabling me to create scalable and maintainable applications with ease, while leveraging its powerful features for rapid development and deployment.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Framework Proficiency and Integration: Explored and integrated various Java frameworks such as Hibernate for ORM, Apache Kafka for event streaming, and Apache Maven for project management. This enhanced my versatility and adaptability in different development environments and deepened my understanding of software engineering principles like software design patterns, testing methodologies, and version control systems",
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
        name: 'Rhytmic - Music & Podcast Streamimg Webapp',
        description: 'Developed a dynamic Music Player Web App leveraging Next.js and React for a seamless user experience. Integrated Spotify API for real-time music streaming and implemented state management with Recoil for efficient performance. Enhanced UI with Tailwind CSS, ensuring a visually appealing and responsive design.',
        link: 'https://github.com/Daggerred/Rhyt',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Pluto -  Native Mobile and Webapp for IOS , Android ,Windows',
        description: 'Developed a comprehensive Flutter full-stack application for social communication, compatible with both mobile and web platforms. Utilized Firebase for authentication, cloud storage, and Firestore database integration to ensure real-time data synchronization. Enhanced user experience with Flutter Staggered Grid View and SVG support, while implementing efficient state management using Provider.',
        link: 'https://github.com/Daggerred/Pluto',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'API - Auth Protection using JWT',
        description: 'Developed a secure REST API using Express.js, implementing JWT for robust authentication and authorization. Utilized bcryptjs for password hashing, ensuring data security. Integrated MongoDB with Mongoose for efficient data management and seamless CRUD operations. The project showcases strong backend development skills and adherence to best security practices..',
        link: 'https://github.com/Daggerred/JWT_endpoints-Token',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'College - Com',
        description: 'Developed a full-stack web application for posting college events and facilitating student interaction. Utilized React with React Router for dynamic UI, and implemented robust form handling with React Hook Form. Integrated Appwrite for backend services, ensuring secure data management. Enhanced UI/UX with Tailwind CSS and incorporated real-time updates using React Query, fostering a seamless and interactive user experience.',
        link: 'https://6668b0297bf25e0555143dee--sparkly-gumdrop-f6cb31.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Blockchain NFT- MarketPlace',
        description: 'Developed a cutting-edge NFT Marketplace using Next.js, React, and IPFS, integrated with blockchain through Web3Modal and Hardhat for seamless smart contract interactions.Implemented advanced UI animations with Framer Motion and ensured robust file handling with React Dropzone and Axios for an enhanced user experience',
        link: 'https://github.com/Daggerred/NFT_MARKETPLACE-Blockchain',
    },
    
];