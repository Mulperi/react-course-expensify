import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

// Huom component joka tulee argumenttina, uudelleen nimetään
// Alkamaan isolla C:llä, jotta se voidaan renderöidä.

// ...rest spread-operaattori on muuttuja joka tuo "kaikki loput"
export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={
      props =>
        isAuthenticated ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        )
      // REDIRECT ON KOMPONENTTI JOKA RENDERÖINNIN YHTEYDESSÄ OHJAA TOISEEN PAIKKAAN
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
