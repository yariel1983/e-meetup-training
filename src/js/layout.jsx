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
            {   articleid: 1,
                name: "Marcy Gym System",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                price: 65.00,
                oldprice: 90.00,
                imgurl: "https://assets.academy.com/mgen/81/10213981.jpg?is=500,500"
                }
            ],
            "meetups": [],
            "session":{
                /*ID: 2,
                username: "theUser",
                email: "test@gmail.com",
                password: "1234",
                token: "qwerty12345asdfgzxcv"*/
            },
            "cart":[
                
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
              
            addProductToCart: (productId) => {
                let tempCart = this.state.cart;
                let arrayWithTheProduct = this.state.article.find( (article) => {
                    return article.articleid === productId;  
                });
                
                tempCart.push(arrayWithTheProduct);
                this.setState( { cart: tempCart } );
            },
            
            "logout": () => this.setState(  {session: {}}   )
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