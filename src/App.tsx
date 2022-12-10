import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HospitalList from "./components/pages/HospitalList";
import ReviewList from "./components/pages/ReviewList";
import GlobalStyle from "./styles/GlobalStyle";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HospitalList />} />
          <Route path="/review" element={<ReviewList />} />
          <Route path="*" element={<HospitalList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
