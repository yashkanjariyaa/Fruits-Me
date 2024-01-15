import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Landing from './components/landing';
import Home from './components/home';
import Cart from './components/cart';
import History from './components/history';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/">
            <Route path="/" element={<Landing />} />
          </Route>
          <Route exact path="/signin">
            <Route path="/signin" element={<SignIn />} />
          </Route>
          <Route exact path="/signup">
            <Route path="/signup" element={<SignUp />} />
          </Route> 
          <Route path="/home">
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/cart">
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/history">
            <Route path="/history" element={<History />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
