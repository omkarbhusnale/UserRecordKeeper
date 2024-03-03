import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import Home from "./components/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );


  // return (
  //   <div className="App">
  //     <Header />
  //     <Home />
  //   </div>
  // );
}

export default App;
