import { v4 } from "uuid";

const blogs = [
  { id: v4(), 
    title: "My First Blog", 
    createdAt: "July 24, 2020",
    content: ["Welcome to my new site! My Name is Abe Choi, in case that was not obvious.  No need to go over my background, I will let my About page do that. I have been wanting to get into web development for a long time now.  Initially, I skipped straight into Electron with little to no knowledge of javascript and poor knowledge of HTML and CSS. Before I could finish a single Electron tutorial I decided that I needed a strong foundation before tackling javascript frameworks and libraries. Since 2019, I have been developing my foundational skills until I was able to move onto more advanced topics. Angular was my first framework but it was pretty difficult to learn and so I decided to try React as I have read that it was easier to start off with... and it was defintely easier, for me anyways.", "As of right now, this website is fully made with React and I intend to slowly implement MongoDB, Express, and NodeJS. Going forward, I will transfer my data (such as this array of blogs) to the backend that is NodeJS, then I will upload the data to a MongoDB cluster, most likely to something like MongoDB Atlas. It's easy to use and it's free for about a GB(?) of data, and while I do not believe I will have to worry about maxing that out anytime soon, I suppose I should keep that in mind for the future. Anyways, thanks again for stopping by and I hope you have the best day ever!"],
  }
];
export default blogs;