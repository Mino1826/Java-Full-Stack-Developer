import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ListEmployee from "./components/ListEmployee";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "./components/Employee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* //https://localhost:3000 */}
          <Route path="/" element={<ListEmployee />}></Route>
          {/* //https://localhost:3000/employees */}
          <Route path="/employees" element={<ListEmployee />}></Route>
          {/* //https://localhost:3000/add-employee */}
          <Route path="/add-employee" element={<Employee />}></Route>
          {/* //https://localhost:3000/edit-employee/1 */}
          <Route path="/edit-employee/:id" element={<Employee/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
