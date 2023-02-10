import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Reviews } from "./views/Reviews";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}

export default App;
