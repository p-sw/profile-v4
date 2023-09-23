import PythonLogo from "~icons/mdi/language-python?raw";
import Web from "~icons/mdi/web?raw";
import Typescript from "~icons/mdi/language-typescript?raw";

/** @type {import('$lib/types/projects').Category[]} */
const projectData = [
    {
        name: "Python",
        icon: PythonLogo,
        projects: [
            {
                name: "Nyanlang",
                description: "Esoteric programming language made by me. Highly inspired by Brainfuck programming language.",
                slug: "nyanlang",
                git: "https://github.com/nyanlang/nyanlang",
                web: "https://nyanlang.org",
            },
            {
                name: "DodgeGame",
                description: "DodgeGame made for Bupyeong High School festival. Leaderboard API backend is included in this project repository. API Backend is used by DodgeGame Leaderboard project.",
                slug: "dodgegame",
                git: "https://github.com/p-sw/DodgeGame",
            },
            {
                name: "Simple Calculator",
                slug: "simple-calculator",
                description: "Simple Calculator GUI written in Python programming language and Pygame library.",
                git: "https://github.com/p-sw/simple-calculator",
            },
            {
                name: "StDict WordDB",
                slug: "stdict-word-db",
                description: "Word database project using Standard Korean Dictionary OpenAPI.",
                git: "https://github.com/p-sw/STDICT_WORD_DB",
            }
        ]
    },
    {
        name: "JS/TS",
        icon: Typescript,
        projects: [
            {
                name: "Nyanlang VSCode",
                slug: "nyanlang-vsc",
                description: "Nyanlang extension for Visual Studio Code. Supports file icon, syntax highlighting. Language server is not ready yet, but it is also on my plan.",
                git: "https://github.com/Nyanlang/nyanlang-vscode-ext"
            },
        ],
    },
    {
        name: "Web",
        icon: Web,
        projects: [
            {
                name: "Nyanlang Web",
                slug: "nyanlang-web",
                description: "Project Nyanlang's website project. Only frontend is included in this repository. Playground backend code is in private repository.",
                git: "https://github.com/Nyanlang/nyanlang-web",
                web: "https://nyanlang.org",
                src: "/assets/nyanlang-web.png"
            },
            {
                name: "DodgeGame Leaderboard",
                slug: "dodgegame-leaderboard",
                description: "Leaderboard web page for DodgeGame project. Made for Bupyeong High School festival. Reading game data from API backend server, display it in frontend.",
                git: "https://github.com/p-sw/dodge-game-leaderboard",
            },
            {
                name: "SchoolTime",
                slug: "schooltime",
                description: "Web app for korean school timetable & cafeteria menu. Written in Django, currently dead project.",
                git: "https://github.com/p-sw/schoolTime",
            },
            {
                name: "Profile v2",
                slug: "profile-v2",
                description: "Profile & Portfolio web page version 2. Written in NextJS, Chakra-UI, with new App Directory feature.",
                git: "https://github.com/p-sw/portfolio-v2",
                web: "https://v2.psw.kr",
                src: "/assets/profile-v2.png"
            },
            {
                name: "Profile v3",
                slug: "profile-v3",
                description: "Profile & Portfolio web page version 2. Written in React, Chakra-UI, React Router.",
                git: "https://github.com/p-sw/profile-v3",
                web: "https://v3.psw.kr",
                src: "/assets/profile-v3.png"
            },
            {
                name: "Profile v4",
                slug: "profile-v4",
                description: "Current version of Profile & Portfolio. Written in Svelte + kit.",
                git: "https://github.com/p-sw/profile-v4",
                web: "https://psw.kr",
                src: "/assets/profile-v4.png"
            }
        ],
    }
]
export default projectData;