import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import { AppContext } from "./context/AppContext";

import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";

import * as S from "./App.style";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

const App: React.FC = () => {
  const { appState } = React.useContext(AppContext);

  const { isLoading } = appState;

  return (
    <div className="App">
      <S.Container>
        {isLoading && <LoadingScreen />}
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </S.Container>
    </div>
  );
};

export default App;
