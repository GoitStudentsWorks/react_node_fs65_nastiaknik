import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "redux/store";
import App from "./App";
import { Theme } from "styles/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/react_node_fs65_nastiaknik">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Theme>
            <App />
          </Theme>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
