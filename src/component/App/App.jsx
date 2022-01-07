import { Route, Switch } from "react-router-dom";
import HomePage from "../../component/HomePage/HomePage";
import MovieDetailsPage from "../../component/MovieDetailsPage/MovieDetailsPage";
import MoviePage from "../../component/MoviesPage/MoviesPage";
import Navigation from "../Navigation/Navigation";
import NotFoundView from "../../views/NotFoundView/NotFoundView";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviePage />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </>
  );
}

export default App;
