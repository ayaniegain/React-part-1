import Contact from "./component/Contact";
import About from "./component/About";
import Home from "./component/Home";
import Faker from "./component/Faker";
import Api from "././component/api.json";
import Navbar from "./component/navbar";
import Login from "./component/Login";
import Error from "./component/Error";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { createContext } from 'react';


const ThemeContext = createContext(null);

function App() {
  return (
    <>
    <ThemeContext.Provider value="dark">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/home" element={<Home data={Api} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faker" element={<Faker />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>

    </>
  );
}

export default App;
export {ThemeContext}
