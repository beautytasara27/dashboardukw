import "./App.css";
import Login from "./components/login/index";
import Home from "./components/home/index";
import ProtectedRoute from "./components/protectedRoute";
import { Fragment, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);
  const userSet = (me)=>{
    console.log("me",me);
    setUser(me);
  }
    return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setUser={userSet} user={user}/>} />
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <Home user={user}/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
