import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Navigation  from "./Navigation";


const AppRouter=({isLoggedIn})=>{
    return( 
        <Router>
            {isLoggedIn &&<Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <Route exact path="/">
                        <Home />
                    </Route>
                ):(
                    <Route exact path="/">
                        <Auth />
                    </Route>
        
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;