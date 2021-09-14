import React from 'react';

// Pages
import Main from './pages/Main';
import ReachMeOut from './pages/ReachMeOut';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

//Components
import Nav from './components/Nav';

//Router 
import { Switch, Route } from 'react-router-dom';

//Styled Components
import GlobalStyle from './components/GlobalStyle';

const App = () =>{
    return(
        <div className="App">
            <GlobalStyle/>
            <Nav/>
            <Switch>
                <Route path="/" exact>
                <Main/>
                </Route>
                <Route path="/projects">
                    <Projects/>
                </Route>
                <Route path="/experience">
                    <Experience/>
                </Route>
                <Route path="/reachmeout">
                    <ReachMeOut/>
                </Route>
            </Switch>

        </div>
    );
}

export default App;