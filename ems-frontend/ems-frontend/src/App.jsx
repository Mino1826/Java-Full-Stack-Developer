import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ListEmployee from "./components/ListEmployee";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          //https://localhost:3000
          <Route path="/" element={<ListEmployee/>}></Route>
          //https://localhost:3000/employees
          <Route path="/employee" element= {<ListEmployee/>}></Route>
        </Routes>

        <ListEmployee />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
