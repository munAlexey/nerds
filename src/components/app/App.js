import { Route, Routes } from "react-router-dom";
import Main from "../main/main";
import "./App.css";
import React from "react";

function App() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main isOpen={open} onOpen={handleOpen} onClose={handleClose}/>} /> 
      </Routes>
    </div>
  );
}

export default App;
