import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Add from "./pages/add/Add";
import Edit from "./pages/edit/Edit";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
