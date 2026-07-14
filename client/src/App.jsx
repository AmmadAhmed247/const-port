import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/layout.jsx";
import Home from "./pages/Home";
import RegisterInterest from "./pages/RegisterInterest";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register-interest" element={<RegisterInterest />} />
      </Route>
    </Routes>
  );
}