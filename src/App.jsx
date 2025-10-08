import "./App.css";
import HomeComponents from "./Components/HomeComponents";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<HomeComponents/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
