import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "./view/pages/MainPage";
import UserPage from "./view/pages/UserPage";
import PhotoPage from "./view/pages/PhotoPage";

const App = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/categories/:type?" exact component={MainPage} />
        <Route path="/photo-card/:id?" exact component={PhotoPage} />
        <Route path="/user/:name?" exact component={UserPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
