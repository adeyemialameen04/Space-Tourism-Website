import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Destination from "../pages/Destination/Destination";
import Crew from "../pages/Crew/Crew";
import Technology from "../pages/Technology/Technology";

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="destination" element={<Destination />} />
      <Route path="crew" element={<Crew />} />
      <Route path="technology" element={<Technology />} />
    </Routes>
  );
};

export default AnimatedRoutes;