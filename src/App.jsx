import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="h-screen grid grid-cols-[1fr] grid-rows-[7%_72%_21%] bg-AlmostWhite lg:grid-rows-[10%_70%_20%]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
