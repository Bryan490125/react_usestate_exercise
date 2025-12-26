import { Routes, Route } from "react-router-dom";
import Register from "./components/Register.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  );
}

