//
import "./sass/App.scss";
import React, { lazy, Suspense } from "react";
import { Switch, Route, Router } from "react-router-dom";


import history from './utils/history';


import Header from "./layouts/Header/Header";
import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import LoadingBlue from './components/LoadingBlue/LoadingBlue';
import Success from './components/Success/Success';
import Page404 from "./pages/Page404/Page404";


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
            <Suspense fallback={(<Spinner/>)}>
              <Route exact path="/" render={()=>(<LandingPage/>)} />
              <Route exact path="/loading" component={LoadingBlue} />
              <Route exact path="/user" component={UserInfoPage} />
              <Route exact path="/confirm" component={ConfirmPage} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/page404" component={Page404} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
    </Router>
    </div>
  );
}

export default App;