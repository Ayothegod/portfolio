import noteApp from "@/assets/Screenshot (187).png";
import netflixClone from "@/assets/Screenshot (191).png";
import amazonClone from "@/assets/Screenshot (193).png";
import miniGallery from "@/assets/Screenshot (195).png";
import postr from "@/assets/Screenshot (217).png";

const data = [
    {
        name: "Postr",
        desc: "A minified posting and sharing app.",
        image: postr,
        projectlink: "postr-eight.vercel.app/",
        github: "github.com/Ayothegod/postr",
        tools: ["Nextjs", "Prisma", "Next-auth"]
    },
    {
        name: "Note App",
        desc: "Notekeeping web app.",
        image: noteApp,
        projectlink: "note-app-ruddy.vercel.app/",
        github: "github.com/Ayothegod/note-tut",
        tools: ["Nextjs", "Local-Storage"]
    },
    {
        name: "Netflix Clone",
        desc: "A Netflix clone with full functionality.",
        image: netflixClone,
        projectlink: "fullstack-netflix-theta.vercel.app",
        github: "github.com/Ayothegod/fullstack-netflix",
        tools: ["Nextjs", "TMDB", "Next-auth", "Local-Storage"]
    },
    {
        name: "Simple Amazon Clone",
        desc: "A simple Amazon e-commerce app using reactjs.",
        image: amazonClone,
        projectlink: "2022-amazon-clone.vercel.app",
        github: "github.com/Ayothegod/2022-amazonClone",
        tools: ["Reactjs"]
    },
]

export default data