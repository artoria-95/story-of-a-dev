import Home from "./Landing/Home";
import Header from "./Navbar/Header";
import Sidebar from "./Sidebar/Sidebar";
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import ErrorPage from "./UI/ErrorPage";
import Biography from "./Biography/Biography";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header />
     <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles" />
          <Route path="/projects" />
          <Route path="/drawings" />
          <Route path="/biography" exact component={Biography} />
          <Route path="/contact" />
          <Route path="/about" />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
