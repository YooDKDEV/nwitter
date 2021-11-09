import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter=()=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    return(
        <Router>
            <switch>
                {isLoggedIn ? (
                    <Route exact path="/">
                        <home/>
                        </Route>
                ):(
                    <Route exact path="/">
                        <Auth/>
                        </Route>
        
                )}
            </switch>
        </Router>
    );
};

export default AppRouter;