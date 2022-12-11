import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import HospitalList from "./components/pages/HospitalList";
import ReviewDetail from "./components/pages/ReviewDetail";
import ReviewList from "./components/pages/ReviewList";
import GlobalStyle from "./styles/GlobalStyle";
import store from "./store/store";

const persistor = persistStore(store);
const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HospitalList />} />
            <Route path="/review" element={<ReviewList />} />
            <Route path="/detail" element={<ReviewDetail />} />
            <Route path="*" element={<HospitalList />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
