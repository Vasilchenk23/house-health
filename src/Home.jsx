import React from "react";
import Main from "./components/Main"
import Directions from "./components/Directions"
import Ultrasound from "./components/Ultrasound"
import Advantages from "./components/Advantages"
import Title from "./components/Title";


function Home() {
  return (
    <>
    <Title/>
    <Main/>
    <Directions/>
    <Ultrasound/>
    <Advantages/>
    </>
  );
}

export default Home;
