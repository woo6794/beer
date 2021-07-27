import Layout from "./components/Layout";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Home from "./Pages/Home";
import BeerList from "./Pages/BeerList";
import styled, { createGlobalStyle } from "styled-components";
// import ReactGA from "react-ga";

const Routes = () => {
  const history = useHistory();
  return (
    <>
      <Router>
        <Switch>
          <Route path={["/", "/home", "/beerlist"]}>
            <Layout>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/beerlist" component={BeerList} />
                <Route
                  path="/"
                  render={() => {
                    return <Redirect to={"/home"} />;
                  }}
                />
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  #root {
    height: 100%;
  }
`;

export default Routes;
