import React from 'react';
import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom';

import {AdminRoute} from './layouts/AdminLayout'
import {PublicRoute} from './layouts/publiclayout'

import AdminDashboard from './pages/Admin/AdminDashboard'
import Landingpage from "./pages/landingpage/Landingpage";
import Notfound from './components/404';

function App() {

  return (

  <>
    <Router>
    <Switch>
       <AdminRoute   path="/Admindashboard"  component={AdminDashboard}/>
       <PublicRoute  path="/home"  component={Landingpage}/>
       <Route path="*" component={Notfound} />
    </Switch>
    </Router>
  </>
  );
}

export default App;
