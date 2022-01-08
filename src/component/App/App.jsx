import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "../../views/HomePage/HomePage";
import MovieDetailsPage from "../../views/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "../../views/MoviesPage/MoviesPage";
import Navigation from "../../component/Navigation/Navigation";
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
          <MoviesPage />
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
