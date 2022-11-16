import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "redux";
import { CreateStore, applyMiddleware, compose } from "react-redux";
import { thunk } from "redux-thunk";

import App from "./App";
import Reducer from "./Reducers";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = CreateStore(Reducer, compose(applyMiddleware(thunk)));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
