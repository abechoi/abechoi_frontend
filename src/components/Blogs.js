import React from "react";
import blogs  from "./data/blogs";

const Blogs = () => {


  return blogs.length ? (
    <section className="blogs-section">
      <div className="blogs-div">
        <ul>
          { blogs.map( blog => {
            return (
              <li key={ blog.id }>
              <div className="blog-card">

                <h1 className="blog-title">{ blog.title }</h1>
                <p className="blog-date">{ blog.createdAt }</p>
                <hr/>

                <div>{ blog.content.map(i => {
                  return <p className="blog-content" key={blog.content.indexOf(i)}><br/>{i}<br/></p>;
                })}</div>

              </div>
              </li>);
          })}
        </ul>
      </div>
      <div className="title-div">
        <h4>RECENT POSTS</h4>
        <ul>
          { blogs.map(blog => {
            return <p key={blog.id}>{ blog.title }</p>;
          })}
        </ul>
      </div>
    </section>
  ) : (
    <section>
      <p>No available blogs.</p>
    </section>
  );
}

export default Blogs;