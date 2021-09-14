import React from 'react';
import Main from './pages/Main';
import GlobalStyle from './components/GlobalStyle';

const App = () =>{
    return(
        <div className="App">
            <GlobalStyle/>
            <Main/>
        </div>
    );
}

export default App;