import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import About from "./pages/About/About/About";
import DashBoard from "./pages/DashBoard/DashBoard/DashBoard";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";
import Reviews from "./pages/Reviews/Reviews/Reviews";
import NotFound from "./pages/Shared/NotFound/NotFound";
import AddToCart from "./pages/Shop/AddToCart/AddToCart";
import Shop from "./pages/Shop/Shop/Shop";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/shop">
                            <Shop />
                        </Route>
                        <PrivateRoute path="/product/:productId">
                            <AddToCart />
                        </PrivateRoute>
                        <Route path="/about">
                            <About />
                        </Route>
                        <PrivateRoute path="/reviews">
                            <Reviews />
                        </PrivateRoute>
                        <PrivateRoute path="/dashboard">
                            <DashBoard />
                        </PrivateRoute>

                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
