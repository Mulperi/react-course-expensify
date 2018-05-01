import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
  Router
} from "react-router-dom";

import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddPage from "../components/AddPage";
import EditPage from "../components/EditPage";

import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();
// JOS KÄYTETÄÄN BROWSERROUTERIA, NIIN EI TARVI HISTORYÄ ERIKSEEN,
// MUTTA KOSKA HALUTAAN HISTORY KÄYTTÖÖN MUUTENKIN KUIN KOMPONENTEISSA
// NIIN TÄYTYY LUODA HISTORY ERIKSEEN JA EXPORTOIDA


// PRIVATE ROUTE KOMPONENTTI ON "WRAPPERI" / HIGHER ORDER COMPONENTTI
// JOKA TOIMII "GUARDINA" JA TEKEE LOGIN TARKISTUKSEN
const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <PrivateRoute
        path="/dashboard"
        component={ExpenseDashboardPage}
        exact={true}
      />
      <PrivateRoute path="/create" component={AddPage} />
      <PrivateRoute path="/edit/:id" component={EditPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
