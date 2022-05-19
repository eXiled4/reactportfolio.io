//This file shall serve as an api for the project cards
//Will be fetched from the WorkCard file

import trav from "../assets/Traveller.jpg"
import box from "../assets/Boxing.jpg"

const ProjectCardData = [
    {
        imgsrc: trav,
        title: "Traveller (A React Rails Project)",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        view: "https://github.com/eXiled4?tab=repositories",
    },
    {
        imgsrc: box,
        title: "Boxing News (A Ruby Project)",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        view: "https://github.com/eXiled4/boxingnews.io",
    }
]

export default ProjectCardData;