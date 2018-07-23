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
import DetailsProduct from "./views/DetailsProduct.jsx";
import {Provider} from './stores/AppContext.jsx';


export default class Layout extends React.Component {

    constructor(props){
        super(props);
    
    this.state = {
            "article": [
                {
                    id: 1,
                    name: "sdfas fsdfsdf dsfsdf",
                    description: "sfsdfsdafdsafsda fsdaffdsa fsdfdsfsd fdsfdsf",
                    price: 0.00
                }
            ],
            "meetups": [],
            "session":{
                ID: 2,
                username: "theUser",
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

    this.actions = {
              "loadInitialData": () => {
                fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/sample_api/v1/events')
                  .then(response => response.json())
                  .then(data => this.setState({ events: data, isLoading: false }))
                  .catch(error => console.log(error));
                  
                fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/sample_api/v1/meetups')
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