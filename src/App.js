import React from "react";
import "./App.css";
//=======> ROUTER
import { Switch, Route, Redirect } from "react-router-dom";
//=======> PAGES AND COMPONENTS
import ContentContainer from "./components/content-container/ContentContainer";
import TheHeader from "./components/the-header/TheHeader";
import TheFooter from "./components/the-footer/TheFooter";
import LowerHeader from "./components/lower-header/LowerHeader";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import SignInUpPage from "./pages/sign-in-up/SignInUpPage";
import LogOutPage from "./pages/log-out/LogOutPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
//=======> REDUX
import { connect } from "react-redux";
//importing the actions
import { isUserSignedIn } from "./redux/user/user.actions";

class App extends React.Component {
  componentDidMount() {
    const { isUserSignedIn } = this.props;

    isUserSignedIn();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <TheHeader />
        <LowerHeader />
        <Switch>
          <ContentContainer>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <SignInUpPage />
              }
            />
            <Route exact path="/logout" component={LogOutPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route path="/shop" component={ShopPage} />
          </ContentContainer>
        </Switch>
        <TheFooter />
      </>
    );
  }
}
const mapStateToProps = (state) => ({ currentUser: state.user.currentUser });

const mapDispatchToProps = (dispatch) => ({
  isUserSignedIn: () => dispatch(isUserSignedIn()),
});

//passin null as the first argument for the mapStatetoProps, not needed here
export default connect(mapStateToProps, mapDispatchToProps)(App);
