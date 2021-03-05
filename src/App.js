import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header/Header";
import Industry from "./components/Industry/Industry";
import Products from "./components/Products/Products";
import About from "./components/AboutUs/About";
import Contact from "./components/Contact/Contact";
require("./GlobalCss.css");

function App(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      
        
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
<Header />
        <Carousel />
        <Industry />
        <Products />
        <About />
        <Contact />
        </Typography>
       
    </React.Fragment>
  );
}

export default App;
