import Login from "./components/login/Login";
import NavBar from "./components/navbar/NavBar";
import back from "./img/pp.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="f-login">
        <Login />
        <img src={back} />
      </div>
    </div>
  );
}

export default App;
