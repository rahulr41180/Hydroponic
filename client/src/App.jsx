
import './App.css';

import { HomePage } from "./pages/Home.page";
import { IndoorFarmSetup } from "./pages/IndoorFarmSetup.page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <HomePage />
        </>
      }></Route>
      <Route path="/indoorfarmsetup" element={
        <>
          <IndoorFarmSetup />
        </>
      }></Route>
    </Routes>
  );
}

export default App;
