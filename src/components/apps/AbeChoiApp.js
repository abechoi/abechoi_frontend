import React from "react";

const AbeChoiApp = ({project}) => {

  return (
    <section>
      <div className="project-details">

        <div className="project-demo">
          <div className="app-nav-logo">
              <div className="app-logo-first">ABE</div>
              <div className="app-logo-last">CHOI</div>
          </div>
        </div>

        <h1 className="title">{project.title}</h1>
        <p className="date">{project.createdAt}</p>

        <h3 className="table-header">Table of Contents</h3>
  
        <ol className="table-of-contents">
          <li className="app-link"><a href="#section1">Summary</a></li>
          <li className="app-link"><a href="#section2">Notable Technologies</a></li>
          <li className="app-link"><a href="#section3">Troubleshooting and Debugging</a></li>
          <li className="app-link"><a href="#section4">Future Development</a></li>
        </ol>

        <div className="app-section" id="section1">
          <h3 id="section1">Summary</h3>
          <p>I wanted to make a React website to showcase my React apps - and while this website is still on its way to completion, there are still a few things I need to fix up. I currently have over 600 lines of CSS which I intend on reducing, I’m even considering to rewrite a lot of the CSS using a grid display for easier maneuverability for media queries.</p>
        </div>

        <div className="app-section" id="section2">
          <h3>Notable Technologies</h3>
          <p>During this project, I learned a lot about routing; more specifically, react-router-dom. I’ve had my fair share of frustrations with routing, so much so, that I almost posted on StackOverflow twice! However, I somehow managed to keep playing around with the code in different variations until I was able to overcome them. I’ve used FontAwesome once before but I thought I would mention it since I find it very awesome. It’s easy to use and very customizable. I learned how to use AWS Amplify, as I have used it to deploy this website, and was extremely easy to use.</p>
        </div>

        <div className="app-section" id="section3">
          <h3>Troubleshooting and Debugging</h3>
          <p>The longest running issue I had with developing is definitely the routing part. For the projects page, I had a hard time using a map function to create the routes and another map function to create the links, eventually I moved the routes into the App component and resolved the issue. Deployment wasn’t difficult. I spent a lot of time having issues with mapping my domain name to my AWS Lightsail instance, so I just decided to use AWS Amplify. I believe I had DNS issues because I didn’t delete a record that I was supposed to, so I will have to give Lightsail another go in the future. Maybe I’ll write a doc about it.</p>
        </div>

        <div className="app-section" id="section4">
          <h3>Future Development</h3>
          <p>I still have to clean up the CSS and move to a grid display. Then I want to add a backend to retrieve my site data, such as blogs and docs. While all this is happening, I will have to keep developing other projects to fill up the projects page. My next project will probably focus on APIs and GraphQL, I have a bookmarked GraphQL course on Youtube by The Net Ninja with 36 videos so I guess I should get started as soon as possible.</p>
        </div>

      </div>
    </section>
  )
}

export default AbeChoiApp;