import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Header from "./components/Header";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user/:id" component={User} />
            </Switch>
        </div>
    );
}

export default App;
