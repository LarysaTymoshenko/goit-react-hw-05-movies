import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';

const HomePage = lazy(() => import('../../views/HomePage/HomePage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('../../views/MovieDetailsPage/MovieDetailsPage.jsx'),
);
const Navigation = lazy(() =>
  import('../../component/Navigation/Navigation.jsx'),
);
const NotFoundView = lazy(() =>
  import('../../views/NotFoundView/NotFoundView.jsx'),
);
const MoviesPage = lazy(() => import('../../views/MoviesPage/MoviesPage.jsx'));

function App() {
  return (
    <div>
      {' '}
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={MoviesPage} />
          <Route path="/movies/:slug" component={MovieDetailsPage} />
          <Route>
            <NotFoundView />
          </Route>
          <Redirect to="/" />
        </Switch>
        <ToastContainer />
      </Suspense>
    </div>
  );
}

export default App;
