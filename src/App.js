import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="main">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
