import React from "react";

const docs = [];

const Docs = () => {

  return docs.length ? (
    <section className="docs-section">
      { docs.map(doc => (
        <h3>{ doc.title }</h3>
      ))}
    </section>
  ) : (
    <section className="empty-section">
      <h3>Docs are coming soon!</h3>
    </section>
  );
}

export default Docs;