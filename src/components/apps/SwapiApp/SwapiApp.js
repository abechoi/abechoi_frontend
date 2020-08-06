import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import { ReactQueryDevtools } from "react-query-devtools";

function SwapiApp() {

  const [page, setPage] = useState('planets');

  return (
    <>
    <div className="SwapiApp">
      <h1>Star Wars Info</h1>
      <Navbar setPage={ setPage } />
      <div className="content">
        { page === 'planets' ? <Planets /> : <People /> }
      </div>
    </div>
    <ReactQueryDevtools initalIsOpen={false} /> 
    </>
  );
}

export default SwapiApp;
