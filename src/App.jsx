import React from "react";
import Header from "./componets/header/Header";
import Footer from "./componets/footer/Footer";
import Home from "./componets/home/Home";
import MovieDetail from "./componets/movieDetail/MovieDetail";
import PageNotFound from "./componets/pageNotFound/PageNotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Try from "./componets/pageNotFound/Try";
import Blog from "./componets/home/Blog";

function App() {
  return (
    <div className="app-div">
      <BrowserRouter>
        <Header />
        <div className="sub-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:ImdbId" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/blog" element={<Blog />} />
            {/* <Route path="/try" element={<Try />} /> */}
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
      {/* <Header/>
     <Footer/> */}
    </div>
  );
}

export default App;
