import React from 'react';
import Header from '../header/header';
import SearchForm from '../search-form/search-form';
import ResultBox from '../result-box/result-box';

function App() {
  return (
    <div className="container-md">
      <div className="row">
        <Header/>
      </div>
      <div className="row">
        <SearchForm/>
      </div>
      <div className="row">
        <ResultBox/>
      </div>
    </div>
  );
}

export default App;
