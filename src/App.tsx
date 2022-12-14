/* eslint-disable import/order */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import store from "./store/store";
import GlobalStyle from "./styles/GlobalStyle";
import HospitalPage from "./components/pages/HospitalPage";
import ReviewPage from "./components/pages/ReviewPage";
import DetailPage from "./components/pages/DetailPage";

const persistor = persistStore(store);

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HospitalPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="*" element={<HospitalPage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
