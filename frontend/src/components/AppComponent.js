import React, { Component} from "react";
import { Link, Route, Switch } from "react-router-dom";
import HelloComponent from "./HelloComponent";

import LoginComponent from "./LoginComponent";
import SignUpComponent from "./SignUpComponent";

class AppComponent extends Component {

    constructor() {
        super();
        
        this.handleLogout = this.handleLogout.bind(this);
    }

    async handleLogout() {
        try {
            const response = await axiosInstance.post('/blacklist/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
            
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            
            axiosInstance.defaults.headers['Authorization'] = null;
            
            return response;
        }
        catch (e) {
            console.log(e);
        }
    };

    render () {
        return (
            <div className="site">
                <nav>
                    <Link className={"nav-link"} to={"/"}>Home</Link>
                    <Link className={"nav-link"} to={"/login/"}>Login</Link>
                    <Link className={"nav-link"} to={"/signup/"}>Signup</Link>
                    <Link className={"nav-link"} to={"/hello/"}>Hello</Link>
                </nav>
                
                <main>
                    <h1>Ahhh after 10,000 years I'm free. Time to conquer the Earth!</h1>
                    
                    <Switch>
                        <Route exact path={"/login/"} component={LoginComponent}/>
                        <Route exact path={"/signup/"} component={SignUpComponent}/>
                        <Route exact path={"/hello/"} component={HelloComponent}/>
                        <Route path={"/"} render={() => <div>Home again</div>}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default AppComponent;