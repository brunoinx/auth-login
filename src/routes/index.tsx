import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Private } from "../pages/Private";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/private" element={<Private />} />
    </Routes>
  );
}
