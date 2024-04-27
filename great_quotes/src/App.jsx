
import QuotesDetail from "./pages/QuotesDetail";
import NewQuotes from "./pages/NewQuotes";
import AllQuotes from "./pages/AllQuotes";
import { Route, Switch, Redirect } from "react-router-dom";
import AppName from "./components/Header/AppName";

function App() {
  return (
    <>
      <AppName></AppName>
      <Switch>
        <Route path="/quotes" exact>
          <AllQuotes></AllQuotes>
        </Route>
        <Route path="/new-quotes">
          <NewQuotes></NewQuotes>
        </Route>
        <Route path="/quotes/:quotesId">
          <QuotesDetail></QuotesDetail>
        </Route>
        <Redirect to="/quotes"></Redirect>
      </Switch>
      
    </>
  );
}

export default App;
