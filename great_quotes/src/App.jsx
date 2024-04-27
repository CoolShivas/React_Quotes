import QuotesDetail from "./pages/QuotesDetail";
import NewQuotes from "./pages/NewQuotes";
import AllQuotes from "./pages/AllQuotes";
import {Route, Switch, Redirect} from "react-router-dom";
import AppName from "./components/AppName";

function App(){
  return <>
  <AppName></AppName>
  <Switch>
    <Route path="/quotes"> 
<AllQuotes></AllQuotes>
    </Route>
    <Route path="/new-quotes"> 
<NewQuotes></NewQuotes>
    </Route>
    <Route path="/quotes-details"> 
<QuotesDetail></QuotesDetail>
    </Route>
    <Redirect to="/quotes"></Redirect>
  </Switch>
  </>
}

export default App;