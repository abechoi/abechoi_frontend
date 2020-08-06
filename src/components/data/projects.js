import { v4 } from "uuid";
import AbeChoiApp from '../apps/AbeChoiApp/AbeChoiApp';
import SwapiApp from '../apps/SwapiApp/SwapiApp';

const projects = [
  { id: v4(), title: 'ABECHOI.COM', url: '/abechoi', demo: AbeChoiApp, createdAt: "July 29, 2020", updatedAt: "July 31, 2020",
  thumbnail: "./images/projects-thumbnail-1.png", git: "https://github.com/abechoi/abechoi_frontend",
  info: "This website was made in React (see flavicon at the tab if you don't believe me!). This site will showcase my future React apps and I will also create and upload documents on solutions that I will need.",
  sections: [
    { 
      title: "Summary", 
      content: "I wanted to make a React website to showcase my React apps - and while this website is still on its way to completion, there are still a few things I need to fix up. I currently have over 600 lines of CSS which I intend on reducing, I’m even considering to rewrite a lot of the CSS using a grid display for easier maneuverability for media queries.",      
    },
    {
      title: "Notable Technologies",
      content: "During this project, I learned a lot about routing; more specifically, react-router-dom. I’ve had my fair share of frustrations with routing, so much so, that I almost posted on StackOverflow twice! However, I somehow managed to keep playing around with the code in different variations until I was able to overcome them. I’ve used FontAwesome once before but I thought I would mention it since I find it very awesome. It’s easy to use and very customizable. I learned how to use AWS Amplify, as I have used it to deploy this website, and was extremely easy to use.",
    },
    {
      title: "Troubleshooting and Debugging",
      content: "The longest running issue I had with developing is definitely the routing part. For the projects page, I had a hard time using a map function to create the routes and another map function to create the links, eventually I moved the routes into the App component and resolved the issue. Deployment wasn’t difficult. I spent a lot of time having issues with mapping my domain name to my AWS Lightsail instance, so I just decided to use AWS Amplify. I believe I had DNS issues because I didn’t delete a record that I was supposed to, so I will have to give Lightsail another go in the future. Maybe I’ll write a doc about it.",
    },
    {
      title: "Future Development",
      content: "I still have to clean up the CSS and move to a grid display. Then I want to add a backend to retrieve my site data, such as blogs and docs. While all this is happening, I will have to keep developing other projects to fill up the projects page. My next project will probably focus on APIs and GraphQL, I have a bookmarked GraphQL course on Youtube by The Net Ninja with 36 videos so I guess I should get started as soon as possible.",
    }]
  },
  { id: v4(), title: 'Star Wars', url: '/swapi', demo: SwapiApp, createdAt: "August 5, 2020", updatedAt: "August 5, 2020",
  thumbnail: "./images/projects-swapi.png", git: "https://github.com/abechoi/abechoi_swapi",
  info: "This is a modified version of The Net Ninja's React Query tutorial. He only went up to the pagination of the planets while I added pagination for the people. I may add more things in the future, enjoy the demo!",
  sections: [
    { 
      title: "Summary",
      content: "This started off as a tutorial from The Ninja Ninja, but I've added pagination to the people and modified the CSS for mobile so that I can add a demo to this page."
    },
    {
      title: "Notable Technologies",
      content: "During this project I learned a lot about an NPM package called react-query-devtools. This is a great tool to visualize when and how data is fetched and I will be using this for future projects."
    },
    {
      title: "Troubleshooting and Debugging",
      content: "There wasn't too much troubleshooting involved. Most of my issues are occurring at this moment as I am trying to implement the demo at the top of this page. I will most likely have to do some reorganize CSS and rename some things."
    },
    {
      title: "Future Development",
      content: "Currently, I do not have much ideas as to further develop this app. However, I will definitely use the query and pagination methods that I have learned from this project."
    }]
  },  
];

export default projects;