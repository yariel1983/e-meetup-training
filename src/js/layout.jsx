import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import Products from "./views/Products.jsx";
import Training from "./views/Training.jsx";
import Events from "./views/Events.jsx";
import Contact from "./views/Contact.jsx";
import {Provider} from './stores/AppContext.jsx';


export default class Layout extends React.Component {

    constructor(props){
        super(props);
    
    this.state = {
<<<<<<< HEAD
            "article": [
                {
                    id: 1,
                    name: "sdfas fsdfsdf dsfsdf",
                    description: "sfsdfsdafdsafsda fsdaffdsa fsdfdsfsd fdsfdsf",
                    price: 0.00
                }
            ]
=======
            "meetups": [],
            "session":{
                ID: 2,
                username: "theUser",
                password: "1234",
                token: "qwerty12345asdfgzxcv"
            },
            "isLoading": true
>>>>>>> 37a7a2dd3022013b5905608bb444dcd2775beaae
        };
            {/*"session":
                
                    ID: 2,
                    username: "theUser",
                    password: "1234",
                    token: "qwerty12345asdfgzxcv"
                },
            "isLoading": true
        };*/}
        
    {/*this.actions = {
            "loadSession": (receivedUsername, receivedPassword) => {
                this.setState(
                    {
                        session: {
                            ID: 1000,
                            user_nicename: receivedUsername,
                            password: receivedPassword,
                            token: "gfdrtu6545hftydhgrhxfh"
                        }
                        
                    });

            }
        };*/}
    }
    
    componentDidMount() {
        if (this.state.isLoading) {
            //this.actions.loadInitialData();
            return null;
        }
      }

  render() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Provider value={{ state:this.state, actions:this.actions }}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/training" component={Training} />
                        <Route exact path="/events" component={Events} />
                        <Route exact path="/contact" component={Contact} />
                    </Provider>
                    <Route render={() => <h1>Not found!</h1>} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
  }
}