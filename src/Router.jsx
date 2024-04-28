import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/Home"
import LogIn from "./components/LogIn";
import Disaster from "./components/Disaster";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/heatmap" element={<Disaster />} />
    </Routes>
  );
};

export default Routers;
