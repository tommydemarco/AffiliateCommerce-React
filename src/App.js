import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ContentContainer from './components/content-container/ContentContainer'
import TheHeader from './components/the-header/TheHeader'
import HomePage from './pages/home/HomePage'
import ShopPage from './pages/shop/ShopPage'
import SignInUpPage from './pages/sign-in-up/SignInUpPage'
import LogOutPage from './pages/log-out/LogOutPage'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
    unsubscribeFromAuth = null

  componentDidMount() {
//onAuthStateChanged is a method that get triggered when the auth status changed.
//the component doesn't re-render, the method acts like an event handler.

//Whenever we call the onAuthStateChanged() or onSnapshot() methods from our auth 
//library or referenceObject, we get back a function that lets us unsubscribe from the 
//listener we just instantiated. To be called in the componentWillUnmount lifecycle

//this function will then only call when there is a change in the user auth state (eg. logout)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
       
      if(userAuth) {
        //the userRef is the object that is returned by this function when executes
        const userRef = await createUserProfileDocument(userAuth);
        //getting the data that we need from userRef with the onSnapshot method
        //and then setting the state with the data that we got
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else /*so basically on logout*/ {
        //setting the state of the current user to null
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <TheHeader currentUser={this.state.currentUser} />
        <Switch>
          <ContentContainer>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" component={SignInUpPage} />
            <Route exact path="/logout" component={LogOutPage} />
            <Route exact path="/shop" component={ShopPage} />
          </ContentContainer>
        </Switch>
      </div>  
    );
  }
 
}

export default App;
