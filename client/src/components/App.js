import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import AdminRoute from "./Routes/AdminRoute";
import UserRoute from "./Routes/UserRoute";
import Signin from "./Signin";
import Signup from "./Signup";
import UserDashboard from "./UserDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <UserRoute exact path="/user/dashboard" component={UserDashboard} />
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <Route component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
