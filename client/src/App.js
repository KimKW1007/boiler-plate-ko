import { BrowserRouter, Route, Routes} from "react-router-dom";
import LendingPage from "./components/views/LendingPage/LendingPage"
import LoginPage from "./components/views/LoginPage/LoginPage"
import RegisterPage from "./components/views/RegisterPage/RegisterPage"
import Auth from "./hoc/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {Auth(LendingPage, null)}/>
        <Route exact path="/login" element = {Auth(LoginPage, false)}/>
        <Route exact path="/register" element = {Auth(RegisterPage, false)}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

