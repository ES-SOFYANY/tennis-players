import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import  HomeContainer from "./app/home-container";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeContainer />
      </header>
    </div>
  );
}

export default App;
