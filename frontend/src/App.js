import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navigation from './Components/shared/Navigation/Navigation';
import Authentication from './Pages/Authentication/Authentication';
import Activate from './Pages/Activate/Activate';
import Rooms from './Pages/ProtectedRoute/Rooms';


const isAuth = false;

const user = {
  activated: true,
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navigation />

        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <GuestRoute path="/auth">
            <Authentication />
          </GuestRoute>

          <SemiProtectedRoute path="/activate">
            <Activate />
          </SemiProtectedRoute>
          
          <ProtectedRoute path="/rooms">
             <Rooms/>
          </ProtectedRoute>


        </Switch>

      </BrowserRouter>
    </div>
  );
}

const GuestRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}

      render={({ location }) => {
        return (isAuth ? (
          <Redirect to={
            {
              pathname: '/rooms',
              state: { from: location }
            }
          } />
        ) : (children)
        )
      }} >
    </Route>

  )
};

const SemiProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return (
          !isAuth ? (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          ) : isAuth && !user.activated ? (
            children
          ) : (
            <Redirect
              to={
                {
                  pathname: '/rooms',
                  state: { from: location },
                }
              }
            />
          ))
      }}
    >
    </Route>
  )
};
const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({location}) => {
        return (
          !isAuth ? (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          ) : isAuth && !user.activated ? (
            <Redirect
              to={
                {
                  pathname: '/activate',
                  state: { from: location },
                }
              }
            />
          ) : (children) 
          
          )
      }}
    >
    </Route>


  )
};
export default App;
