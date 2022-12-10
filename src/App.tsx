import React from "react";
import HospitalList from "./components/pages/HospitalList";
import GlobalStyle from "./styles/GlobalStyle";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <HospitalList />
    </>
  );
};

export default App;
