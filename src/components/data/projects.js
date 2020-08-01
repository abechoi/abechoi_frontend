import { v4 } from "uuid";

const projects = [
  { id: v4(), title: 'ABECHOI.COM', url: '/abechoi', demo: "AbeChoiApp", createdAt: "July 29, 2020", updatedAt: "July 31, 2020",
  thumbnail: "./images/projects-thumbnail-1.png",
  info: "This website was made in React (see flavicon at the tab if you don't believe me!). This site will showcase my future React apps and I will also create and upload documents on solutions that I will need.",
  content: [
    "Summary",
    "Notable Technologies",
    "Troubleshooting and Debugging",
    "Future Development",
  ]},
];

export default projects;