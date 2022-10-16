import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import App from "./App";
import store from "./store/store";
import Theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store} >

    <Theme>
      <App />
    </Theme>
    </Provider>
  </React.StrictMode>
);
