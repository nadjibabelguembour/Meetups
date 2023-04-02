import { Route, Switch } from "react-router-dom";
import "./App.css";
import AllMeetups from "./pages/AllMeetUps";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
      
          <Route path="/" exact >
             <AllMeetups />
           </Route>
         
          <Route path="/NewMeetup">
            <NewMeetup />
          </Route>
          <Route path="/Favorites">
            <Favorites />
          </Route> 
       
      </Switch>
    </Layout>
  );
}

export default App;
