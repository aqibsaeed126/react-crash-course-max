import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from './components/layout/Layout';
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritePage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
          <Route path="/favourites">
            <FavouritePage />
          </Route>
        </Switch>
    </Layout>
  );
}

export default App;
