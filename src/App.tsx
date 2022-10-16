import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Pos from "./pages/Pos";
import Login from "./pages/auth/Login";
import "./App.css";
import { useAppSelector } from "./utils/hooks/useStore";
import loginSlice, { user } from "./store/loginSlice";
import { useEffect, useState } from "react";
function App() {
  const [login, setlogin] = useState(false);
  const isLogin = useAppSelector(user);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Pos />} path="/" />
          {/* <Route
            element={isLogin  ? <Pos /> : <Navigate to="/login" />}
            path="/"
          /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
