// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "./components/Hero";
import "./App.css";
import Reserve from "./components/Reserve";

const App = () => {
  return (
    <div className="mx-12 sm:mx-20 xl:mx-64 my-8">
      <main>
        <Hero />
        <Reserve />
      </main>
    </div>
  );
};

export default App;
