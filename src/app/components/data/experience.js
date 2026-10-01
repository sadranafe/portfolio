import workProjects from "./workProjects";

const experience = [
    {
        id : 1,
        company : 'Farasat System Pars',
        short : 'FSP',
        title : 'Frontend Developer',
        current : true,
        desc : 'Frontend developer at Farasat System Pars, where I joined as an employee after a three-month internship. I work across the company’s product line, building and maintaining production web interfaces.',
        roles : [
            { id : 1 , title : 'Frontend Developer' , note : 'current' },
            { id : 2 , title : 'Frontend Developer Intern' , note : '3 months' },
        ],
        projects : workProjects,
    },
]

export default experience;
