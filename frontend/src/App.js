import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Header from './components/header/header'
import Signin from './components/signin/signin'
import Featured from './components/featured/featured'
import ProductDetails from './components/productDetails/productDetails'
import Cart from './components/cart/cart'
import Departments from './components/departments/departments'
import Checkout from './components/checkout/checkout'
import Profile from './components/profile/profile'
import { useAuth, AuthProvider } from './AuthContext'
import Items from './components/items/items'
import Paper from '@material-ui/core/Paper'
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";
import {useAppTheme , AppThemeProvider} from './AppThemeContext'
import Signup from './components/signup/signup'
function App() {
  const themeHere = useAppTheme();
  return (
    <ThemeProvider theme={{...themeHere.appTheme}}>
      <CssBaseline />
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/">
            <Featured />
          </Route>
          <Route exact={true} path="/signin">
            <Signin />
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductDetails />
          </Route>
          <Route exact={true} path="/cart">
            <Cart />
          </Route>
          <Route exact={true} path="/signup">
            <Signup />
          </Route>
          <Route exact={true} path="/items" render={props => <Items{...props} />} />
          <PrivateRoute exact={true} path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute exact={true} path="/checkout">
            <Checkout />
          </PrivateRoute>
          <Redirect exact={true} from="/departments" to="/departments/electronics" />
          <Route exact={true} path="/departments/:page?" render={props => <Departments{...props} />} />
        </Switch>
      </Router>
      </ThemeProvider>
  );
}

function PrivateRoute({ children, ...rest }) {
  const useAuthHere = useAuth();
  const user = useAuthHere.user;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}
export default App;
