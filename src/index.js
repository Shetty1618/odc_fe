import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Abc from "./components/abc";
import FirstDayInOffice from "./components/firstDayInOffice";

const routing = (
  <BrowserRouter>
    <Header />
    <section className="container-fluid">
      <Switch>
        <Route exact path="/odc" component={App} />
        <Route path="/odc/fdo" component={FirstDayInOffice} />
        <Route path="/odc/ldo" component={Abc} />
      </Switch>
    </section>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
