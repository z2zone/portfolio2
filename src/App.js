import React from 'react';

// Pages
import Main from './pages/Main';
import ReachMeOut from './pages/ReachMeOut';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

//Components
import Nav from './components/Nav';

//Router 
import { Switch, Route, useLocation } from 'react-router-dom';

//Styled Components
import GlobalStyle from './components/GlobalStyle';

//Animation 
import { AnimatePresence } from 'framer-motion';

const App = () =>{
    const location = useLocation();
    
    return(
        <div className="App">
            <GlobalStyle/>
            <Nav/>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
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
            </AnimatePresence>
        </div>
    );
}

export default App;