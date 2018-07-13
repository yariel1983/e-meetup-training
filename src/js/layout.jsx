import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import Products from "./views/Products.jsx";
import Training from "./views/Training.jsx";
import Events from "./views/Events.jsx";
import Contact from "./views/Contact.jsx";


export default class Layout extends React.Component {

  render() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/training" component={Training} />
                    <Route exact path="/events" component={Events} />
                    <Route exact path="/contact" component={Contact} />
                    <Route render={() => <h1>Not found!</h1>} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
  }
}