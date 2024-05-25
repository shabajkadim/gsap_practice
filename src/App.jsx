import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="text-black">
      <Routes>
        <Route path="'/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
