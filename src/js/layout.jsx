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
            "article": [/**
            {   articleId:1,
                name: "Marcy Gym System",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                price: 65.00,
                oldprice: 90.00,
                imgurl: "https://assets.academy.com/mgen/81/10213981.jpg?is=500,500"
                },
            {   articleId:2,
                name: "Sunny Belt-driven Indoor Cycling Bike",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                price: 80.00,
                oldprice: 120.20,
                imgurl: "https://i5.walmartimages.com/asr/dc270a79-6d10-42e0-b8b5-b9a213a2b7d4_2.821440dd285eff4d0fcb2515ed028300.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                },
            {   articleId:3,
                name: "Body Champ Power Rack System",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                price: 45.50,
                oldprice: 50.84,
                imgurl: "https://assets.academy.com/mgen/24/10711924.jpg"
                },           
            {   articleId:4,
                name: "Lifespan Electric Folding Tread Mill",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                price: 76.00,
                oldprice: 80.00,
                imgurl: "https://media.lifespanfitness.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/r/tr2000e-electric-folding-treadmill-female-running.jpg"
                },            
            {   articleId:5,
                name: "Lifespan Recumbent Bike",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                price: 65.00,
                oldprice: 70.00,
                imgurl: "https://media.lifespanfitness.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/l/i/lifespan-r7000i-commercial-recumbent-exercise-bike.jpg"
                },           
            {   articleId:6,
                name: "Bowflex home gym",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                price: 10.00,
                oldprice: 15.00,
                imgurl: "https://www.bestwomensworkoutreviews.com/wp-content/uploads/2014/06/Bowflex-PR1000-Home-Gym-1-1024x1024.jpg"
                } **/           
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
            "cartNumItem":  0,
            "isLoading": false,
            "catcherrorserver": [{  error: null, 
                                    errorInfo: null }]
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
                    this.setState({ isLoading: true }); 
                    
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
                        
                        if (typeof(data.token) === "undefined" ) 
                            throw new Error(data.message);
                            this.setState({ catcherrorserver: data.message, session: data, isLoading: false });
                            
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

                //fetch('https://first-wordpress-jcabezas.c9users.io/wp-json/wc/v2/products?consumer_key=ck_b25db0a141ce216901302c872657ce6ce22488b6&consumer_secret=cs_ffe5a1cda6d785b35a19e7b1ef345c3aa224e4ea')
                fetch('https://first-wordpress-jcabezas.c9users.io/wp-json/sample_api/v1/products')
                  .then(response => response.json())
                  .then(data => this.setState({ article: data }))
                  .catch(error => console.log(error));  
                  
              },
              
            "addProductToCart": (productId, qtytoput) => {
                if ( qtytoput > 0 ) {
                    let tempCart = this.state.cart;
                    let arrayWithTheProduct = this.state.article.find( (article) => {
                        return article.id === productId;});
                    if (!arrayWithTheProduct) { //The product exit?
                        alert('The article no exit');
                    }
                    else {
                        let arrayWithTheCart = this.state.cart.find( (article) => {
                            if (article.articleId === productId) {
                                article.quantity = article.quantity + +qtytoput;
                                let tempNumItemCart = +this.state.cartNumItem;
                                tempNumItemCart = tempNumItemCart + +qtytoput;
                                this.setState( { cartNumItem: tempNumItemCart, cart: tempCart  } );
                                return true;
                            }
                            return false;
                            });
                            if (!arrayWithTheCart) { //Is it a new product?
                                arrayWithTheCart = {// Create product in the cart
                                        articleId: arrayWithTheProduct.id,
                                        quantity: qtytoput
                                        };
                                tempCart.push(arrayWithTheCart);
                                let tempNumItemCart = +this.state.cartNumItem;
                                tempNumItemCart = tempNumItemCart + +qtytoput;
                                this.setState( { cartNumItem: tempNumItemCart, cart: tempCart  } );
                            }
                        }
                    }
                else {
                    alert('The quantity is less or iqual than 0');
                }
            },
            
            "getInfoArticle": (productId) => {
                let param = this.state.article.find( (article) => {return article.id === productId;});
                return param;  
            }
            ,
            
            
            "delProductToCart": (index, Id, qtytakeout) => {
                
                let arrayWithTheCart = this.state.cart.filter( (article) => {return article.articleId !== Id;});
                let tempNumItemCart = +this.state.cartNumItem;
                tempNumItemCart = tempNumItemCart - +qtytakeout;
                this.setState( { cartNumItem: tempNumItemCart,  cart: arrayWithTheCart } );
                },
            
            "logout": () => this.setState(  {session: {}}   ),
            
            "fetchLoadAllDataProduct": () => {
                
                fetch('https://first-wordpress-jcabezas.c9users.io/wp-json/sample_api/v1/products')
                //fetch('https://first-wordpress-jcabezas.c9users.io/wp-json/wc/v2/products?consumer_key=ck_b25db0a141ce216901302c872657ce6ce22488b6&consumer_secret=cs_ffe5a1cda6d785b35a19e7b1ef345c3aa224e4ea')
                  .then(response => response.json())
                  .then(data => this.setState({ article: data }))
                  .catch(error => console.log(error));  
                  
            },
            
            "fetchLoadDataProduct": (product) => {

                fetch('https://first-wordpress-jcabezas.c9users.io/wp-json/sample_api/v1/products/'+product)
                  .then(response => response.json())
                  .then(data => this.setState({ article: data }))
                  .catch(error => console.log(error));  
                  
            }  
        };
    }
    
    componentDidMount() {
        this.actions.loadInitialData();
      }
      
    componentDidCatch(error, info) {
    // Display fallback UI
    console.log(error,info);
    //this.setState({ error: true, berror: error, eInfo: info});
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
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
                        