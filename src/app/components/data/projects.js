const projects = [
    {
        id : 1,
        featured : true,
        year : 2026,
        title : 'tourino',
        desc : 'A full-stack tour booking platform. Authentication, tour discovery, booking flow, and admin management — built end-to-end and deployed on Vercel and Railway.',
        tech : ['Next.js 14' , 'TailwindCss' , 'Shadcn' , 'Axios' , 'React-Query' , 'Express.js' ],
        github : 'https://github.com/sadranafe/tourino',
        live: 'https://tourino-v1.vercel.app',
    },
    {
        id : 2,
        featured : false,
        year: 2025,
        title : 'admin panel',
        desc : 'A modern admin panel built with Next.js. This project is a real-world migration from a traditional React SPA to Next.js, leveraging Server Components, Client Components, and best practices used in production teams.',
        tech : ['Next.js 14', 'TailwindCss' , 'Axios' , 'React-Query' , 'Swagger' , 'Formik' , 'yup' , 'React-hot-toast' ],
        github : 'https://github.com/sadranafe/sadranafe-bootcamp/tree/main/week21-adminpanel',
        live: '',
    },
    {
        id : 3,
        featured : false,
        year : 2023,
        title : 'quiz app',
        desc : 'A modern admin panel built with Next.js. This project is a real-world migration from a traditional React SPA to Next.js, leveraging Server Components, Client Components, and best practices used in production teams.',
        tech : ['Vite' , 'React' , 'TailwindCss' , 'Axios'],
        github : 'https://github.com/sadranafe/Quiz-app',
        live: 'https://quizappsn.vercel.app',
    },
]

export default projects;