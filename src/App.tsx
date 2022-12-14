import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import HospitalPage from "./components/pages/HospitalPage";
import ReviewDetail from "./components/pages/ReviewDetail";
import GlobalStyle from "./styles/GlobalStyle";
import store from "./store/store";
import ReviewPage from "./components/pages/ReviewPage";

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
            <Route path="/detail" element={<ReviewDetail />} />
            <Route path="*" element={<HospitalPage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
