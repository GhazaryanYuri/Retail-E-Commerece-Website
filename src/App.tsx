// Importing dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/01-Header/Header";
import Home from "./pages/01-Home/Home";

// App component
const App = () => {
  return (
    <div className="w-full h-auto flex-col justify-center items-center">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to={localStorage.getItem("currentLocation") || "/home"}
              replace
            />
          }
        />
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
