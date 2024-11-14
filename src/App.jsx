import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Man from "./pages/Man";
import Woman from "./pages/Woman";
import Kid from "./pages/Kid";
import AddDress from "./pages/AddDress";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/man" element={<Man />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/kid" element={<Kid />} />
        <Route path="/add" element={<AddDress />} />
      </Route>
    </Routes>
  );
}

export default App;
