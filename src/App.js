import React from 'react';
import './App.css';
//=======> ROUTER
import { Switch, Route, Redirect } from 'react-router-dom';
//=======> PAGES AND COMPONENTS
import ContentContainer from './components/content-container/ContentContainer'
import TheHeader from './components/the-header/TheHeader'
import TheFooter from './components/the-footer/TheFooter'
import LowerHeader from './components/lower-header/LowerHeader'
import HomePage from './pages/home/HomePage'
import ShopPage from './pages/shop/ShopPage'
import SignInUpPage from './pages/sign-in-up/SignInUpPage'
import LogOutPage from './pages/log-out/LogOutPage'
import CheckoutPage from './pages/checkout/CheckoutPage'
//=======> FIREBASE AUTH
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
//=======> REDUX
import { connect } from 'react-redux'
//importing the actions 
import { setCurrentUser } from './redux/user/user.actions'


class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
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
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          )
        })
      } else /*so basically on logout*/ {
        //setting the state of the current user to null
        setCurrentUser(userAuth)

        //CODE TO INSERT A COLLECTION INTO FIREBASE 
        // addCollectionsAndDocuments('collections', collection.map(({title, items}) => ({title, items})))
        // .then(console.log("Promise was handled successfully"))
        // .catch(e => console.log(e))
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <TheHeader/>
        <LowerHeader />
        <Switch>  
          <ContentContainer>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" 
              render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInUpPage />) }
            />  
            <Route exact path="/logout" component={LogOutPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route path="/shop" component={ShopPage} />
          </ContentContainer>
        </Switch>
        <TheFooter />
      </div>  
    );
  }
 
}
const mapStateToProps = (state) => (
  {currentUser: state.user.currentUser }
)

const mapDispatchToProps = dispatch => (
  { setCurrentUser: user => dispatch(setCurrentUser(user)) }
)

//passin null as the first argument for the mapStatetoProps, not needed here
export default connect(mapStateToProps, mapDispatchToProps)(App);
