import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "../../views/HomePage/HomePage";
import MovieDetailsPage from "../../views/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "../../views/MoviesPage/MoviesPage";
import Navigation from "../../component/Navigation/Navigation";
import NotFoundView from "../../views/NotFoundView/NotFoundView";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:slug">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
