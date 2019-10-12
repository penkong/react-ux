//
import "./sass/App.scss";
import React, { lazy, Suspense } from "react";
import { Switch, Route, Router } from "react-router-dom";


import history from './utils/history';


import Header from "./layouts/Header/Header";
import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";


// make lazy loading 
const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'));
const UserInfoPage = lazy(() => import('./pages/UserInfoPage/UserInfoPage'));
const ConfirmPage = lazy(() => import('./pages/ConfirmPage/ConfirmPage'));


const App = () => {    
  const loadHeader = () => 
    (window.location.pathname === '/')
      ? null 
      : <Header/>
  return (
    <div>
    <Router history={history}>
        {loadHeader()}
        <Switch>
          <ErrorBoundary>
            {/* suspense for async loading comp with lazy */}
            <Suspense fallback={Spinner}>
              <Route exact path="/" render={()=>(<LandingPage/>)} />
              <Route exact path="/user-info" component={UserInfoPage} />
              <Route exact path="/confirm" component={ConfirmPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
    </Router>
    </div>
  );
}

export default App;