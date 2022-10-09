export const category = [
    {
        id: 1,
        categoryId: 1,
        idProp: 'home',
        name: 'Home',
    },
    {
        id: 2,
        categoryId: 2,
        idProp: 'about',
        name: 'About',
    },
    {
        id: 3,
        categoryId: 3,
        idProp: 'skill',
        name: 'Skill',
    },
    {
        id: 4,
        categoryId: 4,
        idProp: 'portfolio',
        name: 'Portfolio',
    },
    {
        id: 5,
        categoryId: 5,
        idProp: 'contact',
        name: 'Contact',
    },
];

export const portfolio = [
    {
        id: 1,
        categoryId: 1,
        imgGif: 'https://media.giphy.com/media/2X8MYmmfEUszRt3uRx/giphy.gif',
        name: 'Todo app with redux',
        description:
            'Todo app use fake api so add function will not work on product environment. This project was built using React, Redux-toolkit.',
        teamSize: 'Team size: 1.',
        frontEnd: 'Front-End: React, Redux-toolkit.',
        backEnd: 'Back-End: fake Api.',
        clones: 'Clones: according to HoleTex.',
        linkLive: 'https://diendev-todo-app.netlify.app/',
        linkGit: 'https://github.com/dien-dev/todo-app.git',
    },
    {
        id: 2,
        categoryId: 2,
        imgGif: 'https://media.giphy.com/media/ZJXShz2bwP2w9IxdcB/giphy.gif',
        name: 'My portfolio websitePage',
        description:
            'This site is a summary of all the projects I have done and some skills. This project was built React and Responsive.',
        teamSize: 'Team size: 1.',
        frontEnd: 'Front-End: React, Responsive.',
        backEnd: 'Back-End: no process.',
        clones: 'Clones: null',
        linkLive: 'https://diendev-portfolios.netlify.app/',
        linkGit: 'https://github.com/dien-dev/diendev-portfolio.git',
    },
    {
        id: 3,
        categoryId: 3,
        imgGif: 'https://media.giphy.com/media/07IXBOJIFrDqNF2iG1/giphy.gif',
        name: 'The Band',
        description:
            'The band was built on the w3chool template. This project was built using HTML, CSS, JavaScript, Responsive.',
        teamSize: 'Team size: 1.',
        frontEnd: 'Front-End: HTML, CSS, JavaScript, Responsive.',
        backEnd: 'Back-End: no process.',
        clones: 'Clones: tryw3css_templates_band.htm',
        linkLive: 'https://diendev-the-band.netlify.app/',
        linkGit: 'https://github.com/dien-dev/web-the-band.git',
    },
    {
        id: 4,
        categoryId: 4,
        imgGif: 'https://media.giphy.com/media/lpJb1TaJAo0qPWr9d2/giphy.gif',
        name: 'Anime movies',
        description:
            'anime movies is a movie watching website with an integrated recommendation system.',
        teamSize: 'Team size: 2.',
        frontEnd: 'Front-End: React.',
        backEnd: 'Back-End: Python, Django framework.',
        clones: 'Clones: null',
        linkLive: '#portfolio',
        linkGit: 'https://github.com/dien-dev/anime.git',
    },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    category,
    portfolio,
};
