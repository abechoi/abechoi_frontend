import React from "react";

const AppContent = ({ title, content, id }) => {

  return (
    <div className="app-section" id={ id }>
      <h3>{ title }</h3>
      <p>{ content }</p>
    </div>
  )
}
export default AppContent;