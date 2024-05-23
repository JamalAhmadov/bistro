import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/OurMenu/Menu";
import Blog from "./pages/OurBlog/Blog";
import Contact from "./pages/Contact/Contact";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pages" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourblog" element={<Blog />} />
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
