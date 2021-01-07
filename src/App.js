import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "utilities/theme.js";

//Components
import SingleMovie from "layout/SingleMovie";
import MainGrid from "./layout/MainGrid";
import Navbar from "./layout/Navbar";
import PopularMovies from "layout/PopularMovies";
import FilterMovies from "layout/FilterMovies";

//Redux
import { Provider } from "react-redux";
import store from "redux/store";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <MainGrid>
              <Navbar></Navbar>
              <Route exact path="/">
                <PopularMovies></PopularMovies>
              </Route>
              <Route exact path="/movie/:id" component={SingleMovie}></Route>
              <Route exact path="/filter" component={FilterMovies}></Route>
            </MainGrid>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
