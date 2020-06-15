import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import ChartExample from "./components/ChartExample/ChartExample";

function App() {
  return (
    <div className="main">
      <Header />
      <Dashboard />
      <Footer />
      {/* <ChartExample /> */}
    </div>
  );
}

export default App;
