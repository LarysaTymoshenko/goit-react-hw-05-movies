import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";

const HomePage = lazy(() => import("../../views/HomePage/HomePage.jsx"));
const MovieDetailsPage = lazy(() =>
  import("../../views/MovieDetailsPage/MovieDetailsPage.jsx")
);
const Navigation = lazy(() =>
  import("../../component/Navigation/Navigation.jsx")
);
const NotFoundView = lazy(() =>
  import("../../views/NotFoundView/NotFoundView.jsx")
);
const MoviesPage = lazy(() => import("../../views/MoviesPage/MoviesPage.jsx"));

function App() {
  return (
    <>
      {" "}
      <Suspense fallback={<Loader />}>
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
          <Redirect to="/" />
        </Switch>
        <ToastContainer />
      </Suspense>
    </>
  );
}

export default App;
