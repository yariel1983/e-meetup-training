import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import Products from "./views/Products.jsx";
import Training from "./views/Training.jsx";
import Events from "./views/Events.jsx";
import Contact from "./views/Contact.jsx";
import Register from "./views/Register.jsx";
import Cart from "./views/Cart.jsx";
import {Provider} from './stores/AppContext.jsx';

import DetailsProduct from "./views/DetailsProduct.jsx";

export default class Layout extends React.Component {

    constructor(props){
        super(props);
    
    this.state = {
            "article": [
                {
                    articleid: 1,
                    name: "Weight & Strength",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
                    price: "65.00",
                    oldprice: "90.00",
                    imgurl: "https://www.bestwomensworkoutreviews.com/wp-content/uploads/2014/06/Bowflex-PR1000-Home-Gym-1-1024x1024.jpg"

                }
            ],
            "meetups": [],
            "session":{
                ID: 2,
                username: "theUser",
                email: "test@gmail.com",
                password: "1234",
                token: "qwerty12345asdfgzxcv"
            },
            "cart":[
                {
                    id: 1,
                    name: "A Laptop computer",
                    price: 30,
                    image_url: "http://picsum.photos/600/600/?image=1",
                    description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                }
            ],
            "isLoading": true
    };

    this.actions = {"loadSession": (receivedUsername, receivedPassword) => {
                /*this.setState(
                    {
                        session: {
                            ID: 1000,
                            user_nicename: receivedUsername,
                            password: receivedPassword,
                            token: "gfdrtu6545hftydhgrhxfh"
                        }
                        
                    });
                */    //REST API AUTH
                    var data = {
                        "username":receivedUsername, 
                        "password":receivedPassword
                      };
                      
                    fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/jwt-auth/v1/token',
                    {
                      method: 'POST',
                      body: JSON.stringify(data),
                      headers: new Headers({
                        'Content-Type': 'application/json'
                        })
                    })
                    .then( (response) => response.json())
                    .then( (data) => {
                        
                        if (typeof(data.token) === "undefined" ) throw new Error(data.message);
                        this.setState({session: data});
                        
                        //ReactGA.set({ userId: data.user_nicename });
                    })
                    .catch(error => console.log(error));
                  
                    //Simulating user ID
                    /*
                    fetch('https://randomuser.me/api/?inc=id,name,picture')
                    .then(res => res.json())
                    .catch(error => {
                      //console.error('Error:', error)
                    })
                    .then(response => {
                      this.dispatch('MeetupStore.setSession', response);
                    });*/
                    
                    
                  },
            "loadInitialData": () => {
                fetch('https://myfirst-php-jpironag.c9users.io/wp-json/sample_api/v1/courses')
                  .then(response => response.json())
                  .then(data => this.setState({ events: data, isLoading: false }))
                  .catch(error => console.log(error));
                  
                fetch('https://myfirst-php-jpironag.c9users.io/wp-json/sample_api/v1/courses')
                  .then(response => response.json())
                  .then(data => this.setState({ meetups: data }))
                  .catch(error => console.log(error));
              },
              "logout": () => this.setState({session: {}})
        }; 
    }
    
    componentDidMount() {
        this.actions.loadInitialData();
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
                        <Route exact path="/DetailsProduct/:artId" component={DetailsProduct} />
                        <Route exact path="/training" component={Training} />
                        {/* Eliminar para presentacion <Route exact path="/events" component={Events} /> */}
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/register" component={Register} />
                    </Provider>
                    <Route render={() => <h1>Not found!</h1>} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
  }
}