export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experiences" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize efficient and error-free development",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "I am eager to learn and grow, constantly seeking new opportunities to innovate and contribute to the tech community.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently working with True Mates to build a dating app",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Want to work with me?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Facely - AWS App",
        des: "Developed a face recognition Flask app using AWS services for secure and efficient user identification.",
        img: "/p1.svg",
        iconLists: ["/aws.svg", "/python.svg", "/flask.svg", "/dock.svg", "/git.svg"],
        link: "https://github.com/hacKRD0/AWS-Face-Recognition",
    },
    {
        id: 2,
        title: "AWS Lambda Video Processing & Face Recognition Pipeline",
        des: "Designed and implemented a serverless pipeline using AWS services to process video files and perform face recognition",
        img: "/p2.svg",
        iconLists: ["/aws.svg", "/python.svg", "/dock.svg", "/awslambda.svg", "/flask.svg"],
        link: "https://github.com/hacKRD0/AWS-Lambda-Video-Processing-Pipeline",
    },
    {
        id: 3,
        title: "Smart Building Monitoring",
        des: "Engineered a distributed database system for monitoring smart buildings, ensuring scalability and high availability with MongoDB and Docker.",
        img: "/p3.svg",
        iconLists: ["/python.svg", "/postgres.svg", "/mongodb.svg", "/dock.svg", "/git.svg"],
        link: "https://github.com/hacKRD0/CSE-512-Distributed-Database-Systems-Project",
    },
    {
        id: 4,
        title: "MovieFlex - Book movie tickets",
        des: "Microservice architecture based springboot app to book movie tickets.",
        img: "/p4.svg",
        iconLists: ["/java.svg", "/springboot.svg", "/mysql.svg", "/kafka.svg", "/dock.svg"],
        link: "https://github.com/hacKRD0/MovieFlex",
    },
    {
        id: 5,
        title: "Nextjs Porfolio Website",
        des: "Minimalistic portfolio website built with Next.js and Tailwind CSS.",
        img: "/p6.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/git.svg"],
        link: "https://github.com/hacKRD0/portfolio",
    },
    {
        id: 6,
        title: "Stock Direction Predictor",
        des: "Predicting stock direction based on news articles using GPT-2 Classifier.",
        img: "/p5.svg",
        iconLists: ["/python.svg", "/hf.svg", "/git.svg"],
        link: "https://github.com/hacKRD0/Stock-Prediction-Model",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Jackson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael J",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "M Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "MJ",
        title: "Director of AlphaStream Technologies",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Backend Engineer Intern",
        desc: "Assisted in the development of a mobile dating app using Express.js, enhancing scalability and performance.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Data Science Intern",
        desc: "Conducted data analysis and quality assurance of vast location datasets, improving data quality and versatility.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Interim Engineering Intern",
        desc: "Engineered an automated chipset design tracing and validation system, reducing manual validation time",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Developer Intern",
        desc: "Led a team of engineers to develop, test and launch an edtech website.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        link: "https://github.com/hacKRD0",
        img: "/github.svg",
    },
    {
        id: 2,
        link: "https://www.linkedin.com/in/keshava-rd/",
        img: "/link.svg",
    },
    {
        id: 3,
        link: "https://leetcode.com/u/dattakeshava/",
        img: "/lc.svg",
    },
];