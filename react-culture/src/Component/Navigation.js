import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home"
import FormLibraire from "./FormLibraire"
import Favoris from "./Favoris"
import DetailLibraire from "./DetailLibraire"
import Menu from './Menu';
import Login from './Login';
// import { ThemeContext } from '../Tools/ThemeContext';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // theme: {
            //     color : 'black',
            //     bgColor: 'white'
            // }
         }
    }
    // ChangeTheme = (type) => {
    //     if (type == "dark") {
    //         setTheme
    //     }
    // }
    render() { 
        return ( 
            <BrowserRouter>
                <div className="container-fluid">
                    <Menu></Menu>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/addLibraire" component={FormLibraire}></Route>
                        <Route path="/Favoris" component={Favoris}></Route>
                        <Route path="detail/:id" component={DetailLibraire}></Route>
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/login/:url" component={Login}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Navigation;