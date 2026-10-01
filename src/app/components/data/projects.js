const projects = [
    {
        id : 1,
        featured : true,
        year : 2026,
        title : 'tourino',
        desc : 'A tour booking platform built end to end — a Next.js frontend with a separate Express API. Phone OTP authentication, tour search and filtering, basket-based booking, and a user dashboard for purchases and transaction history.',
        tech : ['Next.js 14' , 'TailwindCss' , 'Shadcn' , 'Axios' , 'React-Query' , 'Express.js' ],
        github : 'https://github.com/sadranafe/tourino',
        live: 'https://tourino-v1.vercel.app',
    },
    {
        id : 2,
        featured : false,
        year: 2025,
        title : 'admin panel',
        desc : 'An admin panel migrating a React SPA to the Next.js App Router — authentication, product CRUD, and debounced search split across server and client components.',
        tech : ['Next.js 14', 'TailwindCss' , 'Axios' , 'React-Query' , 'Swagger' , 'Formik' , 'yup' , 'React-hot-toast' ],
        github : 'https://github.com/sadranafe/sadranafe-bootcamp/tree/main/week21-adminpanel',
        live: '',
    },
    {
        id : 3,
        featured : false,
        year : 2023,
        title : 'quiz app',
        desc : 'An interactive quiz app with a 30-second timer per question, locked-in answers, and instant feedback on each selection. Tracks progress as you go and scores the run as a final percentage, with light and dark themes throughout.',
        tech : ['Vite' , 'React' , 'TailwindCss' , 'Axios'],
        github : 'https://github.com/sadranafe/Quiz-app',
        live: 'https://quizappsn.vercel.app',
    },
]

export default projects;